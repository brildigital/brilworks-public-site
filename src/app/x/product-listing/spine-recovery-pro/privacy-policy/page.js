import React from "react";

const page = () => {
  return (
    <>
      <head>
        <meta name="robots" content="noindex, nofollow" />
      </head>
      <section className="kinderland healthvault mt-[2rem] md:mx-[15px] w-full flex align-middle justify-center">
        <div className="container max-w-[1080px] main-section-padding !py-0 md:px-10 px-6 mx-auto w-full">
          <div>
            <div className="bg-white overflow-hidden text-gray-900 leading-relaxed">
              <header className="p-[clamp(18px,4vw,18px)] border-b border-gray-300">
                <h1 className="mt-2 mb-1 text-[clamp(22px,5vw,34px)] font-semibold">
                  Privacy Policy
                </h1>

                <div className="text-sm text-gray-600">
                  Effective Date:&nbsp;
                  <time datetime="2025-08-29">Jan 9, 2025</time>
                </div>

                <p className="mt-3 text-gray-600">
                  We value your privacy and are committed to protecting your
                  health and personal information in compliance with GDPR,
                  HIPAA, and EHDS.
                </p>
              </header>

              <main className="p-[clamp(18px,4vw,24px)] space-y-4">
                <section id="intro" className="">
                  <p>
                    SpineRecoveryPro ("we," "our," or "us") provides a mobile
                    application ("App") used by patients and healthcare
                    professionals. This Privacy Policy explains how we collect,
                    use, store, and share information. By using
                    SpineRecoveryPro, you consent to this Policy.
                  </p>
                </section>

                <section
                  id="purposes"
                  className="pt-4 border-t border-dashed border-gray-300"
                >
                  <h2 className="mb-2 text-[clamp(18px,3.8vw,22px)] font-semibold">
                    1. Purposes of Processing
                  </h2>
                  <p>
                    Your data is processed strictly for healthcare-related
                    purposes:
                  </p>
                  <ul className="mt-2 pl-4 sm:pl-[18px] list-disc space-y-1">
                    <li>Treatment tracking and recovery monitoring</li>
                    <li>Facilitating patient–doctor communication</li>
                    <li>
                      Delivering questionnaires, exercises, and educational
                      videos
                    </li>
                    <li>Improving healthcare service quality and compliance</li>
                  </ul>
                </section>

                <section
                  id="data-we-collect"
                  className="pt-4 border-t border-dashed border-gray-300"
                >
                  <h2 className="mb-2 text-[clamp(18px,3.8vw,22px)] font-semibold">
                    2. Information We Collect
                  </h2>
                  <p>
                    We do <strong>not</strong> collect or use location data.
                  </p>
                  <ul className="mt-2 pl-4 sm:pl-[18px] list-disc space-y-1">
                    <li>
                      <strong>Personal Data:</strong> First name, email, patient
                      ID (assigned by your clinician).
                    </li>
                    <li>
                      <strong>Medical Data:</strong> Diagnosis, pain area,
                      treatment, surgery details, questionnaire responses, and
                      exercise progress.
                    </li>
                    <li>
                      <strong>Technical Data:</strong> Device info, app version,
                      crash logs (via Sentry).
                    </li>
                  </ul>
                </section>

                <section
                  id="legal-basis"
                  className="pt-4 border-t border-dashed border-gray-300"
                >
                  <h2 className="mb-2 text-[clamp(18px,3.8vw,22px)] font-semibold">
                    3. Legal Basis of Processing
                  </h2>
                  <p>Processing is based on:</p>
                  <ul className="mt-2 pl-4 sm:pl-[18px] list-disc space-y-1">
                    <li>
                      <strong>Consent:</strong> You provide explicit consent
                      before data collection.
                    </li>
                    <li>
                      <strong>Medical purposes:</strong> Processing necessary
                      for preventive or occupational medicine, medical
                      diagnosis, or healthcare provision (GDPR Art. 9(2)(h) and
                      HIPAA).
                    </li>
                    <li>
                      <strong>Legal obligations:</strong> Where processing is
                      required by law.
                    </li>
                  </ul>
                </section>

                <section
                  id="secondary-use"
                  className="pt-4 border-t border-dashed border-gray-300"
                >
                  <h2 className="mb-2 text-[clamp(18px,3.8vw,22px)] font-semibold">
                    4. Secondary Use & AI Development
                  </h2>
                  <p>
                    In compliance with EHDS, we may use
                    <strong>
                      {" "}
                      anonymized or pseudonymized health data
                    </strong>{" "}
                    for secondary purposes, such as:
                  </p>
                  <ul className="mt-2 pl-4 sm:pl-[18px] list-disc space-y-1">
                    <li>
                      Training and improving artificial intelligence (AI) models
                    </li>
                    <li>
                      Developing healthcare, nutrition, and exercise-related
                      applications
                    </li>
                    <li>Scientific research and innovation in public health</li>
                  </ul>
                  <p className="mt-2">
                    No directly identifying information (such as your name,
                    email, or patient ID) is ever used for these purposes. You
                    may opt out of secondary use at any time by contacting us.
                  </p>
                </section>

                <section
                  id="sharing"
                  className="pt-4 border-t border-dashed border-gray-300"
                >
                  <h2 className="mb-2 text-[clamp(18px,3.8vw,22px)] font-semibold">
                    5. Data Sharing & Transfers
                  </h2>
                  <ul className="mt-2 pl-4 sm:pl-[18px] list-disc space-y-1">
                    <li>
                      Your data is stored in the EU/EEA (Google Cloud Firebase –
                      region&nbsp;
                      <code className="bg-gray-100 px-1">
                        europe-west/europe-west3
                      </code>
                      ).
                    </li>
                    <li>
                      We do <strong>not</strong> sell or trade your data.
                    </li>
                    <li>
                      We do not transfer data outside the EU unless required
                      (e.g., Firebase Push Notifications, Sentry). In such
                      cases, Standard Contractual Clauses (SCCs) are applied.
                    </li>
                    <li>
                      Under HIPAA, we only disclose Protected Health Information
                      (PHI) as permitted by law.
                    </li>
                  </ul>
                </section>

                <section
                  id="security"
                  className="pt-4 border-t border-dashed border-gray-300"
                >
                  <h2 className="mb-2 text-[clamp(18px,3.8vw,22px)] font-semibold">
                    6. Data Security
                  </h2>
                  <p>
                    We implement industry-standard protections in compliance
                    with GDPR and HIPAA:
                  </p>
                  <ul className="mt-2 pl-4 sm:pl-[18px] list-disc space-y-1">
                    <li>
                      Encryption in transit (TLS 1.2/1.3) and at rest (AES-256)
                    </li>
                    <li>Role-based access and least-privilege controls</li>
                    <li>Regular security audits</li>
                  </ul>
                </section>

                <section
                  id="rights"
                  className="pt-4 border-t border-dashed border-gray-300"
                >
                  <h2 className="mb-2 text-[clamp(18px,3.8vw,22px)] font-semibold">
                    7. Your GDPR &amp; HIPAA Rights
                  </h2>

                  <p className="font-semibold !my-4">GDPR Rights:</p>
                  <ul className="mt-2 pl-4 sm:pl-[18px] list-disc space-y-1">
                    <li>Right of access, rectification, and erasure</li>
                    <li>
                      Right to restrict or pause processing (without deleting
                      your account)
                    </li>
                    <li>
                      Right to data portability in standard formats (FHIR, HL7)
                    </li>
                    <li>Right to withdraw consent at any time</li>
                    <li>
                      Right to lodge a complaint with your supervisory authority
                    </li>
                  </ul>

                  <p className="font-semibold !my-4">HIPAA Rights:</p>
                  <ul className="mt-2 pl-4 sm:pl-[18px] list-disc space-y-1">
                    <li>
                      Right to access your Protected Health Information (PHI)
                    </li>
                    <li>Right to request amendments to your PHI</li>
                    <li>Right to receive an accounting of disclosures</li>
                    <li>
                      Right to request restrictions on uses and disclosures
                    </li>
                    <li>Right to request confidential communications</li>
                    <li>
                      Right to file a complaint with the U.S. Department of
                      Health and Human Services (HHS) Office for Civil Rights
                    </li>
                  </ul>
                </section>

                <section
                  id="retention"
                  className="pt-4 border-t border-dashed border-gray-300"
                >
                  <h2 className="mb-2 text-[clamp(18px,3.8vw,22px)] font-semibold">
                    8. Data Retention
                  </h2>
                  <p>
                    Data is retained as long as necessary for healthcare
                    purposes or legal requirements (including HIPAA
                    requirements). Data used for secondary purposes is
                    anonymized or pseudonymized and may be retained longer for
                    research and innovation.
                  </p>
                </section>

                <section
                  id="ehds"
                  className="pt-4 border-t border-dashed border-gray-300"
                >
                  <h2 className="mb-2 text-[clamp(18px,3.8vw,22px)] font-semibold">
                    9. EHDS Compliance
                  </h2>
                  <ul className="mt-2 pl-4 sm:pl-[18px] list-disc space-y-1">
                    <li>
                      Health data is stored and exported in standardized formats
                      (FHIR, HL7)
                    </li>
                    <li>
                      Patients can transfer their health data between providers
                      and apps upon request
                    </li>
                  </ul>
                </section>

                <section
                  id="children"
                  className="pt-4 border-t border-dashed border-gray-300"
                >
                  <h2 className="mb-2 text-[clamp(18px,3.8vw,22px)] font-semibold">
                    10. Children's Privacy
                  </h2>
                  <p>
                    The App is not directed to children under 13. For minors,
                    processing must be supervised by a guardian or healthcare
                    professional.
                  </p>
                </section>

                <section
                  id="contact"
                  className="pt-4 border-t border-dashed border-gray-300"
                >
                  <h2 className="mb-2 text-[clamp(18px,3.8vw,22px)] font-semibold">
                    11. Contact &amp; Data Protection Officer (DPO)
                  </h2>
                  <p>
                    If you have questions about this Policy or your data rights:
                  </p>

                  <p className="mt-2">
                    <strong>Data Protection Officer (DPO): </strong>
                    dpo@spinerecoverypro.com
                  </p>

                  <p>
                    <strong>EU Representative: </strong>
                    privacy@spinerecoverypro.com
                  </p>

                  <p>
                    Email:&nbsp;
                    <a
                      href="mailto:support@spinerecoverypro.com"
                      className="text-blue-600 hover:underline"
                    >
                      support@spinerecoverypro.com
                    </a>
                  </p>
                </section>
              </main>

              <footer className="border-t border-gray-300 px-[clamp(18px,4vw,28px)] py-4 text-gray-600 text-sm bg-gradient-to-t from-black/5 to-transparent">
                © <span>{new Date().getFullYear()}</span> SpineRecoveryPro. All
                rights reserved.
              </footer>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default page;
