import bannerShape from "../../assets/GlobalAssets/banner-shape.svg";
import featureShape from "../../assets/GlobalAssets/feature-shape.svg";

import HeroFeaturedPostsCard from "../../components/HeroFeaturedPostsCard";
import post1 from "../../assets/BlogPageAssets/post-1.png";
import post2 from "../../assets/BlogPageAssets/post-2.png";
import post3 from "../../assets/BlogPageAssets/post-3.png";
import post4 from "../../assets/BlogPageAssets/post-4.png";

const BlogHero = () => {
  return (
    <section className="relative h-auto flex flex-col items-center justify-center text-center">
      {/* Background Shape Image */}
      <img
        src={bannerShape}
        className="absolute top-[-6rem] right-0 md:right-[-2rem] w-[65%] md:w-[25%] object-cover z-0"
        alt="Background shape"
      />

      <div className="relative z-10 max-w-2xl mx-auto px-4 py-8">
        <h1 className="mb-4 text-5xl md:text-6xl font-extrabold leading-tight">
          Insight and advice from our expert team.
        </h1>
        <p className="mb-6 font-light text-gray-400 md:text-lg lg:text-xl">
          Donec sollicitudin molestie malesuada. Donec sollicitudin molestie
          malesuada. Mauris pellentesque nec, egestas non nisi. Cras ultricies
          ligula sed magna dictum porta. Lorem ipsum dolor sit amet.
        </p>
      </div>

      <div className="text-start max-w-screen-xl">
        <h2 className="font-bold my-8 text-2xl ">Featured Posts</h2>
        <div className="grid md:grid-cols-2 grid-cols-1 grid-rows-1 md:grid-rows-2 gap-6">
          <HeroFeaturedPostsCard
            title={"The Ultimate Guide to Google My Business"}
            description={
              "Mauris blandit aliquet elit, eget tincidunt nibh dolor sit amet"
            }
            imageUrl={post1}
            category={"Development"}
            date={"21st Sep,2020"}
          ></HeroFeaturedPostsCard>
          <HeroFeaturedPostsCard
            title={"The Ultimate Guide to Redirects Explained"}
            description={
              "Mauris blandit aliquet elit, eget tincidunt nibh dolor sit amet"
            }
            imageUrl={post2}
            category={"Development"}
            date={"21st Sep,2020"}
          >
            {" "}
          </HeroFeaturedPostsCard>
          <HeroFeaturedPostsCard
            title={"The Ultimate Guide to Redirects Explained"}
            description={
              "Mauris blandit aliquet elit, eget tincidunt nibh dolor sit amet"
            }
            imageUrl={post3}
            category={"Development"}
            date={"21st Sep,2020"}
          ></HeroFeaturedPostsCard>
          <HeroFeaturedPostsCard
            title={"The Ultimate Guide to Redirects Explained"}
            description={
              "Mauris blandit aliquet elit, eget tincidunt nibh dolor sit amet"
            }
            imageUrl={post4}
            category={"Development"}
            date={"21st Sep,2020"}
          ></HeroFeaturedPostsCard>
        </div>
      </div>
      <div className="md:max-w-screen-lg w-[100%]   overflow-x-auto bg-gray-200 my-8 px-2 py-10 rounded-2xl ">
        <ul className="flex flex-row whitespace-nowrap space-x-4">
          <li>
            <a
              className="rounded-3xl px-8 py-2 border-2 border-[white] text-black bg-white  transition-colors"
              href="#"
            >
              All Categories
            </a>
          </li>
          <li>
            <a
              className=" text-gray-700 rounded-3xl px-8 py-2 border-2 border-gray-300 transition-colors"
              href="#"
            >
              Development
            </a>
          </li>
          <li>
            <a
              className="text-gray-700 rounded-3xl px-8 py-2 border-2 border-gray-300 transition-colors"
              href="#"
            >
              Updates
            </a>
          </li>
          <li>
            <a
              className="text-gray-700 rounded-3xl px-8 py-2 border-2 border-gray-300 transition-colors"
              href="#"
            >
              Email Marketing
            </a>
          </li>
          <li>
            <a
              className="text-gray-700 rounded-3xl px-8 py-2 border-2 border-gray-300 transition-colors"
              href="#"
            >
              Rate Optimization
            </a>
          </li>
        </ul>
      </div>
      <img
        src={featureShape}
        alt="Feature shape"
        className="absolute bottom-0 left-0 z-[-1] "
      />
    </section>
  );
};

export default BlogHero;
