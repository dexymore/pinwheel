import galleryImg1 from "../../assets/AboutPageAssets/gallery-img-1.png";
import galleryImg2 from "../../assets/AboutPageAssets/gallery-img-2.png";
import galleryImg3 from "../../assets/AboutPageAssets/gallery-img-3.png";
import shape1 from "../../assets/AboutPageAssets/shape.svg";
import shape2 from "../../assets/AboutPageAssets/shape-2.svg";

const GoalSection = () => {
  return (
    <section>
      <div className="relative mx-auto max-w-screen-xl px-4 py-8">
        {/* Background Shape */}
        <img
          src={shape1}
          alt="Background Shape"
          className="absolute z-0 bottom-0 left-0 md:w-[8%] "
        />
        <img
        src={shape2}
                  alt="Background Shape"
          className="absolute z-0 md:top-[80%] top-[55%] right-0 md:w-[8%] "
        >

        </img>

        {/* Title */}
        <div className="w-full text-center ">
          <h2 className="mb-4 text-4xl md:text-4xl font-extrabold leading-tight md:w-[50%] mx-auto">
            We started with one single goal Empower entrepreneurs
          </h2>
        </div>

        {/* Gallery Images */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-3 relative z-10">
          <div className="grid grid-cols-1 gap-6">
            <img
              src={galleryImg1}
              alt="gallery image"
              className="w-full h-auto object-cover"
            />
            <img
              src={galleryImg2}
              alt="gallery image"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="flex flex-col">
            <img
              src={galleryImg3}
              alt="gallery image"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoalSection;
