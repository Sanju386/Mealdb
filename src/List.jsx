import React, { useState } from "react";
import { useEffect } from "react";

const List = () => {

const[data,setData]= useState([])
console.log(data)


  const fetchData = async () => {
    const response = await fetch(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );

    const {categories} = await response.json();
   console.log(categories)
  

   setData(categories)
  };



useEffect(()=>{
    fetchData();
},[])


  return <div>

{
data.map((ele)=>{
    return <div key={ele.idCategory}> 
        <h1>{ele.strCategory}</h1>
    <img src={ele.strCategoryThumb}/>
    </div>
})

}


  </div>;
};

export default List;
