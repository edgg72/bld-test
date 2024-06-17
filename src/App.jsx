import { useState } from 'react'
import './App.scss'
import { NavBar } from './components/NavBar/NavBar'
import { SalesCard } from './components/SalesCard/SalesCard'
import { ButtonGrid } from './components/ButtonGrid/ButtonGrid'
import { SalesGrid } from './components/SalesGrid/SalesGrid'

const BUTTON_LIST = ["Hoy", "Esta semana", "Septiembre"]

function App() {

  const [currentRangeSelection, setCurrentRangeSelection] = useState(BUTTON_LIST[0] || "");


  const onClickHandler = (range) => {
    console.log(range);
    setCurrentRangeSelection(range)
  }

  return (
    <div className='outer-container'>
      <NavBar />
      <main className='main'>
        <section className='upper-section'>
          <SalesCard />
          <ButtonGrid
            buttonList={BUTTON_LIST}
            onClickHandler={onClickHandler}
          />
        </section>
        
          <SalesGrid range={currentRangeSelection}/>
       
      </main>
    </div>
  )
}

export default App
