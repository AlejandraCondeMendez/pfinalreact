import { BrowserRouter } from 'react-router-dom'
import './App.css'
import PageRoutes from './routes/PageRoutes'
import ContadorProvider from './components/Contador'

import '@radix-ui/themes/styles.css';
function App() {
 

  return (
    <>
    {/*React router dom*/}
    <BrowserRouter> 
    <ContadorProvider>
    <PageRoutes/>
    </ContadorProvider>
    </BrowserRouter>
    </>
  )
}

export default App
