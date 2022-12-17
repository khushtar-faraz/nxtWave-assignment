import React from "react";
import FormContainer from "../components/FormContainer";
import Header from "../components/Header";
import PosterContainer from "../components/PosterContainer";

const AddItemScreen = () => {
  return (
    <>
      <Header />
      <main className="flex w-auto h-auto">
        <FormContainer />
        <PosterContainer />
      </main>
    </>
  );
};

export default AddItemScreen;
