import { useState } from "react";
import PageWrapper from "./components/Page Wrapper/PageWrapper";
import Header  from "./components/Header/Header";
import HeaderTitle from "./components/Header/HeaderTitle";
import Tools from "./components/Header/Tools/Tools";
import Filter from "./components/Header/Tools/Filter";
import AddCOntactBtn from "./components/Header/Tools/AddContactBtn";
import Search from "./components/Header/Tools/Search";

function App() {
  return (
    <>
      <PageWrapper>
        <Header>
        <HeaderTitle></HeaderTitle>
        <Tools>
            <Search></Search>
            <Filter></Filter>
            <AddCOntactBtn></AddCOntactBtn>
        </Tools>
        </Header>
      </PageWrapper>
    </>
  );
}

export default App;
