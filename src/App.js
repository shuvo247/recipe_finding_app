import { RouterProvider } from 'react-router-dom';
import './App.css';

import { router } from './core/router';

function App() {
  return (
    <RouterProvider router={router}>
        <div>App</div>
    </RouterProvider>
  );
}

export default App;
