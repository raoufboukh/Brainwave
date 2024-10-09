import { LeftCurve, RightCurve } from "./design/Collaboration";
import Button from "../assets/svg/Button";
import { brainwaveSymbol, check } from "../assets";
import { collabApps, collabContent, collabText } from "./constants";
import Section from "./Section";

const Collaboration = () => {
    return (
        <Section className='pt-32 xl:pt-56 pb-20' customPaddings crosses crossesOffset='xl:translate-y-[5.25rem]'>
            <div className="container relative text-white flex justify-between gap-2 xl:gap-0 flex-wrap">
                <div className="flex flex-col basis-full xl:basis-[40%] relative">
                    <h2 className="text-4xl xl:text-5xl mb-10">AI Chat App for seamless collaboration</h2>
                    {
                        collabContent.map(col => {
                            return(
                                <div key={col.id} className="mb-5">
                                    <div className="flex gap-5">
                                        <img src={check} alt="" />
                                        <h4 className="text-lg">{col.title}</h4>
                                    </div>
                                    {col.text && <p className="text-n-10 text-lg my-2">{col.text}</p>}
                                </div>
                            )
                        })
                    }
                    <Button className='uppercase w-fit text-xs mt-11'>Try it Now</Button>
                    <LeftCurve/>
                </div>
                <div className="basis-full xl:basis-[43%] relative">
                    <p className="text-lg text-n-10">{collabText}</p>
                    <div className="relative w-[330px] h-[330px] mx-auto xl:mx-0 rounded-full border border-n-10 mt-24">
                        {
                            collabApps.map((col,index )=> {
                                return(
                                    <div className="absolute z-10 top-[43%] left-[42%]" style={{
                                        transform: `rotate(${index*45}deg) translate(0, -320%) rotate(-${index*45}deg)`,
                                    }} key={col.id}>
                                        <div className={`border-n-10 border bg-n-7 p-2 rounded-lg`}>
                                            <img width={col.width} height={col.height} src={col.icon} alt={col.title} />
                                        </div>
                                    </div>
                                )
                            })
                        }
                        <div className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-n-10 rounded-full w-48 h-48">
                            <div className="bg-background-image h-20 w-20 rounded-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-1">
                                <div className="bg-n-8 w-full rounded-full h-full">
                                    <img className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src={brainwaveSymbol} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <RightCurve/>
                </div>
            </div>
        </Section>
    )
}

export default Collaboration;
