import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css'

function App() {
  const [password, setPassword] = useState(" ")
   const validations ={
    length :password.length >= 8,
    upper : /[A_Z]/.test(password),
    lower : /[A_a]/.test(password),
    number : /[0-9]/.test(password),
    special: /[!@#$%^&*(),.?":{}|<>]/.test(password),

   }
  return (
    <>
    <div className="container mt-5">
      <div className="card shadow p-4">
        <h3 className="text-center mb-4">🔐 Password Validator</h3>
        
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <ul className="list-group list-group-flush mt-4">
          <li className={`list-group-item ${validations.length ? "text-success fw-bold" : "text-danger"}`}>
            ✔ Minimum 8 characters
          </li>
          <li className={`list-group-item ${validations.upper ? "text-success fw-bold" : "text-danger"}`}>
            ✔ At least one uppercase letter
          </li>
          <li className={`list-group-item ${validations.lower ? "text-success fw-bold" : "text-danger"}`}>
            ✔ At least one lowercase letter
          </li>
          <li className={`list-group-item ${validations.number ? "text-success fw-bold" : "text-danger"}`}>
            ✔ At least one number
          </li>
          <li className={`list-group-item ${validations.special ? "text-success fw-bold" : "text-danger"}`}>
            ✔ At least one special character
          </li>
        </ul>
      </div>
    </div>
    
    </>
  )
}

export default App
