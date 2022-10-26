import Alert from '@mui/material/Alert';

import Form from '@/components/Form';
import { useUserAuth } from '@/context/UserAuthContext';

import './login.scss';

export default function Login() {
  const { logIn, error }: any = useUserAuth();

  const handleLogin = (formValues: any) => {
    const { email, password } = formValues;
    logIn(email, password);
  };

  return (
    <>
      <div className="login-content">
        <div className="login-header">
          <h2>Login</h2>
          <p>Login to your Account</p>
          {error && (
            <Alert className="alert" severity="error">
              {error}
            </Alert>
          )}
        </div>

        <Form isRegisterView={false} submit={handleLogin} />
      </div>
    </>
  );
}
