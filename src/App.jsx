import './App.css'
import Card from './components/Card'

function App() {
  return (
    <>
    <div>
      <h1>My Card List</h1>
      <div className="card-list">
        <Card 
          title="Card Title 1"
          content="This is a description for the first card."
          imageUrl="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRcm7pw5E1Y_AHdhIf0SfAyoahud7cIjN4GXntNOUjWVa8kKlXR"
        />
        <Card 
          title="Card Title 2"
          content="This is a description for the second card."
        />
        <Card 
          title="Card Title 3"
          content="This is a description for the third card."
          imageUrl="https://via.placeholder.com/150"
        />
      </div>
    </div>
    </>
  )
}

export default App
