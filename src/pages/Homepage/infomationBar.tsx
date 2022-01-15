import React, { Fragment } from "react";
import logo from "../../assets/images/logo-uit.png";
import {NavData} from "../../types";
import { useEffect, useState } from "react";
import useModal from "../../hooks/useModal";
import Modal from "../../components/Modal";
// import { guideLines } from "./listOfCategories";

function NavBarInfo({datas}:NavData ){
    const [currentPos, setPos] = useState(window.pageYOffset);
    
    useEffect(()=>{
        function updatePosition(prevScrollpos:any) {
        // let 
        // var prevScrollpos = window.pageYOffset;
        window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos  > currentScrollPos) {
            document.querySelector<HTMLElement>(".navbar")!.style.top = "0";
        } else {
            document.querySelector<HTMLElement>(".navbar")!.style.top = "-50px";
        }
        setPos(currentPos);
        }
    }
        updatePosition(currentPos);
    }, [currentPos]);

    
    return(
        <nav className="bg-white shadow-lg navbar">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between">
                    <div className="flex space-x-1">

                        <LogoNavBar logo={logo} title="FER"/>
                        <NavBarItem datas = {datas} />
                    </div>
                    <NavBarItem datas={datas}/>
                    <MobileMenuButton/>
                </div>
            </div>
            <HiddenMobileMenu/>

        
        </nav>
    )
}

function HiddenMobileMenu(){
    useEffect(()=>{
        const btn = document.querySelector("button.mobile-menu-button");
		const menu = document.querySelector(".mobile-menu");

		btn?.addEventListener("click", () => {
				menu?.classList.toggle("hidden");
			});
        return(
            btn?.removeEventListener("click",
            () => {
				menu?.classList.toggle("hidden");
			})
        )
    },[])
    return(
        <div className="hidden mobile-menu">
            <ul className="list-item">
                <li className="active"><a href="index.html" className="block text-sm px-2 py-4 text-white bg-green-500 font-semibold">Home</a></li>
				<li><a href="#services" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Services</a></li>
			    <li><a href="#about" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">About</a></li>
				<li><a href="#contact" className="block text-sm px-2 py-4 hover:bg-green-500 transition duration-300">Contact Us</a></li>
            </ul>
        </div>
    )
}
function MobileMenuButton(){
    return(
        <div className="md:hidden flex items-center">
			<button className="outline-none mobile-menu-button">
				<svg className=" w-6 h-6 text-gray-500 hover:text-green-500 "
					x-show="!showMenu"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path d="M4 6h16M4 12h16M4 18h16"></path>
				</svg>
			</button>
		</div>
    )
}
function NavBarItem({datas}: NavData){
    const {isShowing, toggle} = useModal();
    const catego = datas.map((cat:any)  =>{
        const nameClass = "navbar-item";
        return (
            <a href="#" className={nameClass}>{cat.name}</a>
        )
    })
    return(
        <Fragment>
            <div onClick={toggle} className="hidden md:flex items-center space-x-1">
			{catego}			
	    </div>
        <Modal
            isShowing={isShowing}
            hide={toggle}
            ></Modal>
        </Fragment>
    )
}



function LogoNavBar(props:any){
    return(
        <div>

            <a href="#" className="flex items-center py-4 px-2 hover:bg-gray-200">
                <img src={props.logo} alt="Logo" className="h-8 w-8 mr-2"/>
                <span className="font-semibold text-gray-600 text-lg">{props.title}</span>
            </a>
        </div>
    )
}
// function 
export default NavBarInfo;