import 'react-multi-carousel/lib/styles.css';
import { Route, Routes } from 'react-router-dom';

import NavBar from '@/components/NavBar';
import { useUserAuth } from '@/context/UserAuthContext';
import Login from '@/pages/Login';
import NotFound from '@/pages/NotFound';
import PostView from '@/pages/PostView';
import Register from '@/pages/Register';
import Welcome from '@/pages/Welcome';
import ProtectedRoute from '@/routes/ProtectedRoute';

import './App.css';

function App() {
  const { user }: any = useUserAuth();
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/post-view/:id" element={<PostView />} />
        <Route
          path="/login"
          element={
            <ProtectedRoute user={user}>
              <Login />
            </ProtectedRoute>
          }
        />
        <Route
          path="/register"
          element={
            <ProtectedRoute user={user}>
              <Register />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
