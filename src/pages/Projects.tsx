import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Background from '../components/Background';
import { Github, ExternalLink } from 'lucide-react';

const allProjects = [
  {
    title: "Mercury",
    description: "The one messenger for all IITD newsletters to distribute announcements effectively",
    image: "/projects/mercury_logo.png",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/devclub-iitd/mercury",
    visit: "https://mercury.devclub.in"
  },
  {
    title: "SportsHub",
    description: "The one place for everything by BSA. Manage NSO and view live GC standings",
    image: "/projects/sportshub.jpg",
    tech: ["React", "Express", "MongoDB"],
    github: "https://github.com/devclub-iitd/sportshub",
    visit: "https://sports.iitd.ac.in"
  },
  {
    title: "OAuth",
    description: "The single sign on by DevClub that enables developers to use IITD internal mail based auth on any site",
    image: "/projects/oauth.png",
    tech: ["OAuth2", "Express", "MongoDB"],
    github: "https://github.com/devclub-iitd/oauth",
    visit: "https://oauth.devclub.in"
  },
  {
    title: "IITDConnect",
    description: "Backend server for the campus social networking platform that connects IIT Delhi students",
    image: "/projects/connect.png",
    tech: ["MongoDB", "Express", "Node.js"],
    github: "https://github.com/devclub-iitd/IITDConnectServer",
    visit: "https://campus.devclub.in/home"
  },
  {
    title: "Yearbook",
    description: "Digital yearbook platform for final year students to share memories and get them signed by batchmates",
    image: "/projects/yearbook.jpg",
    tech: ["React", "Django", "PostgreSQL"],
    github: "https://github.com/devclub-iitd/Yearbook",
    visit: "https://yearbook.devclub.in/"
  },
  {
    title: "Study Portal",
    description: "Citadel, the previous year papers and texts centre",
    image: "/projects/citadel.png",
    tech: ["React", "Express", "MongoDB"],
    github: "https://github.com/devclub-iitd/StudyPortal",
    visit: "https://study.devclub.in/books/"
  },
  {
    title: "Campus Maps",
    description: "Interactive map of IIT Delhi campus with navigation, points of interest and real-time updates",
    image: "/projects/campusmap.png",
    tech: ["React", "Mapbox", "Node.js"],
    github: "https://github.com/devclub-iitd/CampusMaps",
    visit: "https://campus.devclub.in/map"
  },
  {
    title: "ClassGrid",
    description: "Automatic timetable manager",
    image: "/projects/classgrid.png",
    tech: ["React", "Node.js", "MongoDB"],
    github: "https://github.com/devclub-iitd/ClassGrid",
    demo: "https://classgrid.devclub.in/"
  },
  {
    title: "Mess Portal",
    description: "The hostel mess management system",
    image: "/projects/mess.png",
    tech: ["Node.js", "Express", "MongoDB"],
    github: "https://github.com/devclub-iitd/MessPortal"
  },
  {
    title: "IITD App",
    description: "A mobile application for IITD students to manage their schedules, connect with peers, and access campus resources.",
    image: "/projects/iitdapp.png",
    tech: ["React Native", "Firebase"],
    github: "https://github.com/devclub-iitd/IITDApp"
  },
  {
    title: "Single Sign On",
    description: "A secure single sign-on system for IITD applications, enabling users to authenticate seamlessly across multiple platforms.",
    image: "/projects/sso.png",
    tech: ["OAuth2", "Express", "MongoDB"],
    github: "https://github.com/devclub-iitd/SSO",
    visit: "https://auth.devclub.in/"
  }
];

const categories = ["All", "Web", "Mobile", "ML/AI", "Tools"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Add the following filteredProjects logic
  const filteredProjects = allProjects.filter((project) => {
    const matchesCategory = selectedCategory === "All" || project.tech.includes(selectedCategory);
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
              value={searchQuery} // Ensure the input is controlled
            />
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          {filteredProjects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, i) => (
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
                      {project.visit && (
                        <a 
                          href={project.visit}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 text-gray-400 hover:text-blue-400 transition"
                        >
                          <ExternalLink className="w-4 h-4" />
                          Visit
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-400">No projects found matching your criteria.</p>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}