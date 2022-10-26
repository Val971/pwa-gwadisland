import { useState } from 'react';

import Alert from '@mui/material/Alert';

import Form from '@/components/Form';
import { useUserAuth } from '@/context/UserAuthContext';
import '@/pages/Register/register.scss';

export default function Register() {
  const [passwordError, setPasswordError] = useState(false);
  const { signUp, error, loading }: any = useUserAuth();

  const handleRegister = async (formValues: any) => {
    if (passwordMatch(formValues)) {
      signUp(formValues);
    }
  };
  const passwordMatch = (values: any) => {
    const { password, confirmPassword } = values;
    let isValid = true;
    if (password !== '' && confirmPassword !== '') {
      if (password !== confirmPassword) {
        isValid = false;
        setPasswordError(true);
      }
    }
    return isValid;
  };

  return (
    <>
      <div className="register-content">
        <div className="register-header">
          <h2>Register</h2>
          <p>Create your Account</p>
          {error && (
            <Alert className="alert" severity="error">
              {error}
            </Alert>
          )}
        </div>
        <Form isRegisterView={true} submit={handleRegister} />
      </div>
    </>
  );
}
