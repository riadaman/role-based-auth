import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import { AuthProvider } from './context/AuthContext'
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
       
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
