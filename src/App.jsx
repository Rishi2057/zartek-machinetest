import { useEffect, useState } from 'react';
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Salads from './pages/Salads';
import Barnyard from './pages/Barnyard';
import HenHouse from './pages/HenHouse';
import Biriyani from './pages/Biriyani';
import FastFood from './pages/FastFood';
import TheSea from './pages/TheSea';
import { CartProvider } from './cartContext/CartContext';


function App() {

  const [data, setData] = useState([])
  const [category, setCategory] = useState([])
  const [soupDishes, setSoupDishes] = useState([])
  const [baryardDishes, setBarnyardDishes] = useState([])
  const [henHouse, setHenHouse] = useState([])
  const [fromSea, setFromSea] = useState([])
  const [biriyani, setBiriyani] = useState([])
  const [fastFood, setfastFood] = useState([])
  // console.log("data", data);
  console.log("categories", category);
  // console.log("Salads and Soup", soupDishes);
  // console.log("Barnyard", baryardDishes);
  // console.log("henHouse", henHouse);
  // console.log("fromSea", fromSea);
  // console.log("biriyani", biriyani);
  // console.log("fast food", fastFood);



  const apiFetch = () => {
    fetch("https://zartek-task.vercel.app/api/resto-cafe")
      .then((response) => response.json())
      .then((json) => {
        // console.log(json)
        setData(json.data[0])
        setCategory(json.data[0].table_menu_list)
        setSoupDishes(json.data[0].table_menu_list[0].category_dishes)
        setBarnyardDishes(json.data[0].table_menu_list[1].category_dishes)
        setHenHouse(json.data[0].table_menu_list[2].category_dishes)
        setFromSea(json.data[0].table_menu_list[3].category_dishes)
        setBiriyani(json.data[0].table_menu_list[4].category_dishes)
        setfastFood(json.data[0].table_menu_list[5].category_dishes)
      });
  }

  useEffect(() => {
    apiFetch()
  }, [])
  
  return (
    <>

     <CartProvider>
        <Routes>
          <Route path='/' element={<Salads data={data} soupDishes={soupDishes} />} />
          <Route path='/barnyard' element={<Barnyard data={data} baryardDishes={baryardDishes} />} />
          <Route path='/hen-house' element={<HenHouse data={data} henHouse={henHouse} />} />
          <Route path='/biriyani' element={<Biriyani data={data} biriyani={biriyani} />} />
          <Route path='/fast-food' element={<FastFood data={data} fastFood={fastFood} />} />
          <Route path='/sea-food' element={<TheSea data={data} fromSea={fromSea} />} />
        </Routes>
     </CartProvider>

    </>
  )
}

export default App
