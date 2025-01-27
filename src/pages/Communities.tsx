import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Background from '../components/Background';
import { Youtube, Users, BookOpen, Brain, ExternalLink } from 'lucide-react';

const communities = [
    {
        title: "Spark Bootcamp",
        description: "The complete tutorial series covering development concepts from fullstack web to cybersecurity to ML and AI. Open for all IITD students to attend in person and available on YouTube for everyone else.",
        image: "/events/spark.png",
        category: "Learning Series",
        tags: ["Web Dev", "Cybersec", "ML/AI", "Tutorial"],
        link: "https://www.youtube.com/@DevClubIITD",
        active: true,
        featured: true
    },
    {
        title: "Women in Tech Series",
        description: "In collaboration with AWS, this initiative brings women in tech to deliver technical lectures and tutorials on relevant topics, fostering diversity and knowledge sharing in the tech community.",
        image: "/events/womenintech.png",
        category: "Technical Series",
        tags: ["AWS", "Women in Tech", "Industry"],
        active: true,
        featured: true
    },
    {
        title: "Agentic AI Community",
        description: "An upcoming community focused on teaching and building with AI agents. Join us to explore the cutting-edge world of autonomous AI systems and their applications.",
        image: "/communities/ai.jpg", // Placeholder
        category: "AI Community",
        tags: ["AI", "Agents", "LLMs", "Upcoming"],
        active: false,
        featured: true
    }
];

export default function Communities() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Background />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Our Communities</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join our diverse learning communities and initiatives where we build, learn, and grow together.
          </p>
        </div>
      </section>

      {/* Featured Community - Spark Bootcamp */}
      <section className="py-16 px-4 bg-gradient-to-b from-transparent via-blue-950/20 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/20 text-blue-400">
                <Youtube className="w-4 h-4 mr-2" />
                Featured Series
              </div>
              <h2 className="text-4xl font-bold">Spark Bootcamp</h2>
              <p className="text-gray-400 text-lg">
                A comprehensive learning series covering everything from web development to AI. 
                Join us in person or follow along on YouTube.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Web Dev", "Cybersec", "ML/AI", "Tutorial"].map((tag, i) => (
                  <span key={i} className="px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 text-sm">
                    {tag}
                  </span>
                ))}
              </div>
              <a 
                href="https://www.youtube.com/@DevClubIITD"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition"
              >
                <Youtube className="w-5 h-5 mr-2" />
                Watch on YouTube
              </a>
            </div>
            <div className="aspect-video rounded-xl overflow-hidden bg-blue-950/20">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/videoseries?list=YOUR_PLAYLIST_ID"
                title="DevClub IITD YouTube Channel"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* All Communities Grid */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {communities.map((community, i) => (
            <div 
              key={i}
              className="group relative overflow-hidden rounded-xl border border-blue-500/10 hover:border-blue-500/30 transition"
            >
              <div className="aspect-video">
                <img 
                  src={community.image}
                  alt={community.title}
                  className="w-full h-full object-cover transition duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-6 bg-gradient-to-b from-blue-950/20 to-transparent backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-4">
                  {community.active ? (
                    <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm">Active</span>
                  ) : (
                    <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm">Coming Soon</span>
                  )}
                </div>
                <h3 className="text-xl font-semibold mb-2">{community.title}</h3>
                <p className="text-gray-400 mb-4 line-clamp-3">{community.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {community.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                {community.link && (
                  <a 
                    href={community.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-400 hover:text-blue-300 transition"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Learn More
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
}
