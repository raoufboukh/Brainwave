import { curve, heroBackground, robot } from "../assets";
import Button from "../assets/svg/Button";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import { companyLogos, heroIcons } from "./constants";
import Notification from "./design/Notification";
import Section from "./Section";
import Loading from "./loading";


function Hero(){
    const parallaxRef = useRef(null);
    return(
        <Section className="pt-[12rem] -mt-[6.5px] relative"
            crosses
            crossesOffset='xl:translate-y-[5.2rem]'
            customPaddings>
            <div className="container" ref={parallaxRef}>
                <div className="text-center relative z-[3]">
                    <h1 className="text-white font-robotoSlab text-4xl lg:text-[3rem] xl:text-[3.8rem] leading-tight mb-7 font-bold">Explore The Possibilities <br className="hidden lg:block" /> of AI Chatting with <span className="relative inline-block"><img src={curve} className="absolute -bottom-2 right-0" alt="" /> Brainwave</span></h1>
                    <p className="text-n-10 md:text-xl my-3">Unleash the power of AI within Brainwave. Upgrade your productivity <br /> with Brainwave, the open AI chat app.</p>
                    <Button className={'uppercase text-sm'} white href={'/'}>
                        get started
                    </Button>
                </div>
                    <div className="relative my-24 before:rounded-lg before:content-[''] before:w-[100.5%] before:md:w-[80.5%] before:absolute before:h-[100.5%] before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:-z-[1] before:bg-background-image">
                            <ScrollParallax isAbsolutelyPositioned>
                                <ul className="absolute hidden  bottom-[8rem] p-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
                                    {heroIcons.map((icon,index) => {
                                        return(
                                            <li className="p-5" key={index}>
                                                <img src={icon} className="w-6 h-6" alt="" />
                                            </li>
                                        )
                                    })}
                                </ul>
                            </ScrollParallax>
                            <ScrollParallax isAbsolutelyPositioned>
                                <Notification className={'absolute hidden right-0 bottom-[11.5rem] p-3 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex gap-4'}/>
                            </ScrollParallax>
                        <div className="mt-12 -mb-1 w-full md:w-[80%] h-96 lg:h-[500px] relative mx-auto overflow-hidden rounded-lg">
                            <div className="w-full h-5 bg-gray-500 relative z-10"></div>
                                <img src={robot} className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%] relative z-[2]" alt="" />
                            <Loading/>
                        </div>
                            <Gradient/>
                            <BackgroundCircles parallaxRef={parallaxRef}/>
                            <div className="w-[140%] md:w-[120%] absolute left-1/2 -top-1/2 xl:-top-[80%] -translate-x-1/2 -z-10">
                                <img src={heroBackground} className="w-full " alt="" />
                            </div>
                    </div>
                    <div className="hidden xl:block">
                        <p className="text-n-10 text-center text-lg">Helping people create beautiful content at</p>
                        <div className="flex justify-between py-14">
                            {companyLogos.map((item,index) => {
                                return(
                                    <div key={index} className="basis-[13%]">
                                        <img src={item} className="w-full" alt="" />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
            </div>
                <BottomLine/>
        </Section>
    )
}
export default Hero;