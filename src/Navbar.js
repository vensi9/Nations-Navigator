import React from 'react'
import ThemeToggle from './ThemeToggle'

const Navbar = () => {
    return (
        <nav className='dark:shadow-dark shadow-light bg-dark-white dark:bg-dark-blue  flex justify-between items-center px-6 sm:px-12 lg:px-20  py-8'>
            <h1 className='text-16 xs:text-lg sm:text-xl  text-dark-blue dark:text-dark-white font-800'>Where in the world?</h1>
            <div className='flex flex-1 justify-end'>
                <ThemeToggle />
            </div>
        </nav>
    )
}

export default Navbar