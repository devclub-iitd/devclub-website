import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { Code, Cpu, Globe, Users, Trophy, Rocket, Brain, Terminal, Calendar, BookOpen } from 'lucide-react';
import './components/supercoolbutton.css';  // Add this import at the top with other imports
import Background from './components/Background';
import Projects from './pages/Projects';
import Events from './pages/Events';

const projects = [
  {
    title: "Yearbook Portal",
    description: "A comprehensive platform preserving memories for 1500+ graduating students annually. Features include profile customization, testimonials, and automated yearbook generation.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop",
    tech: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "ClassGrid",
    description: "Smart scheduling system serving 5.7k+ students with automated timetable generation, conflict resolution, and real-time updates for academic schedules.",
    image: "https://images.unsplash.com/photo-1503428593586-e225b39bddfe?w=800&h=600&fit=crop",
    tech: ["Python", "Django", "PostgreSQL"]
  },
  {
    title: "Study Portal",
    description: "Centralized repository of study materials, previous year papers, and resources. Features include smart search, categorization, and contribution system.",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=800&h=600&fit=crop",
    tech: ["Vue.js", "Firebase", "Cloud Storage"]
  },
  {
    title: "Campus Navigation",
    description: "Interactive map and navigation system for IIT Delhi campus with real-time updates and indoor navigation features.",
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=600&fit=crop",
    tech: ["React Native", "GraphQL", "MongoDB"]
  }
];

// Remove this stats array as it's no longer needed
// const stats = [ ... ];

const events = [
  {
    title: "DevClub Summer of Code",
    date: "June 2024",
    description: "5-week intensive coding program for freshers with mentorship from senior developers.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=600&fit=crop"
  },
  {
    title: "Hackathon 2024",
    date: "July 2024",
    description: "24-hour coding competition with exciting prizes and industry mentorship.",
    image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=800&h=600&fit=crop"
  },
  {
    title: "Tech Workshop Series",
    date: "August 2024",
    description: "Learn cutting-edge technologies through hands-on workshops led by industry experts.",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop"
  }
];

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-black text-white">
            <Background />
            <Navbar />
            <Hero />
            
            {/* Events Preview - Moved up */}
            <section className="py-20 px-4">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-16">Upcoming Events</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {events.map((event, i) => (
                    <div key={i} className="group relative overflow-hidden rounded-xl">
                      <img 
                        src={event.image}
                        alt={event.title}
                        className="w-full h-48 object-cover transition duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 flex flex-col justify-end">
                        <div className="text-blue-400 mb-2">{event.date}</div>
                        <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                        <p className="text-gray-300">{event.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-12 text-center">
                  <Link 
                    to="/events"
                    className="inline-flex items-center px-8 py-3 rounded-full border border-blue-400 text-blue-400 hover:bg-blue-400/10 transition"
                  >
                    View All Events
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 ml-2" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </section>

            {/* Vision Cards */}
            <section className="relative py-20 px-4 before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/90 before:via-blue-950/20 before:to-transparent before:-z-10">
              <div className="max-w-7xl mx-auto relative z-10">
                <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-b from-white to-gray-300">Why DevClub?</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                  {[
                    { icon: Code, title: "Learn", desc: "Master modern technologies through hands-on projects and workshops" },
                    { icon: Brain, title: "Innovate", desc: "Build solutions that impact thousands of students" },
                    { icon: Users, title: "Connect", desc: "Join a vibrant community of passionate developers" },
                    { icon: Rocket, title: "Grow", desc: "Launch your tech career with industry exposure" }
                  ].map((item, i) => (
                    <div key={i} className="p-6 rounded-xl backdrop-blur-md bg-blue-950/10 border border-blue-500/10 hover:border-blue-500/30 transition group">
                      <item.icon className="w-8 h-8 text-blue-400 mb-4 group-hover:scale-110 transition" />
                      <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                      <p className="text-gray-400">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Background noise texture */}
              <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1IiBkPSJNMCAwaDMwMHYzMDBIMHoiLz48L3N2Zz4=')] pointer-events-none -z-20"></div>
            </section>

            {/* Featured Projects */}
            <section className="py-20 px-4 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent">
              <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-16">Featured Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {projects.map((project, i) => (
                    <div key={i} className="group relative overflow-hidden rounded-xl">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-64 object-cover transition duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-6 flex flex-col justify-end">
                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                        <p className="text-gray-300 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {project.tech.map((tech, index) => (
                            <span key={index} className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Add this button container */}
                <div className="mt-12 text-center">
                  <Link 
                    to="/projects"
                    className="inline-flex items-center px-8 py-3 rounded-full border border-blue-400 text-blue-400 hover:bg-blue-400/10 transition"
                  >
                    View All Projects
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5 ml-2" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </section>

            {/* Instagram Feed Section */}
            <section className="py-20 px-4 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent">
              <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-bold mb-4">Follow Us on Instagram</h2>
                  <p className="text-xl text-gray-400">Stay updated with our latest events and projects</p>
                </div>
                
                <div className="instagram-embed rounded-2xl p-8 max-w-3xl mx-auto">
                  <div className="flex items-center gap-4 mb-6">
                    <img
                      src="https://github.com/devclub-iitd.png"
                      alt="DevClub IITD"
                      className="w-16 h-16 rounded-full border-2 border-blue-500"
                    />
                    <div>
                      <h3 className="instagram-header text-2xl font-bold mb-1">DevClub IITD</h3>
                      <a 
                        href="https://www.instagram.com/devclub_iitd/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:text-blue-300 transition"
                      >
                        @devclub_iitd
                      </a>
                    </div>
                  </div>
                  
                  <div className="aspect-video w-full">
                    <iframe
                      className="w-full h-full rounded-xl"
                      src="https://www.instagram.com/devclub_iitd/embed"
                      frameBorder="0"
                      scrolling="no"
                      allowTransparency={true}
                    ></iframe>
                  </div>
                  
                  <div className="mt-6 text-center">
                    <a
                      href="https://www.instagram.com/devclub_iitd/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="shiny-cta inline-block"
                    >
                      <span className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                        </svg>
                        Follow us on Instagram
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 px-4 bg-gradient-to-b via-blue-950/20">
              <div className="max-w-4xl mx-auto text-center backdrop-blur-sm rounded-2xl p-8">
                <h2 className="text-4xl font-bold mb-6">Ready to Join DevClub?</h2>
                <p className="text-xl text-gray-400 mb-8">
                  Be part of IIT Delhi's largest technical club and start your development journey today.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <button className="px-8 py-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition">
                    Join Now
                  </button>
                  <button className="px-8 py-3 rounded-full border border-blue-400 text-blue-400 hover:bg-blue-400/10 transition">
                    Contact Us
                  </button>
                </div>
              </div>
            </section>

            <Footer />
          </div>
        } />
        <Route path="/projects" element={<Projects />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </Router>
  );
}

export default App;