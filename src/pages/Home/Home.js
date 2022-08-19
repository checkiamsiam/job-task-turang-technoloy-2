import React, { useState } from "react";
import DetailForm from "./DetailForm/DetailForm";
import Header from "./Header/Header";
import AddIcon from "@mui/icons-material/Add";

const Home = () => {
  const [formNumber, setFormNumber] = useState(1);
  const [problemData, setProblemData] = useState([]);

  return (
    <div className="container mx-auto my-5">
      <Header></Header>

      {[...Array(formNumber).keys()].map((i) => (
        <DetailForm setProblemData={setProblemData} problemData={problemData} problemNumber={i}></DetailForm>
      ))}
      <div className="mt-5">
        <div class="divider">
          <button
            onClick={() => setFormNumber(formNumber + 1)}
            className="p-3 h-8 w-8 rounded-full bg-blue-500 flex justify-center items-center font-extrabold text-white"
          >
            <AddIcon />
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center gap-10">
        <button className="bg-blue-500 px-16 py-2 text-white rounded-md">Back</button>
        <button onClick={()=> console.log(problemData)} className="bg-blue-500 px-16 py-2 text-white rounded-md">Next</button>
      </div>
    </div>
  );
};

export default Home;
