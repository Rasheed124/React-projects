import React from "react";
import { Link } from "react-router-dom";

const Item = ({ id, name, image, features, old_price, new_price }) => {
  const formattedName = name.trim().toLowerCase().replace(/\s+/g, "-");
  return (
    <div key={id}>
      <Link
        to={`/product/${formattedName}/${id}`}
        //if neccessary
        onClick={window.scrollTo(0, 0)}
      >
        <div className="shadow-lg h-[12rem] grid grid-cols-2 relative">
          <img src={image} alt={name} className="h-[192px] w-full" />
          <div className="rounded-e-lg bg-gray-500 tex px-3 py-3">
            <h3 className="text-[.9rem] pb-2">{name}</h3>
            <ul className="list-disc pl-4">
              {features.map((feature, index) => (
                <li key={index} className="">
                  {feature}
                </li>
              ))}
            </ul>
            <p className="absolute bottom-1">
              ₦ <span className="text-red-300">{old_price}</span>{" "}
              <span className="text-green-900 font-bold underline">
                {new_price}
              </span>
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Item;
