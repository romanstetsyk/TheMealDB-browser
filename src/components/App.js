import { Routes, Route } from "react-router-dom";
import { CategoryBoard } from "pages/CategoryBoard/CategoryBoard";
import { SharedLayout } from "components/SharedLayout/SharedLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<CategoryBoard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
