


const SolutionsCard = ({ title, description, imageUrl }) => {
    return (
            <div className="bg-[#FFFFFF] p-5 shadow-lg rounded-lg ">
           
            <div className="">
                <h2 className="h4 text-xl">{title}</h2>
                <p className="text-gray-500 leading-[1.35rem]">{description}</p>
            </div><span className="mt-4 w-[]">
            <img src={imageUrl} alt={title} className=" md:w-[8%] w-[18%]  h-[22%] mt-2 mr-3 object-contain" /></span>
        </div>
    );
};


export default SolutionsCard;