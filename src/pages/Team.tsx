import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Background from '../components/Background';
import { Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

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
  const teamMembers = [
    // Faculty Advisor
    {
      name: "Dr. John Doe",
      position: "Faculty Advisor",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
      socials: {
        email: "advisor@devclub.in",
        linkedin: "https://linkedin.com",
        website: "https://example.com"
      }
    },
    // Overall Coordinator
    {
      name: "Ashish Arora",
      position: "Overall Coordinator",
      image: "/team_photos/Ashish Arora _ OC.JPG",
      socials: {
        github: "https://github.com",
        linkedin: "https://linkedin.com"
      }
    },
    // Core Team Members
    {
      name: "Basil Labib",
      position: "Core Team Member",
      image: "/team_photos/Basil Labib _ Core Team Member.jpg",
      socials: {
        github: "https://github.com",
        linkedin: "https://linkedin.com"
      }
    },
    {
      name: "Kavya Chopra",
      position: "Core Team Member",
      image: "/team_photos/Kavya Chopra _ CTM.jpeg",
      socials: {
        github: "https://github.com",
        linkedin: "https://linkedin.com"
      }
    },
    // Coordinators
    {
      name: "Dinu Goyal",
      position: "Coordinator",
      image: "/team_photos/Dinu Goyal _ Coordinator.webp",
      socials: {
        github: "https://github.com",
        linkedin: "https://linkedin.com"
      }
    },
    {
      name: "Jahnabi Roy",
      position: "Coordinator",
      image: "/team_photos/Jahnabi Roy _ Coordinator.jpg",
      socials: {
        github: "https://github.com",
        linkedin: "https://linkedin.com"
      }
    },
    {
      name: "Ritul Kumawat",
      position: "Coordinator",
      image: "/team_photos/Ritul Kumawat _ Coordinator.png",
      socials: {
        github: "https://github.com",
        linkedin: "https://linkedin.com"
      }
    },
    {
      name: "Shourya",
      position: "Coordinator",
      image: "/team_photos/Shourya _ Coordinator.PNG",
      socials: {
        github: "https://github.com",
        linkedin: "https://linkedin.com"
      }
    },
    // Executives
    {
      name: "Akshit Arora",
      position: "Executive",
      image: "/team_photos/Akshit Arora _ Executive .JPG",
      socials: {
        github: "https://github.com",
        linkedin: "https://linkedin.com"
      }
    },
    {
      name: "Aman Degala",
      position: "Executive",
      image: "/team_photos/Aman Degala _ Executive.jpg",
      socials: {
        github: "https://github.com",
        linkedin: "https://linkedin.com"
      }
    },
    {
      name: "Ansh Singh",
      position: "Executive",
      image: "/team_photos/Ansh Singh _ Executive.jpg",
      socials: {
        github: "https://github.com",
        linkedin: "https://linkedin.com"
      }
    },
    {
      name: "Aryan Choudhary",
      position: "Executive",
      image: "/team_photos/Aryan Choudhary _ Executive_.jpg",
      socials: {
        github: "https://github.com",
        linkedin: "https://linkedin.com"
      }
    },
    {
      name: "Eshita Zjigyasu",
      position: "Executive",
      image: "/team_photos/Eshita Zjigyasu _ Executive.jpg",
      socials: {
        github: "https://github.com",
        linkedin: "https://linkedin.com"
      }
    },
    {
      name: "Gazal Sharma",
      position: "Executive",
      image: "/team_photos/Gazal Sharma _ executive.jpg",
      socials: {
        github: "https://github.com",
        linkedin: "https://linkedin.com"
      }
    },
    {
      name: "Keshav Bansal",
      position: "Executive",
      image: "/team_photos/Keshav Bansal । Executive.jpg",
      socials: {
        github: "https://github.com",
        linkedin: "https://linkedin.com"
      }
    },
    {
      name: "Manogya Singh",
      position: "Executive (The best one)",
      image: "/team_photos/Manogya Singh _ Executive.jpg",
      socials: {
        github: "https://github.com",
        linkedin: "https://linkedin.com"
      }
    },
    {
      name: "Pragun Pudukoli",
      position: "Executive",
      image: "/team_photos/Pragun Pudukoli _ Executive.jpg",
      socials: {
        github: "https://github.com",
        linkedin: "https://linkedin.com"
      }
    },
    {
      name: "Pulkit Agrawal",
      position: "Executive",
      image: "/team_photos/Pulkit Agrawal _ Executive.jpeg",
      socials: {
        github: "https://github.com",
        linkedin: "https://linkedin.com"
      }
    },
    {
      name: "Ranjan Kumar",
      position: "Executive",
      image: "/team_photos/Ranjan Kumar _ Executive.jpg",
      socials: {
        github: "https://github.com",
        linkedin: "https://linkedin.com"
      }
    },
    {
      name: "Rishabh Joshi",
      position: "Executive",
      image: "/team_photos/Rishabh Joshi _ Executive_.jpg",
      socials: {
        github: "https://github.com",
        linkedin: "https://linkedin.com"
      }
    },
    {
      name: "Shoan Raj",
      position: "Executive",
      image: "/team_photos/Shoan Raj - Executive.jpg",
      socials: {
        github: "https://github.com",
        linkedin: "https://linkedin.com"
      }
    },
    {
      name: "Subham Jain",
      position: "Executive",
      image: "/team_photos/Subham Jain | Executive.jpg",
      socials: {
        github: "https://github.com",
        linkedin: "https://linkedin.com"
      }
    },
    {
      name: "Vansh Ramani",
      position: "Executive",
      image: "/team_photos/Vansh Ramani _ Executive.jpg",
      socials: {
        github: "https://github.com",
        linkedin: "https://linkedin.com"
      }
    }
  ];

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
