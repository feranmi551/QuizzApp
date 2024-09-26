import '../styles/App.css';

import {createBrowserRouter, RouterProvider} from 'react-router-dom'

/** react router**/

const router = createBrowserRouter([
  {
    Path : '/',
    element : <div>Root element</div>
  },
  {
    Path : '/quiz',
    element : <div>Quizz element</div>
  },
  {
    Path : '/result',
    element : <div>result element</div>
  },
])


function App() {
  return (
  <>
  <RouterProvider router={router}/>
  </>
  );
}

export default App;
