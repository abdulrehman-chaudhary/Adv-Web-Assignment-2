// src/pages/ProgramDetail.jsx
import { useParams, Link } from "react-router-dom";
import programsData from "../data/programsData";

function ProgramDetail() {
  const { id } = useParams();
  const program = programsData.find((p) => p.id === id);

  if (!program) {
    return (
      <main className="min-h-screen flex items-center justify-center pt-24 px-6">
        <div className="text-center">
          <p className="text-8xl pb-6">🔍</p>
          <h1 className="text-4xl font-black text-white pb-4">Program Not Found</h1>
          <p className="text-gray-400 pb-8">
            The program you are looking for does not exist.
          </p>
          <Link
            to="/programs"
            className="px-8 py-4 bg-umt-blue hover:bg-umt-navy text-white font-bold rounded-2xl transition-colors"
          >
            ← Back to Programs
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-24 pb-24">
      <section className={`relative overflow-hidden bg-gradient-to-br ${program.color} py-20`}>
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#0a0f1e] to-transparent" />

        <div className="relative z-10 max-w-5xl mx-auto px-6">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-white/60 pb-8">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span>/</span>
            <Link to="/programs" className="hover:text-white transition-colors">Programs</Link>
            <span>/</span>
            <span className="text-white">{program.name}</span>
          </nav>

          <div className="flex items-start gap-6">
            <div className="w-20 h-20 rounded-3xl bg-white/20 backdrop-blur-sm flex items-center justify-center text-4xl shadow-lg flex-shrink-0">
              {program.icon}
            </div>
            <div>
              <span className="inline-block px-3 py-1 bg-white/20 text-white text-xs font-bold rounded-full uppercase tracking-wider pb-3">
                {program.level}
              </span>
              <h1 className="text-4xl md:text-5xl font-black text-white leading-tight">
                {program.name}
              </h1>
              <p className="text-white/80 text-lg pt-3 max-w-2xl leading-relaxed">
                {program.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 pt-12 grid md:grid-cols-3 gap-8">
        {/* ── Main Info ── */}
        <div className="md:col-span-2 space-y-8">
          {/* Key Subjects */}
          <div className="glass-card rounded-2xl p-8 m-0">
            <h2 className="text-2xl font-black text-white pb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-umt-blue rounded-lg flex items-center justify-center text-sm">📚</span>
              Key Subjects
            </h2>
            <ul className="space-y-3">
              {program.keySubjects.map((subject, index) => (
                <li key={subject} className="flex items-center gap-3">
                  <span className="w-6 h-6 rounded-full bg-umt-blue/20 border border-umt-blue/30 flex items-center justify-center text-umt-blue text-xs font-bold flex-shrink-0">
                    {index + 1}
                  </span>
                  <span className="text-gray-300">{subject}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Career Paths */}
          <div className="glass-card rounded-2xl p-8">
            <h2 className="text-2xl font-black text-white pb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-umt-orange rounded-lg flex items-center justify-center text-sm">💼</span>
              Career Paths
            </h2>
            <div className="flex flex-wrap gap-3">
              {program.career.map((c) => (
                <span
                  key={c}
                  className="px-4 py-2 bg-umt-orange/10 border border-umt-orange/20 text-umt-orange text-sm font-medium rounded-xl"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── Sidebar Info ── */}
        <div className="space-y-6">
          {/* Quick Facts */}
          <div className="glass-card rounded-2xl p-6 space-y-5">
            <h3 className="text-white font-black text-lg">Program Details</h3>

            <div className="space-y-4">
              <div className="pb-4 border-b border-white/5">
                <p className="text-xs text-gray-500 uppercase tracking-wider pb-1">Duration</p>
                <p className="text-white font-semibold">{program.duration}</p>
              </div>
              <div className="pb-4 border-b border-white/5">
                <p className="text-xs text-gray-500 uppercase tracking-wider pb-1">Program Level</p>
                <p className="text-white font-semibold">{program.level}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider pb-1">Eligibility Criteria</p>
                <p className="text-gray-300 text-sm leading-relaxed">{program.eligibility}</p>
              </div>
            </div>
          </div>

          {/* Apply CTA */}
          <div className="glass-card rounded-2xl p-6 text-center bg-gradient-to-br from-blue-900/40 to-indigo-900/40 border-blue-500/20">
            <p className="text-white font-bold pb-2">Ready to Apply?</p>
            <p className="text-gray-400 text-sm pb-5">
              Applications for Fall 2025 are open now.
            </p>
            <Link
              to="/admission"
              id={`apply-${program.id}`}
              className="block w-full py-3 bg-umt-blue hover:bg-umt-navy text-white font-bold rounded-xl transition-colors text-sm"
            >
              Apply Now →
            </Link>
          </div>

          {/* Back Button */}
          <Link
            to="/programs"
            className="flex items-center gap-2 text-gray-400 hover:text-white text-sm font-medium transition-colors"
          >
            ← Back to Programs
          </Link>
        </div>
      </div>
    </main>
  );
}

export default ProgramDetail;
