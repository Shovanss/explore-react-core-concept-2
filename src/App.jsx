
import './App.css'
import Counter from './Counter'
import Friends from './Friends'
import Players from './Players'
import Posts from './Posts'
import Users from './Users'


function App() {
  function handleClick(){
    alert('clicked')
  }

  const handleClick2 = () =>{
    alert('clicked')
  }

  const addToFive = (num) =>{
alert(num + 5);
  }

  return (
    <>
      <h3>React Core Concepts 2</h3>
      <Posts></Posts>
      <Friends></Friends>
      <Users></Users>
      <Players></Players>
      <Counter></Counter>
      <button onClick={handleClick}>click me</button>
      <button onClick={handleClick2}>click me</button>
      <button onClick={()=>alert('clicked')}>click me</button>
      <button onClick={()=>addToFive(3)}>click me</button>
    </>
  )
}

export default App
