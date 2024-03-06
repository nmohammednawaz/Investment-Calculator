import Header from "./components/Header.jsx"
import Results from "./components/Results.jsx";
import UserInput from "./components/UserInput.jsx"
import { useState } from "react";

function App() {

  const [ userInput, setUserInput ] = useState(
    {
        initialInvestment: 1000,
        annualInvestment: 10000,
        expectedReturn: 6,
        duration: 10
    }
  );

  const userInputIsValid = userInput.duration > 0;

  function handleChange(inputIdentifier, newValue){
    setUserInput(prevUserInput => {
        return{
            ...prevUserInput,
            [inputIdentifier]: +newValue
        };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleChange} />
      {!userInputIsValid && <p className="center">Please enter a valid duration.</p>}
      {userInputIsValid && <Results userInput={userInput} />}
    </>
  )
}

export default App
