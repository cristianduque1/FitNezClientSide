import { useState } from "react";
import axios from "axios";
import WorkoutVideo from "../components/WorkoutVideo/WorkoutVideo";
import MealPlanDay from "../components/MealPlanDay/MealPlanDay";

function MyComponent() {
  // const [prompt, setPrompt] = useState(
  //   "I am a {age} year old {gender} needing a {product} at the best price"
  // );
  const [result, setResult] = useState(null);
  // const [result, setResult] = useState([
  //   {
  //     day: "Monday",
  //     breakfast: {
  //       meal: "Oatmeal with Protein Powder",
  //       grocery: [
  //         "1/2 cup oats",
  //         "1 scoop protein powder",
  //         "1/2 cup almond milk",
  //         "1/2 cup blueberries",
  //         "1 tablespoon honey",
  //       ],
  //     },
  //     lunch: {
  //       meal: "Grilled Chicken Salad",
  //       grocery: [
  //         "2 cups mixed greens",
  //         "1/2 cup grilled chicken",
  //         "1/4 cup sliced almonds",
  //         "1/4 cup dried cranberries",
  //         "1/4 cup feta cheese",
  //         "1/4 cup olive oil",
  //         "1 tablespoon balsamic vinegar",
  //       ],
  //     },
  //     dinner: {
  //       meal: "Grilled Salmon with Roasted Vegetables",
  //       grocery: [
  //         "4 ounces salmon",
  //         "1 cup roasted vegetables",
  //         "1/2 cup cooked quinoa",
  //         "1 tablespoon olive oil",
  //         "1 teaspoon garlic powder",
  //         "1 teaspoon dried oregano",
  //       ],
  //     },
  //     snacks: {
  //       meal: "Grilled Salmon with Roasted Vegetables",
  //       grocery: [
  //         "4 ounces salmon",
  //         "1 cup roasted vegetables",
  //         "1/2 cup cooked quinoa",
  //         "1 tablespoon olive oil",
  //         "1 teaspoon garlic powder",
  //         "1 teaspoon dried oregano",
  //       ],
  //     },
  //   },
  //   {
  //     day: "Tuesday",
  //     breakfast: {
  //       meal: "Egg and Avocado Toast",
  //       grocery: [
  //         "2 slices whole grain bread",
  //         "1/2 avocado",
  //         "2 eggs",
  //         "1/4 teaspoon garlic powder",
  //         "1/4 teaspoon onion powder",
  //         "1/4 teaspoon smoked paprika",
  //       ],
  //     },
  //     lunch: {
  //       meal: "Taco Bowl",
  //       grocery: [
  //         "1/2 cup cooked quinoa",
  //         "1/2 cup black beans",
  //         "1/4 cup diced tomatoes",
  //         "1/4 cup diced onion",
  //         "1/4 cup shredded cheese",
  //         "1/4 cup salsa",
  //         "1/4 cup guacamole",
  //       ],
  //     },
  //     dinner: {
  //       meal: "Beef Stir Fry",
  //       grocery: [
  //         "4 ounces lean beef",
  //         "1 cup cooked brown rice",
  //         "1 cup mixed vegetables",
  //         "1 tablespoon soy sauce",
  //         "1 teaspoon garlic powder",
  //         "1 teaspoon onion powder",
  //       ],
  //     },
  //   },
  //   {
  //     day: "Wednesday",
  //     breakfast: {
  //       meal: "Protein Smoothie",
  //       grocery: [
  //         "1 scoop protein powder",
  //         "1 cup almond milk",
  //         "1/2 banana",
  //         "1/4 cup oats",
  //         "1 tablespoon peanut butter",
  //       ],
  //     },
  //     lunch: {
  //       meal: "Turkey Sandwich",
  //       grocery: [
  //         "2 slices whole grain bread",
  //         "4 ounces turkey",
  //         "1/4 cup spinach",
  //         "1/4 cup sliced tomatoes",
  //         "1/4 cup sliced cucumbers",
  //         "1 tablespoon mayonnaise",
  //       ],
  //     },
  //     dinner: {
  //       meal: "Grilled Steak with Baked Potato",
  //       grocery: [
  //         "4 ounces steak",
  //         "1 baked potato",
  //         "1 tablespoon olive oil",
  //         "1 teaspoon garlic powder",
  //         "1 teaspoon onion powder",
  //         "1 teaspoon dried oregano",
  //       ],
  //     },
  //   },
  //   {
  //     day: "Thursday",
  //     breakfast: {
  //       meal: "Yogurt Parfait",
  //       grocery: [
  //         "1 cup plain Greek yogurt",
  //         "1/2 cup granola",
  //         "1/2 cup blueberries",
  //         "1 tablespoon honey",
  //       ],
  //     },
  //     lunch: {
  //       meal: "Tuna Salad",
  //       grocery: [
  //         "1 can tuna",
  //         "1/4 cup diced celery",
  //         "1/4 cup diced onion",
  //         "1/4 cup diced apples",
  //         "1/4 cup mayonnaise",
  //         "1 tablespoon lemon juice",
  //       ],
  //     },
  //     dinner: {
  //       meal: "Baked Chicken with Roasted Vegetables",
  //       grocery: [
  //         "4 ounces chicken",
  //         "1 cup roasted vegetables",
  //         "1/2 cup cooked quinoa",
  //         "1 tablespoon olive oil",
  //         "1 teaspoon garlic powder",
  //         "1 teaspoon dried oregano",
  //       ],
  //     },
  //   },
  //   {
  //     day: "Friday",
  //     breakfast: {
  //       meal: "Egg and Cheese Sandwich",
  //       grocery: [
  //         "2 slices whole grain bread",
  //         "2 eggs",
  //         "1/4 cup shredded cheese",
  //         "1/4 teaspoon garlic powder",
  //         "1/4 teaspoon onion powder",
  //         "1/4 teaspoon smoked paprika",
  //       ],
  //     },
  //     lunch: {
  //       meal: "Chicken Burrito Bowl",
  //       grocery: [
  //         "1/2 cup cooked quinoa",
  //         "1/2 cup grilled chicken",
  //         "1/4 cup black beans",
  //         "1/4 cup diced tomatoes",
  //         "1/4 cup diced onion",
  //         "1/4 cup shredded cheese",
  //         "1/4 cup salsa",
  //         "1/4 cup guacamole",
  //       ],
  //     },
  //     dinner: {
  //       meal: "Grilled Pork Chops with Baked Potato",
  //       grocery: [
  //         "4 ounces pork chops",
  //         "1 baked potato",
  //         "1 tablespoon olive oil",
  //         "1 teaspoon garlic powder",
  //         "1 teaspoon onion powder",
  //         "1 teaspoon dried oregano",
  //       ],
  //     },
  //   },
  //   {
  //     day: "Saturday",
  //     breakfast: {
  //       meal: "Pancakes with Protein Powder",
  //       grocery: [
  //         "1/2 cup oats",
  //         "1 scoop protein powder",
  //         "1/2 cup almond milk",
  //         "1/2 banana",
  //         "1 tablespoon honey",
  //       ],
  //     },
  //     lunch: {
  //       meal: "BLT Sandwich",
  //       grocery: [
  //         "2 slices whole grain bread",
  //         "4 slices bacon",
  //         "1/4 cup spinach",
  //         "1/4 cup sliced tomatoes",
  //         "1/4 cup sliced cucumbers",
  //         "1 tablespoon mayonnaise",
  //       ],
  //     },
  //     dinner: {
  //       meal: "Grilled Salmon with Roasted Vegetables",
  //       grocery: [
  //         "4 ounces salmon",
  //         "1 cup roasted vegetables",
  //         "1/2 cup cooked quinoa",
  //         "1 tablespoon olive oil",
  //         "1 teaspoon garlic powder",
  //         "1 teaspoon dried oregano",
  //       ],
  //     },
  //   },
  //   {
  //     day: "Sunday",
  //     breakfast: {
  //       meal: "Omelet with Toast",
  //       grocery: [
  //         "2 eggs",
  //         "1/4 cup diced tomatoes",
  //         "1/4 cup diced onion",
  //         "1/4 cup shredded cheese",
  //         "1/4 teaspoon garlic powder",
  //         "1/4 teaspoon onion powder",
  //         "1/4 teaspoon smoked paprika",
  //         "2 slices whole grain bread",
  //       ],
  //     },
  //     lunch: {
  //       meal: "Taco Salad",
  //       grocery: [
  //         "2 cups mixed greens",
  //         "1/2 cup black beans",
  //         "1/4 cup diced tomatoes",
  //         "1/4 cup diced onion",
  //         "1/4 cup shredded cheese",
  //         "1/4 cup salsa",
  //         "1/4 cup guacamole",
  //       ],
  //     },
  //     dinner: {
  //       meal: "Grilled Steak with Baked Potato",
  //       grocery: [
  //         "4 ounces steak",
  //         "1 baked potato",
  //         "1 tablespoon olive oil",
  //         "1 teaspoon garlic powder",
  //         "1 teaspoon onion powder",
  //         "1 teaspoon dried oregano",
  //       ],
  //     },
  //   },
  // ]);

  const [prompt] = useState(
    // "Consider yourself a veteran health weight loss fitness expert in the feild and give me a week worth of a meal plan with a grocery list for a {age} year old {product} pound male with a {gender} inch waist who wants to get bulky including creams for skin treatment that are all organic and healthy in less than 1400 words."
    // `task:
    // ***
    // Consider yourself a veteran health weight loss fitness expert in the field and give me a week worth of a meal plan with a grocery list for a 54 year old 250 pound male with a 38 inch waist who wants to get bulky including creams for skin treatment that are all organic and healthy in less than 1400 words.
    // ***
    // Format:
    // ***
    // Write in a code block to look like json format  and put grocery into arrays within the recipe objects and put each object as an index of the data array.
    // ***`

    `task:
    ***
    Consider yourself a veteran health weight loss fitness expert and give me a 7 day meal plan with an ingredient list for each meal for a {age} year old {product} pound male with a {gender} inch waist who wants to get bulky.
    ***
    Format:
    ***
    Respond in json format with an array of day objects e.g. [{"day":"Monday", "breakfast":{"meal":"breakfast burrito","grocery":["1 tortillas","2 eggs","1/2 cup salsa"]}}] 
    ***`
  );
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [product, setProduct] = useState("");

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleProductChange = (event) => {
    setProduct(event.target.value);
  };

  const handleButtonClick = () => {
    const userInput = prompt.replace(/{(.*?)}/g, (match, variable) => {
      switch (variable) {
        case "age":
          return age;
        case "gender":
          return gender;
        case "product":
          return product;
        default:
          return match;
      }
    });
    fetchData(userInput);
  };

  const API_KEY = process.env.REACT_APP_API_KEY;
  const fetchData = async (prompt) => {
    const response = await axios.post(
      "https://api.openai.com/v1/engines/text-davinci-003/completions",
      {
        prompt: prompt,
        temperature: 0.2,
        max_tokens: 2500,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
      }
    );

    let answer = response.data.choices[0].text
      .trim()
      .replace(`Answer:`, "")
      .replace(`Response:`, "")
      .replace(`Solution:`, "");
    console.log(answer);
    let parsedAnswer = JSON.parse(answer);
    console.log(parsedAnswer);

    setResult(parsedAnswer);
    // setGeneratedText(response.data.choices[0].text.trim());
  };

  return (
    <>
      <div className="videoplan-background">
        <label htmlFor="age" className="label">
          CURRENT NUMBER OF YEARS LIVING IN THIS EXISTENCE
        </label>
        <input
          id="age"
          type="text"
          value={age}
          onChange={handleAgeChange}
          className="input"
        />
        <label htmlFor="gender" className="label">
          INCHES AROUND YOUR FAT MID-SECTION
        </label>
        <input
          id="gender"
          type="text"
          value={gender}
          onChange={handleGenderChange}
          className="input"
        />
        <label htmlFor="product" className="label">
          TOTAL-WEIGHT
        </label>
        <input
          id="product"
          type="text"
          value={product}
          onChange={handleProductChange}
          className="input"
        />
        <button onClick={handleButtonClick} className="button">
          PUSH FOR THE SPEACIAL MEAL SECRETS
        </button>
        {/* <div>
          <p className="pa">
            {result.map((day) => {
              return day.day;
            })}
          </p>
        </div> */}
      </div>
      {result ? (
        <div className="pa">
          {result.map((day) => (
            <MealPlanDay key={day.day} day={day} />
          ))}
        </div>
      ) : null}

      <WorkoutVideo />
    </>
  );
}

// const HomePage = () => {
//   return (
//     <section>
//       <h1>Welcome to BrainFeed!</h1>
//       <p>Your go to source for all things dev related.</p>
//     </section>
//   );
// };

// export default HomePage;
export default MyComponent;
