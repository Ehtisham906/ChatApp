import { useRef } from 'react'
import TextScrambler from '../components/textscrambler/TextScrambler'
import useOnScreen from '../components/animation/useOnScreen'

// images
import landingHeroImage from '../assets/images/landingPage.png'
import lines from '../assets/images/line.png'
import group from '../assets/images/Group.png'
import group1 from '../assets/images/Group-1.png'
import group2 from '../assets/images/Group-2.png'
import group3 from '../assets/images/Group-3.png'
import group4 from '../assets/images/Group-4.png'
import group5 from '../assets/images/Group-5.png'
import group6 from '../assets/images/Group-6.png'
import group7 from '../assets/images/Group-7.png'



const LandingPage = () => {
    const sectionRef0 = useRef(10);
    const isVisible0 = useOnScreen(sectionRef0);
    return (
        <main>
            <section className='overflow-hidden '
                ref={sectionRef0}
            >
                <div className=' md:flex justify-around items-center'>
                    <div className='ml-8 md:ml-0 text-[#262626] md:w-[45%] relative'>
                        <h1 className='text-4xl lg:text-6xl '>
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
                   
                    <div className=' mx-auto w-[90%] md:w-[45%] grid mt-4 md:mt-0  grid-cols-3 items-center    '>

                        <div className={`transition-transform duration-[3s] ease-in-out ${isVisible0 ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
                            <img src={group6} alt="" width={200} />
                        </div>

                        <div className={`transition-transform duration-[2s] ease-in-out ${isVisible0 ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
                            <img src={group1} alt="" width={200} />
                        </div>
                        <div
                            className={`transition-transform duration-[4s] ease-in-out ${isVisible0 ? 'translate-x-[0px] opacity-100' : '-translate-x-full opacity-0'}`}
                        >
                            <img src={group5} alt="" width={100} />
                            <img src={group2} alt="" />
                        </div>
                        <div></div>
                        <div className={`transition-transform duration-[3s] ease-in-out ${isVisible0 ? 'translate-x-[0px] opacity-100' : '-translate-x-full opacity-0'}`}><img src={group3} alt="" width={200} /></div>
                        <div className={`transition-transform duration-[5s] ease-in-out ${isVisible0 ? 'translate-x-[0px] opacity-100' : '-translate-x-full opacity-0'}`}><img src={group} alt="" width={150} /></div>
                        <div className={`transition-transform duration-[4s] ease-in-out ${isVisible0 ? 'translate-x-[0px] opacity-100' : '-translate-x-full opacity-0'}`}><img src={group7} alt="" width={300} /></div>
                        <div className={`transition-transform duration-[3s] ease-in-out ${isVisible0 ? 'translate-y-[0px] opacity-100' : 'translate-y-full opacity-0'}`}><img src={group4} alt="" width={300} /></div>


                    </div>
                </div>
            </section>


            <section className='mt-[969px] overflow-hidden'
            >
                <h1 className='text-[90px] text-red-900'>
                    Hello
                </h1>
                s
            </section>

        </main>
    )
}

export default LandingPage