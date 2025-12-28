import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { SubjectsSection } from "./components/SubjectsSection";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { FeesTimings } from "./components/FeesTimings";
import { Testimonials } from "./components/Testimonials";
import { Location } from "./components/Location";
import { AdmissionForm } from "./components/AdmissionForm";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { FloatingChatButton } from "./components/FloatingChatButton";
import { MobileBottomBar } from "./components/MobileBottomBar";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header */}
      <Header />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <Hero />

        {/* Subjects & Classes */}
        <SubjectsSection />

        {/* Why Parents Choose Us */}
        <WhyChooseUs />

        {/* Fees & Timings */}
        <FeesTimings />

        {/* Testimonials / Results */}
        <Testimonials />

        {/* Location */}
        <Location />

        {/* Admission / Enquiry Form */}
        <AdmissionForm />

        {/* FAQ Section */}
        <FAQ />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Elements */}
      <FloatingChatButton />
      <MobileBottomBar />

      {/* Add padding to bottom for mobile bar */}
      <div className="h-16 md:hidden" />
    </div>
  );
}
