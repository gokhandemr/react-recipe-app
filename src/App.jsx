// Router DOM
import {Route, Routes} from "react-router-dom";
// Pages
import HomePage from "./pages/home-page";
import RecipePage from "./pages/recipe-page";
import NotFoundPage from "./pages/not-found";
import RecipesListPage from "./pages/recipes-list-page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:type/:name" element={<RecipesListPage />} />
      <Route path="/:id" element={<RecipePage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;