import React from 'react'
import FoodList from './FoodList'

// 객체의 이름을 지정해준다. price는 지정되지 않아서 price로 지정됨.
const FoodItem = ({foodId: id, foodName: fName, price}) => {

    //console.log(`props: `, props);
    

  return (
    <li id={id}>{fName} ({price}원)</li>
  )
}

export default FoodItem