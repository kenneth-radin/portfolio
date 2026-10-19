import TopNav from "@/components/TopNav";
import Sidebar from "@/components/Sidebar";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import CertificatesSection from "@/components/sections/CertificatesSection";
import EducationSection from "@/components/sections/EducationSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div id="top">
      <TopNav />

      <main className="mx-auto grid max-w-6xl gap-5 px-4 pb-16 pt-24 lg:grid-cols-12">
        {/* Left sidebar — LinkedIn profile card */}
        <div className="lg:col-span-4">
          <Sidebar />
        </div>

        {/* Main feed — sections */}
        <div className="space-y-5 lg:col-span-8">
          <AboutSection />
          <ProjectsSection />
          <SkillsSection />
          <CertificatesSection />
          <EducationSection />
          <ContactSection />

          <footer className="pt-4 text-center text-xs text-white/40">
            <p>
              © {new Date().getFullYear()} {""}
              Kenneth Radin — Built with Next.js &amp; TypeScript
            </p>
          </footer>
        </div>
      </main>
    </div>
  );
}
