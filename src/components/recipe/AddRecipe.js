import { addDoc, collection } from "firebase/firestore";
import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Form, useActionData } from 'react-router-dom';
import db from "../../core/firebase";
import { setRecipe } from "../../core/redux/slice/recipeSlice";

const AddRecipe = () => {
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState("");
    let recipeData = useActionData();
    const dispatch = useDispatch();
    const state = useSelector( (state) => state );
    console.log('state',state);
    // Add recipe 
    const addRecipe = useCallback(async (item) => {
      try {
        // Add recipe to Firebase and Redux store
        const docRef = await addDoc(collection(db, "items"), item);
        item.id = docRef.id;
        dispatch(setRecipe(item));
        // setLoading(false);
      } catch (error) {
        setError(error);
      }
    }, [dispatch, setError]);
    useEffect(() => {
        if( recipeData !== undefined ) {
          // setLoading(true);
          addRecipe( recipeData );
        }
    }, [recipeData,addRecipe])
  return (
    <section className="sign-in">
      <div className="container">
        <div className="signin-content">
          <div className="signin-form">
            <h2 className="form-title">Add Recipe</h2>
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
        <div className="recipes-wrapper">
            { state?.recipes.length > 0 && state.recipes?.map( (recipe) => (
              <div key={ recipe.id ? recipe.id : Math.random() } className="recipe">
                <img src={ recipe?.image_url } alt="" />
                <h4>{ recipe?.recipe_name }</h4>
                <p>{ recipe?.description }</p>
            </div>
            ) ) }
        </div>
      </div>
  </section>
  )
}

export default AddRecipe