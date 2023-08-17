import './App.css';
import {useState} from "react"


function App() {
  const [currentSavings, setCurrentSavings] = useState(10000);
  const [yearlySavings, setYearlySavings] = useState(500);
  const [expectedInterest, setExpectedInterest] = useState(8);
  const [investmentDuration, setInvestmentDuration] = useState(10);
  const [investmentData, setInvestmentData] = useState([]);
     

   const calculateInvestment=()=>{
         const data=[]
         let totalSavings=currentSavings
         for (let year=1;year<=investmentDuration;year++){
            totalSavings += yearlySavings
             const interestEarned = (totalSavings * expectedInterest) / 100
            totalSavings += interestEarned
            data.push({year,totalSavings,interestEarned})
         }
         setInvestmentData(data)
   }


   const handleReset=()=>{
    setInvestmentData([])
   }


   const handleCurrentSavings=(e)=>{
        const value=e.target.value
      if (!isNaN(value)){
        setCurrentSavings(value)
      }
   }


   const handleYearlySavings=(e)=>{
    const value=e.target.value
  if (!isNaN(value)){
    setYearlySavings(value)
  }
}


const handleExpectedInterest=(e)=>{
  const value=e.target.value
if (!isNaN(value)){
  setExpectedInterest(value)
}
}
const handleInvestmentDuration=(e)=>{
  const value=e.target.value
if (!isNaN(value)){
  setInvestmentDuration(value)
}
}


  return (
    <div className="App">
      <div>
        <h1>
          Investment Calculator
        </h1>
      </div>
      <div>
        <label>
          Current Savings($):
          <input onChange={handleCurrentSavings}
          value={currentSavings}
          type="text" />
        </label>
      </div>
      <div>
        <label>
          Yearly Savings($):
          <input onChange={handleYearlySavings} 
          value={yearlySavings} 
          type="text" />
        </label>
      </div>
      <div>
        <label>
          Expected Interest(%,per Year):
          <input onChange={handleExpectedInterest} 
          value={expectedInterest} 
          type="text" />
        </label>
      </div>
      <div>
        <label>
          Investment Duration (Years):
          <input 
          onChange={handleInvestmentDuration} 
          value={investmentDuration} 
          type="text" />
        </label>
      </div>
      <div>
        <button onClick={calculateInvestment}>Calculate</button>
        <button onClick={handleReset}>Rest</button>
      </div>
      <div>
        {
            investmentData.length > 0 && 
            <div>
              <h3>Investment Data</h3>
              <ul>
                {investmentData.map((item)=>(
                  <>
                  <li>Year <b>{item.year}</b>: {item.totalSavings.toFixed(2)}</li>{" "}
                 <span>Interest Earned:{item.interestEarned.toFixed(2)}</span>
                  </>
                ))}
              </ul>
            </div>
        }        
      </div>
    </div>
  );
}

export default App;
