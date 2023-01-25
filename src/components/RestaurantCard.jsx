/* eslint-disable jsx-a11y/alt-text */
import { AiFillStar } from "react-icons/ai";
import { SlLocationPin } from "react-icons/sl";
import { RiPinDistanceLine } from "react-icons/ri";

function RestaurantCard(props) {
  return (
    <div className="rounded-md w-[20em] h-[24em] bg-[#F8F8F8] m-4 p-6">
      <img
        src={
          "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" +
          props.cloudinaryImageId
        }
        className="rounded-md"
      />
      <p className="text-[17px] mt-3">{props.name}</p>
      <div className="h-6 text-[12px] mt-3 text-[#808080]">
        {props.cuisines.join(", ")}
      </div>
      <div className="flex flex-row justify-between items-center mt-2">
        <div className="flex items-center text-[17px] mt-3">
          <span>
            <AiFillStar color={props.avgRating === "--" ? "" : "green"} />
          </span>
          {props.avgRating}
        </div>
        <div className="flex gap-1 items-center text-[15px] pt-2 capitalize">
          <span>
            <SlLocationPin color="#FC8018" />
          </span>
          {props.locality}
        </div>
      </div>
      <div className="flex gap-1 items-center text-[17px] mt-2">
        <span>
          <RiPinDistanceLine color="#FC8018" />
        </span>
        {props.lastMileTravelString}
      </div>
    </div>
  );
}

export default RestaurantCard;
