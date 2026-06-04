import React, { useState, useEffect, useRef } from "react";
import image from "./assets/Screenshot 2025-08-31 233755.png"; // Ensure the image is correctly imported
import quickChatImage from "./assets/quickchat.png";
import parkEaseImage from "./assets/parkease.png";
import spamClassifierImage from "./assets/email-spam-classifier.png";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowUpRight,
  FiArrowRight,
  FiAward,
  FiCode,
  FiCloud,
  FiTrendingUp,
  FiExternalLink,
} from "react-icons/fi";

// All your components are now defined inside the App.jsx file.

// ========= NAVBAR COMPONENT =========
const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0D1117]/80 backdrop-blur-xl border-b border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-medium tracking-tight text-slate-50">
            Aryan Verma
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#work"
              className="text-slate-400 hover:text-cyan-400 transition-all duration-300 text-sm font-medium relative group"
            >
              Work
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#about"
              className="text-slate-400 hover:text-cyan-400 transition-all duration-300 text-sm font-medium relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#contact"
              className="text-slate-400 hover:text-cyan-400 transition-all duration-300 text-sm font-medium relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

// ========= HERO COMPONENT =========
const roles = [
  "Software Engineer.",
  "Full-Stack Developer.",
  "Problem Solver.",
];

const gmailComposeLink =
  "https://mail.google.com/mail/?view=cm&fs=1&to=aryanv380@gmail.com&su=Portfolio%20Inquiry&body=Hi%20Aryan%2C%0A%0AI%20saw%20your%20portfolio%20and%20wanted%20to%20connect.";

