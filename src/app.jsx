import React, {useState } from 'react';
import Counters from "./components/counters";
import NavBar from "./components/navBar";

function App() {
  const initialValue = [
    { value: 0, id: 1, name: "Ложка" },
    { value: 4, id: 2, name: "Вилка" },
    { value: 0, id: 3, name: "Тарелка" },
    { value: 0, id: 4, name: "Стартовый набор минималиста" },
    { value: 0, id: 5, name: "Ненужные вещи" },
  ]
const [counters, setCounters] = useState(initialValue);

const handleDelete = (countId) => {
const newCounters = counters.filter((count) => count.id !== countId);
setCounters(newCounters);
};
const handleIncrement=(productId)=> {
console.log(productId)
const newArr = counters.map(item => {
   if(item.id === productId){
     item.value +=1
   }
   return item
})
setCounters(newArr)
}

//   const handleDecrement=(productId)=> {
//     console.log(productId)
//     const newArr = counters.map(item => {
//        if(item.id === productId && item.value > 0){ 
//          item.value -=1
//        }
//        return item
//     })

//     console.log(newArr)
//   setCounters(newArr)
// }
const handleDecrement=(productId)=> {
  const newArr = counters.map(item => {
      return (item.id === productId && item.value>0) ? {...item, value: item.value -1}: item
  })
setCounters(newArr)
}

const handleReset = () => {
setCounters(initialValue)
}

  return (
    <div className="col-lg-8 mx-auto p-3 py-md-5">
      <main>
        <NavBar totalItems={counters.reduce((acc,item)=>acc + item.value, 0)}/>
        <Counters 
        onDelete={handleDelete}
        onIncrement={handleIncrement}
        onDecrement={handleDecrement}
        onReset={handleReset}
        counters={counters}
        />
      </main>
    </div>
  );
}

export default App;
