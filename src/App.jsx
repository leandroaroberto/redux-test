import { Counter } from './components/Counter/Counter'

import json from './Api/questions.json'

const App = () => {
  console.log('API', json.questions)
  return (
    <div>
      <h1>
      Hello redux!
      </h1>
      <Counter />
    </div>
  )
}

export default App
