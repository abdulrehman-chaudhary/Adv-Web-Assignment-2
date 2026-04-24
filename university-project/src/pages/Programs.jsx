// src/pages/Programs.jsx
import { Link } from "react-router-dom";
import programsData from "../data/programsData";

// --- Program Card Component ---
function ProgramCard({ program }) {
  return (
    <div className="glass-card rounded-2xl overflow-hidden hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-600/10 transition-all duration-300 hover:-translate-y-1 flex flex-col">
      {/* Card Header */}
      <div className={`bg-gradient-to-br ${program.color} p-6 flex items-center gap-4`}>
        <span className="text-4xl">{program.icon}</span>
        <div>
          <span className="text-xs font-bold text-white/70 uppercase tracking-widest">
            {program.level}
          </span>
          <h3 className="text-white font-black text-xl leading-tight">{program.name}</h3>
        </div>
      </div>

      {/* Card Body */}
      <div className="p-6 flex flex-col flex-1 gap-4">
        <p className="text-gray-400 text-sm leading-relaxed">{program.description}</p>

        {/* Duration Badge */}
        <div className="flex items-center gap-2 text-sm text-gray-300">
          <span className="text-umt-blue">⏱</span>
          <span>{program.duration}</span>
        </div>

        {/* Key Subjects Preview */}
        <div>
          <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider pb-2">
            Key Subjects
          </p>
          <div className="flex flex-wrap gap-2">
            {program.keySubjects.slice(0, 3).map((sub) => (
              <span
                key={sub}
                className="px-2 py-1 bg-white/5 border border-white/10 text-gray-300 text-xs rounded-lg"
              >
                {sub}
              </span>
            ))}
            {program.keySubjects.length > 3 && (
              <span className="px-2 py-1 bg-white/5 border border-white/10 text-gray-400 text-xs rounded-lg">
                +{program.keySubjects.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* View Details Button */}
        <div className="mt-auto pt-4 border-t border-white/5">
          <Link
            to={`/program/${program.id}`}
            id={`view-details-${program.id}`}
            className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 bg-umt-blue hover:bg-umt-navy text-white font-bold text-sm rounded-xl transition-all duration-200 hover:shadow-lg hover:shadow-umt-blue/25"
          >
            View Details →
          </Link>
        </div>
      </div>
    </div>
  );
}

// --- Programs Page ---
function Programs() {
  const undergraduate = programsData.filter((p) => p.level === "Undergraduate");
  const graduate = programsData.filter((p) => p.level === "Graduate");

  return (
    <main className="min-h-screen pt-24 pb-24">
      <section className="relative overflow-hidden py-20 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0d1b3e]/60 to-transparent" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <span className="text-sm font-semibold text-blue-400 uppercase tracking-widest">
            Academic Programs
          </span>
          <h1 className="text-5xl font-black text-white pt-3 pb-5 leading-tight">
            Programs at <span className="gradient-text">UMT</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover our carefully curated programs designed to prepare you for
            a rapidly evolving technological landscape.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-6">
        <section id="undergraduate-programs" className="pb-20">
          <div className="flex items-center gap-4 pb-10">
            <div>
              <span className="text-xs font-bold text-umt-orange uppercase tracking-widest">
                Undergraduate
              </span>
              <h2 className="text-3xl font-black text-white">Bachelor's Programs</h2>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
            <span className="glass-card px-3 py-1 rounded-full text-sm text-gray-400 border border-white/10">
              {undergraduate.length} Programs
            </span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {undergraduate.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </section>

        <section id="graduate-programs">
          <div className="flex items-center gap-4 pb-10">
            <div>
              <span className="text-xs font-bold text-purple-400 uppercase tracking-widest">
                Graduate
              </span>
              <h2 className="text-3xl font-black text-white">Master's Programs</h2>
            </div>
            <div className="flex-1 h-px bg-gradient-to-r from-white/10 to-transparent" />
            <span className="glass-card px-3 py-1 rounded-full text-sm text-gray-400 border border-white/10">
              {graduate.length} Programs
            </span>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {graduate.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

export default Programs;
