// src/components/RecipeList.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useRecipeStore } from '../store/recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);

  return (
    <div>
      <h2>Recipe List</h2>
      {recipes.length === 0 && <p>No recipes added yet.</p>}
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          style={{
            border: '1px solid gray',
            padding: '10px',
            margin: '10px 0',
            borderRadius: '5px',
          }}
        >
          {/* الرابط إلى صفحة تفاصيل الوصفة */}
          <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none', color: 'black' }}>
            <h3>{recipe.title}</h3>
          </Link>
          <p>{recipe.description.length > 50 ? recipe.description.slice(0, 50) + '...' : recipe.description}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;