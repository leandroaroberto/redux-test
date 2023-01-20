import { Counter } from './components/Counter/Counter'

import json from './Api/questions.json'

import { useSelector, useDispatch } from 'react-redux'
import { questionAdd } from './store/Question/questionSlice'

const App = () => {
  const question = useSelector(state => state.question.questions)
  const dispatch = useDispatch()
  
  return (
    <div>
      <h1>
      Hello redux!
      </h1>
      <button 
        onClick={() => dispatch(questionAdd(json.questions))}
      >
        Add Questions
      </button>
      <hr />
      <Counter />
    </div>
  )
}

export default App
