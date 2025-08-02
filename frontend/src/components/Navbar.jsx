import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const Navbar = () => {
    const navigate = useNavigate();
    const {auth} = useAuth();
    const handleLogout = async () => {
        try {
            await axios.post('/api/auth/logout', {}, { withCredentials: true });
            setAuth(null);
            navigate('/login');
        } catch (error) {
            console.error("Logout failed", error);
        }
    };
  return (

    <nav className="bg-gray-800 p-4 text-white">
        <div className="container mx-auto flex justify-between items-center">
           <Link to="/" className="text-lg font-bold">
            Home
            </Link>
            <div>
                {auth?.accessToken ? (
                    <>
                        <button className="bg-red-600 px-3 py-1 rounded hover:bg-red-700">Logout</button>
                    </>
                ) : (
                    <>
                        <Link to="/login" className="mr-4">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )}
            </div>
            
        </div>
    </nav>
  );
}

export default Navbar;