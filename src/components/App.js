import React, { useState, useEffect } from "react";
import Header from "./Header";
import PizzaForm from "./PizzaForm";
import PizzaList from "./PizzaList";

function App() {

  const [pizzas, setPizzas] = useState([]);
  const [pizzaToEdit, setPizzaToEdit] = useState({
    topping: "",
    size: "",
    vegetarian: false
  });

  useEffect(() => {
    fetch("http://localhost:3001/pizzas")
    .then(r => r.json())
    .then(data => setPizzas(data));
  }, [])

  function handleEditPizza(id) {
    const correctPizza = pizzas.filter(pizza => pizza.id === id)
    setPizzaToEdit(correctPizza[0]);
  }

  function handleUpdatePizza(updatedPizza) {
    fetch(`http://localhost:3001/pizzas/${updatedPizza.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedPizza)
    })
    .then(r => r.json())
    .then(data => setPizzas(pizzas.map(pizza => (
      pizza.id === data.id ? data : pizza
    )
    )));
  }

  return (
    <>
      <Header />
      <PizzaForm pizzaToEdit={pizzaToEdit} onUpdatePizza={handleUpdatePizza} />
      <PizzaList pizzas={pizzas} onPizzaEdit={handleEditPizza} />
    </>
  );
}

export default App;
