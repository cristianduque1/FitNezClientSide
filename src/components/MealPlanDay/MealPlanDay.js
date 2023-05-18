import React from "react";

function MealPlanDay({ day }) {
  if (!day) {
    return null;
  }
  return (
    <div className="meal-plan">
      <h2 className="title-element">{day.day}</h2>
      <div className="meal-section">
        <h3 className="meal-element">Breakfast</h3>
        <p className="meal-name">{day.breakfast.meal}</p>
        <ul className="grocery-list">
          {day.breakfast.grocery.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="meal-section">
        <h3 className="meal-element">Lunch</h3>
        <p className="meal-name">{day.lunch.meal}</p>
        <ul className="grocery-list">
          {day.lunch.grocery.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      <div className="meal-section">
        <h3 className="meal-element">Dinner</h3>
        <p className="meal-name">{day.dinner.meal}</p>
        <ul className="grocery-list">
          {day.dinner.grocery.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
      {day.snacks && (
        <div className="meal-section">
          <h3 className="meal-element">Snacks</h3>
          <p className="meal-name">{day.snacks.meal}</p>
          <ul className="grocery-list">
            {day.snacks.grocery.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}
      {day.snack && (
        <div className="meal-section">
          <h3 className="meal-element">Snacks</h3>
          <p className="meal-name">{day.snack.meal}</p>
          <ul className="grocery-list">
            {day.snack.grocery.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default MealPlanDay;
