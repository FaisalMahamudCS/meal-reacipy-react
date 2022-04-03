import React from 'react';

const Meal = (props) => {
    const {strMeal,strCategory,strMealThumb}=props.meal;
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
                <button className='bg- px-20 w-full py-2 text-white bg-green-500'>Details</button>
                </div>
            </div>
        </div>
    );
};

export default Meal;