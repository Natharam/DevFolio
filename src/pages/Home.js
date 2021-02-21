import React from "react";
import "../App.css";
// import Body from '../Components/Body';
import Footer from "../Components/Footer";
const OtherComponent = React.lazy(() => import("../Components/Body"));
function Home() {
  return (
    <>
      <React.Suspense fallback={<div style={{textAlign: "center"}}>Loading...</div>}>
        <OtherComponent />
      </React.Suspense>
      <Footer />
    </>
  );
}

export default Home;
