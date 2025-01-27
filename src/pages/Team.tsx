import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Background from '../components/Background';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';
import teamMembers from "../lists/team.json";

const TeamMember = ({ 
  name, 
  position, 
  image, 
  socials, 
  className = ""
}: {
  name: string;
  position: string;
  image: string;
  socials: {
    github?: string;
    linkedin?: string;
    email?: string;
    website?: string;
  };
  className?: string;
}) => {
  return (
    <div className={`group relative overflow-hidden rounded-xl border border-blue-500/10 hover:border-blue-500/30 transition ${className}`}>
      <img 
        src={image}
        alt={name}
        className="w-[120%] h-96 object-cover transition duration-300 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-6 flex flex-col justify-end">
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-blue-400 text-base mb-4">{position}</p>
        
        <div className="flex gap-3">
          {socials.github && (
            <a 
              href={socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <Github className="w-5 h-5" />
            </a>
          )}
          {socials.linkedin && (
            <a 
              href={socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          )}
          {socials.email && (
            <a 
              href={`mailto:${socials.email}`}
              className="text-gray-400 hover:text-white transition"
            >
              <Mail className="w-5 h-5" />
            </a>
          )}
          {socials.website && (
            <a 
              href={socials.website}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default function Team() {

  return (
    <div className="min-h-screen bg-black text-white">
      <Background />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Our Team</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Meet the passionate individuals behind DevClub IITD who work tirelessly 
            to foster technical excellence in our community.
          </p>
        </div>
      </section>

      {/* Team Grid - Single Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, i) => (
              <TeamMember
                key={i}
                name={member.name}
                position={member.position}
                image={member.image}
                socials={member.socials}
              />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}