const Hero = () => {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentRoleText, setCurrentRoleText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = roles[currentRoleIndex];
      setCurrentRoleText(
        isDeleting
          ? fullText.substring(0, currentRoleText.length - 1)
          : fullText.substring(0, currentRoleText.length + 1)
      );

      if (!isDeleting && currentRoleText === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentRoleText === "") {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      }
    };

    const typingSpeed = isDeleting ? 100 : 150;
    const typingTimeout = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimeout);
  }, [currentRoleText, isDeleting, currentRoleIndex]);

  return (
    <section className="min-h-screen flex items-center pt-16 relative">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:36px_36px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_60%,transparent_100%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full relative z-10">
        <div className="max-w-4xl">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-none mb-4 tracking-tighter">
            <span className="block text-slate-50">Aryan Verma</span>
            <span className="font-medium bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent block h-20 md:h-28 lg:h-36">
              {currentRoleText}
              <span className="text-cyan-400 animate-ping">|</span>
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-slate-400 max-w-3xl leading-relaxed mb-12 font-light">
            I design and build scalable, high-performance web applications and
            cloud infrastructure, transforming complex problems into elegant,
            user-centric solutions.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <a
              href={gmailComposeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center px-8 py-4 bg-cyan-400 text-slate-950 hover:bg-cyan-300 transition-all duration-300 rounded-full font-medium transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
            >
              <span className="mr-2">Let's work together</span>
              <FiArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </a>
            <div className="flex items-center space-x-2">
              <a
                href="https://www.linkedin.com/in/aryan-verma-b6759525b/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800/50 hover:bg-slate-800/80 rounded-full transition-all duration-300 hover:scale-110 group border border-slate-700/50"
              >
                <FiLinkedin className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors duration-300" />
              </a>
              <a
                href="https://github.com/aryanverma2601"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-slate-800/50 hover:bg-slate-800/80 rounded-full transition-all duration-300 hover:scale-110 group border border-slate-700/50"
              >
                <FiGithub className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ========= PROJECTS COMPONENT =========
// ========= PROJECTS COMPONENT =========
const Projects = ({ isVisible, setRef }) => {
  const projectsData = [
    {
      id: "backrite",
      title: "Backrite",
      category: "Full-Stack Platform",
      description:
        "An enterprise-grade practice platform for backend developers, featuring secure, containerized code execution via Docker and scalable deployment on AWS cloud infrastructure.",
      technologies: ["React", "Node.js", "Docker", "AWS", "MongoDB"],
      liveLink: "https://backrite-5zwz.vercel.app/",
      codeLink: "https://github.com/Backrite/Backrite",
      image: image,
    },
    {
      id: "quickchat",
      title: "QuickChat",
      category: "Real-Time Chat Application",
      description:
        "A MERN stack chat application with Socket.IO-powered real-time messaging, JWT authentication, online user presence, unseen message counts, profile updates, and image sharing through Cloudinary.",
      technologies: [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Socket.IO",
        "Cloudinary",
      ],
      liveLink:
        "https://quick-chat-client-5x7bqct25-aryanv380-gmailcoms-projects.vercel.app/login",
      codeLink: "https://github.com/aryanverma2601/QuickChat",
      image: quickChatImage,
    },
    {
      id: "parkease",
      title: "ParkEase",
      category: "Smart Parking Platform",
      description:
        "A full-stack smart parking management platform with Angular, Spring Boot microservices, JWT authentication, real-time spot availability, bookings, payments, and role-based dashboards for drivers, managers, and admins.",
      technologies: [
        "Angular",
        "Spring Boot",
        "Java",
        "MySQL",
        "RabbitMQ",
        "Eureka",
      ],
      liveLink: "https://github.com/aryanverma2601/Parkease",
      codeLink: "https://github.com/aryanverma2601/Parkease",
      image: parkEaseImage,
    },
    {
      id: "spam-classifier",
      title: "Email/SMS Spam Classifier",
      category: "Machine Learning",
      description:
        "An NLP text classification pipeline that detects spam and ham messages using TF-IDF vectorization and Multinomial Naive Bayes, reaching 97.10% accuracy and 100% precision with a Streamlit app for real-time predictions.",
      technologies: [
        "Python",
        "scikit-learn",
        "NLTK",
        "TF-IDF",
        "Naive Bayes",
        "Streamlit",
      ],
      liveLink: "https://github.com/aryanverma2601/Email-sms_Spam_Classifier",
      codeLink: "https://github.com/aryanverma2601/Email-sms_Spam_Classifier",
      image: spamClassifierImage,
    },
  ];

  return (
    <section id="work" className="py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div
          id="projects-header"
          ref={(el) => setRef("projects-header", el)}
          className={`mb-20 transform transition-all duration-1000 ease-in-out ${
            isVisible["projects-header"]
              ? "translate-y-0 opacity-100 scale-100"
              : "translate-y-12 opacity-0 scale-95"
          }`}
        >
          <h2 className="text-4xl md:text-6xl font-light mb-6 tracking-tighter text-slate-50">
            Selected Work
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl font-light">
            A collection of projects that showcase technical excellence and
            innovative problem-solving.
          </p>
        </div>

        <div className="space-y-32">
          {projectsData.map((project, index) => (
            <div
              key={project.id}
              id={`project-${index}`}
              ref={(el) => setRef(`project-${index}`, el)}
              className={`transform transition-all duration-1000 ease-in-out ${
                isVisible[`project-${index}`]
                  ? "translate-y-0 opacity-100 scale-100"
                  : "translate-y-12 opacity-0 scale-95"
              }`}
              style={{ transitionDelay: "200ms" }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                <div
                  className={`lg:col-span-7 ${
                    index % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <span className="text-sm font-medium text-cyan-400 uppercase tracking-wide">
                    {project.category}
                  </span>
                  <h3 className="text-3xl md:text-4xl font-light mb-6 tracking-tight text-slate-50 mt-2">
                    {project.title}
                  </h3>

                  <p className="text-lg text-slate-400 mb-8 leading-relaxed font-light">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-slate-800/80 border border-slate-700/80 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center space-x-6">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center text-slate-50 hover:text-cyan-400 transition-all duration-300 transform"
                    >
                      <span className="mr-2 font-medium">View Project</span>
                      <FiExternalLink className="w-4 h-4" />
                    </a>
                    <a
                      href={project.codeLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center text-slate-50 hover:text-cyan-400 transition-all duration-300 transform"
                    >
                      <span className="mr-2 font-medium">View Code</span>
                      <FiGithub className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                <div
                  className={`lg:col-span-5 ${
                    index % 2 === 1 ? "lg:order-1" : ""
                  }`}
                >
                  <div className="relative group">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="aspect-video rounded-2xl transition-all duration-500 group-hover:scale-[1.03] group-hover:shadow-2xl group-hover:shadow-black/50 overflow-hidden">
                        {/* ** FIXED ** Now checks if the value is an image path or a gradient string */}
                        {project.image.includes("linear-gradient") ? (
                          <div
                            className="absolute inset-0"
                            style={{ background: project.image }}
                          />
                        ) : (
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        )}
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// ========= ABOUT & SKILLS COMPONENT (UNCHANGED) =========
const About = ({ isVisible, setRef }) => {
  const skills = [
    { name: "Java, Spring Boot & Microservices", level: 92, category: "Backend" },
    { name: "React, Angular & TypeScript", level: 90, category: "Frontend" },
    { name: "Node.js, Express & REST APIs", level: 88, category: "Backend" },
    { name: "MySQL, MongoDB, JWT & RabbitMQ", level: 86, category: "Systems" },
    { name: "AWS, Docker, ECS & CI/CD", level: 84, category: "DevOps" },
  ];

  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-20">
          <div
            id="about-text"
            ref={(el) => setRef("about-text", el)}
            className={`transform transition-all duration-1000 ease-in-out ${
              isVisible["about-text"]
                ? "translate-y-0 opacity-100 scale-100"
                : "translate-y-12 opacity-0 scale-95"
            }`}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-tighter text-slate-50">
              About Me
            </h2>
            <div className="space-y-6 text-lg text-slate-400 leading-relaxed font-light">
              <p>
                I'm a Computer Science Engineering student at GLA University
                and a Software Engineer Trainee at Capgemini through BridgeLabz,
                focused on building scalable APIs, microservices, and polished
                full-stack applications.
              </p>
              <p>
                My work spans Java 17, Spring Boot, React, Angular, Node.js,
                MySQL, MongoDB, RabbitMQ, Docker, and AWS. I enjoy turning
                product problems into reliable systems with clean architecture,
                real-time features, and measurable user impact.
              </p>
            </div>
          </div>

          <div
            id="skills"
            ref={(el) => setRef("skills", el)}
            className={`transform transition-all duration-1000 ease-in-out ${
              isVisible["skills"] ? "opacity-100" : "opacity-0"
            }`}
          >
            <h3 className="text-2xl font-light mb-8 tracking-tight text-cyan-400">
              Core Expertise
            </h3>
            <div className="space-y-8">
              {skills.map((skill, index) => (
                <div key={skill.name} className="group">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-slate-50 font-medium group-hover:text-cyan-400 transition-colors duration-300">
                      {skill.name}
                    </span>
                    <span className="text-sm text-slate-500">
                      {skill.category}
                    </span>
                  </div>
                  <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-cyan-400 to-fuchsia-500 rounded-full transition-all duration-1000 ease-out relative"
                      style={{
                        width: isVisible["skills"] ? `${skill.level}%` : "0%",
                        transitionDelay: `${index * 150}ms`,
                      }}
                    >
                      <div className="absolute top-0 -left-full h-full w-full bg-white/20 opacity-0 group-hover:opacity-100 animate-shimmer rounded-full" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// ========= CREDENTIALS COMPONENT (UNCHANGED) =========
const Credentials = ({ isVisible, setRef }) => {
  const achievements = [
    {
      icon: <FiAward />,
      title: "Software Engineer Trainee",
      detail:
        "Training with Capgemini via BridgeLabz, building Java 17 and Spring Boot REST APIs with Spring Data JPA, MySQL, JUnit 5, Mockito, Git, and layered architecture.",
    },
    {
      icon: <FiAward />,
      title: "Smart India Hackathon 2024",
      detail:
        "Recognized in the Top 30 nationally for problem-solving, system design, and cross-functional execution.",
    },
    {
      icon: <FiCode />,
      title: "Competitive Programming",
      detail:
        "Solved 600+ problems across graphs, dynamic programming, trees, and binary search, with ratings of 1480 on LeetCode and 1310 on CodeChef.",
    },
    {
      icon: <FiCloud />,
      title: "AWS Cloud Training",
      detail:
        "Certified through Jovac on EC2, S3, ECS, and IAM, with hands-on cloud deployment experience.",
    },
  ];

  return (
    <section id="credentials" className="py-32">
      <div
        id="credentials-header"
        ref={(el) => setRef("credentials-header", el)}
        className={`mb-16 transform transition-all duration-1000 ease-in-out ${
          isVisible["credentials-header"]
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-12 opacity-0 scale-95"
        }`}
      >
        <h2 className="text-4xl md:text-5xl font-light mb-6 tracking-tighter text-slate-50 text-center">
          Credentials & Achievements
        </h2>
      </div>

      <div className="space-y-12 max-w-4xl mx-auto">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            id={`achievement-${index}`}
            ref={(el) => setRef(`achievement-${index}`, el)}
            className={`flex items-start gap-6 lg:gap-8 transform transition-all duration-1000 ease-in-out ${
              isVisible[`achievement-${index}`]
                ? "translate-x-0 opacity-100"
                : "-translate-x-12 opacity-0"
            }`}
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <div className="text-cyan-400 mt-1">
              {React.cloneElement(achievement.icon, { size: 28 })}
            </div>
            <div>
              <h3 className="text-lg font-medium text-slate-50">
                {achievement.title}
              </h3>
              <p className="text-slate-400 font-light mt-1">
                {achievement.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// ========= CTA COMPONENT =========
const CTA = ({ isVisible, setRef }) => {
  return (
    <section id="contact" className="py-32">
      <div
        id="cta-content"
        ref={(el) => setRef("cta-content", el)}
        className={`transform transition-all duration-1000 ease-in-out ${
          isVisible["cta-content"]
            ? "translate-y-0 opacity-100 scale-100"
            : "translate-y-12 opacity-0 scale-95"
        } bg-slate-900/50 border border-slate-800/80 rounded-3xl p-12 md:p-20 text-center`}
      >
        <h2 className="text-4xl md:text-6xl font-light mb-6 tracking-tighter">
          <span className="bg-gradient-to-r from-slate-50 to-slate-400 bg-clip-text text-transparent">
            Let's build something exceptional.
          </span>
        </h2>
        <p className="text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed mb-12">
          Have a project in mind, a question, or an opportunity? I'm currently
          available for freelance work and open to new collaborations. Let's
          connect and turn your ideas into reality.
        </p>
        <a
          href={gmailComposeLink}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center px-8 py-4 bg-cyan-400 text-slate-950 hover:bg-cyan-300 transition-all duration-300 rounded-full font-medium transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
        >
          <span className="mr-2 text-lg">Get in Touch</span>
          <FiArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
        </a>
      </div>
    </section>
  );
};

// ========= FOOTER COMPONENT =========
const Footer = () => {
  return (
    <footer className="py-12 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="text-slate-500 text-sm mb-4 md:mb-0">
            © 2025 Aryan Verma. Designed & Built with a professional touch.
          </div>
          <div className="flex items-center space-x-6">
            <a
              href="https://www.linkedin.com/in/aryan-verma-b6759525b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <FiLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://github.com/aryanverma2601"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-cyan-400 transition-colors"
            >
              <FiGithub className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// ========= MAIN APP COMPONENT =========
function App() {
  const [isVisible, setIsVisible] = useState({});
  const observerRefs = useRef(new Map());

  useEffect(() => {
    const handleMouseMove = (e) => {
      document.body.style.setProperty("--x", `${e.clientX}px`);
      document.body.style.setProperty("--y", `${e.clientY}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    const refs = observerRefs.current;
    refs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (observer) observer.disconnect();
    };
  }, []);

  const setRef = (id, el) => {
    if (el) {
      observerRefs.current.set(id, el);
    } else {
      observerRefs.current.delete(id);
    }
  };

  return (
    <div className="relative z-10">
      <Navbar />
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <Hero />
        <main>
          <Projects isVisible={isVisible} setRef={setRef} />
          <About isVisible={isVisible} setRef={setRef} />
          <Credentials isVisible={isVisible} setRef={setRef} />
          <CTA isVisible={isVisible} setRef={setRef} />
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default App;
