import React from 'react'
import TextScrambler from '../components/textscrambler/TextScrambler'
import landingHeroImage from '../assets/images/landingPage.png'
import lines from '../assets/images/line.png'

const LandingPage = () => {
    return (
        <main>
            <section>
                <div className='h-screen lg:flex justify-around items-center'>
                    <div className='text-[#262626] lg:w-[45%] relative'>
                        <h1 className='text-6xl'>
                            <TextScrambler targetWord={"Get the best "} animationSpeed={40} />
                            <span className='font-bold text-[#250066]'>
                                <TextScrambler targetWord={"experience "} animationSpeed={40} />
                            </span>
                            <span>
                                <TextScrambler targetWord={"when sending  "} animationSpeed={40} />
                            </span>
                            <span>
                                <TextScrambler targetWord={"text"} animationSpeed={40} />
                            </span>

                            <span className='font-bold text-[#250066]'>
                                <TextScrambler targetWord="messages." animationSpeed={40} />
                            </span>
                        </h1>

                        <div className='absolute -top-10'>
                            <img 
                            src={lines} 
                            alt="" 
                            width={100}
                            />

                        </div>
                        <div className='absolute top-10 right-0'>
                            <img 
                            src={lines} 
                            alt="" 
                            width={100}
                            />
                        </div>
                        <div className='absolute top-16 right-0'>
                            <img 
                            src={lines} 
                            alt="" 
                            width={100}
                            />
                        </div> 
                        <div className='absolute -bottom-10 left-20'>
                            <img 
                            src={lines} 
                            alt="" 
                            width={100}
                            />
                        </div>
                    </div>
                    <div className='w-[45%] flex justify-center items-center'>
                        <img
                            src={landingHeroImage}
                            className='object-cover '
                            alt=""
                            width={500}
                        />
                    </div>
                </div>
            </section>


            <section className='mt-40'>

            </section>

        </main>
    )
}

export default LandingPage