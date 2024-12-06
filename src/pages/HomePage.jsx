import React from 'react'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const HomePage = () => {
  return (
    <div>
        <NavBar/>

        <main className='flex gap-6'>
            <section className='px-4 py-4 border ml-5 mt-4 mb-5 flex flex-col gap-5'>
                    <h2>My Prefeences</h2>

                    <div>
                        <h1>Event Type</h1>

                    <ul>
                        <li className='flex items-center'><input type="checkbox" name="" id="" /><p>Workshop</p></li>
                        <li className='flex items-center'><input type="checkbox" name="" id="" /><p>Workshop</p></li>
                        <li className='flex items-center'><input type="checkbox" name="" id="" /><p>Workshop</p></li>
                    </ul>
                    </div>

                    <div className='flex flex-col gap-4'>
                        <div className='flex flex-col'>
                            <label htmlFor="Date">Date</label>
                            <input type="date" name="" id="" />
                        </div>

                        <div className='flex flex-col'>
                            <label htmlFor="Date">Date</label>
                            <input type="email" name="" id="" />
                        </div>
                    </div>
            </section>

            <section>
                <div>

                </div>

                <div>

                </div>
            </section>

        </main>

        <Footer/>
    </div>
  )
}

export default HomePage