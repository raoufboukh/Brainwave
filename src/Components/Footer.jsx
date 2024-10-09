import { socials } from './constants';
import Section from './Section'

const Footer = () => {
    return (
        <Section crosses className='py-10' customPaddings>
            <div className="container flex gap-3 lg:gap-0 justify-between items-center flex-wrap">
                <div className='basis-full text-center lg:text-left lg:basis-56'>
                    <p className='text-n-4'>&copy;2024. All rights reserved.</p>
                </div>
                <div className='flex gap-6 justify-center basis-full lg:basis-24'>
                    {socials.map(soc => {
                        return(
                            <div key={soc.id} className='rounded-full bg-n-7 w-9 h-9 cursor-pointer hover:bg-n-11 transition-all duration-300 flex justify-center items-center'>
                                <img src={soc.iconUrl} alt="" />
                            </div>
                        )
                    })}
                </div>
            </div>
        </Section>
    )
}

export default Footer;