import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Background from '../components/Background';
import { Linkedin } from 'lucide-react';
import pastOCsData from '../lists/pastOCs.json';

// Define the type for a Past OC object
interface PastOCType {
  name: string;
  role: string;
  year: string;
  batch: string;
  image: string;
  linkedin: string;
}

// Type the imported data
const pastOCs: PastOCType[] = pastOCsData;

export default function PastOCs() {
  // Group OCs by year
  const groupedOCs = pastOCs.reduce((acc, oc) => {
    const yearKey = oc.year;
    if (!acc[yearKey]) {
      acc[yearKey] = [];
    }
    acc[yearKey].push(oc);
    return acc;
  }, {} as Record<string, PastOCType[]>);

  // Sort years in descending order (e.g., "2023-24" before "2022-23")
  const sortedYears = Object.entries(groupedOCs).sort(([yearA], [yearB]) => {
    // Extract starting year for comparison (e.g., 2023 from "2023-24")
    const startYearA = parseInt(yearA.split('-')[0], 10);
    const startYearB = parseInt(yearB.split('-')[0], 10);
    return startYearB - startYearA;
  });

  return (
    <div className="min-h-screen bg-black text-white">
      <Background />
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Past Overall Coordinators</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Meet the visionary leaders who have shaped DevClub IITD through the years.
            Click on the image to go to LinkedIn.
          </p>
        </div>
      </section>

      {/* OCs Timeline */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {sortedYears.map(([year, ocsInYear]) => (
              <div key={year}> {/* Wrapper for each year's OCs */}
                {ocsInYear.length === 1 ? (
                  // Single OC for the year
                  (() => {
                    const oc = ocsInYear[0];
                    return (
                      <div key={oc.linkedin} className="flex flex-col md:flex-row gap-8 items-center justify-center md:ml-[22%]">
                        <div className="w-48 h-48 relative group flex-shrink-0">
                          <img 
                            src={oc.image}
                            alt={oc.name}
                            className="w-full h-full object-cover rounded-xl"
                          />
                          <a 
                            href={oc.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute inset-0 bg-blue-500/0 hover:bg-blue-500/20 transition-all duration-300 rounded-xl flex items-center justify-center"
                          >
                            <Linkedin className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                          </a>
                        </div>
                        <div className="flex-1 text-center md:text-left md:max-w-lg">
                          <h3 className="text-2xl font-bold mb-2">{oc.name}</h3>
                          <p className="text-blue-400 mb-2">{oc.role}</p>
                          <p className="text-gray-400">
                            <span className="text-xl font-semibold">{oc.year}</span>
                            <span className="ml-2">{oc.batch}</span>
                          </p>
                        </div>
                      </div>
                    );
                  })()
                ) : (
                  // Multiple OCs for the year
                  <div className="flex flex-col md:flex-row md:justify-center gap-8 items-center md:items-start">
                    {ocsInYear.map((oc) => (
                      <div key={oc.linkedin} className="flex flex-col md:flex-row gap-8 items-center w-full sm:w-auto md:max-w-xs lg:max-w-sm">
                        <div className="w-48 h-48 relative group flex-shrink-0">
                          <img 
                            src={oc.image}
                            alt={oc.name}
                            className="w-full h-full object-cover rounded-xl"
                          />
                          <a 
                            href={oc.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="absolute inset-0 bg-blue-500/0 hover:bg-blue-500/20 transition-all duration-300 rounded-xl flex items-center justify-center"
                          >
                            <Linkedin className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                          </a>
                        </div>
                        <div className="flex-1 text-center md:text-left">
                          <h3 className="text-2xl font-bold mb-2">{oc.name}</h3>
                          <p className="text-blue-400 mb-2">{oc.role}</p>
                          <p className="text-gray-400">
                            <span className="text-xl font-semibold">{oc.year}</span>
                            <span className="ml-2">{oc.batch}</span>
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
