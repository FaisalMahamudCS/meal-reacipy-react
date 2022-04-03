import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Detail from '../Detail/Detail';

const MealDetails = () => {
    const {i}=useParams();
    const [findDetails,setDetails]=useState([]);
    useEffect(()=>{
   const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${i}`
 fetch(url)
 .then(res=>res.json())
 .then(data =>setDetails(data.meals))
    },[i])
    return (
        <div className=''>
            
            {
                findDetails.map(detail=><Detail key={i} detail={detail}></Detail>)
            }
        </div>
    );
};

export default MealDetails;