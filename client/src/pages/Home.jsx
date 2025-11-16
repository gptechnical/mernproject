import AboutUs from './AboutUs';
import Counts from './Counts';
import ImageBanner from './ImageBanner';
import ServiceCard from './ServiceCard';
import TechStack from './TechStack';
import TestimonialsSlider from './Testimonials';
import TestimonialsCarousel from './Testimonials';
import TestimonialsBootstrap from './Testimonials';
import Testimonials from './Testimonials';
import WhyChoose from './WhyChoose';

const Home = () => {
  return (
    <>
    <ImageBanner/>
    <AboutUs/>
    <ServiceCard/>
    <TechStack/>
    <Counts/>
    <WhyChoose/>
    {/* <Testimonials/> */}
    <TestimonialsCarousel/>
    </>
  )
}

export default Home
