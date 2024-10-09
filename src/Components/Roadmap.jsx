import { check2, gradient, grid, loading1 } from "../assets";
import brackets from "../assets/svg/Brackets"
import Button from "../assets/svg/Button";
import { roadmap } from "./constants";
import Section from "./Section"

const Roadmap = () => {
    return (
        <Section id={'roadmap'}>
            <div className="container">
                <div className="flex items-center justify-center">
                    {brackets('left')}
                    <p className="uppercase mx-3 text-n-4 text-sm">Ready to get started</p>
                    {brackets('right')}
                </div>
                <h2 className="text-3xl md:text-5xl py-5 text-white text-center">What we're working on</h2>
                <div className='grid lg:grid-cols-2 gap-4 mt-10'>
                    {roadmap.map(road => {
                        return(
                            road.id === 0 ? <div key={road.id} className={`text-white relative p-[1px] bg-background-image rounded-[40px] border border-n-10`} >
                                                <div className='bg-n-8 rounded-[40px]' style={{background:`url(${grid}) no-repeat`, backgroundSize:`100% 100%`}}>
                                                    <div className='flex justify-between p-12'>
                                                        <div className='flex items-center'>
                                                            {brackets('left')}
                                                            <h4 className='text-n-4 text-sm mx-1'>{road.date}</h4>
                                                            {brackets('right')}
                                                        </div>
                                                        <div className={'bg-white flex rounded-sm px-2'}>
                                                            <img src={check2} alt="" />
                                                            <p className='text-n-8 capitalize text-sm'>{road.status}</p>
                                                        </div>
                                                    </div>
                                                    <img className='' src={road.imageUrl} alt="" />
                                                    <div className='p-12'>
                                                        <h3 className='text-2xl md:text-3xl xl:text-4xl'>{road.title}</h3>
                                                        <p className='text-n-4 mt-2'>{road.text}</p>
                                                    </div>
                                                </div>
                                                {/* {road.colorful && <div className="absolute w-full h-full right-full bg-gradient-to-t from-violet-700 to-blue-600 blur-3xl z-0 opacity-30 top-0 rounded-full"></div>} */}
                                                {road.colorful && <div className="absolute top-0 h-full right-[90%] w-full mix-blend-color-dodge">
                                                    <img className="h-full w-full" src={gradient} alt="" />
                                                </div>}
                                            </div> :<div key={road.id} className={`text-white relative border p-[1px] rounded-[40px] overflow-hidden border-n-10  ${(road.id+1)% 2 === 0 && 'lg:translate-y-16' }`} style={{background:`url(${grid}) no-repeat`, backgroundSize:`100% 100%`}}>
                                                        <div className='flex justify-between p-12'>
                                                            <div className='flex items-center'>
                                                                {brackets('left')}
                                                                <h4 className='text-n-4 text-sm mx-1'>{road.date}</h4>
                                                                {brackets('right')}
                                                            </div>
                                                            <div className={'bg-white flex rounded-md gap-1 px-2 w-fit'}>
                                                                <img src={road.status === 'in progress' ? loading1 : check2} alt="" />
                                                                <p className='text-n-8 capitalize text-sm'>{road.status}</p>
                                                            </div>
                                                        </div>
                                                        <img className='' src={road.imageUrl} alt="" />
                                                        <div className='p-12'>
                                                            <h3 className='text-2xl md:text-3xl xl:text-4xl'>{road.title}</h3>
                                                            <p className='text-n-4 mt-2'>{road.text}</p>
                                                        </div>
                                                        {road.colorful && <div className="absolute top-0 h-full right-[90%] w-full mix-blend-color-dodge">
                                                            <img className="h-full w-full" src={gradient} alt="" />
                                                        </div>}
                                                    </div>
                        )
                    })}
                </div>
                <div className="text-center">
                    <Button href={'/'} className={'uppercase text-sm mt-32'}>Our RoadMap</Button>
                </div>
            </div>
        </Section>
    )
}

export default Roadmap;