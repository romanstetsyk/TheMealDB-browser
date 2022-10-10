import { Outlet } from "react-router-dom";
import { PageTitle } from "../PageTitle/PageTitle";

export const SharedLayout = props => {
  return (
    <>
      <PageTitle text="Meal Catalog" />
      <Outlet />
    </>
  );
};
