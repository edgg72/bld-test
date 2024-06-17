import { useState } from "react";
import "./App.scss";
import { NavBar } from "./components/NavBar/NavBar";
import { SalesCard } from "./components/SalesCard/SalesCard";
import { ButtonGrid } from "./components/ButtonGrid/ButtonGrid";
import { SalesGrid } from "./components/SalesGrid/SalesGrid";
import SalesData from"./data/salesData.json"
import { isDateInRange, isDateSeptember } from "./utils/dateValidator";
import strings from './strings/strings.json'

const BUTTON_LIST = ["Hoy", "Esta semana", "Septiembre"];
const TODAY = "2024-09-16";

function App() {
  const rangeFilter = sessionStorage.getItem('range');
  const [currentRangeSelection, setCurrentRangeSelection] = useState(rangeFilter ? rangeFilter :"");
  const [salesData, setSalesData] = useState(SalesData)
  const [selectedOption, setSelectedOption] = useState('');

  const filteredSales = salesData.filter((sale, index) => {
    switch (currentRangeSelection) {
      case BUTTON_LIST[0]:
        return sale.date === TODAY;
        break;
      case BUTTON_LIST[1]:
        return isDateInRange(sale.date)
        break;
      case BUTTON_LIST[2]:
        return isDateSeptember(sale.date);
        break;
      default:
        return sale
        break;
    }
  })

  const onClickHandler = (range) => {
    sessionStorage.setItem('range', range);
    setCurrentRangeSelection(range);
  };

  const handleApply = async () => {
    await setSalesData(filteredSales);
    if (selectedOption === strings[0].seeAll) {
      setSalesData(filteredSales);
      return;
    }
    const filterByTransactionType = filteredSales.filter((el, index) => {
      if (el.transaction === "link" && selectedOption === strings[0].link) {
        return el;
      } else if (el.transaction === "datafono" && selectedOption === strings[0].dataphone) {
        return el
      } 
    })
    setSalesData(filterByTransactionType);
  };

  return (
    <div className="outer-container">
      <NavBar />
      <main className="main">
        <section className="upper-section">
          <SalesCard />
          <ButtonGrid
            buttonList={BUTTON_LIST}
            onClickHandler={onClickHandler}
            currentRangeSelection={currentRangeSelection}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
            handleApply={handleApply}
          />
        </section>
        <SalesGrid
          salesData={filteredSales}
          range={currentRangeSelection}
          selectedOption={selectedOption}
        />
      </main>
    </div>
  );
}

export default App;
