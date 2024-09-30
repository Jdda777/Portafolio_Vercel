import './App.css'
import Card from './components/Card'
import Card_list from './components/Card_list' 
import Skills from './components/Skills'

function App() {
  return (
    <>
    <h1 className='mainTitle'>Portafolio</h1>
    <Skills
    title={"Habilidades"}
    skill1={"A"}
    skill2={"B"}
    skill3={"C"}
    skill4={"D"}
    />
    <Card_list/>
    </>
  )
}

export default App
