import React from 'react';
import { Link } from 'react-router-dom';
import './Head.css'

const Head = () => {
    return (
        <div className='font-mono'>
    <nav className='h-20 flex  justify-between font-sans'>
                <div className='flex items-center'>
                    <img src="https://www.themealdb.com/images/logo-small.png" alt="" srcset="" />
                </div>
                <ul className=' flex text-lg  items-center'>
                    <Link className='p-5 ' to='/'>Home</Link>
                    <Link className='p-5' to='/about'>About</Link>
                    <Link className='p-5' to='/category'>Category</Link>
                    <Link className='p-5' to='/ingrediant'>Ingrediant</Link>
                </ul>
            </nav>
        </div>
    );
};

export default Head;