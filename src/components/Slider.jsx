import React, { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

function Slider() {

    const [category, setCategory] = useState([])
    const navigate = useNavigate()
    const [active,setActive] = useState(0)
    // const location = useLocation()

    // console.log(category);

    const tab = category.map((item) => (
        item.menu_category
    ))

    // console.log(tab);


    const apiFetch = () => {
        fetch("https://zartek-task.vercel.app/api/resto-cafe")
            .then((response) => response.json())
            .then((json) => {
                setCategory(json.data[0].table_menu_list)
            });
    }

    useEffect(() => {
        apiFetch()
    }, [])

    const sliderRef = useRef(null)

    const handleScroll = () => {
        if (sliderRef.current) {
            localStorage.setItem("sliderScroll", sliderRef.current.scrollLeft)
        }
    }

    const clickerFunction = (data,index) => {

        setActive(index)

        if (data === "Salads and Soup") {
            navigate("/")

        }
        else if (data === "From The Barnyard") {
            navigate("/barnyard")
        }
        else if (data === "From the Hen House") {
            navigate("/hen-house")
        }
        else if (data === "Fresh From The Sea") {
            navigate("/sea-food")
        }
        else if (data === "Biryani") {
            navigate("/biriyani")
        }
        else if (data === "Fast Food") {
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
            <div
                ref={sliderRef}
                onScroll={handleScroll}
                className='overflow-x-auto scrollbar-hide py-1'
            >
                <div className='flex justify-between min-w-fit'>

                    {category.map((item, index) => (
                        <div key={index}
                            onClick={() => clickerFunction(item.menu_category, index)}
                           className={`md:px-20 w-50 md:w-100 border-b-2 py-3 cursor-pointer ${
                            active === index
                                ? 'border-b-red-500 text-red-500'
                                : 'border-b-slate-500 text-slate-500'
                        }`}>
                            <h1 className=' text-l font-medium text-center'>{item.menu_category}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Slider
