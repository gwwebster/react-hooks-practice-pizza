import React from "react";

function Pizza({ pizza, onPizzaEdit }) {
  const {id, topping, size, vegetarian} = pizza;

  return (
    <tr>
      <td>{topping}</td>
      <td>{size}</td>
      <td>{vegetarian ? "Yes" : "No"}</td>
      <td>
        <button 
          type="button" 
          className="btn btn-primary" 
          onClick={() => onPizzaEdit(id)} 
        >
          Edit Pizza
        </button>
      </td>
    </tr>
  );
}

export default Pizza;
