import { smallSphere, stars } from "../assets";
import brackets from "../assets/svg/Brackets";
import PricingList from "./PricingList";
import Section from "./Section";

const Pricing = () => {
    return (
        <Section id={'pricing'}>
            <div className="container relative z-10">
                <div className="flex justify-center mb-20">
                    <div className="bg-n-8 relative z-10">
                        <img className="relative w-60 h-60" src={smallSphere} alt="" />
                    </div>
                    <div className="absolute -top-20">
                        <img className="w-full" src={stars} alt="" />
                    </div>
                </div>
                <div className="flex items-center justify-center">
                    {brackets('left')}
                    <p className="md:text-lg mx-3 md:mx-5 text-n-4">Get started with Brainwave</p>
                    {brackets('right')}
                </div>
                <h3 className="text-white text-center text-3xl md:text-5xl py-5">Pay once, use forever</h3>
                <PricingList/>
                <a className="text-white mx-auto block w-fit relative before:content-[''] before:absolute before:w-full before:h-[1px] before:bottom-0 before:bg-white mt-4" href="/">See The Full Details</a>
            </div>
        </Section>
    )
}

export default Pricing;
