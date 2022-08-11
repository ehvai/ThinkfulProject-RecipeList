import React, { useState } from "react";

function RecipeCreate({ createRecipe }) {
  const initialFormState = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: "",
  };

  const [formData, setFormData] = useState({...initialFormState});

  function handleNewInputChange(event) {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  }

  function handleSubmitNewRecipe(event) {
    event.preventDefault();
    createRecipe(formData);
    setFormData({ ...initialFormState });
  }
  
  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers

  return (
    <form name="create" onSubmit={handleSubmitNewRecipe}>
      <table>
        <tbody>
          <tr>
            <td>
              <input
                name="name"
                type="text"
                id="name"
                onChange={handleNewInputChange}
                value={formData.name}
              />
            </td>
            <td>
              <input
                name="cuisine"
                type="text"
                id="cuisine"
                onChange={handleNewInputChange}
                value={formData.cuisine}
              />
            </td>
            <td>
              <input
                name="photo"
                type="url"
                id="photo"
                onChange={handleNewInputChange}
                value={formData.photo}
              />
            </td>
            <td>
              <textarea
                name="ingredients"
                id="ingredients"
                onChange={handleNewInputChange}
                value={formData.ingredients}
              />
            </td>
            <td>
              <textarea
                name="preparation"
                id="preparation"
                onChange={handleNewInputChange}
                value={formData.preparation}
              />
            </td>
            <td name="action">
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
