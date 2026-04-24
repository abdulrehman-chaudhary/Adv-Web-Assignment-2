// src/pages/Faculty.jsx
import facultyData from "../data/facultyData";


function FacultyCard({ member }) {
  return (
    <div className="glass-card rounded-2xl overflow-hidden hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-600/5 transition-all duration-300 hover:-translate-y-1 flex flex-col">
      {/* Avatar */}
      <div className={`bg-gradient-to-br ${member.color} p-8 flex flex-col items-center justify-center gap-3`}>
        <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm border-4 border-white/30 flex items-center justify-center shadow-xl">
          <span className="text-3xl font-black text-white">{member.initials}</span>
        </div>
        <div className="text-center">
          <h3 className="text-white font-black text-lg leading-tight">{member.name}</h3>
          <p className="text-white/70 text-sm mt-1">{member.designation}</p>
        </div>
      </div>

      {/* Info */}
      <div className="p-6 flex flex-col flex-1 gap-4">
        {/* Expertise */}
        <div>
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider pb-2">
            Area of Expertise
          </p>
          <div className="flex flex-wrap gap-2">
            {member.expertise.split(", ").map((ex) => (
              <span
                key={ex}
                className="px-3 py-1 bg-umt-blue/10 border border-umt-blue/20 text-umt-blue text-xs font-medium rounded-full"
              >
                {ex}
              </span>
            ))}
          </div>
        </div>

        {/* Qualification */}
        <div className="pb-4 border-b border-white/5">
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider pb-1">
            Qualification
          </p>
          <p className="text-gray-300 text-sm leading-relaxed">{member.qualification}</p>
        </div>

        {/* Experience */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider pb-1">
              Experience
            </p>
            <p className="text-white font-bold">{member.experience}</p>
          </div>
          {/* Email */}
          <a
            href={`mailto:${member.email}`}
            id={`email-${member.id}`}
            className="flex items-center gap-1.5 px-3 py-2 bg-white/5 hover:bg-blue-600/20 border border-white/10 hover:border-blue-500/30 text-gray-400 hover:text-blue-400 text-xs rounded-xl transition-all duration-200"
          >
            <span>✉</span>
            <span>Email</span>
          </a>
        </div>
      </div>
    </div>
  );
}


function Faculty() {
  return (
    <main className="min-h-screen pt-24 pb-24">
      <section className="relative overflow-hidden py-20 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <span className="text-sm font-semibold text-blue-400 uppercase tracking-widest">
            Our Team
          </span>
          <h1 className="text-5xl font-black text-white pt-3 pb-5">
            World-Class <span className="gradient-text">Faculty</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Learn from distinguished professors and researchers who bring
            decades of academic and industry experience to the classroom.
          </p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 pb-20">
        <div className="glass-card rounded-2xl p-6 grid grid-cols-3 gap-6 text-center">
          <div>
            <p className="text-3xl font-black text-umt-orange">500+</p>
            <p className="text-gray-400 text-sm mt-1">Faculty Members</p>
          </div>
          <div>
            <p className="text-3xl font-black text-umt-orange">120+</p>
            <p className="text-gray-400 text-sm mt-1">PhDs from Top Universities</p>
          </div>
          <div>
            <p className="text-3xl font-black text-umt-orange">200+</p>
            <p className="text-gray-400 text-sm mt-1">Research Publications/Year</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-black text-white pb-10">
          Faculty of Computing & Technology
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {facultyData.map((member) => (
            <FacultyCard key={member.id} member={member} />
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 pt-20">
        <div className="glass-card rounded-2xl p-10 text-center border-blue-500/20">
          <p className="text-3xl font-black text-white pb-3">Join Our Faculty</p>
          <p className="text-gray-400 pb-6 max-w-lg mx-auto">
            We are always looking for passionate educators and researchers.
            Send us your CV and join Pakistan's leading technology university.
          </p>
          <a
            href="mailto:hr@umt.edu.pk"
            id="join-faculty-email"
            className="inline-flex items-center gap-2 px-8 py-4 bg-umt-blue hover:bg-umt-navy text-white font-bold rounded-2xl transition-all duration-200 hover:scale-105 shadow-lg shadow-umt-blue/25"
          >
            ✉ Apply to Join Faculty
          </a>
        </div>
      </div>
    </main>
  );
}

export default Faculty;
