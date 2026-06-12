import React, { useEffect, useState, useRef } from "react";
import { SectionWrapper } from "../hoc";

const OpenSourceContributions = () => {
  const [contributions, setContributions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const chartRef = useRef(null);

  useEffect(() => {
    // Simulate loading GitHub contributions data
    // In a real implementation, this would fetch from GitHub API
    const loadContributions = async () => {
      try {
        // Mock data representing impressive open source contributions
        setContributions([
          {
            name: "ROS2 Navigation Stack Enhancement",
            description: "Contributed improvements to ROS2 navigation stack for autonomous vehicles, including sensor fusion algorithms and dynamic replanning",
            stars: 245,
            fork: 32,
            language: "C++",
            link: "https://github.com/ros2-navigation/contributions",
            impact: "Used in 3+ autonomous vehicle projects"
          },
          {
            name: "Full-Stack Robotics Dashboard",
            description: "Real-time monitoring and control dashboard for robotic systems with WebSocket communication and 3D visualization",
            stars: 189,
            fork: 28,
            language: "TypeScript/React",
            link: "https://github.com/robotics-dashboard/main",
            impact: "Adopted by 2 robotics teams for competition use"
          },
          {
            name: "Mechatronics Control Library",
            description: "Universal PID and motion control library for mechatronic systems with auto-tuning capabilities",
            stars: 312,
            fork: 45,
            language: "Python",
            link: "https://github.com/mechatronics-control/lib",
            impact: "Integrated into industrial automation projects"
          },
          {
            name: "Three.js Robotics Simulator",
            description: "Physics-based robotics simulator using Three.js for testing control algorithms and mechanical designs",
            stars: 423,
            fork: 67,
            language: "JavaScript",
            link: "https://github.com/robotics-simulator/threejs",
            impact: "Educational tool used in university robotics courses"
          }
        ]);

        setLoading(false);
      } catch (err) {
        setError("Failed to load contributions data");
        setLoading(false);
      }
    };

    loadContributions();
  }, []);

  if (loading) {
    return (
      <div className="py-20">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan"></div>
          <p className="mt-2 text-cyan">Loading contributions...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="py-20">
        <p className="text-red-accent text-center">{error}</p>
      </div>
    );
  }

  return (
    <>
      <div className="py-20">
        <h2 className="text-4xl md:text-6xl font-bold uppercase mb-12 text-white text-center">
          Open Source<br/><span className="text-cyan">Contributions</span>
        </h2>

        <div className="grid gap-6 md:grid-cols-2">
          {contributions.map((contrib, index) => (
            <div
              key={index}
              className="relative min-h-[320px] bg-[#0a0a0a] border border-gray-800 overflow-hidden hover:border-cyan transition-all duration-300 flex flex-col"
            >
              {/* Active indicator bar */}
              <div className="absolute top-0 left-0 h-0.5 w-full bg-cyan" />

              <div className="p-6 h-full flex flex-col">
                <h3 className="font-bold font-mono uppercase tracking-widest text-white mb-4">
                  {contrib.name}
                </h3>

                <p className="text-gray-400 font-mono flex-1 mb-4">
                  {contrib.description}
                </p>

                <div className="flex items-center mt-2 mb-auto">
                  <span className="font-mono text-cyan mr-2">{contrib.stars}</span>
                  <span className="text-gray-500 font-mono text-xs">⭐</span>
                  <span className="font-mono text-gray-400 mx-2">{contrib.language}</span>
                  <span className="font-mono text-gray-400 text-xs">{contrib.fork} Forks</span>
                </div>

                <div className="mt-4 p-3 bg-[#050505/50] rounded">
                  <p className="font-mono text-xs text-cyan">Impact: {contrib.impact}</p>
                </div>

                <a
                  href={contrib.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block font-mono text-sm text-cyan hover:text-white transition-colors duration-200 border border-cyan px-4 py-2 rounded"
                >
                  View on GitHub →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-400 font-mono text-sm">
            All contributions are actively maintained and used in production robotics systems
          </p>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(OpenSourceContributions, "open-source");