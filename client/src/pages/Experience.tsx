import { PageHeader } from "@/components/PageHeader";
import { motion } from "framer-motion";
import { useState } from "react";
import { ExternalLink, Star } from "lucide-react";

// ===============================
// DATA STRUCTURES
// ===============================

const CERTIFICATIONS = [
  {
    id: 1,
    title: "SAP Technology Consultant",
    provider: "SAP",
    description: "Learn key consulting skills most requested by SAP partners worldwide. Understand the global SAP business solutions, products and ecosystem.",
    skills: ["SAP Implementation", "Project Management", "Waterfall", "Agile", "DevOps", "Cloud"],
    link: "https://coursera.org/share/6ffbbd35a763856b02f030dcec22c601",
    startDate: "2024",
    endDate: "2024"
  },
  {
    id: 2,
    title: "Google Cybersecurity",
    provider: "Google",
    rating: "4.8 (52,975 ratings)",
    description: "Understand the importance of cybersecurity practices and their impact for organizations. Protect networks, devices, people, and data from unauthorized access.",
    skills: ["SIEM Tools", "Python", "Linux", "SQL", "Security Analysis"],
    link: "https://coursera.org/share/eafe20a44de48a13b4b88e5209e994a4",
    startDate: "2024",
    endDate: "2024"
  },
  {
    id: 3,
    title: "Google Data Analytics",
    provider: "Google",
    rating: "4.8 (165,897 ratings)",
    description: "Gain an immersive understanding of the practices and processes used by a junior or associate data analyst in their day-to-day job.",
    skills: ["Data Cleaning", "SQL", "Python", "Tableau", "Data Visualization"],
    link: "https://coursera.org/share/3cab35b276d6c9244c7878e9a42c1600",
    startDate: "2024",
    endDate: "2024"
  },
  {
    id: 4,
    title: "Leadership Skills",
    provider: "Coursera",
    description: "Understanding the practice of leadership and building inner stability. Learn important leadership skills, change management, decision-making, and various leadership styles.",
    skills: ["Leadership", "Change Management", "Decision Making", "Self-Management"],
    link: "https://coursera.org/share/1dd035a2a6b1a8d94199ab07de76e909",
    startDate: "2024",
    endDate: "2024"
  },
  {
    id: 5,
    title: "Generative AI: Elevate your Software Development Career",
    provider: "IBM",
    rating: "4.6 (233 ratings)",
    description: "Job-ready skills to develop innovative solutions using GenAI tools such as ChatGPT, GitHub Copilot, Google Gemini, and IBM watsonx Code Assistant.",
    skills: ["ChatGPT", "GitHub Copilot", "Code Generation", "AI Ethics"],
    link: "https://coursera.org/share/7207067e43aba7d609412720c41924d3",
    startDate: "2024",
    endDate: "2024"
  },
  {
    id: 6,
    title: "Data Analysis with R Programming",
    provider: "Coursera",
    description: "Mastered data analysis techniques using R programming language for statistical computing and graphics.",
    skills: ["R Programming", "Statistical Analysis", "Data Visualization"],
    link: "https://www.coursera.org/account/accomplishments/verify/BMKRZEI90QSL",
    startDate: "2024",
    endDate: "2024"
  },
  {
    id: 7,
    title: "Blockchain Basics",
    provider: "Coursera",
    description: "Understanding the fundamentals of blockchain technology, cryptocurrency, and distributed ledger systems.",
    skills: ["Blockchain", "Cryptocurrency", "Distributed Systems"],
    link: "https://www.coursera.org/account/accomplishments/verify/XXZURI8BMV9A",
    startDate: "2024",
    endDate: "2024"
  },
  {
    id: 8,
    title: "Using Python to Access Web Data",
    provider: "Coursera",
    description: "Learn to extract and process data from the web using Python programming language.",
    skills: ["Python", "Web Scraping", "APIs", "Data Extraction"],
    link: "https://www.coursera.org/account/accomplishments/verify/1OLVIP2L89B5",
    startDate: "2024",
    endDate: "2024"
  },
  {
    id: 9,
    title: "Google SEO Fundamentals",
    provider: "Google",
    description: "Master the fundamentals of search engine optimization and digital marketing strategies.",
    skills: ["SEO", "Digital Marketing", "Search Optimization"],
    link: "https://www.coursera.org/account/accomplishments/verify/3KMZVPVPEKM8",
    startDate: "2024",
    endDate: "2024"
  }
];

