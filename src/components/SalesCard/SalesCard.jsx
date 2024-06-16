import './SalesCard.scss';

export const SalesCard = () => {
    return (
        <div className="sales-card">
            <div className="sales-card__header">
                Total de ventas de septiembre
            </div>
            <div className="sales-card__amount">
                <p>$1’560.000</p> 
            </div>
            <div className="sales-card__date">
                <p>Septiembre, 2020</p>
                
            </div>
        </div>
    );
}
