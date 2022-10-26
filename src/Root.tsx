import { ComponentType, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';

import { UserAuthContextProvider } from '@/context/UserAuthContext';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

function render(App: ComponentType) {
  root.render(
    <StrictMode>
      <Router>
        <UserAuthContextProvider>
          <App />
        </UserAuthContextProvider>
      </Router>
    </StrictMode>,
  );
}

export default render;