const ACHIEVEMENTS = [
  {
    id: 1,
    title: "Poster Presentation at Conference",
    event: "Academic Conference 2025",
    date: "January 24-25, 2025",
    description: "Presented research poster showcasing innovative solutions and findings to academic peers and industry professionals.",
    category: "Research"
  },
  {
    id: 2,
    title: "7th Position - HEX HUNT CTF",
    event: "HEX HUNT Capture The Flag",
    date: "November 7, 2025",
    description: "Secured 7th position in the competitive cybersecurity challenge, demonstrating advanced security and problem-solving skills.",
    category: "Competition"
  },
  {
    id: 3,
    title: "Runner Up - SHIVALIK Codethon",
    event: "SHIVALIK Codethon 2025",
    date: "November 11, 2025",
    description: "Achieved runner-up position with Territory Management project, showcasing innovative coding and system design capabilities.",
    category: "Hackathon"
  },
  {
    id: 4,
    title: "40th Rank - Phantom CTF",
    event: "Phantom CTF Challenge",
    date: "2025",
    description: "Ranked 40th out of more than 400 participants in this prestigious cybersecurity capture-the-flag competition.",
    category: "Competition"
  },
  {
    id: 5,
    title: "UIDAI Data Hackathon Participant",
    event: "UIDAI Data Hackathon – 2026",
    date: "2026",
    description: "Participated in the national-level data hackathon organized by Data.Gov.in, working on innovative data-driven solutions.",
    category: "Hackathon"
  }
];

const EDUCATION = [
  {
    period: "2025 – Present",
    role: "MASTER OF SCIENCE IN INFORMATION TECHNOLOGY",
    company: "LOK JAGRUTI UNIVERSITY",
    location: "AHMEDABAD, INDIA",
    details: [
      "Specialization in Data Science, Cybersecurity, Artificial Intelligence, Cloud Computing, and SAP.",
      "Academic focus on analytical modeling, secure systems, and enterprise data workflows.",
      "Active engagement in research-oriented coursework and applied technical projects."
    ]
  },
  {
    period: "2022 – 2025",
    role: "BACHELOR OF SCIENCE IN INFORMATION TECHNOLOGY",
    company: "LOK JAGRUTI UNIVERSITY",
    location: "AHMEDABAD, INDIA",
    details: [
      "Built strong foundations in data analysis, programming, databases, and system design.",
      "Completed multiple academic projects in data analytics, AI-enabled systems, and secure applications.",
      "Graduated with practical exposure to real-world datasets and business-oriented problem solving."
    ]
  },
  {
    period: "2020 – 2022",
    role: "HIGHER SECONDARY EDUCATION (COMMERCE)",
    company: "THE H. B. KAPADIA NEW HIGH SCHOOL",
    location: "GSEB BOARD, GUJARAT",
    details: [
      "Completed higher secondary education under the Gujarat Secondary and Higher Secondary Education Board (GSEB).",
      "Built a foundational understanding of commerce, quantitative reasoning, and analytical thinking.",
      "Graduated with an overall percentage of 83.6%."
    ]
  }
];

const WORK_EXPERIENCE = [
  // Placeholder for future work experiences
];

// ===============================
// COMPONENTS
// ===============================

type TabType = "ALL" | "WORK" | "EDUCATION" | "CERTIFICATIONS" | "ACHIEVEMENTS";

