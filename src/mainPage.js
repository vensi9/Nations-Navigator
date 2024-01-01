import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import CountriesData from './data.json'

const CountryList = ({ countries }) => {
    return (
        <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-10 md:gap-16 px-6 sm:px-12 lg:px-20 dark:bg-darkMode  bg-lightMode'>
            {countries.map((country) => {
                const { numericCode, name, population, region, capital, flag } = country;
                return <article key={numericCode} className='dark:bg-dark-blue bg-dark-white dark:shadow-dark shadow-light  rounded-b-md'>
                    <Link to={`/country/${country.alpha3Code}`}>
                        <div>
                            <img src={flag} alt={name} className=' rounded-t-md' />
                            <div className="details mt-[-20px] px-5 py-10">
                                <h1 className="text-18 font-800 text-dark-blue dark:text-dark-white mb-5">
                                    {name}
                                </h1>
                                <h2 className='text-14 font-600 text-dark-blue dark:text-dark-white'>Population:&nbsp;<span className='dark:text-light-dark-gray text-light-very-dark-blue font-300'>{population}</span></h2>
                                <h2 className='py-1 text-14 font-600 text-dark-blue dark:text-dark-white'>Region:&nbsp;<span className='dark:text-light-dark-gray text-light-very-dark-blue font-300'>{region}</span></h2>
                                <h2 className=' text-14 font-600 text-dark-blue dark:text-dark-white'>Capital:&nbsp;<span className='dark:text-light-dark-gray text-light-very-dark-blue font-300'>{capital}</span></h2>
                            </div>
                        </div>
                    </Link>
                </article>
            })}
        </section>
    );
};

const MainPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedRegion, setSelectedRegion] = useState('');

    // Filter countries based on the search term
    const filteredCountries = CountriesData.filter(country =>
        country.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
        (!selectedRegion || country.region === selectedRegion)
    );

    const handleSearch = event => {
        setSearchTerm(event.target.value);
    };

    const handleRegionChange = event => {
        setSelectedRegion(event.target.value);
    };

    return (
        <>
            <div className=' dark:bg-darkMode bg-lightMode dark:shadow-dark shadow-light'>
                <section className=' sm:px-12 lg:px-20 py-20'>
                    <div className='flex justify-between items-center flex-wrap'>
                        <div className='w-full sm:w-auto mx-6 sm:mx-0 py-2 lg:py-4 pl-4 pr-6 md:pr-12 xl:pl-8 xl:pr-28 dark:bg-dark-blue  bg-dark-white dark:shadow-dark shadow-light font-600 rounded-sm'>
                            <FontAwesomeIcon icon={faSearch} className='dark:text-dark-white text-dark-blue' />
                            <input
                                type="text"
                                name='search'
                                id='search'
                                placeholder="Search for a country..."
                                value={searchTerm}
                                onChange={handleSearch}
                                className=' ml-5 text-14 sm:text-16  dark:bg-dark-blue bg-dark-white placeholder-gray-500 focus:placeholder-gray-300 dark:text-dark-white text-dark-blue'
                            />
                        </div>
                        <select
                            name='select'
                            id='select'
                            // className='select cursor-pointer text-14 sm:text-16   dark:bg-dark-blue  bg-dark-white dark:text-dark-white text-dark-blue dark:shadow-dark shadow-light font-600 rounded-sm' 
                            value={selectedRegion}
                            className='cursor-pointer text-14 sm:text-16 mt-4 sm:mt-0 mx-6 sm:mx-0 py-2 lg:py-4 px-10 dark:bg-dark-blue  bg-dark-white dark:text-dark-white text-dark-blue dark:shadow-dark shadow-light font-600 rounded-sm'
                            onChange={handleRegionChange}
                            aria-label="Countries"
                        >
                            <option value="">Filter by Region</option>
                            <option value="Africa">Africa</option>
                            <option value="Americas">Americas</option>
                            <option value="Asia">Asia</option>
                            <option value="Europe">Europe</option>
                            <option value="Oceania">Oceania</option>
                        </select>
                    </div>
                </section >
                <CountryList countries={filteredCountries} />
            </div>
        </>
    );
}

export default MainPage