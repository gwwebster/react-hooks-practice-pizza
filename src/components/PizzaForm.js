import React, { useEffect, useState } from "react";

function PizzaForm({ pizzaToEdit, onUpdatePizza }) {
  const [pizzaFormData, setPizzaFormData] = useState({
    topping: "",
    size: "",
    vegetarian: false
  })
  const {topping, size, vegetarian} = pizzaFormData;

  useEffect(() => {
    setPizzaFormData(pizzaToEdit)
  }, [pizzaToEdit])


  function handleSubmit(e) {
    e.preventDefault()
    onUpdatePizza(pizzaFormData)
    setPizzaFormData({
        topping: "",
        size: "",
        vegetarian: false
    })
  }

  function handleToppingAndSizeChange(e) {
    const key = e.target.name
    const value = e.target.value

    setPizzaFormData({
      ...pizzaFormData,
      [key]: value
    });
  }

  function handleRadioChange(e) {
    const key = e.target.name
    const value = e.target.value === "Vegetarian" ? true : false

    setPizzaFormData({
      ...pizzaFormData,
      [key]: value
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="col-5">
          <input
            className="form-control"
            type="text"
            name="topping"
            placeholder="Pizza Topping"
            value={topping}
            onChange={handleToppingAndSizeChange}
          />
        </div>
        <div className="col">
          <select className="form-control" name="size" value={size} onChange={handleToppingAndSizeChange}>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
        <div className="col">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Vegetarian"
              checked={vegetarian}
              onChange={handleRadioChange}
            />
            <label className="form-check-label">Vegetarian</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="vegetarian"
              value="Not Vegetarian"
              checked={!vegetarian}
              onChange={handleRadioChange}
            />
            <label className="form-check-label">Not Vegetarian</label>
          </div>
        </div>
        <div className="col">
          <button type="submit" className="btn btn-success">
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default PizzaForm;