export default function Experience() {
  const [activeTab, setActiveTab] = useState<TabType>("ALL");

  const tabs: TabType[] = ["ALL", "WORK", "EDUCATION", "CERTIFICATIONS", "ACHIEVEMENTS"];

  const shouldShow = (section: string) => {
    if (activeTab === "ALL") return true;
    return activeTab === section;
  };

  return (
    <div className="max-w-7xl mx-auto pb-20 sm:pb-8">
      <PageHeader 
        title="Professional Journey" 
        code="04" 
        description="Comprehensive overview of experience, education, certifications, and achievements." 
      />

      {/* Tabbed Navigation */}
      <div className="mb-8 sm:mb-12 border-2 border-[hsl(var(--grid-line))] bg-[hsl(var(--bg-secondary))] p-1.5 sm:p-2 rounded-lg">
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                px-3 py-2 sm:px-4 sm:py-2.5 md:px-6 md:py-3 font-display font-bold text-[10px] sm:text-xs md:text-sm tracking-wider transition-all duration-300
                border-2 rounded-md flex-1 sm:flex-initial min-w-0
                ${activeTab === tab 
                  ? 'bg-[hsl(var(--accent-primary))] text-white border-[hsl(var(--text-primary))] shadow-lg shadow-[hsl(var(--accent-primary))]/30' 
                  : 'bg-[hsl(var(--bg-primary))] text-[hsl(var(--text-primary))] border-[hsl(var(--grid-line))] hover:border-[hsl(var(--accent-primary))]'
                }
              `}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-10 sm:space-y-12 md:space-y-16">
        {/* Work Experience Section */}
        {shouldShow("WORK") && (
          <section>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 sm:mb-8"
            >
              <h2 className="text-xs-mono text-[10px] sm:text-xs text-[hsl(var(--accent-primary))] mb-2">SECTION_01</h2>
              <h3 className="font-display text-2xl sm:text-3xl font-bold mb-2">WORK EXPERIENCE</h3>
              <div className="h-1 w-20 sm:w-24 bg-[hsl(var(--accent-primary))]" />
            </motion.div>

            {WORK_EXPERIENCE.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="border-2 border-dashed border-[hsl(var(--grid-line))] bg-[hsl(var(--bg-secondary))] p-12 text-center"
              >
                <p className="text-xs-mono text-[hsl(var(--text-secondary))]">
                  [WORK_EXPERIENCE_COMING_SOON]
                </p>
                <p className="mt-2 text-sm text-[hsl(var(--text-secondary))]">
                  Professional work experiences will be added here as they develop.
                </p>
              </motion.div>
            ) : (
              <div className="space-y-6">
                {/* Work experience cards will go here when available */}
              </div>
            )}
          </section>
        )}

        {/* Education Section */}
        {shouldShow("EDUCATION") && (
          <section>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <h2 className="text-xs-mono text-[hsl(var(--accent-primary))] mb-2">SECTION_02</h2>
              <h3 className="font-display text-3xl font-bold mb-2">EDUCATION</h3>
              <div className="h-1 w-24 bg-[hsl(var(--accent-primary))]" />
            </motion.div>

            <div className="relative border-l-2 border-[hsl(var(--grid-line))] ml-4 space-y-12">
              {EDUCATION.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="relative pl-8 group"
                >
                  <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full border-2 border-[hsl(var(--accent-primary))] bg-[hsl(var(--bg-primary))] group-hover:bg-[hsl(var(--accent-primary))] transition-colors" />
                  
                  <div className="border border-[hsl(var(--grid-line))] bg-[hsl(var(--bg-secondary))] p-6 hover:border-[hsl(var(--accent-primary))] transition-colors">
                    <span className="text-xs-mono text-[hsl(var(--accent-primary))] block mb-2">
                      {item.period}
                    </span>
                    <h4 className="font-display text-xl font-bold mb-1">
                      {item.role}
                    </h4>
                    <div className="flex gap-4 text-xs-mono text-[hsl(var(--text-secondary))] mb-4">
                      <span>@{item.company}</span>
                      <span>// {item.location}</span>
                    </div>
                    <ul className="space-y-2">
                      {item.details.map((detail, dIdx) => (
                        <li key={dIdx} className="flex gap-3 text-sm text-[hsl(var(--text-secondary))]">
                          <span className="opacity-50 mt-1">→</span>
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Certifications Section */}
        {shouldShow("CERTIFICATIONS") && (
          <section>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <h2 className="text-xs-mono text-[hsl(var(--accent-primary))] mb-2">SECTION_03</h2>
              <h3 className="font-display text-3xl font-bold mb-2">CERTIFICATIONS</h3>
              <div className="h-1 w-24 bg-[hsl(var(--accent-primary))]" />
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {CERTIFICATIONS.map((cert, idx) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="border border-[hsl(var(--grid-line))] bg-[hsl(var(--bg-secondary))] hover:border-[hsl(var(--accent-primary))] transition-all duration-300 group"
                >
                  {/* Header */}
                  <div className="border-b border-[hsl(var(--grid-line))] bg-[hsl(var(--bg-primary))] p-4">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="text-xs-mono text-[hsl(var(--accent-primary))]">
                            {cert.provider}
                          </span>
                          {cert.rating && (
                            <span className="text-xs text-[hsl(var(--text-secondary))]">
                              {cert.rating}
                            </span>
                          )}
                        </div>
                        <h4 className="font-display text-lg font-bold leading-tight">
                          {cert.title}
                        </h4>
                      </div>
                      <span className="text-xs-mono text-[hsl(var(--text-secondary))] whitespace-nowrap">
                        {cert.startDate} - {cert.endDate}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4 space-y-4">
                    <p className="text-sm text-[hsl(var(--text-secondary))] leading-relaxed">
                      {cert.description}
                    </p>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-3 py-1 text-xs font-mono bg-[hsl(var(--bg-primary))] border border-[hsl(var(--grid-line))] text-[hsl(var(--text-secondary))]"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>

                    {/* View Certificate Link */}
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-mono text-[hsl(var(--accent-primary))] hover:underline group-hover:gap-3 transition-all"
                    >
                      VIEW CERTIFICATE <ExternalLink size={14} />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>
        )}

        {/* Achievements Section */}
        {shouldShow("ACHIEVEMENTS") && (
          <section>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <h2 className="text-xs-mono text-[hsl(var(--accent-primary))] mb-2">SECTION_04</h2>
              <h3 className="font-display text-3xl font-bold mb-2">ACHIEVEMENTS</h3>
              <div className="h-1 w-24 bg-[hsl(var(--accent-primary))]" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {ACHIEVEMENTS.map((achievement, idx) => (
                <motion.div
                  key={achievement.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="border-2 border-[hsl(var(--grid-line))] bg-[hsl(var(--bg-secondary))] hover:border-[hsl(var(--accent-primary))] transition-all duration-300 group relative overflow-hidden"
                >
                  {/* Category Badge */}
                  <div className="absolute top-4 right-4">
                    <span className="px-2 py-1 text-xs font-mono bg-[hsl(var(--accent-primary))] text-[hsl(var(--bg-primary))] border border-[hsl(var(--text-primary))]">
                      {achievement.category}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="p-6 border-b border-[hsl(var(--grid-line))] bg-[hsl(var(--bg-primary))]">
                    <Star className="w-8 h-8 text-[hsl(var(--accent-primary))]" fill="hsl(var(--accent-primary))" />
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-3">
                    <span className="text-xs-mono text-[hsl(var(--text-secondary))]">
                      {achievement.date}
                    </span>
                    <h4 className="font-display text-lg font-bold leading-tight">
                      {achievement.title}
                    </h4>
                    <p className="text-xs font-mono text-[hsl(var(--accent-primary))]">
                      {achievement.event}
                    </p>
                    <p className="text-sm text-[hsl(var(--text-secondary))] leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-[hsl(var(--accent-primary))] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </motion.div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
