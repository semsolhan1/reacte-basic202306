import React from 'react'
import FoodList from './FoodList'

const FoodItem = ({foodId: id, foodName: fName, price}) => {

    //console.log(`props: `, props);
    

  return (
    <li id={id}>{fName} ({price}원)</li>
  )
}

export default FoodItem