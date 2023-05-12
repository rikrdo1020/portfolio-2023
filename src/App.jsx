import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './homepage/Home';


const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" exact element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
