import React from 'react'
import {Link} from 'react-router-dom';
// import Projects from './Projects';

const navbar = () => {
    return (
        <div>
            <nav className='navbarList'>
                <Link to='/'>Home</Link>
                <Link to='/projects'> Projects</Link>
                <Link to='/blogs'>Blogs</Link>
                <Link to='/magic'>Magic</Link>
            </nav>
        </div>
    )
}

export default navbar
