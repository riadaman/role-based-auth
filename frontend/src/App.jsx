import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import { AuthProvider } from './context/AuthContext'
import Login from './pages/Login'
function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />
       <Routes>
          <Route path='/login' element={<Login />} />
         
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  )
}

export default App
