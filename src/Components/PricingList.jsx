import { check } from "../assets"
import Button from "../assets/svg/Button"
import { pricing } from "./constants"
import { LeftLine, RightLine } from "./design/Pricing"
const PricingList = () => {
    return (
        <div className="flex flex-wrap 2xl:gap-0 gap-6 relative justify-between mt-10">
            <RightLine/>
            <LeftLine/>
            {pricing.map(pr => {
                return(
                    pr.id !== '2' ? <div className={`basis-full xl:basis-[40%] mx-auto 2xl:basis-[32%] border border-n-10 rounded-2xl px-4 py-6 h-fit ${pr.pad}`} key={pr.id}>
                                    <h2 className={`${pr.color} text-3xl py-3`}>{pr.title}</h2>
                                    <p className="text-n-4">{pr.description}</p>
                                    <h3 className="text-white text-7xl py-7">${pr.price}</h3>
                                    <Button className='w-full mb-7' white>Get Started</Button>
                                    {pr.features.map((fea,index)=> {
                                        return(
                                            <p className="py-3.5 border-t border-n-10 flex text-white gap-2" key={index}><img src={check} alt="" /> {fea}</p>
                                        )
                                    })}
                                </div>: <div className="basis-full xl:basis-[40%] mx-auto 2xl:basis-[32%] border border-n-10 rounded-2xl h-fit px-4 py-6" key={pr.id}>
                                            <h2 className={`${pr.color} text-3xl py-3`}>{pr.title}</h2>
                                            <p className="text-n-4">{pr.description}</p>
                                            <h3 className="text-white text-7xl py-5 opacity-0 pointer-events-none">0</h3>
                                            <Button className='w-full mb-7'>Contact Us</Button>
                                            {pr.features.map((fea,index)=> {
                                                return(
                                                    <p className="py-3.5 border-t border-n-10 flex text-white gap-2" key={index}><img src={check} alt="" /> {fea}</p>
                                                )
                                            })}
                                        </div>
                    )
            })}
        </div>
    )
}

export default PricingList
