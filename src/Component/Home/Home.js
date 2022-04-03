import React, { useEffect, useState } from 'react';
import Meal from '../Meal/Meal';

const Home = () => {
    const [searchText,setSearchText]=useState('');
    const [meals,setMeals]=useState([]);

    useEffect(()=>{
        const url=`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
 fetch(url)
 .then(res=>res.json())
 .then(data=>setMeals(data.meals))    
    },[searchText])
    const searchFood=e=>{
        setSearchText(e.target.value)
        
    }
    return (

        <div>
           <h3 className='text-lg'> Find Food You want</h3>
     <br />
     <input type="text" placeholder='Enter your Favorite Food' className='mb-8 shadow appearance-none border rounded w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' onChange={searchFood}  />
     <h5 className='text-xl mb-5'> Food Found {meals.length} </h5>
        <div className='container grid grid-cols-3 gap-10'>
        {
            meals.map(meal=><Meal meal={meal} key={meal.idMeal}></Meal>)
        }
        </div>
        </div>
    );
};

export default Home;