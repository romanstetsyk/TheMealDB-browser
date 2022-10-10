import { Routes, Route } from "react-router-dom";
import { CategoryBoard } from "pages/CategoryBoard/CategoryBoard";
import { SharedLayout } from "components/SharedLayout/SharedLayout";
import { MealList } from "pages/MealList/MealList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<CategoryBoard />} />
          <Route path=":category" element={<MealList />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
