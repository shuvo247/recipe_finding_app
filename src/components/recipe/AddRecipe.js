import { addDoc, collection } from "firebase/firestore";
import React, { useEffect } from 'react';
import { Form, useActionData } from 'react-router-dom';
import db from "../../core/firebase";


const AddRecipe = () => {
    let recipeData = useActionData();
    // Add recipe 
     const addItem = async (item) =>  {
        try {
          // Add item to Firebase
          const docs = await addDoc(collection(db, "items"), item);
          console.log('docs',docs);
        } catch (error) {
          console.error("Error adding item: ", error);
        }
    };
    useEffect(() => {
        if( recipeData !== undefined ) {
            const docs = addDoc(collection(db, "items"), recipeData);
            docs.then( (res) => {
                console.log('res',res);
            } ).catch( (error) => {
                console.log('error',error);
            } )

        }
    }, [recipeData])
  return (
    <section className="sign-in">
      <div className="container">
        <div className="signin-content">
          <div className="signin-form">
            <h2 className="form-title">Add Recipe</h2>
            <Form method="POST" action="/add-recipe" className="register-form" id="login-form">
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