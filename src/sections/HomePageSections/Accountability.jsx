const Accountability = () => {
  return (
    <section>
      <div className="max-w-screen-xl px-4 flex md:flex-row flex-col-reverse py-8 mx-auto">
        <div className="flex w-[100%] mt-[3rem] flex-col text-start">
          <h1 className="max-w-2xl mb-4 text-4xl md:w-[22rem] font-extrabold md:leading-[2.5rem]">
            Accept payments any country in this whole universe
          </h1>
          <p className="max-w-2xl mb-4 mt-4 text-2xl text-md md:w-[28rem] text-gray-500 md:leading-[2rem]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
            egestas Werat viverra id et aliquet. vulputate egestas sollicitudin.
          </p>
          <button className="bg-[#fff] inline-flex items-center justify-center  mr-3 text-base font-medium md:w-[25%] w-[50%] shadow-md py-3 px-2 rounded-full  hover:shadow-md">
            Know About Us
          </button>
        </div>

        <div className="flex w-[100%] mr-12">
          <div
            id="div1"
            className={`
                    `}
          >
            <iframe
              className="md:w-[40rem] md:h-[25rem] w-[120%]  h-[20rem] rounded-xl shadow-md"
              src="https://www.youtube.com/embed/g3-VxLQO7do"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accountability;
