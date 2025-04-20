import { Link } from 'react-router-dom'; // Add this import
import { Code, Terminal, Cpu, } from 'lucide-react';
import '../components/supercoolbutton.css';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-black via-blue-950/20 to-black/50 pt-40">
      {/* Notification Banner */}
      <div className="absolute top-24 z-20">
        <div className="flex items-center gap-2 px-6 py-2.5 rounded-full backdrop-blur-md bg-blue-500/10 border border-blue-400/20 shadow-lg shadow-blue-500/5">
          <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></div>
          <span className="text-blue-100 font-medium">DevClub's Executive Team Recruitment is Live!</span>
          <Link to="https://forms.gle/SShzsxRa3EPSrUdw8" className="text-xs font-semibold text-blue-300 hover:text-blue-200 ml-2 transition-colors">
            Apply Now →
          </Link>
        </div>
      </div>
      
      <div className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,123,255,0.1),rgba(0,0,0,0.3))]"></div>
      </div>
      
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="flex justify-center mb-8">
          <img 
            src="/LogoDarkMode.png" 
            alt="DevClub Logo" 
            className="h-32 w-auto animate-float"
          />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
          We <span className="text-blue-400">Think.</span> Build. <span className="text-blue-400">Solve.</span>
        </h1>
        
        <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          DevClub IITD is a community of developers, innovators, and problem solvers fostering 
          technical excellence and creative engineering at IIT Delhi since 2017.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
            <Link to="/communities" className="shiny-cta !px-8 !py-3">
              <span>Communities</span>
            </Link>
          <Link 
            to="/projects" // Change <button> to <Link> and add the 'to' prop
            className="px-8 py-3 rounded-full border border-blue-400 text-blue-400 hover:bg-blue-400/10 transition"
          >
            View Projects
          </Link>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {[
            { icon: Code, title: "50+ Projects", desc: "Open source contributions" },
            { icon: Terminal, title: "20+ Events", desc: "Workshops & hackathons yearly" },
            { icon: Cpu, title: "Community of 1000+", desc: "Active developer community" }
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-xl backdrop-blur-md bg-blue-950/10 border border-blue-500/10 relative z-10">
              <item.icon className="w-8 h-8 text-blue-400 mb-4 mx-auto" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Background noise texture */}
      <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iLjc1IiBzdGl0Y2hUaWxlcz0ic3RpdGNoIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGZpbHRlcj0idXJsKCNhKSIgb3BhY2l0eT0iLjA1IiBkPSJNMCAwaDMwMHYzMDBIMHoiLz48L3N2Zz4=')] pointer-events-none"></div>

      {/* Floating Icons Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 animate-float">
          <Code className="w-12 h-12 text-blue-400/20" />
        </div>
        <div className="absolute top-1/3 right-1/4 animate-float-delayed">
          <Terminal className="w-16 h-16 text-blue-400/20" />
        </div>
        <div className="absolute bottom-1/4 left-1/3 animate-float">
          <Cpu className="w-14 h-14 text-blue-400/20" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
