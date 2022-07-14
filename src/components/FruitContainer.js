import { useState, useEffect } from "react";
import FruitFilter from "./FruitFilter";
import FruitList from "./FruitList";

function FruitContainer({ fruits }) {
  //initialize the fruit list to the full list passed in props
  const [fruitsToDisplay, setFruitsToDisplay] = useState(fruits);

  //filter , handle the filter, update state when the filter value
  //changes.
  //store the filter state and filter the list of fruits to display

  const handleFilterChange = (event) => {
    event.preventDefault();
    const filteredValue = event.target.value;
    setFruitsToDisplay((_prevState) => {
      //remove the fruits that dont contain the filter value
      const filteredFruitList = fruits.filter((fruit) => {
        return fruit.toLowerCase().includes(filteredValue.toLowerCase());
      });
      return filteredFruitList;
    });
  };

  useEffect(() => {
    console.log("do something", fruitsToDisplay);
  }, [fruitsToDisplay]);

  return (
    <div>
      <FruitFilter onChange={(e) => handleFilterChange(e)} />
      <FruitList fruitsToDisplay={fruitsToDisplay} />
    </div>
  );
}
//all of the data is hoisted to the top of the tree
// and it is passed down to the child components

export default FruitContainer;
