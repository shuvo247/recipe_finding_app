import { addDoc, collection } from "firebase/firestore";
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Form, Link, useActionData, useNavigate } from 'react-router-dom';
import db from "../../core/firebase";
import { setRecipe } from "../../core/redux/slice/recipeSlice";

const AddRecipe = () => {
    const [error,setError] = useState("");
    let recipeData = useActionData();
    const dispatch = useDispatch();
    const user = useSelector( (state) => state.user.user );
    const navigate = useNavigate();
    // Add recipe 
    const addRecipe = useCallback(async (recipe) => {
      try {
        // Add recipe to Firebase and Redux store
        const recipeRef = await addDoc(collection(db, "recipes"), recipe);
        recipe.id = recipeRef.id;
        recipe.user_name = user?.displayName;
        dispatch(setRecipe(recipe));
        navigate('/recipe-list');
        // setLoading(false);
      } catch (error) {
        setError(error.message);
      }
    }, [dispatch, setError,navigate,user]);
    useEffect(() => {
        if( recipeData !== undefined ) {
          // setLoading(true);
          addRecipe( recipeData );
        }
    }, [recipeData,addRecipe])
  return (
    <section className="sign-in">
      <div className="container">
        <div className="recipe-list">
            <Link to="/recipe-list">Recipe List</Link>
        </div>
        <div className="signin-content">
          <div className="signin-form">
            <h2 className="form-title">Add Recipe</h2>
            { error }
            <Form method="POST" action="/add-recipe" className="register-form" id="login-form">
              <div className="form-group">
                  <label htmlFor="recipe_name"><i className="zmdi zmdi-account material-icons-name" /></label>
                  <input type="text" name="recipe_name" id="recipe_name" placeholder="Recipe Name" />
              </div>
              <div className="form-group">
                  <label htmlFor="image_url"><i className="zmdi zmdi-account material-icons-name" /></label>
                  <input type="text" name="image_url" id="image_url" placeholder="Image URL" />
              </div>
              <div className="form-group">
                  <label htmlFor="description"><i className="zmdi zmdi-account material-icons-name" /></label>
                  <textarea id="description" name="description" cols="30" rows="10"></textarea>
              </div>
              <div className="form-group form-button">
                <input type="submit" name="signin" id="signin" className="form-submit" defaultValue="Add Recipe" />
              </div>
            </Form>
          </div>
        </div>
      </div>
  </section>
  )
}

export default AddRecipe