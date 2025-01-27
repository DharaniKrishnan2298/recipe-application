import React, { useState, useEffect } from "react";
import { ref, push, update } from "firebase/database";
import { db } from "../firebase/firebaseConfig";

const AddRecipeForm = ({ recipe, setEditing, refreshRecipes }) => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [steps, setSteps] = useState("");


  useEffect(() => {
    if (recipe) {
      setTitle(recipe.title || "");
      setIngredients(recipe.ingredients || "");
      setSteps(recipe.steps || "");
    }
  }, [recipe]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const recipeData = { title, ingredients, steps };

      if (recipe) {
        // Edit recipe
        const recipeRef = ref(db, `recipes/${recipe.id}`);
        await update(recipeRef, recipeData);
        setEditing(false); // Exit edit mode
      } else {
        // Add recipe
        const recipesRef = ref(db, "recipes");
        await push(recipesRef, recipeData);
      }

      refreshRecipes();
      setTitle("");
      setIngredients("");
      setSteps("");
    } catch (error) {
      console.error("Error saving recipe:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      <input
        type="text"
        placeholder="Recipe Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Ingredients (comma-separated)"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        required
      />
      <textarea
        placeholder="Steps"
        value={steps}
        onChange={(e) => setSteps(e.target.value)}
        required
      />
      <button type="submit">{recipe ? "Update Recipe" : "Add Recipe"}</button>
    </form>
  );
};

export default AddRecipeForm;
