import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import TextField from '@mui/material/TextField';

import '@/components/styles/form.scss';

export default function Form({ isRegisterView, submit }: any) {
  const [formValues, setFormValues]: any = useState(null);
  const [error, setError] = useState({
    confirmPassword: '',
    email: '',
  });
  const handleFormOnchange = (e: any) => {
    e.preventDefault();
    const { value, name } = e.target;
    setFormValues((prev: any) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    submit(formValues);
  };
  const validateInput = (e: any) => {
    e.preventDefault();
    let { name, value } = e.target;
    if (formValues) {
      switch (name) {
        case 'confirmPassword':
          if (value !== formValues.password) {
            setError((prev: any) => ({ ...prev, confirmPassword: "Passwords don't match" }));
          } else {
            setError((prev: any) => ({ ...prev, confirmPassword: '' }));
            setFormValues((prev: any) => ({ ...prev, [name]: value }));
          }
          break;
        case 'email':
          if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
            setError((prev: any) => ({ ...prev, email: 'Invalid email address' }));
          } else {
            setError((prev: any) => ({ ...prev, email: '' }));
            setFormValues((prev: any) => ({ ...prev, [name]: value }));
          }
          break;
      }
    } else {
      setFormValues((prev: any) => ({ ...prev, [name]: value }));
    }
  };
  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit}>
        {isRegisterView && (
          <TextField
            className="textfild-1"
            id="outlined-basic"
            label="Username"
            name="username"
            variant="outlined"
            required
            onChange={handleFormOnchange}
          />
        )}
        <TextField
          className="textfild-2"
          label="Email"
          name="email"
          type="email"
          variant="outlined"
          required
          onChange={validateInput}
          id={error.email ? 'outlined-basic' : 'outlined-error-helper-text'}
          error={error.email ? true : false}
          helperText={error.email}
        />
        <TextField
          className="textfild-3"
          id="outlined-basic"
          name="password"
          label="Password"
          type="password"
          variant="outlined"
          required
          onChange={handleFormOnchange}
        />

        {isRegisterView && (
          <TextField
            className="textfild-4"
            id={error.confirmPassword ? 'outlined-basic' : 'outlined-error-helper-text'}
            name="confirmPassword"
            label="Confirm Password"
            variant="outlined"
            type="password"
            required
            error={error.confirmPassword ? true : false}
            helperText={error.confirmPassword}
            onChange={validateInput}
          />
        )}
        {!isRegisterView && (
          <>
            <div className="login-remember">
              <FormControlLabel control={<Checkbox />} label="Remember me" />
              <p>Forgot password?</p>
            </div>
          </>
        )}
        <Button className="btn" type="submit" variant="contained">
          {`${!isRegisterView ? 'Login' : 'Register'}`}
        </Button>
      </form>
      {!isRegisterView ? (
        <p className="register">
          Don't have an account?{' '}
          <Link to="/register">
            <span className="bright">Register</span>
          </Link>
        </p>
      ) : (
        <p className="register">
          You have already an account?{' '}
          <Link to="/login">
            <span className="bright">Login</span>
          </Link>
        </p>
      )}
    </div>
  );
}
