import React from "react";
import { Link } from "react-router-dom";

const Services = ({ event }) => {
  const { title, price, image, description, date, id } = event;
  return (
    <div className="card w-full bg-base-100 shadow-2xl">
      <figure>
        <img
          className="w-full h-[300px] md:h-[250px]"
          src={image}
          alt={title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-lg">
          {title}
          <div className="badge badge-secondary">{price}</div>
        </h2>
        <p>{description}</p>
        <div className="card-actions justify-end">
          <Link
            to={`/service/${id}`}
            className="w-full bg-purple-700 text-white py-3 rounded-full text-center text-xl font-bold"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
