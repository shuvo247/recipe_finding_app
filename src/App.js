import { useDispatch } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import './App.css';
import { fetchRecipes } from './core/redux/slice/recipeSlice';
import { router } from './core/router';

function App() {
  const dispatch = useDispatch();
  dispatch(fetchRecipes());

  return (
      <RouterProvider router={router}>
          <div>App</div>
      </RouterProvider>
  );
}

export default App;
