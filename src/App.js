import React from 'react';
import {Header} from "./components/Header/Header"
import {Balance} from "./components/Balance/Balance"
import {IncomeExpense} from "./components/IncomeExpense/IncomeExpense"
import {TransSectionList} from "./components/TransSectionList/TransSectionList"
import {AddTranSection} from "./components/addTranSection/addTranSection"
import {GlobalProvider} from "./context/GlobalState"
import './components/styles/GlobalStyles.css';

function App() {
  console.log("helo")
  return (
<GlobalProvider>
  <Header/>
  <div className="container">
    <Balance/>
    <IncomeExpense/>
    <TransSectionList/>
    <AddTranSection/>
  </div>
</GlobalProvider>
  );
}

export default App;