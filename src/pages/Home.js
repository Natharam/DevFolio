import React from "react";
import "../App.css";
// import Body from '../Components/Body';
import Footer from "../Components/Footer";
const OtherComponent = React.lazy(() => import("../Components/Body"));
function Home() {
  const style = {
    textAlign: "center", 
    minHeight: "90vh", 
    marginTop: "80", 
    fontSize: "24", 
    fontWeight: "600"
  }
  
  return (
    <>
      <React.Suspense fallback={<div style={style}>Loading...</div>}>
        <OtherComponent />
      </React.Suspense>
      <Footer />
    </>
  );
}

export default Home;
