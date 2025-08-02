# MERN Role-Based Authentication System

A secure authentication and authorization system built with the MERN stack (MongoDB, Express.js, React.js, Node.js) featuring role-based access control, JWT token management, and comprehensive user management capabilities.

## 🚀 Features

- **User Authentication**: Complete registration, login, and logout functionality
- **Role-Based Authorization**: Admin and user roles with different permission levels
- **JWT Token Management**: Secure access tokens (15min) and refresh tokens (7d)
- **Protected Routes**: Middleware for authentication and role verification
- **User Management**: Admin dashboard for user operations with pagination
- **Profile Management**: Users can view and manage their profiles
- **Password Security**: Bcrypt hashing for secure password storage
- **HTTP-Only Cookies**: Secure refresh token storage
- **Input Validation**: Comprehensive request validation and error handling
- **Responsive UI**: Mobile-friendly login and registration forms
- **Real-time Feedback**: Form validation and error handling
- **Protected Routes**: Client-side route protection based on authentication status

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **JWT** - JSON Web Tokens for authentication
- **bcryptjs** - Password hashing
- **cookie-parser** - Cookie parsing middleware
- **cors** - Cross-origin resource sharing
- **dotenv** - Environment variable management

### Frontend
- **React.js** - Frontend library
- **React Router** - Client-side routing
- **Axios** - HTTP client for API calls
- **CSS3** - Styling and responsive design
- **Context API** - State management for authentication
- **React Hooks** - Modern React state management

## 📁 Project Structure

```
Mern-Auth/
├── backend/
│   ├── config/
│   │   └── db.js                 # Database connection
│   ├── controller/
│   │   ├── authController.js     # Authentication logic
│   │   └── userController.js     # User management logic
│   ├── middleware/
│   │   └── authMiddleware.js     # Auth & role verification
│   ├── models/
│   │   └── User.js              # User schema
│   ├── routes/
│   │   ├── auth.js              # Authentication routes
│   │   └── user.js              # User management routes
│   ├── .env                     # Environment variables
│   ├── package.json
│   └── server.js                # Entry point
├── frontend/
│   ├── public/
│   │   └── index.html           # HTML template
│   ├── src/
│   │   ├── components/
│   │   │   ├── Login.js         # Login component
│   │   │   ├── Register.js      # Register component
│   │   │   ├── Dashboard.js     # User dashboard
│   │   │   ├── AdminPanel.js    # Admin panel
│   │   │   └── ProtectedRoute.js # Route protection
│   │   ├── context/
│   │   │   └── AuthContext.js   # Authentication context
│   │   ├── services/
│   │   │   └── api.js           # API service functions
│   │   ├── styles/
│   │   │   └── Auth.css         # Authentication styles
│   │   ├── App.js               # Main app component
│   │   └── index.js             # Entry point
│   └── package.json
├── .gitignore
└── README.md
```

## 🔐 API Endpoints

### Authentication Routes (`/api/auth`)

| Method | Endpoint | Description | Access |
|--------|----------|-------------|---------|
| POST | `/register` | User registration | Public |
| POST | `/login` | User login | Public |
| POST | `/refresh` | Refresh access token | Public |
| POST | `/logout` | User logout | Public |

### User Management Routes (`/api/users`)

| Method | Endpoint | Description | Access |
|--------|----------|-------------|---------|
| GET | `/me` | Get current user profile | Authenticated |
| GET | `/` | Get all users (paginated) | Admin only |
| DELETE | `/:id` | Delete user by ID | Admin only |

## 🚦 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone git@github.com:riadaman/role-based-auth.git
   cd role-based-auth
   ```

2. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   ```

3. **Install frontend dependencies**
   ```bash
   cd ../frontend
   npm install
   ```

4. **Environment Setup**
   
   Create a `.env` file in the backend directory:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/mern-auth
   ACCESS_TOKEN_SECRET=your_access_token_secret_here
   REFRESH_TOKEN_SECRET=your_refresh_token_secret_here
   NODE_ENV=development
   ```

5. **Start the development servers**
   
   **Backend** (Terminal 1):
   ```bash
   cd backend
   npm run dev
   ```
   Backend server will start on `http://localhost:5000`
   
   **Frontend** (Terminal 2):
   ```bash
   cd frontend
   npm start
   ```
   Frontend application will start on `http://localhost:3000`

## 📝 API Usage Examples

### User Registration
```bash
POST /api/auth/register
Content-Type: application/json

{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "securepassword123"
}
```

### User Login
```bash
POST /api/auth/login
Content-Type: application/json

{
  "email": "john@example.com",
  "password": "securepassword123"
}
```

### Get User Profile
```bash
GET /api/users/me
Authorization: Bearer <access_token>
```

### Get All Users (Admin Only)
```bash
GET /api/users?page=1&limit=10
Authorization: Bearer <admin_access_token>
```

## 📱 Frontend Usage

### Access the Application
1. Navigate to `http://localhost:3000`
2. Use the Register page to create a new account
3. Login with your credentials
4. Access your dashboard based on your role (user/admin)

### User Interface Features
- **Login Page**: Email and password authentication
- **Register Page**: Username, email, and password registration
- **User Dashboard**: View profile information
- **Admin Panel**: Manage users, view all accounts, delete users
- **Responsive Design**: Works on desktop and mobile devices

## 🔒 Security Features

- **Password Hashing**: All passwords are hashed using bcrypt with salt rounds
- **JWT Authentication**: Stateless authentication using JSON Web Tokens
- **Role-Based Access Control**: Different permission levels for users and admins
- **HTTP-Only Cookies**: Refresh tokens stored securely in HTTP-only cookies
- **Token Expiration**: Short-lived access tokens with automatic refresh capability
- **Input Validation**: Server-side validation for all user inputs
- **CORS Protection**: Configured for secure cross-origin requests

## 👥 User Roles

### User Role
- View own profile
- Update own information
- Access user-specific features

### Admin Role
- All user permissions
- View all users with pagination
- Delete any user account
- Access admin dashboard features

## 🧪 Testing with Postman

Import the provided Postman collection (`RoleBaseAuth.postman_collection.json`) to test all API endpoints:

1. Import the collection into Postman
2. Set up environment variables for base URL and tokens
3. Test authentication flow: Register → Login → Access Protected Routes
4. Test role-based access with different user roles

## 🚀 Deployment

### Environment Variables for Production
```env
NODE_ENV=production
PORT=5000
MONGODB_URI=your_production_mongodb_uri
ACCESS_TOKEN_SECRET=your_strong_access_secret
REFRESH_TOKEN_SECRET=your_strong_refresh_secret
```

### Deployment Platforms
- **Backend**: Heroku, Railway, DigitalOcean, AWS
- **Database**: MongoDB Atlas, AWS DocumentDB
- **Frontend**: Vercel, Netlify, AWS S3

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🐛 Known Issues

- Email verification not implemented
- Password reset functionality not available
- Admin panel UI needs enhancement

## 🔮 Future Enhancements

- [ ] Email verification system
- [ ] Password reset functionality
- [ ] Two-factor authentication
- [ ] User profile image upload
- [ ] Advanced user management features
- [ ] API rate limiting
- [ ] Comprehensive logging system
- [ ] Dark mode theme
- [ ] Real-time notifications


## 🙏 Acknowledgments

- Express.js team for the excellent web framework
- MongoDB team for the robust database solution
- JWT.io for token-based authentication standards
- bcrypt contributors for secure password hashing