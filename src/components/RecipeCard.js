import React from "react";

const RecipeCard = ({ recipe, onEdit, onDelete }) => {
  return (
    <div className="recipe-card">
      <h2>{recipe.title}</h2>
      <p><strong>Ingredients:</strong> {recipe.ingredients}</p>
      <p><strong>Steps:</strong> {recipe.steps}</p>
      <button onClick={() => onEdit(recipe)}>Edit</button>
      <button onClick={() => onDelete(recipe.id)}>Delete</button>
    </div>
  );
};

export default RecipeCard;
