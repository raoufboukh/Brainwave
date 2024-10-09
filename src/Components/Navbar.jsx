import { useState } from "react";
import Button from "../assets/svg/Button";
import MenuSvg from "../assets/svg/MenuSvg";
import { HambugerMenu } from './design/Header';
import {Link} from 'react-scroll';
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { brainwave } from "../assets";
import { navigation } from "./constants";
export default function Navbar(){
    const [menu,setMenu] = useState(false);
    const toggleNavigation = () => {
    if (menu) {
        setMenu(false);
        enablePageScroll();
    } else {
        setMenu(true);
        disablePageScroll();
    }
  };
    return(
        <header className={`fixed w-full  py-4 z-50  backdrop-blur-sm  border-b border-n-6 ${menu ? 'bg-n-8' : 'bg-n-8/80'}`}>
            <div className="container flex justify-between items-center">
                <img className="relative z-20" src={brainwave} alt="" />
                <Button className='xl:hidden z-20' onClick={() => toggleNavigation()}>
                    <MenuSvg openNavigation={menu}/>
                </Button>
                <div className={menu ? 'links show' : 'links'}>
                    <ul className="block xl:flex xl:gap-10 2xl:gap-16">
                        {navigation.map(nav => {
                            return(
                                <li key={nav.id} className="uppercase text-n-3 text-xl text-center mt-10 mb-16 xl:my-0 xl:text-left xl:text-xs cursor-pointer hover:text-color-1 xl:hover:text-white transition-all duration-500"><Link className='w-full h-full block' to={nav.url} duration={500} smooth={true} onClick={() => toggleNavigation()}>{nav.title}</Link></li>
                            )
                        })}
                    </ul>
                    <HambugerMenu/>
                    <ul className="block xl:flex gap-8 xl:gap-12 items-center">
                        <li className="uppercase text-n-3 text-xl text-center mb-16 xl:my-0 xl:text-left xl:text-xs cursor-pointer hover:text-color-1 xl:hover:text-white transition-all duration-500" onClick={() => toggleNavigation()}>new account</li>
                        <Button className='hidden xl:block uppercase text-left xl:text-xs duration-500'>
                            sign in 
                        </Button>
                        <li className="xl:hidden uppercase text-n-3 text-xl text-center my-12 xl:my-0 xl:text-left xl:text-xs cursor-pointer hover:text-color-1 xl:hover:text-white transition-all duration-500" onClick={() => toggleNavigation()}>sign in</li>
                    </ul>
                </div>
            </div>
        </header>
    )
}