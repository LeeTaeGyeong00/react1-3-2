import { useState } from "react";

export default function(initalValvue){

    const[count,setCount] = useState(initalValvue)
    const increaseCount =() => setCount((count) => count +1)
    const decreaseCount =() => setCount((count) => Math.max(count-1,0))
    return [count, increaseCount,decreaseCount]
    
}