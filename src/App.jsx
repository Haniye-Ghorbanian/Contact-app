import { useState } from "react";
import PageWrapper from "./components/Page Wrapper/PageWrapper";
import Header from "./components/Header/Header";
import HeaderTitle from "./components/Header/HeaderTitle";
import Tools from "./components/Header/Tools/Tools";
import Filter from "./components/Header/Tools/Filter";
import AddCOntactBtn from "./components/Header/Tools/AddContactBtn";
import Search from "./components/Header/Tools/Search";
import LastSeenWrapper from "./components/Lastseen/LastseenWrapper";
import ContactTable from "./components/ContactList/ContactListWrapper";
import ContactProfile from "./components/Contact Profile/ContactProfile";


function App() {
  return (
    <>
      <PageWrapper>
        {/* <Header>
          <HeaderTitle></HeaderTitle>
          <Tools>
            <Search></Search>
            <Filter></Filter>
            <AddCOntactBtn></AddCOntactBtn>
          </Tools>
        </Header>

        <LastSeenWrapper />
        <ContactTable></ContactTable> */}

      <ContactProfile></ContactProfile>
      </PageWrapper>
    </>
  );
}

export default App;
