import { Outlet } from "react-router-dom";
import MainNavigation from "./main-navigation";
const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
