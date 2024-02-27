import React from "react";

const Team = ({ person }) => {
  const { name, img } = person;
  console.log(name, img);
  return (
    <div className="bg-white flex flex-col justify-center items-center p-5 rounded cursor-pointer" >
      <img
        src={person.img}
        className=" border border-gray-700 mb-3 w-40 h-40
          "
        alt=""
      />
      <h1 className="text-xl font-bold text-center">{person.name}</h1>
    </div>
  );
};

export default Team;
