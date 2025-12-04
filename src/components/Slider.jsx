import React, { useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

function Slider() {

    const navigate = useNavigate()
    const location = useLocation()

  
    const sliderRef = useRef(null)

    const handleScroll = () => {
        if (sliderRef.current) {
            localStorage.setItem("sliderScroll", sliderRef.current.scrollLeft)
        }
    }

    const clickerFunction = (data) => {

        if (data === "Salad") {
            navigate("/")
        }
        else if (data === "Barnyard") {
            navigate("/barnyard")
        }
        else if (data === "HenHouse") {
            navigate("/hen-house")
        }
        else if (data === "Sea") {
            navigate("/sea-food")
        }
        else if (data === "Biriyani") {
            navigate("/biriyani")
        }
        else if (data === "FastFood") {
            navigate("/fast-food")
        }
    }

    useEffect(() => {
        const savedScroll = localStorage.getItem("sliderScroll");
        if (sliderRef.current && savedScroll) {
            sliderRef.current.scrollLeft = Number(savedScroll);
        }
    }, [])
    return (
        <>
            {/* slider */}
            <div
                ref={sliderRef}
                onScroll={handleScroll}
                className='overflow-x-auto scrollbar-hide py-1'
            >
                <div className='flex justify-between min-w-fit'>

                    <div
                        onClick={() => clickerFunction("Salad")}
                        className={location.pathname === "/" ?
                            'px-20 w-100 border-b-2 border-b-red-500 text-red-500 py-3 cursor-pointer' :
                            'px-20 w-100 border-b-2 border-b-slate-500 text-slate-500 py-3 cursor-pointer'}
                    >
                        <h1 className=' text-l font-medium text-center'>Salads and Soups</h1>
                    </div>

                    <div
                        onClick={() => clickerFunction("Barnyard")}
                        className={location.pathname === "/barnyard" ?
                            'px-20 w-100 border-b-2 border-b-red-500 text-red-500 py-3 cursor-pointer' :
                            'px-20 w-100 border-b-2 border-b-slate-500 text-slate-500 py-3 cursor-pointer'}
                    >
                        <h1 className=' text-l font-medium text-center'>From the Barnyard</h1>
                    </div>

                    <div
                        onClick={() => clickerFunction("HenHouse")}
                        className={location.pathname === "/hen-house" ?
                            'px-20 w-100 border-b-2 border-b-red-500 text-red-500 py-3 cursor-pointer' :
                            'px-20 w-100 border-b-2 border-b-slate-500 text-slate-500 py-3 cursor-pointer'}
                    >
                        <h1 className=' text-l font-medium text-center'>From the Hen House</h1>
                    </div>

                    <div
                        onClick={() => clickerFunction("Sea")}
                        className={location.pathname === "/sea-food" ?
                            'px-20 w-100 border-b-2 border-b-red-500 text-red-500 py-3 cursor-pointer' :
                            'px-20 w-100 border-b-2 border-b-slate-500 text-slate-500 py-3 cursor-pointer'}
                    >
                        <h1 className=' text-l font-medium text-center'>Fresh From The Sea</h1>
                    </div>

                    <div
                        onClick={() => clickerFunction("Biriyani")}
                        className={location.pathname === "/biriyani" ?
                            'px-20 w-100 border-b-2 border-b-red-500 text-red-500 py-3 cursor-pointer' :
                            'px-20 w-100 border-b-2 border-b-slate-500 text-slate-500 py-3 cursor-pointer'}
                    >
                        <h1 className=' text-l font-medium text-center'>Biriyani</h1>
                    </div>

                    <div
                        onClick={() => clickerFunction("FastFood")}
                        className={location.pathname === "/fast-food" ?
                            'px-20 w-100 border-b-2 border-b-red-500 text-red-500 py-3 cursor-pointer' :
                            'px-20 w-100 border-b-2 border-b-slate-500 text-slate-500 py-3 cursor-pointer'}
                    >
                        <h1 className=' text-l font-medium text-center'>Fast Food</h1>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Slider
