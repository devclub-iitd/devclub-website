import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Background from '../components/Background';
import { Github, ExternalLink } from 'lucide-react';

const allProjects = [
  {
    title: "IITDApp",
    description: "Official campus super-app for IIT Delhi students with features like mess menu, timetables, event updates and more",
    image: "https://images.unsplash.com/photo-1610285185033-cb2f2a494c04?w=800&h=600&fit=crop",
    tech: ["React Native", "Firebase", "Node.js"],
    github: "https://github.com/devclub-iitd/IITDApp"
  },
  {
    title: "SingleSignOn",
    description: "A unified authentication system that allows users to stay signed in across multiple DevClub services and domains",
    image: "https://images.unsplash.com/photo-1583511656037-6c69b21d3c71?w=800&h=600&fit=crop",
    tech: ["JWT", "MongoDB", "Express.js"],
    github: "https://github.com/devclub-iitd/SingleSignOn"
  },
  {
    title: "Summer of Code",
    description: "Annual open source program where students contribute to DevClub's projects while learning development",
    image: "https://images.unsplash.com/photo-1657666937181-21cba4141e10?w=800&h=600&fit=crop",
    tech: ["Git", "JavaScript", "React"],
    github: "https://github.com/devclub-iitd/summer-of-code-2024"
  },
  {
    title: "IITDConnect",
    description: "Backend server for the campus social networking platform that connects IIT Delhi students",
    image: "https://images.unsplash.com/photo-1637600463388-a6ef5cddaf09?w=800&h=600&fit=crop",
    tech: ["MongoDB", "Express", "Node.js"],
    github: "https://github.com/devclub-iitd/IITDConnectServer"
  },
  {
    title: "Yearbook",
    description: "Digital yearbook platform for final year students to share memories and get them signed by batchmates",
    image: "public/projects/yearbook.jpg",
    tech: ["React", "Django", "PostgreSQL"],
    github: "https://github.com/devclub-iitd/Yearbook"
  },
  {
    title: "Study Portal",
    description: "Citadel, the previous year papers and texts centre",
    image: "public/projects/citadel.png",
    tech: ["React", "Express", "MongoDB"],
    github: "https://github.com/devclub-iitd/StudyPortal"
  },
  {
    title: "Campus Bot",
    description: "AI-powered chatbot that answers queries about IIT Delhi campus, courses, and facilities",
    image: "https://images.unsplash.com/photo-1604001201413-097b2fa6e739?w=800&h=600&fit=crop",
    tech: ["Python", "NLP", "TensorFlow"],
    github: "https://github.com/devclub-iitd/CampusBot"
  },
  {
    title: "Attendance Manager",
    description: "Automated attendance tracking system using facial recognition for institute events",
    tech: ["OpenCV", "Python", "TensorFlow"],
    github: "https://github.com/devclub-iitd/AttendanceManager"
  },
  {
    title: "Campus Maps",
    description: "Interactive map of IIT Delhi campus with navigation, points of interest and real-time updates",
    image: "https://images.unsplash.com/photo-1581090700227-4b8c374e6f41?w=800&h=600&fit=crop",
    tech: ["React", "Mapbox", "Node.js"],
    github: "https://github.com/devclub-iitd/CampusMaps"
  },
  {
    title: "Placement Portal",
    description: "Platform for managing campus placements, company registrations and student applications",
    image: "https://images.unsplash.com/photo-1516542076529-1ea3854896f9?w=800&h=600&fit=crop",
    tech: ["Angular", "Spring Boot", "MySQL"],
    github: "https://github.com/devclub-iitd/PlacementPortal"
  },
  {
    title: "ClassGrid",
    description: "Automatic timetable manager",
    image: "public/projects/classgrid.png",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/devclub-iitd/ClassGrid"
  },
  {
    title: "Mess Portal",
    description: "The hostel mess management system",
    image: "public/projects/mess.png",
    tech: ["Node.js", "Express", "MongoDB"],
    github: "https://github.com/devclub-iitd/MessPortal"
  },
  {
    title: "IITD App",
    description: "A mobile application for IITD students to manage their schedules, connect with peers, and access campus resources.",
    image: "/public/projects/iitdapp.png",
    tech: ["React Native", "Firebase"],
    github: "https://github.com/devclub-iitd/IITDApp"
  },
  {
    title: "Single Sign On",
    description: "A secure single sign-on system for IITD applications, enabling users to authenticate seamlessly across multiple platforms.",
    image: "/public/projects/sso.png",
    tech: ["OAuth2", "Express", "MongoDB"],
    github: "https://github.com/devclub-iitd/SSO"
  }
];

const categories = ["All", "Web", "Mobile", "ML/AI", "Tools"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-black text-white">
      <Background />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Explore our collection of innovative solutions built by DevClub members
            to solve real problems faced by the IITD community.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-full text-sm ${
                    selectedCategory === category
                      ? "bg-blue-500 text-white"
                      : "border border-blue-400 text-blue-400 hover:bg-blue-400/10"
                  } transition`}
                >
                  {category}
                </button>
              ))}
            </div>
            <input
              type="text"
              placeholder="Search projects..."
              className="px-4 py-2 bg-blue-950/20 border border-blue-500/20 rounded-full focus:outline-none focus:border-blue-500/50 transition"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allProjects.map((project, i) => (
              <div key={i} className="group relative overflow-hidden rounded-xl border border-blue-500/10 hover:border-blue-500/30 transition">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition duration-300 group-hover:scale-110"
                />
                <div className="p-6 bg-gradient-to-b from-blue-950/20 to-transparent backdrop-blur-sm">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, index) => (
                      <span key={index} className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.github && (
                      <a 
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition"
                      >
                        <Github className="w-4 h-4" />
                        Code
                      </a>
                    )}
                    {project.demo && (
                      <a 
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
