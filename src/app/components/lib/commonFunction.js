// This function is used to navigato at particular section
export function scrollToSection(e, sectionId) {
  e.preventDefault();
  const targetSection = document.getElementById(sectionId);

  if (targetSection) {
    targetSection.scrollIntoView({
      behavior: "smooth",
    });
  }
}

export function scrollEffect() {
  const reveals = document.querySelectorAll(".reveal");

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight;
    const elementTop = reveals[i].getBoundingClientRect().top;
    const elementVisible = 100;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

export function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export function CustomIcon({ id, open }) {
  return id === open ? (
    <svg
      width="20"
      height="3"
      viewBox="0 0 20 3"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.9999 0.536133H11.0001C10 0.536133 10 0.536447 9 0.536133H0.999939C0.448059 0.536133 0 0.984192 0 1.53607C0 2.08813 0.448059 2.53619 0.999939 2.53619H9C9.5 2.53595 10 2.53619 11.0001 2.53619H18.9999C19.552 2.53619 20.0001 2.08813 20.0001 1.53607C20.0001 0.984192 19.552 0.536133 18.9999 0.536133Z"
        fill="#6366F1"
      />
      <path
        d="M18.9999 0.536133H11.0001C10 0.536133 10 0.536447 9 0.536133H0.999939C0.448059 0.536133 0 0.984192 0 1.53607C0 2.08813 0.448059 2.53619 0.999939 2.53619H9C9.5 2.53595 10 2.53619 11.0001 2.53619H18.9999C19.552 2.53619 20.0001 2.08813 20.0001 1.53607C20.0001 0.984192 19.552 0.536133 18.9999 0.536133Z"
        fill="url(#paint0_linear_496_1997)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_496_1997"
          x1="8.02819"
          y1="-0.463898"
          x2="8.72834"
          y2="4.71085"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0182EA" />
          <stop offset="0.294752" stopColor="#0182EA" />
          <stop offset="0.589505" stopColor="#01DBD4" />
          <stop offset="0.821157" stopColor="#01DBD4" />
        </linearGradient>
      </defs>
    </svg>
  ) : (
    <svg
      width="20"
      height="21"
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_496_2004)">
        <path
          d="M18.9999 9.53613H11.0001V1.53607C11.0001 0.984192 10.552 0.536133 9.99994 0.536133C9.44806 0.536133 9 0.984192 9 1.53607V9.53613H0.999939C0.448059 9.53613 0 9.98419 0 10.5361C0 11.0881 0.448059 11.5362 0.999939 11.5362H9V19.5361C9 20.0881 9.44806 20.5362 9.99994 20.5362C10.552 20.5362 11.0001 20.0881 11.0001 19.5361V11.5362H18.9999C19.552 11.5362 20.0001 11.0881 20.0001 10.5361C20.0001 9.98419 19.552 9.53613 18.9999 9.53613Z"
          fill="#6366F1"
        />
        <path
          d="M18.9999 9.53613H11.0001V1.53607C11.0001 0.984192 10.552 0.536133 9.99994 0.536133C9.44806 0.536133 9 0.984192 9 1.53607V9.53613H0.999939C0.448059 9.53613 0 9.98419 0 10.5361C0 11.0881 0.448059 11.5362 0.999939 11.5362H9V19.5361C9 20.0881 9.44806 20.5362 9.99994 20.5362C10.552 20.5362 11.0001 20.0881 11.0001 19.5361V11.5362H18.9999C19.552 11.5362 20.0001 11.0881 20.0001 10.5361C20.0001 9.98419 19.552 9.53613 18.9999 9.53613Z"
          fill="url(#paint0_linear_496_2004)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_496_2004"
          x1="8.02819"
          y1="-9.4639"
          x2="33.2152"
          y2="9.15215"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#0182EA" />
          <stop offset="0.294752" stopColor="#0182EA" />
          <stop offset="0.589505" stopColor="#01DBD4" />
          <stop offset="0.821157" stopColor="#01DBD4" />
        </linearGradient>
        <clipPath id="clip0_496_2004">
          <rect
            width="20"
            height="20"
            fill="white"
            transform="translate(0 0.536133)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}

export const formattedDate = (dateString) => {
  const date = new Date(dateString);
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = monthNames[date.getMonth()];

  // Get the day
  const day = date.getDate();

  // Get the year
  const year = date.getFullYear();

  // Format the date
  return `${month} ${day}, ${year}`;
};

export const blogAuthor = (authorName) => {
  const authorData = [
    {
      name: "Hitesh Umaletiya",
      authorImage:
        "https://d11qzsb0ksp6iz.cloudfront.net/assets/9caa5563dc_hitesh-150x150.jpg",
      authorLinkedIn: "https://www.linkedin.com/in/hitesh-umaletiya-266a6077/",
      authorDesc:
        "Co-founder of Brilworks. As technology futurists, we love helping startups turn their ideas into reality. Our expertise spans startups to SMEs, and we're dedicated to their success.",
      mobileDesc: "Co-founder of Brilworks",
    },
    {
      name: "Vikas Singh",
      authorImage:
        "https://d11qzsb0ksp6iz.cloudfront.net/assets/35b061522a_vikas.jpg",
      authorLinkedIn: "https://www.linkedin.com/in/vksingh319/",
      authorDesc:
        "Vikas, the visionary CTO at Brilworks, is passionate about sharing tech insights, trends, and innovations. He helps businesses—big and small—improve with smart, data-driven ideas.",
      authorPageDesc:
        "Vikas is the Chief Technology Officer (CTO) at Brilworks, leads the company's tech innovations with extensive experience in software development. He drives the team to deliver impactful digital solutions globally.",
      mobileDesc: "CTO at Brilworks",
    },
    {
      name: "Lavesh Katariya",
      authorImage:
        "https://d11qzsb0ksp6iz.cloudfront.net/assets/271c9290a8_lavesh-150x150.jpg",
      authorLinkedIn: "https://www.linkedin.com/in/laveshkatariya/",
      authorDesc:
        "With over 8 years of experience in the MERN stack, I specialize in building robust and scalable web applications. Proficient in MongoDB, Express.js, React.js, and Node.js, my passion for clean code and innovative problem-solving ensures high-quality solutions.",
      mobileDesc: "Sr. MERN Stack Developer",
    },
    {
      name: "Colin Shah",
      authorImage:
        "https://d11qzsb0ksp6iz.cloudfront.net/assets/b9f60bcb6e_colin300x300.jpeg",
      authorLinkedIn: "https://www.linkedin.com/in/colin-shah-java-developer/",
      authorDesc:
        "As a lead Java developer with 8+ years of experience, I design and develop high-performance web applications using Java, Spring Boot, Hibernate, Microservices, RESTful APIs, AWS, and DevOps. I'm dedicated to sharing knowledge through blogs and tutorials.",
      mobileDesc: "Sr. Java Developer",
    },
  ];

  const selectedAuthor = authorData.find(
    (author) => author?.name === authorName
  );

  return selectedAuthor;
};

export const calculateReadingTime = (content) => {
  // Average reading speed in words per minute (adjust as needed)
  const wordsPerMinute = 200;

  // Calculate the number of words in the content
  if (typeof content === "string") {
    const wordCount = content?.split(/\s+/).length / 2;

    // Calculate the reading time in minutes
    const readingTime = Math.ceil(wordCount / wordsPerMinute);

    return readingTime;
  }
};

export function convertParamsToString(input) {
  return input
    .split("-") // Step 1: Split the string by hyphen
    .map(
      (
        word // Step 2: Capitalize the first letter of each word
      ) => word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(" "); // Step 3: Join the words back with a space
}

export function formatPhoneNumber(phoneNumber) {
  if (!phoneNumber) return ""; // Handle cases where phoneNumber is undefined/null

  const formattedNumber = phoneNumber.replace(
    /^(\d{2})(\d{5})(\d{5})$/,
    "+$1 $2 $3"
  );
  return formattedNumber;
}

export const handleDownloadFile = async (downloadFileUrl) => {
  const filename = downloadFileUrl.substring(
    downloadFileUrl.lastIndexOf("/") + 1
  );

  try {
    const response = await fetch(downloadFileUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch the file: ${response.statusText}`);
    }

    const blob = await response.blob();
    const blobUrl = window.URL.createObjectURL(blob);

    const link = document.createElement("a");
    link.href = blobUrl;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Clean up the blob URL
    window.URL.revokeObjectURL(blobUrl);
  } catch (error) {
    console.error("Error downloading the file:", error);
  }
};

export const getPageNumbers = (currentPage, totalQandA, ITEMS_PER_PAGE) => {
  const pages = [];
  for (let i = -2; i <= 2; i++) {
    const page = currentPage + i;
    if (page > 0 && page <= Math.ceil(totalQandA / ITEMS_PER_PAGE)) {
      pages.push(page);
    }
  }
  return pages;
};

export function formatTitleFromUrl(url) {
  const fileName = url.split("/").pop().split(".")[0]; // Extract filename without extension
  return fileName
    .split("-") // Split by hyphen
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize first letter
    .join(" "); // Join words with spaces
}
export function formatSrcUrl(url) {
  const urlParts = url.split("/");

  // Get the asset ID (second last segment)
  const assetId = urlParts[urlParts.length - 2];

  // Get the filename (last segment)
  const filename = urlParts[urlParts.length - 1];

  // Construct new S3 file name
  const newFileName =
    assetId !== "public" ? `${assetId}_${filename}` : `${filename}`;

  const fileURL = `https://d11qzsb0ksp6iz.cloudfront.net/assets/${newFileName}`;
  // const fileURL = `https://${s3Bucket}.s3.${s3Region}.amazonaws.com/assets/${newFileName}`;

  return fileURL;
}
