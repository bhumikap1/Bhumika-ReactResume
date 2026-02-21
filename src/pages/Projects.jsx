import "../styles/Projects.css";

export default function Projects() {
  const projectList = [
    {
      title: "Portfolio Website using React ",
      duration: "July, 2025 - Aug, 2025",
      description:
        "Build my resume website showcasing react and javascript skills.",
      link: "https://bhumikap1.github.io/Resume/",
    },
    {
      title: "Text Summarization using Hugging Face and LangChain Framework (GenAI)",
      duration: "January 2023 - March 2023",
      description:
        "Built a text summarization web application leveraging Hugging Face models integrated with the LangChain framework. The system generated concise and accurate summaries from large text inputs, demonstrating applications in NLP and automation.",
      link: "",
    },
    {
      title: "Health Care Recommendation System Using ML",
      duration: "April 2024 - August 2024",
      description:
        "Developed a machine learning-based recommendation system to analyze patient health data and generate personalized recommendations. Implemented data preprocessing, feature engineering, and evaluation metrics to ensure accuracy and reliability.",
      link: "https://github.com/bhumikap1/HealthCare-Recommendation-System-using-ML",
    },
    {
      title: "Fake News Detection",
      duration: "July 2024 - September 2024",
      description:
        "Created a frontend application to detect fake news by integrating a machine learning model trained and tested using Kaggle dataset. Enhanced UI to improve user interaction and reliability of predictions.",
      link: "https://github.com/bhumikap1/fake-news",
    },
    {
      title: "Event Arena (Event Booking and Management System)",
      duration: "November 2024 - June 2025",
      description:
        "Designed and developed a MERN stack web application for booking and managing events online. Implemented role-based access control, secure data handling, and an intuitive dashboard for users and administrators.",
      link: "https://github.com/Divya-910/EventArena",
    },
    {
      title: "SafeBs",
      duration: "November 2024 - Present",
      description:
        "Building a React Native application integrated with Firebase for secure authentication, email verification, and role-based user flows. Currently focusing on the core functionality of connecting riders and drivers for safe and efficient ride bookings.",
      link: "https://github.com/bhumikap1/SafeBSUpdated",
    },
  ];

  return (
    <div className="projects-container">
      <h1 className="projects-title">Projects</h1>
      <div className="projects-grid">
        {projectList.map((proj, index) => (
          <div key={index} className="project-card">
            <h2 className="project-title">{proj.title}</h2>
            <h3 className="project-duration">Duration: {proj.duration}</h3>
            <p className="project-description">{proj.description}</p>
            {proj.link && (
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                View GitHub Repo
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
