import { useState } from 'react'


const Button =({handleClick, text}) => {
  return (
  <button onClick={handleClick}>
    {text}
  </button>
  )
}



const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const anecdoteLength = anecdotes.length
  const [voteCount, setVotes] = useState(Array(anecdoteLength).fill(0))
  console.log(voteCount)


  const [selected, setSelected] = useState(0)
  
  const getRandomInt = (max) => {
      max = anecdotes.length
      return Math.floor(Math.random() * max);
    }

  const updateSelected = () => {
    console.log(selected)
    const newSelected = getRandomInt(anecdotes.length)
    setSelected(newSelected)
  }

  const countVote = () => {
    const copySelected = [...voteCount]
    copySelected[selected] += 1
    setVotes(copySelected)
    console.log(voteCount)
  }

  const displayMostVotes = () => {
    const mostVoted = Math.max(...voteCount)
    const index = voteCount.indexOf(mostVoted)
    return index
  }
   

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <div>
      {anecdotes[selected]}
      <p>has {voteCount[selected]} votes</p>
      </div>
      <Button handleClick={countVote} text="vote"/>
      <Button handleClick={updateSelected} text="next anecdote"/>
      <div>
        <h1>
          Anecdote with the most votes
        </h1>
        {anecdotes[displayMostVotes()]}
      </div>
    </div>
    
  )
}

export default App