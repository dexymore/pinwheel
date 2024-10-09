import React from 'react';

const TeamCard = ({ name, position, img }) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <img src={img} alt={`${name}'s profile`} className="w-[30%] my-6 " />
            <div className=" p-7 w-[18rem] flex flex-col text-center rounded-xl shadow-xl bg-white">
                <h3 className="text-2xl font-extrabold">{name}</h3>
                <p className="text-xl font-light text-gray-400">{position}</p>
            </div>
        </div>
    );
};

export default TeamCard;