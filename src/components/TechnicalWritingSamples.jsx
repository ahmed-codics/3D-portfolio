import React, { useState } from "react";
import { SectionWrapper } from "../hoc";

const TechnicalWritingSamples = () => {
  const [selectedSample, setSelectedSample] = useState(null);

  const samples = [
    {
      title: "Optimizing ROS2 Navigation for Competitive Autonomous Vehicles",
      excerpt: "In this technical deep-dive, I explore the optimization techniques used to achieve 95% CPU efficiency on embedded hardware while maintaining real-time performance for autonomous vehicle navigation.",
      category: "Robotics",
      readTime: "8 min",
      difficulty: "Advanced",
      content: `
        <h3 className="text-2xl font-bold mb-4">Abstract</h3>
        <p className="mb-4">
          Autonomous vehicle navigation requires processing sensor data, performing localization,
          and generating control commands within strict real-time constraints. This paper presents
          optimization strategies for ROS2-based navigation stacks that achieve deterministic
          performance suitable for competitive autonomous racing.
        </p>

        <h3 className="text-2xl font-bold mb-4">Introduction</h3>
        <p className="mb-4">
          The SparkX Racing Team competes in Shell Eco-Marathon and Formula Student events,
          requiring autonomous vehicles to navigate complex tracks while minimizing energy consumption.
          Traditional ROS2 implementations often exceed the computational limits of embedded
          hardware commonly used in student-built vehicles.
        </p>

        <h3 className="text-2xl font-bold mb-4">Methodology</h3>
        <p className="mb-4">
          Our approach involved profiling the navigation stack to identify bottlenecks,
          then implementing targeted optimizations including:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Zero-copy message passing between ROS2 nodes</li>
          <li>Lock-free data structures for sensor fusion</li>
          <li>Fixed-point arithmetic for localization algorithms</li>
          <li>Deterministic memory allocation patterns</li>
          <li>Priority-based ROS2 executor configuration</li>
        </ul>

        <h3 className="text-2xl font-bold mb-4">Results</h3>
        <p className="mb-4">
          After optimization, the navigation stack achieved:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>95% CPU utilization on Intel Atom x7-E3950 (vs 140% baseline)</li>
          <li>Deterministic 10ms cycle time for perception-localization-control loop</li>
          <li>22% improvement in lap times due to more frequent replanning</li>
          <li>Successful deployment in 3 competitive events</li>
        </ul>

        <h3 className="text-2xl font-bold mb-4">Conclusion</h3>
        <p className="mb-4">
          These optimization techniques demonstrate that ROS2 can be successfully deployed
          on resource-constrained embedded systems when carefully optimized for deterministic
          performance. The principles applied here are broadly applicable to robotics
          applications beyond autonomous vehicles.
        </p>
      `,
      link: "#"
    },
    {
      title: "Building Scalable Full-Stack Applications with Microservices",
      excerpt: "A comprehensive guide to migrating monolithic applications to microservices architecture using Node.js, Docker, and Kubernetes, with real-world case studies showing 300% scalability improvements.",
      category: "Full-Stack",
      readTime: "12 min",
      difficulty: "Intermediate",
      content: `
        <h3 className="text-2xl font-bold mb-4">Executive Summary</h3>
        <p className="mb-4">
          This article details the migration journey from a monolithic Node.js application
          to a microservices architecture, highlighting the challenges, solutions, and
          measurable improvements in system performance and team productivity.
        </p>

        <h3 className="text-2xl font-bold mb-4">The Monolithic Challenge</h3>
        <p className="mb-4">
          Our initial application served 50,000+ monthly active users across multiple domains
          but suffered from tight coupling, difficult deployment processes, and scaling limitations.
          A single faulty module could bring down the entire system, and scaling required
          duplicating the entire application rather than just the bottleneck components.
        </p>

        <h3 className="text-2xl font-bold mb-4">Migration Strategy</h3>
        <p className="mb-4">
          We adopted the Strangler Fig pattern, gradually replacing monolithic functionality
          with microservices while maintaining backward compatibility. Key technologies included:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Node.js with Express for service implementation</li>
          <li>Docker for containerization</li>
          <li>Kubernetes for orchestration</li>
          <li>NGINX as API gateway</li>
          <li>PostgreSQL with read replicas for data storage</li>
          <li>Redis for caching and session storage</li>
          <li>Apache Kafka for event-driven communication</li>
        </ul>

        <h3 className="text-2xl font-bold mb-4">Results</h3>
        <p className="mb-4">
          The migration yielded significant improvements:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>300% improvement in horizontal scalability</li>
          <li>99.9% uptime achieved through fault isolation</li>
          <li>Deployment time reduced from 45 minutes to 5 minutes</li>
          <li>Team productivity increased as developers could work independently on services</li>
          <li>Ability to scale specific components based on demand rather than entire application</li>
        </ul>
      `,
      link: "#"
    },
    {
      title: "Real-Time WebSocket Messaging at Scale: Lessons Learned",
      excerpt: "Building a production-ready real-time messaging platform handling 10,000+ concurrent connections with sub-50ms latency using React, Node.js, and WebSocket technology.",
      category: "Real-Time Systems",
      readTime: "10 min",
      difficulty: "Advanced",
      content: `
        <h3 className="text-2xl font-bold mb-4">Introduction</h3>
        <p className="mb-4">
          Real-time communication is essential for modern applications ranging from chat platforms
          to collaborative tools and live dashboards. This case study examines the implementation
          of a WebSocket-based messaging system designed to handle high concurrency with
          minimal latency.
        </p>

        <h3 className="text-2xl font-bold mb-4">Architecture Overview</h3>
        <p className="mb-4">
          Our solution employed a horizontally scalable architecture with the following components:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>React frontend with custom WebSocket hook</li>
          <li>Node.js WebSocket server using ws library</li>
          <li>NGINX load balancer with sticky sessions</li>
          <li>Redis cluster for presence and session data</li>
          <li>PostgreSQL for persistent message storage</li>
          <li>Custom protocol for efficient message encoding</li>
        </ul>

        <h3 className="text-2xl font-bold mb-4">Key Technical Challenges</h3>
        <p className="mb-4">
          Scaling WebSocket connections presents unique challenges:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Memory consumption per connection</li>
          <li>Load balancing with sticky sessions</li>
          <li>Heartbeat mechanisms to detect disconnected clients</li>
          <li>Message ordering and delivery guarantees</li>
          <li>Horizontal scaling without losing connection state</li>
        </ul>

        <h3 className="text-2xl font-bold mb-4">Solutions Implemented</h3>
        <p className="mb-4">
          To address these challenges, we implemented:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Connection pooling and efficient memory management</li>
          <li>NGINX_plus for advanced load balancing with session persistence</li>
          <li>Application-level heartbeat protocol with configurable timeouts</li>
          <li>Idempotent operations and client-side message deduplication</li>
          <li>Stateless server design with Redis-backed session store</li>
        </ul>

        <h3 className="text-2xl font-bold mb-4">Performance Results</h3>
        <p className="mb-4">
          Under load testing, our system achieved:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>10,000+ concurrent WebSocket connections</li>
          <li>Median latency of 32ms for message round-trip</li>
          <li>99th percentile latency under 80ms</li>
          <li>Horizontal scalability to 50,000+ connections with additional nodes</li>
          <li>99.95% message delivery success rate</li>
        </ul>
      `,
      link: "#"
    }
  ];

  return (
    <>
      <div className="py-20">
        <h2 className="text-4xl md:text-6xl font-bold uppercase mb-12 text-white text-center">
          Technical<br/><span className="text-cyan">Writing Samples</span>
        </h2>

        {/* Sample Selector */}
        <div className="mb-12">
          <div className="flex flex-wrap gap-4 justify-center">
            {samples.map((sample, index) => (
              <button
                key={index}
                onClick={() => setSelectedSample(sample)}
                className={`px-6 py-3 font-mono text-sm ${selectedSample === sample ? 'bg-cyan text-black' : 'bg-[#0a0a0a] border border-gray-700 text-cyan'} transition-all duration-200 hover:bg-[rgba(0,240,255,0.2)]`}
              >
                {sample.category}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Sample Display */}
        {selectedSample && (
          <div className="bg-[#0a0a0a] border border-gray-700 rounded p-8">
            <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
              <div>
                <h3 className="text-3xl font-bold text-white mb-2">{selectedSample.title}</h3>
                <div className="flex flex-wrap gap-4 text-sm">
                  <span className="font-mono text-cyan">{selectedSample.readTime}</span>
                  <span className="font-mono text-gray-400">•</span>
                  <span className="font-mono text-yellow-400">{selectedSample.difficulty}</span>
                </div>
              </div>
              <a
                href={selectedSample.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block font-mono text-sm text-cyan hover:text-white transition-colors duration-200 border border-cyan px-4 py-2 rounded"
              >
                Read Full Article →
              </a>
            </div>

            <p className="text-gray-400 font-mono mb-6">{selectedSample.excerpt}</p>

            <div 
              className="prose prose-dark max-w-none"
              dangerouslySetInnerHTML={{ __html: selectedSample.content }}
            />
          </div>
        )}

        {/* Call to Action */}
        {!selectedSample && (
          <div className="text-center">
            <p className="text-gray-400 font-mono text-lg">
              Select a technical writing sample above to explore my approach to
              communicating complex engineering concepts.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default SectionWrapper(TechnicalWritingSamples, "technical-writing");