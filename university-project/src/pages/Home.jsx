// src/pages/Home.jsx
import { Link } from "react-router-dom";
import programsData from "../data/programsData";

// --- Stat Card ---
function StatCard({ value, label }) {
  return (
    <div className="text-center">
      <p className="text-4xl font-black text-umt-orange">{value}</p>
      <p className="text-sm text-gray-400 mt-1">{label}</p>
    </div>
  );
}

// --- Program Highlight Card ---
function ProgramCard({ program }) {
  return (
    <Link
      to={`/program/${program.id}`}
      className="group bg-white border border-gray-200 rounded-2xl p-6 flex flex-col gap-4 hover:border-blue-500 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div
        className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${program.color} flex items-center justify-center text-2xl shadow-lg`}
      >
        {program.icon}
      </div>
      <div>
        <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
          {program.level}
        </span>
        <h3 className="text-gray-900 font-bold text-lg mt-1 group-hover:text-blue-600 transition-colors">
          {program.name}
        </h3>
        <p className="text-gray-600 text-sm mt-2 line-clamp-2">{program.description}</p>
      </div>
      <div className="flex items-center gap-2 text-umt-orange text-sm font-semibold mt-auto">
        <span>View Details</span>
        <span className="group-hover:translate-x-1 transition-transform">→</span>
      </div>
    </Link>
  );
}

// --- Main Home Component ---
function Home() {
  // Show first 4 programs as highlights on home page
  const highlights = programsData.slice(0, 4);

  return (
    <main className="bg-[#EEF3F7]">
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/assets/images/1.jpg')" }}
        />
        <div className="absolute inset-0 bg-[#0a0f1e]/80" />

        {/* Ambient glows */}
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-umt-navy/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-umt-orange/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-24">
          {/* Badge */}
          <span className="inline-flex items-center gap-2 p-5 rounded-full bg-blue-600/20 border border-blue-500/30 text-blue-400 text-sm font-medium">
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
            Pakistan's Premier Technology University
          </span>

          {/* Headline */}
          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight pb-6">
            Shape Your Future at{" "}
            <span className="text-umt-orange">UMT</span>
          </h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto pb-10 leading-relaxed">
            University of Management and Technology — where world-class education
            meets innovation. Join thousands of graduates who are leading industries
            and transforming the world.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 pb-20">
            <Link
              to="/programs"
              id="hero-explore-programs"
              className="px-8 py-4 bg-umt-blue hover:bg-umt-navy text-white font-bold rounded-2xl shadow-lg shadow-umt-blue/30 transition-all duration-200 hover:scale-105"
            >
              Explore Programs
            </Link>
            <Link
              to="/admission"
              id="hero-apply-now"
              className="px-8 py-4 bg-umt-orange hover:bg-umt-orange/80 text-white font-bold rounded-2xl shadow-lg shadow-umt-orange/30 transition-all duration-200 hover:scale-105"
            >
              Apply Now →
            </Link>
          </div>

        </div>
      </section>

      <section id="about" className="py-24 max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest">
              Who We Are
            </span>
            <h2 className="text-4xl font-black text-gray-900 pt-3 pb-6 leading-tight">
              A Legacy of Excellence in{" "}
              <span className="text-umt-orange">Higher Education</span>
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed pb-6">
              Founded with the vision of cultivating intellectual curiosity and
              technical mastery, UMT has been a beacon of higher education in
              Pakistan for over two decades. Our programs are designed to bridge
              the gap between academic theory and industry practice.
            </p>
            <p className="text-gray-700 leading-relaxed">
              We are committed to fostering an environment that encourages
              critical thinking, creativity, and ethical leadership — equipping
              graduates to thrive in an ever-evolving global landscape.
            </p>
            <Link
              to="/faculty"
              className="inline-flex items-center gap-2 pt-8 text-blue-600 hover:text-blue-700 font-semibold transition-colors"
            >
              Meet Our Faculty <span>→</span>
            </Link>
          </div>

          {/* Feature Grid */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "🏆", title: "World-Class Faculty", desc: "PhDs from top global universities." },
              { icon: "🌐", title: "Industry Partnerships", desc: "Collaborations with 200+ companies." },
              { icon: "🔬", title: "Research & Innovation", desc: "Cutting-edge research labs & centers." },
              { icon: "🎯", title: "Career Services", desc: "Dedicated placement & career support." },
            ].map((feat) => (
              <div
                key={feat.title}
                className="bg-white shadow-md rounded-2xl p-5 hover:border-blue-500/30 transition-all duration-200"
              >
                <span className="text-3xl">{feat.icon}</span>
                <h3 className="text-gray-900 font-bold mt-3 mb-1">{feat.title}</h3>
                <p className="text-gray-600 text-sm">{feat.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="programs-highlight" className="py-24 bg-[#E5EDF4]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center pb-16">
            <span className="text-sm font-semibold text-blue-600 uppercase tracking-widest">
              Our Programs
            </span>
            <h2 className="text-4xl font-black text-gray-900 pt-3 pb-4">
              Programs Designed for the{" "}
              <span className="text-umt-orange">Future</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Choose from a range of carefully crafted undergraduate and graduate
              programs in technology and management.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>

          <div className="text-center pt-12">
            <Link
              to="/programs"
              id="home-view-all-programs"
              className="inline-flex items-center gap-2 px-8 py-8 border border-blue-500/40 text-blue-600 hover:bg-blue-600 hover:text-white font-bold rounded-2xl transition-all duration-200"
            >
              View All Programs →
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}

export default Home;
