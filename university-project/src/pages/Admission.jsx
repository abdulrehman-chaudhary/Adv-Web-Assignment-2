// src/pages/Admission.jsx
import { Link } from "react-router-dom";


const admissionCriteria = [
  {
    icon: "📜",
    title: "Undergraduate Programs",
    points: [
      "Minimum 60% marks in FSc (Pre-Engineering or ICS) or equivalent",
      "Valid CNIC / B-Form",
      "NTS / UMT Entry Test (passing score: 50+)",
      "Interview clearance (for merit-based scholarships)",
    ],
    color: "from-umt-navy to-umt-blue",
  },
  {
    icon: "🎓",
    title: "Graduate Programs (MS)",
    points: [
      "16-year education (BS/BCS or equivalent)",
      "Minimum CGPA 2.5/4.0 or 60% aggregate",
      "GRE / UMT GAT (passing score: 50+)",
      "Two letters of recommendation",
      "Statement of purpose",
    ],
    color: "from-umt-blue to-umt-orange",
  },
];

const processSteps = [
  {
    step: "01",
    icon: "📝",
    title: "Submit Application",
    desc: "Fill out the online application form on the UMT Admissions Portal and upload all required documents.",
  },
  {
    step: "02",
    icon: "🧪",
    title: "Entry Test",
    desc: "Appear in the UMT Entry Test (or submit valid NTS/GRE scores). Test covers Mathematics, English, and Subject knowledge.",
  },
  {
    step: "03",
    icon: "🗣️",
    title: "Interview",
    desc: "Shortlisted candidates are called for a panel interview with the relevant department faculty.",
  },
  {
    step: "04",
    icon: "📬",
    title: "Offer Letter",
    desc: "Successful candidates receive an official admission offer letter via email and the student portal.",
  },
  {
    step: "05",
    icon: "💳",
    title: "Fee Submission",
    desc: "Confirm your seat by paying the admission fee within the stipulated deadline to secure enrollment.",
  },
];




function CriteriaCard({ item }) {
  return (
    <div className="glass-card rounded-2xl overflow-hidden">
      <div className={`bg-gradient-to-br ${item.color} p-6 flex items-center gap-4`}>
        <span className="text-3xl">{item.icon}</span>
        <h3 className="text-white font-black text-xl">{item.title}</h3>
      </div>
      <div className="p-6">
        <ul className="space-y-3">
          {item.points.map((pt) => (
            <li key={pt} className="flex items-start gap-3 text-gray-300">
              <span className="text-umt-blue mt-0.5 flex-shrink-0">✓</span>
              <span className="text-sm">{pt}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function StepCard({ step }) {
  return (
    <div className="flex gap-6 items-start glass-card rounded-2xl p-6 hover:border-blue-500/30 transition-all duration-200">
      <div className="flex-shrink-0">
        <div className="w-14 h-14 rounded-2xl bg-umt-blue/20 border border-umt-blue/30 flex flex-col items-center justify-center">
          <span className="text-xl">{step.icon}</span>
        </div>
      </div>
      <div>
        <span className="text-xs font-black text-umt-blue uppercase tracking-widest">Step {step.step}</span>
        <h3 className="text-white font-bold text-lg pt-1 pb-2">{step.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
      </div>
    </div>
  );
}


function Admission() {
  return (
    <main className="min-h-screen pt-24 pb-24">
      <section className="relative overflow-hidden py-20 text-center">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-blue-600/10 rounded-full blur-3xl" />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <span className="text-sm font-semibold text-blue-400 uppercase tracking-widest">
            Admissions 2025
          </span>
          <h1 className="text-5xl font-black text-white pt-3 pb-5">
            Join <span className="gradient-text">UMT</span> – Apply Today
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto pb-8">
            Take the first step towards your future. Our admissions process is
            straightforward, fair, and merit-based.
          </p>
          <a
            href="#apply-now"
            id="admission-portal-link"
            className="inline-flex items-center gap-2 px-8 py-4 bg-umt-orange hover:bg-umt-orange/90 text-white font-black rounded-2xl shadow-lg shadow-umt-orange/30 transition-all duration-200 hover:scale-105"
          >
            Apply via Portal →
          </a>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 space-y-20">
        <section id="admission-criteria">
          <h2 className="text-3xl font-black text-white pb-3">Admission Criteria</h2>
          <p className="text-gray-400 pb-10">
            Review the eligibility requirements for your desired program level.
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {admissionCriteria.map((item) => (
              <CriteriaCard key={item.title} item={item} />
            ))}
          </div>
        </section>

        <section id="admission-process">
          <h2 className="text-3xl font-black text-white pb-3">Admission Process</h2>
          <p className="text-gray-400 pb-10">Follow these steps to complete your application successfully.</p>
          <div className="grid md:grid-cols-2 gap-4 lg:gap-6">
            {processSteps.map((step) => (
              <StepCard key={step.step} step={step} />
            ))}
          </div>
        </section>

        <section
          id="apply-now"
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 to-indigo-700 p-12 text-center"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
          <div className="relative z-10">
            <h2 className="text-4xl font-black text-white pb-4">Ready to Apply?</h2>
            <p className="text-blue-200 text-lg pb-8 max-w-lg mx-auto">
              Our admissions team is here to help. Submit your application
              today and join the UMT family.
            </p>
            <Link
              to="/programs"
              className="inline-flex items-center gap-2 px-10 py-4 bg-umt-orange hover:bg-umt-orange/90 text-white font-black rounded-2xl shadow-lg shadow-umt-orange/30 transition-all duration-200 hover:scale-105"
            >
              Browse Programs First →
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Admission;
