interface Recipe {
  id: number;
  title: string;
  time: number;
  ingredients: string[];
}

export default async function RecipePage() {
  const response = await fetch("http://localhost:3000/api/recipes");
  const data: Recipe[] = await response.json();

  return (
    <div className="flex felx-col min-h-screen items-center justify-center p-8 gap-4">
      {data.map((recipe) => (
        <div key={recipe.id}>
          <h2>{recipe.title}</h2>
          <p>Time: {recipe.time} mins</p>
        </div>
      ))}
    </div>
  );
}
