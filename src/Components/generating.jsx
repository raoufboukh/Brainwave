import { brainwaveWhiteSymbol, check, play, service1, service2, service3 } from "../assets";
import { brainwaveServices, brainwaveServicesIcons } from "./constants";
import Loading from "./loading";
import Section from "./Section";

const Generating = () => {
    return (
        <Section id={'generative'}>
            <div className="container">
                <div className="text-center mb-14">
                    <h2 className="text-3xl lg:text-5xl text-white mb-5">Generative AI made for creators.</h2>
                    <p className="text-n-10">Brainwave unlocks the potential of AI-powered applications</p>
                </div>
                <div className="border relative rounded-lg flex justify-center xl:justify-normal gap-3 mb-5">
                    <div className="basis-full xl:basis-[70%] relative">
                        <img className="w-full relative h-[600px] lg:h-fit z-10" src={service1} alt="" />
                        <div className="absolute w-full h-full bg-gradient-to-t from-blue-600 to-violet-600 blur-3xl z-0 opacity-20 top-0 rounded-full"></div>
                        <Loading className='border border-n-10'/>
                    </div>
                    <div className="text-white absolute z-10 xl:relative px-4 lg:p-0 basis-[25%] mt-40">
                        <h4 className="text-3xl mb-5">Smartest AI</h4>
                        <p className="text-n-10 mb-8">Brainwave unlocks the potential of AI-powered applications</p>
                        <div>
                            {
                                brainwaveServices.map((br,index) => {
                                    return(
                                        <div key={index} className="flex gap-3 py-3 border-t-[0.5px] border-n-10">
                                            <img src={check} alt="" />
                                            <h5>{br}</h5>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <div className="grid md:grid-cols-[repeat(auto-fill,minmax(400px,1fr))] gap-7">
                    <div className="border h-[563px] md:h-full border-n-10 rounded-3xl relative overflow-hidden">
                        <img className="w-full h-full" src={service2} alt="" />
                        <div className="absolute left-1/2 -translate-x-1/2 z-10 bg-[rgb(0,0,0,40%)] top-0 h-full w-full ">
                            <div className="bg-black w-56 md:w-[250px] mx-auto text-white rounded-lg p-4 top-8 relative before:content-[''] before:absolute before:-right-[70px] overflow-y-clip before:-bottom-[38px] before:border-[40px] before:border-transparent before:border-l-black before:w-0 before:h-0">
                                <p>Hey Brainwave, enhance this photo</p>
                            </div>
                            <div className="absolute bottom-24 -translate-y-24 text-white left-1/2 -translate-x-1/2 -mb-[135px] p-7 w-full md:w-[440px]">
                                <h3 className="text-3xl mb-5">Photo editing</h3>
                                <p className="text-n-4">Automatically enhance your photos using our AI app's photo editing feature. Try it now!</p>
                            </div>
                        </div>
                    </div>
                    <div className="h-fit md:h-full p-4 bg-n-7 rounded-3xl relative">
                        <div className="p-5 md:p-10">
                            <h3 className="text-3xl text-white">Video generation</h3>
                            <p className="text-n-4 py-4 text-sm  md:text-lg">The world’s most powerful AI photo and video art generation engine. What will you create?</p>
                            <div className="py-3 md:py-5 flex justify-between">
                                {
                                    brainwaveServicesIcons.map((br,index) => {
                                        return(
                                            index !== 2 ? <div className="bg-n-6 p-1.5 md:p-4 rounded-xl" key={index}>
                                                                <img src={br} alt="" />
                                                            </div>: <div className="p-0.5 rounded-xl bg-background-image">
                                                                <div className="bg-n-8 p-1.5 md:p-4 rounded-xl" key={index}>
                                                                    <img src={br} alt="" />
                                                                </div>
                                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className="bg-n-8 rounded-3xl overflow-hidden relative">
                            <div className="bg-n-6 text-white rounded-lg py-2 px-4 w-56 md:w-[300px] left-10 top-5 absolute z-10 before:content-[''] before:absolute before:-left-[30px] before:bottom-0 before:-z-10 before:rounded-md before:bg-gradient-to-tl before:from-50% before:to-50% before:from-n-6 before:to-transparent before:w-14 before:h-14">
                                <p className="font-robotoSlab">Video generated!</p>
                                <div className="absolute -bottom-5 bg-color-1 rounded-xl p-1">
                                    <img className="w-8" src={brainwaveWhiteSymbol} alt="" />
                                </div>
                                <p className="text-ms text-n-4 float-right -mt-1">Just Now</p>
                            </div>
                            <div className="absolute w-full p-5 bottom-2 z-10 flex items-center justify-between">
                                <img src={play} alt="" />
                                <div className="basis-[90%] h-0.5 bg-gradient-to-r from-color-1 from-50% to-50% to-white"></div>
                            </div>
                            <img className="min-h-80 w-full" src={service3} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Generating;
