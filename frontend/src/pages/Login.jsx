import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Login = () => {
    const {setAuth} = useAuth();
    const navigate = useNavigate();
    const [form, setForm] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState(null);
    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('/api/auth/login', form ,{withCredentials: true});
            setAuth({ accessToken: res.data.accessToken, role: res.data.role });
            console.log(res.data);
            if (res.data.role === 'admin') {
                navigate('/admin');
            } else {
                navigate('/user');
            }
        } catch (error) {
            setError(error.response.data.message);
        }
    }
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-xl rounded-lg">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <form className="space-y-4"> 
        <div>
          <input type="email" id="email" placeholder="Email"name="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full p-2 border rounded" required />
        </div>
        <div>
          <input type="password" id="password" placeholder="Password"name="email" value={form.password} onChange={(e) => setForm({ ...form, password: e.target.value })} className="w-full p-2 border rounded " required />
        </div>
        <button onClick={handleLogin} className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600" type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;