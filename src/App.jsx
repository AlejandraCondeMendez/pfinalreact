import { BrowserRouter } from 'react-router-dom'
import './App.css'
import PageRoutes from './routes/PageRoutes'
import ContadorProvider, { ContadorContxt } from './components/Contador'
function App() {
 

  return (
    <>
    <BrowserRouter>
    <ContadorProvider>
    <PageRoutes/>
    </ContadorProvider>
    </BrowserRouter>
    </>
  )
}

export default App
