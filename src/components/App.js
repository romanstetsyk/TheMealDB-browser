import { PageTitle } from "./PageTitle/PageTitle";
import { CategoryBoard } from "./CategoryBoard/CategoryBoard";
import categoriesResponse from "../categoriesResponse.json";

function App() {
  return (
    <>
      <PageTitle text="Meal Catalog" />
      <CategoryBoard categories={categoriesResponse.categories} />
    </>
  );
}

export default App;
