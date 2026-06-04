import React, { useState, useEffect, useRef } from "react";
import quickChatImage from "../assets/quickchat.png";
import parkEaseImage from "../assets/parkease.png";
import spamClassifierImage from "../assets/email-spam-classifier.png";
// Using react-icons for a wider, more consistent icon set
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiArrowUpRight,
  FiArrowRight,
  FiExternalLink,
} from "react-icons/fi";

const gmailComposeLink =
  "https://mail.google.com/mail/?view=cm&fs=1&to=aryanv380@gmail.com&su=Portfolio%20Inquiry&body=Hi%20Aryan%2C%0A%0AI%20saw%20your%20portfolio%20and%20wanted%20to%20connect.";

const Portfolio = () => {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const observerRefs = useRef({});

  // This useEffect now also handles the cursor spotlight effect
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      document.body.style.setProperty("--x", `${e.clientX}px`);
      document.body.style.setProperty("--y", `${e.clientY}px`);
    };

    window.addEventListener("scroll", handleScroll);
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

    Object.values(observerRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      observer.disconnect();
    };
  }, []);

  // Project data remains the same, just updating image gradients for the new theme
  const projects = [
    {
      id: "backrite",
      title: "Backrite",
      category: "Full-Stack Platform",
      description:
        "Enterprise-grade backend development practice platform with Docker containerization and AWS cloud infrastructure. Features secure code execution environments and real-time feedback systems.",
      technologies: ["React", "Node.js", "Docker", "AWS", "MongoDB"],
      metrics: { users: "1K+", uptime: "99.9%", performance: "< 200ms" },
      year: "2025",
      image: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
    },
    {
      id: "quickchat",
      title: "QuickChat",
      category: "Real-Time Chat Application",
      description:
        "MERN stack chat application with Socket.IO messaging, JWT authentication, online presence, unseen message counts, profile updates, and Cloudinary image sharing.",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Socket.IO"],
      metrics: { realtime: "Socket.IO", auth: "JWT", media: "Cloudinary" },
      liveLink:
        "https://quick-chat-client-5x7bqct25-aryanv380-gmailcoms-projects.vercel.app/login",
      codeLink: "https://github.com/aryanverma2601/QuickChat",
      year: "2025",
      image: quickChatImage,
    },
    {
      id: "parkease",
      title: "ParkEase",
      category: "Smart Parking Platform",
      description:
        "Full-stack parking management platform with Angular, Spring Boot microservices, JWT auth, real-time spot availability, bookings, payments, and role-based dashboards.",
      technologies: ["Angular", "Spring Boot", "Java", "MySQL", "RabbitMQ"],
      metrics: { roles: "3", services: "9", gateway: "8080" },
      liveLink: "https://github.com/aryanverma2601/Parkease",
      codeLink: "https://github.com/aryanverma2601/Parkease",
      year: "2025",
      image: parkEaseImage,
    },
    {
      id: "spam-classifier",
      title: "Email/SMS Spam Classifier",
      category: "Machine Learning",
      description:
        "NLP classifier for spam and ham detection using TF-IDF features and Multinomial Naive Bayes, with a Streamlit app for real-time message classification.",
      technologies: ["Python", "scikit-learn", "NLTK", "TF-IDF", "Streamlit"],
      metrics: { accuracy: "97.10%", precision: "100%", app: "Streamlit" },
      liveLink: "https://github.com/aryanverma2601/Email-sms_Spam_Classifier",
      codeLink: "https://github.com/aryanverma2601/Email-sms_Spam_Classifier",
      year: "2025",
      image: spamClassifierImage,
    },
  ];

  const skills = [
    { name: "Java, Spring Boot & Microservices", level: 92, category: "Backend" },
    { name: "React, Angular & TypeScript", level: 90, category: "Frontend" },
    { name: "Node.js, Express & REST APIs", level: 88, category: "Backend" },
    { name: "MySQL, MongoDB, JWT & RabbitMQ", level: 86, category: "Systems" },
    { name: "AWS, Docker, ECS & CI/CD", level: 84, category: "DevOps" },
  ];

  const setRef = (id, el) => {
    observerRefs.current[id] = el;
  };

  return (
    <div className="bg-[#0D1117] text-slate-300 font-light selection:bg-cyan-300/20">
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

      <section className="min-h-screen flex items-center pt-16 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            <div
              className="transform transition-all duration-1000 ease-out"
              style={{
                transform: `translateY(${Math.max(0, scrollY * 0.2)}px)`,
                opacity: Math.max(0.1, 1 - scrollY * 0.001),
              }}
            >
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-light leading-none mb-8 tracking-tighter relative z-10">
                <span className="block text-slate-50">Full-Stack</span>
                <span className="font-medium bg-gradient-to-r from-cyan-400 to-fuchsia-500 bg-clip-text text-transparent block">
                  Developer
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-400 max-w-2xl leading-relaxed mb-12 font-light">
                I craft exceptional digital experiences through innovative
                technology solutions, specializing in scalable web applications
                and cloud architecture.
              </p>

              <div className="flex items-center space-x-6">
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
                    href={gmailComposeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-800/50 hover:bg-slate-800/80 rounded-full transition-all duration-300 hover:scale-110 group border border-slate-700/50"
                  >
                    <FiMail className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors duration-300" />
                  </a>
                  <a
                    href="tel:+917906935875"
                    className="p-3 bg-slate-800/50 hover:bg-slate-800/80 rounded-full transition-all duration-300 hover:scale-110 group border border-slate-700/50"
                  >
                    <FiPhone className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors duration-300" />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-slate-800/50 hover:bg-slate-800/80 rounded-full transition-all duration-300 hover:scale-110 group border border-slate-700/50"
                  >
                    <FiLinkedin className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors duration-300" />
                  </a>
                  <a
                    href="#"
                    className="p-3 bg-slate-800/50 hover:bg-slate-800/80 rounded-full transition-all duration-300 hover:scale-110 group border border-slate-700/50"
                  >
                    <FiGithub className="w-5 h-5 text-slate-400 group-hover:text-cyan-400 transition-colors duration-300" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="work" className="py-32 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div
            id="projects-header"
            ref={(el) => setRef("projects-header", el)}
            // Enhanced animation: fades, scales, and moves up
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
            {projects.map((project, index) => (
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
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                  <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                    <span className="text-sm font-medium text-cyan-400 uppercase tracking-wide">
                      {project.category}
                    </span>
                    <h3 className="text-3xl md:text-4xl font-light mb-6 tracking-tight text-slate-50 mt-2">
                      {project.title}
                    </h3>

                    <p className="text-lg text-slate-400 mb-8 leading-relaxed font-light">
                      {project.description}
                    </p>

                    <div className="grid grid-cols-3 gap-6 mb-8 text-center">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key}>
                          <div className="text-2xl font-medium text-cyan-400">
                            {value}
                          </div>
                          <div className="text-sm text-slate-500 capitalize mt-1">
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>

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

                    <a
                      href={project.liveLink || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-center text-slate-50 hover:text-cyan-400 transition-all duration-300 transform"
                    >
                      <span className="mr-2 font-medium">View Project</span>
                      <FiArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
                    </a>
                  </div>

                  <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                    <div className="relative group">
                      <div className="aspect-[4/3] rounded-2xl transition-all duration-500 group-hover:scale-[1.03] group-hover:shadow-2xl group-hover:shadow-black/50 overflow-hidden">
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
                        {/* Subtle noise pattern for texture */}
                        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20800%20800%22%3E%3Cg%20fill%3D%22none%22%20stroke%3D%22%2322d3ee%22%20stroke-width%3D%221%22%3E%3Cpath%20d%3D%22M-100%20500h1000v1M-100%20498h1000v1M-100%20496h1000v1%22%2F%3E%3C%2Fg%3E%3C%2Fsvg%3E')] opacity-5" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
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
                  and a Software Engineer Trainee at Capgemini through
                  BridgeLabz, focused on building scalable APIs, microservices,
                  and polished full-stack applications.
                </p>
                <p>
                  My work spans Java 17, Spring Boot, React, Angular, Node.js,
                  MySQL, MongoDB, RabbitMQ, Docker, and AWS. I enjoy turning
                  product problems into reliable systems with clean
                  architecture, real-time features, and measurable user impact.
                </p>
                <p>
                  Currently based in Mathura, India, I'm always interested in
                  challenging projects and collaborative opportunities.
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
                Expertise
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
                        {/* Premium "shimmer" animation on the skill bars */}
                        <div className="absolute top-0 left-0 h-full w-full bg-white/20 opacity-0 group-hover:opacity-100 animate-[shimmer_2s_infinite] rounded-full" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements and Contact sections would follow a similar refactoring pattern */}

      <footer className="py-16 border-t border-slate-800/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div className="text-slate-500 text-sm mb-4 md:mb-0">
              © 2025 Aryan Verma. Designed & Built with a professional touch.
            </div>
            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <FiLinkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <FiGithub className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
