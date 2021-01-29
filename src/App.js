import Recipe from './components/Recipe'
import './App.css'
import recipes from './utils/recipes'

function App() {
  return (
    <div className="App">
      {
        recipes.map(recipe =>
          <Recipe title={recipe.title} url={recipe.url}/>
        )
      }
    </div>
  );
}

export default App;
