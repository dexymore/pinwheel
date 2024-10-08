
import  { useEffect } from "react";
import 'owl.carousel';
import TestimonialCard from "../../components/TestimonialCard";
import user1 from "../../assets/HomePageAssets/user-1.png"
import user2 from "../../assets/HomePageAssets/user-2.png"
import user3 from "../../assets/HomePageAssets/user-3.png"

import $ from 'jquery'; // from node_modules


const Testimonials = () => {
    useEffect(() => {
      // Initialize the Owl Carousel after the component mounts
      $(document).ready(function () {
        $('.owl-carousel').owlCarousel({
          loop: true,
          margin: 20,
          autoplay: true,
          responsive: {
            0: {
              items: 1,
            },
            600: {
              items: 2,
            },
            1000: {
              items: 3,
            },
          },
        });
      });
  
      // Cleanup function to destroy the carousel when the component unmounts
      return () => {
        $('.owl-carousel').trigger('destroy.owl.carousel');
      };
    }, []);
  
    return (
      <div className="owl-carousel owl-theme section max-w-screen-xl mx-auto mb-10">
        <div className="item">
          <TestimonialCard
            name="John Doe"
            title="CEO, Company"
            testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            image={user1}
          />
        </div>
        <div className="item">
          <TestimonialCard
            name="Jane Smith"
            title="CTO, Company"
            testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            image={user2}
          />
        </div>
        <div className="item">
          <TestimonialCard
            name="Mike Johnson"
            title="CFO, Company"
            testimonial="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
            image={user3}
          />
        </div>
      </div>
    );
  };
export default Testimonials;
