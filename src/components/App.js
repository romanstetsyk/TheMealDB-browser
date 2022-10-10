import { Routes, Route } from "react-router-dom";
import { Home } from "pages/Home/Home";
import { SharedLayout } from "components/SharedLayout/SharedLayout";
import { CategoryView } from "pages/CategoryView/CategoryView";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path=":category" element={<CategoryView />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
