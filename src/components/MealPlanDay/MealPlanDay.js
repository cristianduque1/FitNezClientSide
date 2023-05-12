import React from "react";

function MealPlanDay({ day }) {
  if (!day) {
    return null;
  }
  return (
    <div>
      <h2 className="title-element">{day.day}</h2>
      <h3 className="meal-element">Breakfast</h3>
      <p className="meal-name">{day.breakfast.meal}</p>
      <ul className="grocery-list">
        {day.breakfast.grocery.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h3 className="meal-element">Lunch</h3>
      <p className="meal-name">{day.lunch.meal}</p>
      <ul className="grocery-list">
        {day.lunch.grocery.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <h3 className="meal-element">Dinner</h3>
      <p className="meal-name">{day.dinner.meal}</p>
      <ul className="grocery-list">
        {day.dinner.grocery.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {day.snacks && (
        <>
          <h3 className="meal-element">Snacks</h3>
          <p className="meal-name">{day.snacks.meal}</p>
          <ul className="grocery-list">
            {day.snacks.grocery.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </>
      )}
      {day.snack && (
        <>
          <h3 className="meal-element">Snacks</h3>
          <p className="meal-name">{day.snack.meal}</p>
          <ul className="grocery-list">
            {day.snack.grocery.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default MealPlanDay;
