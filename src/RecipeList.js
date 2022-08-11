import React from "react";

function RecipeList({ deleteRecipe, recipes }) {
  const addRecipesToList = recipes.map(
    ({ name, cuisine, photo, ingredients, preparation }, index) => {
      if (recipes.length > 0) {
        return (
          <tr key={index}>
            <td>{name}</td>
            <td>{cuisine}</td>
            <td>
              <img src={photo} alt={cuisine} />
            </td>
            <td>{ingredients}</td>
            <td>{preparation}</td>
            <td name="action">
              <button name="delete" onClick={() => deleteRecipe(index)}>
                Delete
              </button>
            </td>
          </tr>
        );
      } else {
        return null;
      }
    }
  );

  // TODO: Display the list of recipes using the structure of table that is provided.
  // TODO: Create at least one additional component that is used by this component.
  // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked

  return (
    <div className="recipe-list">
      <table>
        <thead>
          <tr>
            <th>
              <label htmlFor="name">Name</label>
            </th>
            <th>
              <label htmlFor="cuisine">Cuisine</label>
            </th>
            <th>
              <label htmlFor="photo">Photo</label>
            </th>
            <th>
              <label htmlFor="ingredients">Ingredients</label>
            </th>
            <th>
              <label htmlFor="preparation">Preparation</label>
            </th>
            <th>
              <label htmlFor="actions">Actions</label>
            </th>
          </tr>
        </thead>
        <tbody>{addRecipesToList}</tbody>
      </table>
    </div>
  );
}

export default RecipeList;
