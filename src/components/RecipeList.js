import React from "react";

const RecipeList = ({ recipes, onEdit, onDelete }) => {
  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <div className="recipe-item" key={recipe.id}>
          <h3>{recipe.title}</h3>
          <p>{recipe.ingredients}</p>
          <button onClick={() => onEdit(recipe)} className="edit-button">
            Edit
          </button>
          <button onClick={() => onDelete(recipe.id)} className="delete-button">
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
