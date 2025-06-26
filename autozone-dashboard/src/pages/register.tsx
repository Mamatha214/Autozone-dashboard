import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";


const Register = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    firstName: "",
    lastName: "",
    language: "en",
    country: "IN",
    password: "",
    confirmPassword: "",
    privacyAccepted: false,
    termsAccepted: false,
  });

  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
  const { name, value, type } = e.target;
  setForm({
    ...form,
    [name]: type === "checkbox"
      ? (e.target as HTMLInputElement).checked
      : value
    });
    };
  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (
      !form.email ||
      !form.firstName ||
      !form.lastName ||
      !form.password ||
      !form.confirmPassword
    ) {
      setError("Please fill in all mandatory fields.");
      return;
    }

    if (form.password.length < 8 || !/\d/.test(form.password) || !/[a-zA-Z]/.test(form.password)) {
      setError("Password must be at least 8 characters with letters and numbers.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    if (!form.privacyAccepted || !form.termsAccepted) {
      setError("Please accept the Privacy Policy and Service Terms.");
      return;
    }

    // Dummy check for existing user
    if (form.email === "user@test.com") {
      setError("This email is already registered.");
      return;
    }

    alert("Registration successful! Please login.");
    navigate("/login");
  };

  return (
    <div className="register-page">
    <div className="register-panel">
      <p className="subtitle">Create a user account</p>
      <p className="info-text">
        The user name is used to log in to your account. We will send you a confirmation code to this user name for verification.
      </p>

      <form onSubmit={handleSubmit} className="register-form">
        <input name="email" placeholder="E-mail address *" value={form.email} onChange={handleChange} />
        <input name="firstName" placeholder="First name *" value={form.firstName} onChange={handleChange} />
        <input name="lastName" placeholder="Last name *" value={form.lastName} onChange={handleChange} />

        <select name="language" value={form.language} onChange={handleChange}>
          <option value="en">English</option>
        </select>

        <select name="country" value={form.country} onChange={handleChange}>
          <option value="IN">India</option>
        </select>

        <input type="password" name="password" placeholder="Password *" value={form.password} onChange={handleChange} />
        <input type="password" name="confirmPassword" placeholder="Confirm Password *" value={form.confirmPassword} onChange={handleChange} />

       <div className="checkbox-group">
            <label>
                <input
                type="checkbox"
                name="privacyAccepted"
                checked={form.privacyAccepted}
                onChange={handleChange}
                />
                I agree to the processing of personal data in accordance with the Privacy Policy *
            </label>
            
            <label>
                <input
                type="checkbox"
                name="termsAccepted"
                checked={form.termsAccepted}
                onChange={handleChange}
                />
                I accept the Mercedes me ID Service Terms *
            </label>
        </div>

        {error && <p className="error">{error}</p>}

        <button type="submit">Register</button>

        <p className="link-text">
          Do you already have a Mercedes me ID? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
    </div>
  );
};

export default Register;
