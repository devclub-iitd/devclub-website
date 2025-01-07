import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Background from '../components/Background';
import { Calendar, Users, MapPin, ExternalLink } from 'lucide-react';

const allEvents = [
  {
    title: "DevClub Summer of Code",
    date: "June 2024",
    description: "5-week intensive coding program for freshers with mentorship from senior developers. Learn modern web development, collaborate on real projects, and build your portfolio.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=600&fit=crop",
    location: "Virtual & IIT Delhi",
    participants: "150+",
    registrationLink: "https://summerofcode.devclub.in",
    category: "Program"
  },
  {
    title: "Winter DSoC",
    date: "January 2024",
    description: "A revival of dsoc for freshers. this time with a leaderboard.",
    image: "/events/dsoc.jpg", // Updated image path
    location: "IIT Delhi",
    participants: "300+",
    registrationLink: "https://hackathon.devclub.in",
    category: "Hackathon"
  },
  {
    title: "Pathway LLM bootcamp",
    date: "August 2024",
    description: "Session hosted by DevClub IIT Delhi in collaboration with Pathway and Athina AI. advanced strategies for building and managing production-ready LLM stacks, focusing on cutting-edge Retrieval-Augmented Generation (RAG) pipelines.",
    image: "/events/llm.jpg", // Updated image path
    location: "LHC, IIT Delhi",
    participants: "100+",
    registrationLink: "https://workshops.devclub.in",
    category: "Workshop"
  },
  {
    title: "AWS Community Day",
    date: "September 21, 2024",
    description: "200+ attendees met for AWS Delhi NCR User Group Community Day for fun networking and AWS workshops.",
    image: "/events/aws.jpg",
    location: "IIT Delhi",
    participants: "200+",
    registrationLink: "https://devclub.in/aws-community-day",
    category: "Workshop"
  },
  {
    title: "Hostel Level Workshops",
    date: "February 2024",
    description: "13 workshops, one for each hostel for a first introduction to development.",
    image: "/events/ws.jpg",
    location: "All IIT Delhi Hostels",
    participants: "500+",
    registrationLink: "https://devclub.in/hostel-workshops",
    category: "Workshop"
  },
  {
    title: "Speedathon",
    date: "March 31, 2024",
    description: "A one of a kind superfast hackathon where you race against time to build as fast as possible using any and all available tools.",
    image: "/events/speedathon.jpg",
    location: "IIT Delhi",
    participants: "200+",
    registrationLink: "https://devclub.in/speedathon",
    category: "Hackathon"
  },
  {
    title: "Dev Discussion Series",
    date: "April 2024",
    description: "Discussions on building stuff at hostel cluster level.",
    image: "/events/dev-discussion.jpg",
    location: "Hostel Clusters, IIT Delhi",
    participants: "N/A",
    registrationLink: "https://devclub.in/dev-discussion-series",
    category: "Talk"
  },
  {
    title: "CRAC CTF",
    date: "September 2, 2024",
    description: "Hands-on workshop on penetration testing and OWASP Top 10 followed by a hackathon.",
    image: "/events/crac-ctf.jpg",
    location: "IIT Delhi",
    participants: "150+",
    registrationLink: "https://devclub.in/crac-ctf",
    category: "Workshop"
  },
  {
    title: "Internship Preparation Series",
    date: "May 2024",
    description: "Internship preparation series in collaboration with ANCC, MathSoc and OCS.",
    image: "/events/intern.jpg",
    location: "IIT Delhi",
    participants: "300+",
    registrationLink: "https://devclub.in/internship-preparation",
    category: "Workshop"
  }
];

const categories = ["All", "Hackathon", "Workshop", "Program", "Talk"];

export default function Events() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEvents = allEvents.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         event.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const eventsData = [
    {
      title: "Blockchain 101",
      date: "Coming Soon",
      description: "A 2-day Blockchain workshop",
      tags: ["#blockchain", "#workshop", "#tezos6"]
    },
    {
      title: "Tryst'24 Participation",
      date: "March 29-31, 2024",
      description: "Showcase of coding, web development, and crypto projects",
      tags: ["#coding", "#webd", "#crypto1"]
    },
    {
      title: "AWS Community Day",
      date: "September 21, 2024 at IIT Delhi",
      description: "A day-long event featuring technical sessions, hands-on workshops, and networking opportunities with AWS experts",
      tags: ["#AWS", "#CloudComputing", "#TechnicalWorkshop2"]
    },
    {
      title: "IIT Delhi Open House",
      date: "November 4, 2023",
      description: "A grand tech showcase for students and faculty",
      tags: ["#openhouse", "#tech", "#showcase10"]
    },
    {
      title: "Lecture Series",
      date: "Upcoming",
      description: "Comprehensive lectures covering cybersecurity, ML, and AI topics",
      tags: ["#lectures", "#cybersecurity", "#ML", "#AI"]
    },
    {
      title: "AWS Community Day",
      date: "September 21, 2024",
      description: "200+ attendees met for AWS Delhi NCR User Group Community Day for fun networking and AWS workshops.",
      tags: ["#AWS", "#CloudComputing", "#Community", "#Workshop"]
    },
    {
      title: "Hostel Level Workshops",
      date: "February 2024",
      description: "13 workshops, one for each hostel for a first introduction to development",
      tags: ["#workshops", "#introduction", "#hostels", "#beginner"]
    },
    {
      title: "Speedathon",
      date: "March 31, 2024",
      description: "A one of a kind superfast hackathon where you race against time to build as fast as possible using any and all available tools.",
      tags: ["#Speedathon", "#Hackathon", "#FastCoding", "#RaceAgainstTime"]
    },
    {
      title: "Dev Discussion Series",
      date: "April 2024",
      description: "Discussions on building stuff at hostel cluster level.",
      tags: ["#DevDiscussion", "#Talks", "#HostelLevel", "#Community"]
    },
    {
      title: "CRAC CTF",
      date: "September 2, 2024",
      description: "Hands-on workshop on penetration testing and OWASP Top 10 followed by a hackathon.",
      tags: ["#CRACCTF", "#PenTesting", "#OWASP", "#Hackathon"]
    },
    {
      title: "Internship Preparation Series",
      date: "May 2024",
      description: "Internship preparation series in collaboration with ANCC, MathSoc and OCS.",
      tags: ["#internship", "#preparation", "#workshop", "#collaboration"]
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      <Background />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Upcoming Events</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Join us for exciting hackathons, workshops, and learning opportunities. 
            Expand your skills and connect with fellow developers.
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
              placeholder="Search events..."
              className="px-4 py-2 bg-blue-950/20 border border-blue-500/20 rounded-full focus:outline-none focus:border-blue-500/50 transition"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, i) => (
              <div key={i} className="group relative overflow-hidden rounded-xl border border-blue-500/10 hover:border-blue-500/30 transition">
                <img 
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover transition duration-300 group-hover:scale-110"
                />
                <div className="p-6 bg-gradient-to-b from-blue-950/20 to-transparent backdrop-blur-sm">
                  <span className="inline-block px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm mb-4">
                    {event.category}
                  </span>
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <p className="text-gray-400 mb-4 line-clamp-2">{event.description}</p>
                  
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-400">
                      <Calendar className="w-4 h-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-gray-400">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-gray-400">
                      <Users className="w-4 h-4 mr-2" />
                      {event.participants} Participants
                    </div>
                  </div>

                  <a
                    href={event.registrationLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600 transition"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
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
