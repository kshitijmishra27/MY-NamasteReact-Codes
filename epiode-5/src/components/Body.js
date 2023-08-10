import RestaurantCard from "./RestaurantCard";
import { restaurantList } from "../../contants";
import { useState } from "react";


const Body = () => {

const [searchText, setsearchText] = useState("");
const [restaurants, setRestaurants] = useState(restaurantList);

const filterData = (searchText, restaurants) =>{
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}


    return (
      <>
        <div className="search-container">
          <input
            type = "text"
            className="search-input"
            placeholder="Search"
            onChange={(e) =>{
              setsearchText(e.target.value);
            }}
          />
          <button 
          className="search-btn"
          onClick={()=>{
            const data= filterData(searchText, restaurants)
            setRestaurants(data);
          }}

          >Search</button>
        </div>
        <div className="restaurant-list">
          {
            restaurants.map((restaurant) =>{
            return <RestaurantCard {...restaurant.data} key = {restaurant.data.id}/>
            })
          }   
        </div> 
      </> 
    );
}

export default Body;
