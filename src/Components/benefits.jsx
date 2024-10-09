import { benefits } from "./constants";
import { GradientLight } from "./design/Benefits";
import Section from "./Section";
import Arrow from "../assets/svg/Arrow";

const Benefits = () => {
    return (
        <Section id={'benefits'} className='-mt-24 xl:mt-0 pt-16 pb-4' customPaddings>
            <div className="lg:w-[550px] px-10 lg:px-0 mx-auto">
                <h2 className="lg:text-center text-white text-3xl lg:text-4xl xl:text-5xl leading-tight">Chat Smarter, Not Harder with Brainwave</h2>
            </div>
            <div className="container mt-16 grid gap-5 grid-cols-[repeat(auto-fill,minmax(315px,1fr))]">
                {benefits.map(ben => {
                    return (
                        <div key={ben.id} className="relative p-7 h-72 bg-n-8 rounded-3xl rounded-tr-[60px] text-white flex flex-col justify-between" style={{background:`url(${ben.backgroundUrl}) no-repeat`, backgroundSize:'100% 100%'}}>
                            <div>
                                <h3 className="font-bold text-2xl mb-6">{ben.title}</h3>
                                <p className="text-n-10">{ben.text}</p>
                            </div>
                            <div className="flex justify-between items-center">
                                <img src={ben.iconUrl} alt={ben.title}/>
                                <p className="uppercase text-xs flex items-center">explore more  <Arrow/></p>
                            </div>
                            {ben.light && <GradientLight/>}
                            <div className="opacity-0 top-0 left-0 hover:opacity-15 z-20 overflow-hidden h-full  absolute w-full transition-all duration-500">
                                <img src={ben.imageUrl} className="w-full" alt="" />
                            </div>
                        </div>
                    )
                })}
            </div>
        </Section>
    )
}
export default Benefits;