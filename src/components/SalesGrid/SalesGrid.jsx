
import { DataPhoneIconSVG } from "../../assets/DataphoneIconSVG";
import { LinkIconSVG } from "../../assets/LinkIconSVG";
import strings from '../../strings/strings.json'
import "./SalesGrid.scss";

export const SalesGrid = ({ salesData, range, selectedOption }) => {

  return (
    <section className="main-container">
      <div className="main-container__title">
        <h3>{`Tus ventas ${range ? "de" : ""} ${range.toLowerCase()}`}</h3>
      </div>
      <div className="grid-container">
        {Object.values(strings[1]).map((el, index) => (
          <p className="grid-container__title">{el}</p>
        ))}
        {salesData.length > 0 ? salesData.map((sale, index) => (
          <>
            {/* {selectedOption === strings[0].dataphone } */}
            <div className={`grid-container__item ${index % 2 === 0 ? "odd" : "even"}`}>
              {sale?.transaction === "link" ? <LinkIconSVG /> : <DataPhoneIconSVG />} {sale?.successfulCharge ? <p>Cobro exitoso</p>: <p>Cobro no realizado</p>}
            </div>
            <p className={`grid-container__item`}>{sale?.date}</p>
            <p className={`grid-container__item`}>{sale?.paymentMethod.replace(/.(?=.{4})/g, "*")}</p>
            <p className={`grid-container__item`}>{sale?.id}</p>
            <div className={`grid-container__item amount`}>
              <p>{`$${sale?.amount.toLocaleString("de-DE")}`}</p>
              {sale?.successfulCharge && (
                <div className="deduction">
                  <p>{"Deducción Bold"}</p>
                  <p>{`-$${Math.trunc(sale?.amount * 0.299).toLocaleString("de-DE")}`}</p>
                </div>
              )}
            </div>
          </>
        ))
        : <p>No data</p>
        }
      </div>
    </section>
  )
}