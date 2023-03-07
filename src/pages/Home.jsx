import React from "react";
import { Link } from "react-router-dom";

function Home() {
  
  return (
    <div className="flex items-center justify-center w-full h-screen text-center">
       <Link to="/coming" className="hover:underline"> Hello welcome to the  react project's starter template </Link>
    </div>
  );
}

export default Home;
