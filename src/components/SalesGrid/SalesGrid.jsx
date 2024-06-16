import SalesData from"../../data/salesData.json"
import "./SalesGrid.scss";

export const SalesGrid = ({range}) => {
  return (
    <section className="main-container">
      <div className="main-container__title">
        <h3>{`Tus ventas de ${range.toLowerCase()}`}</h3>
      </div>
      <div className="grid-container">
        <p className="grid-container__title">Transacción</p>
        <p className="grid-container__title">Fecha y hora</p>
        <p className="grid-container__title">Método de pago</p>
        <p className="grid-container__title">ID transacción Bold</p>
        <p className="grid-container__title">Monto</p>
        {SalesData.length > 0 ? SalesData.map((sale, index) => (
          <>
            <p className={`grid-container__item ${index % 2 === 0 ? "odd" : "even"}`}>{sale?.successfulCharge ? "Cobro exitoso": "Cobro no realizado"}</p>
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