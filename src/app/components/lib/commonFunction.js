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
        "https://a.storyblok.com/f/219851/150x150/9caa5563dc/hitesh-150x150.jpg",
      authorLinkedIn: "https://www.linkedin.com/in/hitesh-umaletiya-266a6077/",
      authorDesc:
        "Co-founder of Brilworks. As technology futurists, we love helping startups turn their ideas into reality. Our expertise spans startups to SMEs, and we're dedicated to their success.",
    },
    {
      name: "Vikas Singh",
      authorImage:
        "https://a.storyblok.com/f/219851/800x800/35b061522a/vikas.jpg",
      authorLinkedIn: "https://www.linkedin.com/in/vksingh319/",
      authorDesc:
        "Vikas, the visionary CTO at Brilworks, is passionate about sharing tech insights, trends, and innovations. He helps businesses—big and small—improve with smart, data-driven ideas.",
      authorPageDesc:
        "Vikas is the Chief Technology Officer (CTO) at Brilworks, leads the company's tech innovations with extensive experience in software development. He drives the team to deliver impactful digital solutions globally​.",
    },
    {
      name: "Lavesh Katariya",
      authorImage:
        "https://a.storyblok.com/f/219851/150x150/271c9290a8/lavesh-150x150.jpg",
      authorLinkedIn: "https://www.linkedin.com/in/laveshkatariya/",
      authorDesc:
        "With over 8 years of experience in the MERN stack, I specialize in building robust and scalable web applications. Proficient in MongoDB, Express.js, React.js, and Node.js, my passion for clean code and innovative problem-solving ensures high-quality solutions.",
    },
    {
      name: "Colin Shah",
      authorImage:
        "https://a.storyblok.com/f/219851/300x300/b9f60bcb6e/colin300x300.jpeg",
      authorLinkedIn: "https://www.linkedin.com/in/colin-shah-java-developer/",
      authorDesc:
        "As a lead Java developer with 8+ years of experience, I design and develop high-performance web applications using Java, Spring Boot, Hibernate, Microservices, RESTful APIs, AWS, and DevOps. I'm dedicated to sharing knowledge through blogs and tutorials.",
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
