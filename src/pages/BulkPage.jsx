import { useState } from "react";
import axios from "axios";
import WorkoutVideo from "../components/WorkoutVideo/WorkoutVideo";
import MealPlanDay from "../components/MealPlanDay/MealPlanDay";

function BulkPage() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
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
          Authorization: `Bearer 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`,
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

    setLoading(false);
    setResult(parsedAnswer);
  };

  return (
    <>
      <div className="videoplan-background">
        <label htmlFor="age" className="label">
          AGE
        </label>
        <input
          id="age"
          type="text"
          value={age}
          onChange={handleAgeChange}
          className="input"
        />
        <label htmlFor="gender" className="label">
          INCHES AROUND MID-SECTION
        </label>
        <input
          id="gender"
          type="text"
          value={gender}
          onChange={handleGenderChange}
          className="input"
        />
        <label htmlFor="product" className="label">
          WEIGHT
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
      {loading ? <div>loading</div> : null}

      <WorkoutVideo />
    </>
  );
}

export default BulkPage;
