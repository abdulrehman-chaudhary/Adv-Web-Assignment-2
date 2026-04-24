// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Programs from "./pages/Programs";
import ProgramDetail from "./pages/ProgramDetail";
import Admission from "./pages/Admission";
import Faculty from "./pages/Faculty";


function Footer() {
  return (
    <footer className="bg-[#080d1a] border-t border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-10">
        {/* Brand */}
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 pb-6">
            <img
              src="/assets/images/Logo.png"
              alt="UMT Logo"
              className="h-12 w-auto object-contain"
            />
          </div>
          <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
            Shaping leaders, innovating futures. UMT is committed to excellence
            in education, research, and community development.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold pb-4">Quick Links</h4>
          <ul className="space-y-2">
            {[
              { label: "Home", href: "/" },
              { label: "Programs", href: "/programs" },
              { label: "Admission", href: "/admission" },
              { label: "Faculty", href: "/faculty" },
            ].map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className="text-gray-500 hover:text-blue-400 text-sm transition-colors"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white font-bold pb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-500">
            <li>📍 C-II, Johar Town, Lahore, Pakistan</li>
            <li>📞 +92-42-35880007</li>
            <li>✉ info@umt.edu.pk</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-16 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} University of Management and Technology. All rights reserved.
        </p>
        <p className="text-gray-600 text-sm">Lahore, Pakistan</p>
      </div>
    </footer>
  );
}


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/program/:id" element={<ProgramDetail />} />
        <Route path="/admission" element={<Admission />} />
        <Route path="/faculty" element={<Faculty />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;