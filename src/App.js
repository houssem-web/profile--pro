import React from 'react'
import Profile from './components/Profile'

function App() {
const person={
  fullName:"Houssem",
  bio:"designer",
  profession:"UI/UX designer"
};
const handleName=(x)=>alert(x);

  return (
    <div>

      <Profile person={person} handleName={handleName} />
    </div>
  )
}

export default App