import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
// import Loading from "@components/Loading";

const RootLayout = () => {
  return (
    <div>
      <Navbar />
      {/* <Suspense fallback={<Loading />}> */}

      <Outlet />
      {/* </Suspense> */}
    </div>
  );
};
export default RootLayout;
