import { deleteDoc, doc } from 'firebase/firestore';
import debounce from 'lodash.debounce';
import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import db from '../../core/firebase';
import { deleteRecipe } from '../../core/redux/slice/recipeSlice';

const RecipeList = () => {
    const state = useSelector( (state) => state );
    const dispatch = useDispatch();
    const [error,setError] = useState();
    const [recipes, setRecipes] = useState(state.recipes);
    const debouncedSearch = debounce((query) => {
        handleSearch(query);
    }, 300); // Adjust the debounce delay as needed (e.g., 300 milliseconds)
    
    const handleDeleteRecipe = async ( recipeID ) => {
        const recipeRef = doc(db, 'recipes', recipeID);
        try {
            await deleteDoc(recipeRef);
            dispatch(deleteRecipe(recipeID));
        } catch (error) {
            setError( error.message );
        }
    }

    const handleSearch = (query) => {
        const filteredRecipes = state.recipes.filter((recipe) =>
            recipe.recipe_name.toLowerCase().includes(query.toLowerCase())
        );
        setRecipes(filteredRecipes);
    }
    useMemo(() => {
        setRecipes(state.recipes)
    }, [state])
    return (
        <section className="sign-in">
            <div className="container">
                { error }
                <div className="recipe-header">
                    <div className="search">
                        <input type="text" placeholder='Search Recipe' onChange={ (event) => debouncedSearch( event.target.value ) } />
                    </div>
                    <div className="add-recipe">
                        <Link to="/add-recipe">Add Recipe</Link>
                    </div>
                </div>
                <div className="container">
                    <div className="recipes-wrapper">
                        { recipes.length > 0 ? recipes.map( (recipe) => (
                            <div key={ recipe.id ? recipe.id : Math.random() } className="recipe">
                                <img src={ recipe?.image_url } alt="" />
                                <div className="recipe-content">
                                    <h4>{ recipe?.recipe_name }</h4>
                                    <p>{ recipe?.description }</p>
                                    <button className='delete-btn' onClick={ ()  => handleDeleteRecipe( recipe.id ) }>Delete</button>
                                </div>
                            </div>
                        ) ) : <div><h4>No Recipe Found</h4></div> }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default RecipeList