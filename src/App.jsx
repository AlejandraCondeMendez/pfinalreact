import { BrowserRouter } from 'react-router-dom'
import './App.css'
import PageRoutes from './routes/PageRoutes'
function App() {
 

  return (
    <>
    <BrowserRouter>
    <PageRoutes/>
    </BrowserRouter>
    </>
  )
}

export default App
