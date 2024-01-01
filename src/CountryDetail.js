import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import CountriesData from './data.json'


const CountryDetail = () => {
    const { alpha3Code } = useParams();
    const [countryData, setCountryData] = useState(null);
    const [borderingCountryNames, setBorderingCountryNames] = useState([]);

    useEffect(() => {
        const foundCountry = CountriesData.find(country => country.alpha3Code === alpha3Code);
        if (foundCountry) {
            setCountryData(foundCountry);

            // Fetch names of bordering countries
            const borderingCountries = foundCountry.borders.map(borderCode => {
                const borderCountry = CountriesData.find(country => country.alpha3Code === borderCode);
                return borderCountry ? borderCountry.name : ''; // Return empty string if country not found
            });
            setBorderingCountryNames(borderingCountries);
        } else {
            console.error('Country not found');
        }
    }, [alpha3Code]);


    return (
        <section className='px-6 sm:px-12 lg:px-20 py-20 dark:bg-darkMode  bg-lightMode'>
            <div className='pb-20'>
                <Link to="/">
                    <button type='button' className='dark:shadow-dark shadow-light dark:bg-dark-blue bg-dark-white rounded-lg px-6 py-2 dark:text-dark-white text-dark-blue'>
                        <FontAwesomeIcon icon={faArrowLeft} />
                        <span className='ml-3'>Back</span>
                    </button>
                </Link>
            </div>
            {countryData && (
                <div className='flex justify-center sm:flex-row flex-col sm:justify-between'>
                    <div className='sm:w-[45%]'>
                        <img src={countryData.flag} alt={countryData.name} />
                    </div>
                    <div className='sm:w-[45%] sm:pt-0 pt-14'>
                        <h1 className="text-4xl font-800 pb-7 dark:text-dark-white text-dark-blue ">{countryData.name}</h1>
                        <div className='flex justify-between gap-4 flex-wrap'>
                            <div>
                                <p className='font-600  dark:text-dark-white text-dark-blue'>
                                    Native Name:&nbsp;
                                    <span className='dark:text-light-dark-gray text-light-very-dark-blue font-300'>{countryData.nativeName}</span>
                                </p>
                                <p className=' font-600  py-1 dark:text-dark-white text-dark-blue'>
                                    Population:&nbsp;
                                    <span className='dark:text-light-dark-gray text-light-very-dark-blue font-300'>{countryData.population}</span>
                                </p>
                                <p className=' font-600  dark:text-dark-white text-dark-blue'>
                                    Region:&nbsp;
                                    <span className='dark:text-light-dark-gray text-light-very-dark-blue font-300'>{countryData.region}</span>
                                </p>
                                <p className='font-600  py-1 dark:text-dark-white text-dark-blue'>
                                    Sub Region:&nbsp;
                                    <span className='dark:text-light-dark-gray text-light-very-dark-blue font-300'>{countryData.subregion}</span>
                                </p>
                                <p className=' font-600  dark:text-dark-white text-dark-blue'>
                                    Capital:&nbsp;
                                    <span className='dark:text-light-dark-gray text-light-very-dark-blue font-300'>{countryData.capital}</span>
                                </p>
                            </div>
                            <div>
                                <p className=' font-600  dark:text-dark-white text-dark-blue'>
                                    Top Level Domain:&nbsp;
                                    <span className='dark:text-light-dark-gray text-light-very-dark-blue font-300'>{countryData.topLevelDomain}</span>
                                </p>

                                <p className='font-600  py-1 dark:text-dark-white text-dark-blue'>
                                    Currency:&nbsp;
                                    {countryData.currencies.map((currency, index) => (
                                        <span key={index} className='dark:text-light-dark-gray text-light-very-dark-blue font-300'>
                                            {currency.name}({currency.code})
                                            {index !== countryData.currencies.length - 1 && ', '}
                                        </span>
                                    ))}
                                </p>
                                <p className=' font-600  dark:text-dark-white text-dark-blue pb-1'>
                                    Languages:&nbsp;
                                    {countryData.languages.map((languages, index) => (
                                        <span className='dark:text-light-dark-gray text-light-very-dark-blue font-300'>
                                            {languages.name}
                                            {index !== countryData.languages.length - 1 && ', '}
                                        </span>
                                    ))}
                                </p>
                            </div>
                        </div>
                        <div className='inline-flex pt-14'>
                            <h1 className='font-600  dark:text-dark-white text-dark-blue'>Border Countries:&nbsp;</h1>
                            <div className='flex items-center gap-1 flex-wrap'>
                                {borderingCountryNames.length > 0 ? (
                                    borderingCountryNames.map((borderCountry, index) => (
                                        <Link
                                            key={index}
                                            to={`/country/${countryData?.borders[index]}`} // Using optional chaining here to prevent undefined error
                                            className="dark:text-dark-white text-light-very-dark-blue mx-2 font-300 px-3 py-1 dark:shadow-dark shadow-light rounded-sm mb-2"
                                        >
                                            {borderCountry}
                                        </Link>
                                    ))
                                ) : (
                                    <p className='dark:text-light-dark-gray text-light-very-dark-blue ml-2'>No bordering countries found</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            )
            }
        </section >
    )
}

export default CountryDetail