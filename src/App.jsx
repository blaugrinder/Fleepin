import { useEffect, Suspense, lazy } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Header from './components/Header';
import Home from './components/Home';
import WhyChooseUs from './components/WhyChooseUs';
const Testimonials = lazy(() => import('./components/TestimonialsPage'));

const LoadingFallback = () => (
  <div style={{ textAlign: 'center', padding: '2rem', color: '#999' }}>Loading...</div>
);

function App() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <Header />
      <main>
        <Home />
        <WhyChooseUs />
        <Suspense fallback={<LoadingFallback />}>
          <Testimonials />
        </Suspense>
      </main>
    </>
  );
}

export default App;
