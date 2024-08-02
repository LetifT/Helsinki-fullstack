import { useState } from 'react'

const Button =({handleClick, text}) => {
  return (
  <button onClick={handleClick}>
    {text}
  </button>
  )
}

const StatisticLine = ({text, value}) => {
  return (
    <tr>
      <td>{text} </td>
      <td>{value}</td>
    </tr>
  )    
}

const Statistics = (props) => {
  if (props.total === 0) {
    	return (
        <div>
          <p>No feedback given</p>
        </div>
      )
  }
  return (
    <tr>
      <StatisticLine text="good" value={props.good}/>
      <StatisticLine text="neutral" value={props.neutral}/>
      <StatisticLine text="bad" value={props.neutral}/>
      <StatisticLine text="total" value={props.total}/>
      <StatisticLine text="average" value={props.average}/>
      <StatisticLine text="positive" value={props.positive*100 +'%'}/>
    </tr>
  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)
  const [positive, setPositive] = useState(0)

  const updateFeedback = (updatedGood, updatedNeutral, updatedBad) => {
    const newTotal = updatedGood + updatedNeutral + updatedBad
    const newAverage = (updatedGood - updatedBad) / newTotal
    const positive = updatedGood / newTotal
    setTotal(newTotal)
    setAverage(newAverage)
    setPositive(positive)
    
  }

  const goodClick = () => {
    const updatedGood = good + 1;
    setGood(updatedGood);
    updateFeedback(updatedGood, neutral, bad)
  }

  const neutralClick = () => {
    const updatedNeutral = neutral +1;
    setNeutral(updatedNeutral);
    updateFeedback(good, updatedNeutral, bad)

  }

  const badClick = () => {
    const updatedBad = bad + 1;
    setBad(updatedBad)
    updateFeedback(good, neutral, updatedBad)

  }

  return (
    <div>
      <h1>
        give feedback
      </h1>

      <Button handleClick={goodClick} text ="good"/>
      <Button handleClick={neutralClick} text ="neutral"/>
      <Button handleClick={badClick} text ="bad"/>

      <h1>
        Statistics
      </h1>
      <table>
      <Statistics good={good} neutral={neutral} bad={bad} total={total} average={average} positive={positive} />
      </table>
    </div>
  )
}

export default App