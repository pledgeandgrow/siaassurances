import Hero from '../components/home/Hero';
import Services from '../components/home/Services';
import About from '../components/about/AboutHistory';
import Testimonials from '../components/home/Testimonials';
import ContactCTA from '../components/home/ContactCTA';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <ContactCTA />
    </div>
  );
}
