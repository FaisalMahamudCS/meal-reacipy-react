import React from 'react';
import { Link } from 'react-router-dom';

const Head = () => {
    return (
        <div>
            <nav className='flex justify-between font-sans'>
                <div>
                    <img src="https://www.themealdb.com/images/logo-small.png" alt="" srcset="" />
                </div>
                <ul className=''>
                    <Link className='p-5' to='/home'>Home</Link>
                    <Link className='p-5' to='/about'>About</Link>
                    <Link className='p-5' to='/category'>Category</Link>
                    <Link className='p-5' to='/ingrediant'>Ingrediant</Link>
                </ul>
            </nav>
        </div>
    );
};

export default Head;