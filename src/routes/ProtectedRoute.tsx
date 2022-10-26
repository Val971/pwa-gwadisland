import { Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export default function ProtectedRoute({ user, children }: any) {
  const location = useLocation();
  if (user && ['/login', '/register'].includes(location.pathname)) {
    return <Navigate to="/" replace />;
  }
  return children;
}
