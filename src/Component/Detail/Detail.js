import React from 'react';

const Detail = (props) => {
const {strMeal,strMealThumb,strInstructions}=props.detail;
    return (
        <div className='flex container '>
          <div className='p-10'>
              <img src={strMealThumb} alt="" />
          </div>
          <div className='w-1/2'>
      <p className=' text-2xl'>{strMeal}</p>
      {strInstructions}
          </div>
        </div>
    );
};

export default Detail;