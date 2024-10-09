const CoresCard = ({ number, description, title }) => {
    return (
      <div className="flex items-start flex-col bg-[#FFFFFF] px-5  shadow-lg rounded-lg">
        <div className="flex my-6 text-center items-center justify-center h-12 w-12 px-10 py-10 bg-[#FFFAF5] rounded-full">
          <h2 className="text-4xl font-extrabold gradientOrangeText">
            0{number}
          </h2>
        </div>
        <div>
          <h3 className="text-3xl my-6 font-extrabold">{title}</h3>
          <p className="my-6 text-gray-400 leading-6">{description}</p>
        </div>
      </div>
    );
  };
  
  export default CoresCard;
  