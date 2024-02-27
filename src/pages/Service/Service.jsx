import React, { useEffect, useRef, useState } from "react";
import {
  useLoaderData,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { BiLogoFacebookCircle } from "react-icons/bi";
import { AiFillTwitterCircle } from "react-icons/ai";

const Service = () => {
  const [findItem, setFindItem] = useState({});

  const { events } = useLoaderData();
  const params = useParams();
  // console.log(params);

  useEffect(() => {
    const fiendEvent = events.find((event) => event.id == params.id);

    setFindItem(fiendEvent);
  }, []);

  const { title, price, image, description, date, id } = findItem;

  return (
    <>
      <div className="grid max-w-6xl mx-auto box-border my-20 grid-cols-4">
        <div className="space-y-5  p-5 col-span-3 ">
          <div className="relative">
            <img className="h-[450px]  rounded-md w-full" src={image} alt="" />
            <p className="absolute right-0 bottom-0  bg-purple-800 rounded-sm font-bold text-xl text-white px-10 py-3 m-3">
              {price}
            </p>
          </div>
          <h2 className="text-2xl font-bold">{title}</h2>
          <p>{description}</p>
        </div>
        <div className="">
          <h2 className="text-2xl font-extrabold py-5 border-b">Share With</h2>
          <div className="mt-5">
            <a
              href="https://facebook.com"
              className="flex pl-5 p-2 gap-2 border rounded-t items-center
             text-xl"
            >
              <BiLogoFacebookCircle className="text-2xl  text-blue-800 "></BiLogoFacebookCircle>
              Facebook
            </a>
            <a
              href="https://twitter.com"
              className="flex pl-5 p-2 gap-2 border-x border-b rounded-b items-center
             text-xl"
            >
              <AiFillTwitterCircle className="text-2xl  text-blue-400 "></AiFillTwitterCircle>
              Twitter
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
