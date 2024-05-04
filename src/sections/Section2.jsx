import { NavLink } from 'react-router-dom';
import React from 'react'

const Section2 = () => {
    return (
        <div>
            <div className='section2'>
            <NavLink to={"/Creators"}><div className='img1'><h1>Veb dizayn</h1></div></NavLink>
            <NavLink to={"/Creators"}><div className='img2'><h1>Şəxsi inkişaf</h1></div></NavLink>
            <NavLink to={"/Creators"}><div className='img4'><h1>Yazıçılıq</h1></div></NavLink>
            <NavLink to={"/Creators"}><div className='img3'><h1>İncəsənət</h1></div></NavLink>
            <NavLink to={"/Creators"}><div className='img5'><h1>Blog</h1></div></NavLink>
            <NavLink to={"/Creators"}><div className='img7'><h1>İdman</h1></div></NavLink>
            <NavLink to={"/Creators"}><div className='img6'><h1>Musiqi</h1></div></NavLink>
            </div>
        </div>
    )
}

export default Section2