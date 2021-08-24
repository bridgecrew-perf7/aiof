import React from 'react'
import forest from "../Logo/forest1.png"
import './Cl1.css'
function Cl1() {
    return (
        <div className = " class1 ">
            <img className = "image m-5" alt= "forrest" src = {forest} ></img>
            <div className = "text-black font-black m-1	 text-xl">Astrophytum <span className = "text-green-500"> Lorem Ipsum </span>has been </div>
            <div className = "text-gray-500">The species of the genus Astrophytum usually grow</div>
{/* text-white flex font-extrabold bg-black m-2 */}
            <button className = "flex mt-4 ml-6">
            <svg width="14" className = "ml-6 mt-2 mr-2" height="16" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 6.16666C1 5.61437 1.44772 5.16666 2 5.16666H11.9048C12.457 5.16666 12.9048 5.61437 12.9048 6.16666V12.5C12.9048 13.0523 12.457 13.5 11.9048 13.5H2C1.44772 13.5 1 13.0523 1 12.5V6.16666Z" stroke="white"/>
            <path d="M10.5238 4.57143C10.5238 2.59898 8.92486 1 6.95241 1C4.97996 1 3.38098 2.59898 3.38098 4.57143" stroke="white"/>
            </svg> <div className ="text-white text-base font-extrabold mt-1"	>ADD</div>
            </button>


        </div>
    )
}

export default Cl1