const FeaturedPostsCard = ({
    title,
    description,
    imageUrl,
    category,
    date,
  }) => {
    return (
      <div className="p-6  bg-white shadow-xl rounded-xl ml-4 mr-4">
        <div className="flex  flex-col items-center relative">
          
          <img src={imageUrl} alt={title} className="md:mr-4 w-full md:h-auto h-[20rem]" /> 
          <a className=" border-2 border-[#ff6700] absolute top-4 right-4 rounded-3xl px-3 py-1 text-[#ff6700] bg-[#edd1bef4] hover:text-white hover:bg-[#ff6700]" href="#">
                {category}
              </a>
          
          <div className="flex flex-col text-start mt-6">
          
            <div className="">
              <h2 className="h4 text-xl font-bold my-8">{title}</h2>
              <p className="text-gray-400 leading-[1.35rem]">{description}</p>
            </div>
            <div className="mt-6 flex space-x-4 ml-1 mr-1 border-t-2 border-gray-40 pt-4">
              <span className="inline-flex items-center text-xs text-[#666]">
                <svg
                  className="mr-1.5"
                  width="14"
                  height="16"
                  viewBox="0 0 14 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5 2H11V0.375C11 0.16875 10.8313 0 10.625 0H9.375C9.16875 0 9 0.16875 9 0.375V2H5V0.375C5 0.16875 4.83125 0 4.625 0H3.375C3.16875 0 3 0.16875 3 0.375V2H1.5C0.671875 2 0 2.67188 0 3.5V14.5C0 15.3281 0.671875 16 1.5 16H12.5C13.3281 16 14 15.3281 14 14.5V3.5C14 2.67188 13.3281 2 12.5 2ZM12.3125 14.5H1.6875C1.58438 14.5 1.5 14.4156 1.5 14.3125V5H12.5V14.3125C12.5 14.4156 12.4156 14.5 12.3125 14.5Z"
                    fill="#939393"
                  ></path>
                </svg>
                {date}
              </span>
              <span className="inline-flex items-center text-xs text-[#666]">
                <svg
                  className="mr-1.5"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.65217 0C3.42496 0 0 3.58065 0 8C0 12.4194 3.42496 16 7.65217 16C11.8794 16 15.3043 12.4194 15.3043 8C15.3043 3.58065 11.8794 0 7.65217 0ZM7.65217 14.4516C4.24264 14.4516 1.48107 11.5645 1.48107 8C1.48107 4.43548 4.24264 1.54839 7.65217 1.54839C11.0617 1.54839 13.8233 4.43548 13.8233 8C13.8233 11.5645 11.0617 14.4516 7.65217 14.4516ZM9.55905 11.0839L6.93941 9.09355C6.84376 9.01935 6.78822 8.90323 6.78822 8.78065V3.48387C6.78822 3.27097 6.95484 3.09677 7.15849 3.09677H8.14586C8.34951 3.09677 8.51613 3.27097 8.51613 3.48387V8.05484L10.5773 9.62258C10.7439 9.74839 10.7778 9.99032 10.6575 10.1645L10.0774 11C9.95708 11.171 9.72567 11.2097 9.55905 11.0839Z"
                    fill="#939393"
                  ></path>
                </svg>
                10 Min To Read
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default FeaturedPostsCard;
  