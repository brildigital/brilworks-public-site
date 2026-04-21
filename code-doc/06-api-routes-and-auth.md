# API Routes & Authentication - Detailed Guide

## API Route Architecture

All API routes are in `src/app/api/` and follow the Next.js 13 App Router pattern — exporting named HTTP method handlers (`GET`, `POST`).

---

## Authentication (NextAuth)

**File:** `src/app/api/auth/[...nextauth]/route.js`

### Providers

#### 1. Google OAuth

```javascript
GoogleProvider({
  clientId: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID,
  clientSecret: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_SECRET,
})
```

**Restriction:** Only `@brilworks.com` email addresses are allowed (internal use).

#### 2. Credentials

```javascript
CredentialsProvider({
  name: "Credentials",
  credentials: {
    email: { label: "Email", type: "email" },
    password: { label: "Password", type: "password" },
  },
  async authorize(credentials) {
    // Looks up user in Prisma database
    // Validates password with bcrypt
    // Returns user object or null
  },
})
```

### Session Strategy

Uses **JWT** (not database sessions):

```javascript
session: {
  strategy: "jwt",
}
```

### Callbacks

#### signIn Callback

When a user signs in via Google, the callback:
1. Checks if the user exists in the Prisma database
2. If not, creates a new user record
3. Updates the user's name and image from Google profile

#### JWT Callback

Enriches the JWT token with user data from the database (role, etc.).

#### Session Callback

Maps JWT data to the session object so it's available via `useSession()`.

### Error Handling

```javascript
pages: {
  error: "/not-found",
}
```

Custom error page redirects to `/not-found` for auth failures.

### Database Integration

Uses **Prisma ORM** for user management:

```javascript
import prismadb from "@/lib/prismadb";

// Find user
const user = await prismadb.user.findUnique({
  where: { email: credentials.email },
});

// Create user
await prismadb.user.create({
  data: { name, email, image },
});
```

---

## File Download API

**File:** `src/app/api/download/route.js`

### Purpose

A secure proxy for downloading PDF files. Instead of exposing direct S3/Storyblok URLs to users, this route validates and proxies the download.

### Security Measures

1. **Domain Validation** — Only allows downloads from trusted domains:
   - `a.storyblok.com`
   - `brilworks-website-asset.s3.ap-south-1.amazonaws.com`
   - `brilworks-site-assets.s3.eu-central-1.amazonaws.com`
   - `d14lhgoyljo1xt.cloudfront.net`

2. **File Type Validation** — Only `.pdf` files are allowed

3. **URL Parsing** — Validates URL structure before fetching

### Flow

```
Client Request → /api/download?url=<encoded-url>
  ↓
Validate URL domain is trusted
  ↓
Validate file extension is .pdf
  ↓
Fetch file from source
  ↓
Return with Content-Disposition: attachment header
```

### Response

```javascript
return new Response(fileBuffer, {
  headers: {
    "Content-Type": "application/pdf",
    "Content-Disposition": `attachment; filename="${filename}"`,
  },
});
```

---

## Newsletter / Blog Data API

**File:** `src/app/api/newsletter/route.js`

### Purpose

POST endpoint that updates blog data. Writes received data to a local JSON file:

```javascript
// Writes to: src/app/components/lib/blogResponse.json
```

This appears to be a mechanism for pre-caching blog data locally.

---

## Career Application API

**File:** `src/app/api/home-career/route.js`

### Purpose

Handles career/job application form submissions. Likely integrates with:
- SendGrid for email notifications
- Slack for team alerts
- HubSpot for CRM tracking

---

## User Management API

**File:** `src/app/api/users/route.js`

### Purpose

CRUD operations for user accounts. Used by the dashboard/admin features.

---

## User Invitation API

**File:** `src/app/api/invite-user/route.js`

### Purpose

Handles user invitation flow — sends invite emails and creates pending user records.

---

## Password Management API

**File:** `src/app/api/set-password/route.js`

### Purpose

Password reset and update functionality. Used with the `/forget-password/` page.

---

## Message Store API

**File:** `src/app/api/message-store/route.js`

### Purpose

Stores chat messages from AI agent conversations. Uses Prisma's `ChatSession` model.

---

## S3 Asset Management API

**File:** `src/app/api/s3/assets/route.js`

### Purpose

Handles file uploads and retrieval from AWS S3. Uses:
- `@aws-sdk/client-s3` for S3 operations
- `@aws-sdk/s3-request-presigner` for generating pre-signed URLs

---

## WhatsApp Integration API

**File:** `src/app/api/whatsapp/route.js`

### Purpose

Handles WhatsApp messaging integration for customer communication.

---

## Blog Data API

**File:** `src/app/api/page-blog/route.js`

### Purpose

Provides blog data endpoints for client-side fetching (e.g., pagination, search).

---

## Auth-Related Pages

| Page | Route | Purpose |
|------|-------|---------|
| Login | `/login/` | Username/password login form |
| Forgot Password | `/forget-password/` | Password reset request |
| Email Verification | `/verifyemail/[verifytoken]/` | Email verification link handler |

---

## Database Schema

**File:** `prisma/schema.prisma`

### Models

#### User
- id, name, email, image, password (hashed), role
- Used by NextAuth for authentication

#### ChatSession
- id, userId, messages (JSON), createdAt, updatedAt
- Used by AI agent chat interface to persist conversations

---

## External Service Integrations (via API routes)

### SendGrid (Email)

```javascript
import sgMail from "@sendgrid/mail";
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: process.env.SENDGRID_DEFAULT_TO_EMAIL,
  from: process.env.SENDGRID_DEFAULT_FROM_EMAIL,
  templateId: process.env.SENDGRID_DEFAULT_CAREER_TEMPLATE_ID,
  dynamicTemplateData: { /* form data */ },
};

await sgMail.send(msg);
```

### HubSpot (CRM)

Contact/lead creation via HubSpot API:

```javascript
const response = await fetch("https://api.hubapi.com/contacts/v1/contact/", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.HUBSPOT_API_KEY}`,
  },
  body: JSON.stringify({ properties: [...] }),
});
```

### Slack (Notifications)

Team notifications for form submissions:

```javascript
const response = await fetch("https://slack.com/api/chat.postMessage", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.SLACK_TOKEN}`,
  },
  body: JSON.stringify({
    channel: "#channel-name",
    text: "New lead received...",
  }),
});
```

### Google Gemini AI

**File:** `src/app/components/lib/geminiService.js`

Used by some Tools/Calculators for AI-powered analysis:

```javascript
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_AI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

const result = await model.generateContent(prompt);
```
