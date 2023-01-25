/* eslint-disable jsx-a11y/alt-text */
import { useState } from "react";
import { useEffect } from "react";
import { apiUrl } from "../config";
import RestaurantCard from "./RestaurantCard";
import SearchVector from "../assets/search-vector.png";
import { MdOutlineCancel } from "react-icons/md";

function Restaurants() {
  const [restaurantLists, setRestaurantLists] = useState([]);
  const [tempResList, setTempResList] = useState([]);

  function searchRestaurant(search, restaurantLists) {
    return restaurantLists.filter((restaurant) =>
      restaurant.data.name.includes(search)
    );
  }

  function resetSearch(inputValue) {
    document.getElementById("reset-search").classList.remove("hidden");
    if (!inputValue) {
      document.getElementById("reset-search").classList.add("hidden");
    }
  }

  function resetSearchWhole() {
    document.getElementById("reset-search").classList.add("hidden");
    document.getElementById("search").value = "";
    setRestaurantLists(tempResList);
  }

  //API Call
  useEffect(() => {
    const fetchRestaurantLists = async () => {
      const res = await fetch(apiUrl);
      const data = await res.json();
      const fetchedData = await data?.data?.cards[2]?.data?.data?.cards;
      setRestaurantLists(fetchedData);
      setTempResList(fetchedData);
    };
    fetchRestaurantLists();
  }, []);

  return (
    <>
      <div className="flex lg:flex-row flex-col lg:gap-8 gap-4 items-center justify-center bg-[#fc8018] py-10">
        <h2 className="text-2xl text-white font-medium">
          Search by Restaurant
        </h2>
        <img
          src={SearchVector}
          alt="search-vector"
          className="w-4 lg:flex hidden"
        />
        <div className="relative flex flex-col gap-4">
          <div className="absolute inset-y-0 left-0 lg:flex items-center pl-3 pt-[0.9em] lg:pt-0 pointer-events-none">
            <svg
              aria-hidden="true"
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              ></path>
            </svg>
          </div>
          <input
            autoComplete="off"
            id="search"
            type="text"
            className="block p-4 rounded-md w-[23.75rem] lg:w-[43.75rem] h-[3rem] outline-none pl-10"
            placeholder="Enter search text here..."
            required
            onChange={(e) => resetSearch(e.target.value)}
          ></input>
          <div className=" absolute inset-y-0 right-5 lg:flex items-center pt-2 lg:pt-0 pr-20 cursor-pointer">
            <MdOutlineCancel
              onClick={(e) =>
                resetSearchWhole(document.getElementById("search").value)
              }
              id="reset-search"
              className="hidden"
            />
          </div>
          <div className="absolute inset-y-0 right-0 lg:flex items-center pt-2 lg:pt-0 pr-3">
            <button
              onClick={() => {
                const data = searchRestaurant(
                  document.getElementById("search").value,
                  restaurantLists
                );
                setRestaurantLists(data);
              }}
              className="bg-black text-white rounded-lg py-1 px-2"
            >
              Search
            </button>
          </div>
        </div>
      </div>
      <div className="grid grid-flow-row grid-cols-3 grid-rows-5 px-6 lg:ml-36">
        {restaurantLists.map((restaurant) => {
          return (
            <RestaurantCard {...restaurant.data} key={restaurant.data.id} />
          );
        })}
      </div>
    </>
  );
}

export default Restaurants;
