import { useRef } from 'react'
import TextScrambler from '../components/textscrambler/TextScrambler'
import useOnScreen from '../components/animation/useOnScreen'
import { Clock, LockKeyhole, LucideRocket, MoveRight, Smile } from 'lucide-react';

// images  
import group from '../assets/images/Group.png'
import group1 from '../assets/images/Group-1.png'
import group2 from '../assets/images/Group-2.png'
import group3 from '../assets/images/Group-3.png'
import group4 from '../assets/images/Group-4.png'
import group5 from '../assets/images/Group-5.png'
import group6 from '../assets/images/Group-6.png'
import group7 from '../assets/images/Group-7.png'
import Companies from '../components/Companies';



const LandingPage = () => {
    const sectionRef0 = useRef(10);
    const sectionRef1 = useRef(10);
    const isVisible0 = useOnScreen(sectionRef0);
    const isVisible1 = useOnScreen(sectionRef1);
    return (
        <main>
            <section className='relative overflow-hidden h-screen'
                ref={sectionRef0}
            >
                <div className='size-[600px] absolute -top-[40%] left-[26%] bg-[radial-gradient(circle,rgb(255,242,97),rgba(255,242,97,0.4),rgba(255,242,97,0))] rounded-full'>

                </div>
                <div className='  sm:flex justify-around items-center my-20'>
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


            <section className='overflow-hidden flex flex-col-reverse md:flex md:flex-row justify-around'
                ref={sectionRef1}>

                <div className='mx-8 md:mx-0 md:w-[35%] mt-4 md:mt-0 grid grid-cols-2 gap-7 '>
                    <div className={`bg-[#FFF261] py-6 px-2 rounded-l-[40px] rounded-br-[40px]  flex flex-col items-center trnasition-transform duration-[2s] ${isVisible1 ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
                        <div className='w-16 h-16 flex justify-center items-center bg-[#262626] rounded-full'>
                            <LucideRocket className='w-8 h-8 text-white' />
                        </div>

                        <div className='text-center text-[#262626]'>
                            <h1 className='text-2xl '>Fast</h1>
                            <p className='text-sm'>Fast servers, connect easily and instantly.</p>
                        </div>
                    </div>

                    <div className={`bg-[#FFF261] py-6 px-2 rounded-l-[40px] rounded-tr-[40px]  flex flex-col items-center trnasition-transform duration-[2s] ${isVisible1 ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
                        <div className='w-16 h-16 flex justify-center items-center bg-[#262626] rounded-full'>
                            <Smile className='w-8 h-8 text-white' />
                        </div>
                        <div className='text-center text-[#262626]'>
                            <h1 className='text-2xl '>Easy to use</h1>
                            <p className='text-sm'>Simple and easy to use and instantly.</p>
                        </div>
                    </div>

                    <div className={`bg-[#FFF261] py-6 px-2 rounded-r-[40px] rounded-bl-[40px]  flex flex-col items-center trnasition-transform duration-[2s] ${isVisible1 ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>
                        <div className='w-16 h-16 flex justify-center items-center bg-[#262626] rounded-full'>
                            <Clock className='w-8 h-8 text-white' />
                        </div>
                        <div className='text-center text-[#262626]'>
                            <h1 className='text-2xl '>Real Time</h1>
                            <p className='text-sm'>Connect with your loved ones more faster</p>
                        </div>
                    </div>

                    <div className={`bg-[#FFF261] py-6 px-2 rounded-r-[40px] rounded-tl-[40px]  flex flex-col items-center trnasition-transform duration-[2s] ${isVisible1 ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'}`}>
                        <div className='w-16 h-16 flex justify-center items-center bg-[#262626] rounded-full'>
                            <LockKeyhole className='w-8 h-8 text-white' />
                        </div>
                        <div className='text-center text-[#262626]'>
                            <h1 className='text-2xl'>Safe and Private</h1>
                            <p className='text-sm'>Enjoy your safety when connecting with customers.</p>
                        </div>
                    </div>
                </div>

                <div className=' mx-8 md:mx-0 flex flex-col gap-5  md:w-[35%] sm:ml-8 text-[#262626]'>
                    <h1 className='text-4xl lg:text-6xl font-semibold  '>
                        <span className='flex gap-3'>
                            <span className={`trnasition-transform duration-[2s] ${isVisible1 ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}><TextScrambler targetWord={"Why"} animationSpeed={80} /></span>
                            <span className={`text-[#250066] trnasition-transform duration-[2s] ${isVisible1 ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}><TextScrambler targetWord={"Talkify "} animationSpeed={80} /></span>
                        </span>
                        {/* Why <span className='text-[#250066]'>Talkify</span> */}
                    </h1>

                    <p className={`text-sm sm:text-base trnasition-transform duration-[2s] `}>
                        <TextScrambler targetWord={"A messaging platform that allows you to connect with your friends and family easily and quickly. It has special features that make it easy to use and connect with your loved ones. "} animationSpeed={20} />
                    </p>

                    <button className='flex w-fit  items-center gap-3 bg-[#250066] text-white rounded-md px-4 py-2 ease-in-out duration-500 hover:scale-105'>
                        <span className='text-sm sm:text-base font-semibold '>Try it Now</span>
                        <MoveRight className='h-5 w-5 ' />
                    </button>
                </div>



            </section>
            <section className='mt-24 mx-32 relative overflow-hidden'>
                <div className="absolute top-0 left-0 w-2/3 h-full
                 bg-gradient-to-r from-white via-transparent to-transparent 
                 pointer-events-none z-20"></div>
                <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-white via-transparent to-transparent pointer-events-none z-20"></div>
                <Companies />
            </section>


            <section className='mt-[490px]'>

            </section>
        </main>
    )
}

export default LandingPage