import AboutUs from './AboutUs';
import Counts from './Counts';
import ImageBanner from './ImageBanner';
import Portfolio from './Portfolio';
import ServiceCard from './ServiceCard';
import TechStack from './TechStack';
import TestimonialsCarousel from './Testimonials';
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
    <TestimonialsCarousel/>
     <Portfolio/>
    </>
  )
}

export default Home
