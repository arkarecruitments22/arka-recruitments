import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Industries } from '@/components/Industries';
import { WhyChoose } from '@/components/WhyChoose';
import { Process } from '@/components/Process';
import { JobCategories } from '@/components/JobCategories';
import { CandidateForm } from '@/components/CandidateForm';
import { Employer } from '@/components/Employer';
import { Testimonials } from '@/components/Testimonials';
import { Stats } from '@/components/Stats';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { FloatingButtons } from '@/components/FloatingButtons';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Industries />
        <WhyChoose />
        <Process />
        <JobCategories />
        <CandidateForm />
        <Employer />
        <Testimonials />
        <Stats />
        <Contact />
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
}

export default App;
