import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

function page() {
  return (
    <div>
        <Header/>
        <section>
        <div className="contant_hero "> </div>

        <div className=' shadow-2xl w-full md:w-3/4 lg:w-2/4 xl:w-2/5 md:p-16 p-4 m-auto md:mt-24 mt-4 rounded-xl'>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
               
                <div className="mt-2.5">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        placeholder='Order Id/Tracking No.'
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <div className="mt-2.5">
                      <input
                        type="text"
                        name="first-name"
                        id="first-name"
                        autoComplete="given-name"
                        placeholder='Email/Phone No.'
                        className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-500 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <div className="mt-2.5">
                    <button className='py-2 px-4 bg-orange-500 text-white rounded-md'>Track Order</button>
                    </div>
               
            </div>
        </div>
        </section>
        <Footer/>
    </div>
  )
}

export default page