import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfig";
import { ref, onValue, remove } from "firebase/database";
import AddRecipeForm from "../components/AddRecipeForm";
import RecipeList from "../components/RecipeList";
import SearchBar from "../components/SearchBar";

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [editing, setEditing] = useState(false);
  const [currentRecipe, setCurrentRecipe] = useState(null);

  const fetchRecipes = () => {
    const recipesRef = ref(db, "recipes");
    onValue(recipesRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const recipesArray = Object.keys(data).map((key) => ({
          id: key,
          ...data[key],
        }));
        setRecipes(recipesArray);
      } else {
        setRecipes([]);
      }
    });
  };

  const deleteRecipe = async (id) => {
    const recipeRef = ref(db, `recipes/${id}`);
    await remove(recipeRef);
  };

  const filteredRecipes = recipes.filter(
    (recipe) =>
      recipe.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      recipe.ingredients.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div className="home-page">
      <header className="header">
        <h1>Recipe Manager</h1>
      </header>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {editing ? (
        <AddRecipeForm
          recipe={currentRecipe}
          setEditing={setEditing}
          refreshRecipes={fetchRecipes}
        />
      ) : (
        <AddRecipeForm refreshRecipes={fetchRecipes} />
      )}
      <RecipeList
        recipes={filteredRecipes}
        onEdit={(recipe) => {
          setEditing(true); 
          setCurrentRecipe(recipe); 
        }}
        onDelete={deleteRecipe}
      />
    </div>
  );
};

export default HomePage;
