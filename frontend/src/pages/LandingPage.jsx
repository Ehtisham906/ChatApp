import { useRef } from 'react'
import TextScrambler from '../components/textscrambler/TextScrambler'
import useOnScreen from '../components/animation/useOnScreen'
import { Clock, LockKeyhole, LucideRocket, MoveRight, Smile } from 'lucide-react';

// images 
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
                <div className='  sm:flex justify-around items-center'>
                    <div className='flex justify-center sm:block sm:ml-8 md:ml-4 text-[#262626] sm:w-[35%] relative'>
                        <h1 className='text-4xl lg:text-6xl '>
                            <TextScrambler targetWord={"Get the best "} animationSpeed={80} />
                            <span className='font-bold text-[#250066]'>
                                <TextScrambler targetWord={"experience "} animationSpeed={80} />
                            </span>
                            <span>
                                <TextScrambler targetWord={"when sending  "} animationSpeed={80} />
                            </span>
                            <span>
                                <TextScrambler targetWord={"text"} animationSpeed={80} />
                            </span>

                            <span className='font-bold text-[#250066]'>
                                <TextScrambler targetWord="messages." animationSpeed={80} />
                            </span>
                        </h1>

                        <div className='hidden sm:visible absolute -top-10'>
                            <img
                                src={lines}
                                alt=""
                                width={100}
                            />

                        </div>
                        <div className='hidden sm:visible absolute top-10 right-0'>
                            <img
                                src={lines}
                                alt=""
                                width={100}
                            />
                        </div>
                        <div className='hidden sm:visible absolute top-16 right-0'>
                            <img
                                src={lines}
                                alt=""
                                width={100}
                            />
                        </div>
                        <div className='hidden sm:visible absolute -bottom-10 left-20'>
                            <img
                                src={lines}
                                alt=""
                                width={100}
                            />
                        </div>
                    </div>

                    <div className='mx-auto sm:mx-0 w-[60%] sm:w-[35%] grid mt-4 md:mt-0  grid-cols-3 items-center    '>

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


            <section className='overflow-hidden mt-24 sm:flex justify-around'>
                <div className='sm:w-[35%] grid grid-cols-2 gap-7 '>
                    <div className='bg-[#FFF261] py-6 px-2 rounded-l-3xl rounded-br-3xl  flex flex-col items-center'>
                        <div className='w-16 h-16 flex justify-center items-center bg-[#262626] rounded-full'>
                            <LucideRocket className='w-8 h-8 text-white' />
                        </div>

                        <div className='text-center text-[#262626]'>
                            <h1 className='text-2xl '>Fast</h1>
                            <p className='text-sm'>Fast servers, connect easily and instantly.</p>
                        </div>
                    </div>
                    <div className='bg-[#FFF261] py-6 px-2 rounded-l-3xl rounded-tr-3xl  flex flex-col items-center'>
                        <div className='w-16 h-16 flex justify-center items-center bg-[#262626] rounded-full'>
                            <Smile className='w-8 h-8 text-white' />
                        </div>
                        <div className='text-center text-[#262626]'>
                            <h1 className='text-2xl '>Easy to use</h1>
                            <p className='text-sm'>Simple and easy to use and instantly.</p>
                        </div>
                    </div>
                    <div className='bg-[#FFF261] py-6 px-2 rounded-l-3xl rounded-tr-3xl  flex flex-col items-center'>
                        <div className='w-16 h-16 flex justify-center items-center bg-[#262626] rounded-full'>
                            <Clock  className='w-8 h-8 text-white' />
                        </div>
                        <div className='text-center text-[#262626]'>
                            <h1 className='text-2xl '>Real Time</h1>
                            <p className='text-sm'>Connect with your loved ones more faster</p>
                        </div>
                    </div>
                    <div className='bg-[#FFF261] py-6 px-2 rounded-l-3xl rounded-tr-3xl  flex flex-col items-center'>
                        <div className='w-16 h-16 flex justify-center items-center bg-[#262626] rounded-full'>
                            <LockKeyhole  className='w-8 h-8 text-white' />
                        </div>
                        <div className='text-center text-[#262626]'>
                            <h1 className='text-2xl'>Safe and Private</h1>
                            <p>Enjoy your safety when connecting with customers.</p>
                        </div>
                    </div>
                    
                    <div></div>
                    <div></div>
                </div>
                <div className=' flex flex-col gap-5  sm:w-[35%] sm:ml-8 text-[#262626]'>

                    <h1 className='text-4xl lg:text-6xl font-semibold  '>
                        Why <span className='text-[#250066]'>Talkify</span>
                    </h1>
                    <p className='text-sm sm:text-base'>Connect with your freinds   easily, quickly, and of course  have special features</p>
                    <button className='flex w-fit  items-center gap-3 bg-[#250066] text-white rounded-md px-4 py-2 ease-in-out duration-500 hover:scale-105'>
                        <span className='text-sm sm:text-base font-semibold '>Try it Now</span>
                        <MoveRight className='h-5 w-5 ' />
                    </button>
                </div>


            </section>

        </main>
    )
}

export default LandingPage