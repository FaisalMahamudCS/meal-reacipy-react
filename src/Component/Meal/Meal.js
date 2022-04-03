import React from 'react';
import { useNavigate } from 'react-router-dom';

const Meal = (props) => {
   
    const {idMeal,strMeal,strCategory,strMealThumb}=props.meal;
    const navigate=useNavigate();
    const showFriendDetails=()=>{
        const path=`/details/${idMeal}`;
        navigate(path)
    }
    return (
        <div className='shadow shadow-green-400 '>
            <div className='card rounded border-solid border-2 border-green-400 '>
                <div className="img">
                    <img src={strMealThumb} alt="" srcset="" />
                </div>
                <div className="details">
                {strMeal}
              <p >Category:  {strCategory}</p> 
           
                
                </div>
                <div>
                <button onClick={showFriendDetails} className='bg- px-20 w-full py-2 text-white bg-green-500'>Details</button>
                </div>
            </div>
        </div>
    );
};

export default Meal;