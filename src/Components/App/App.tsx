import CurrencyConverter from "../Currency/Curency";
import ExchangeRateChart from "../ExchangeHistory/ExchangeHistory";
import ExchangeRatesMarquee from "../ExchangeRatesMarque/ExchangeRatesMArque";
import PriceList from "../PriceList/PriceList";
import styles from "./app.module.scss"

export const App = () => {
  
    return (
      <div className={styles.App}>
        <ExchangeRatesMarquee />
        <CurrencyConverter />
        <div className={styles.contentContainer}>
          <div className={styles.priceList}>
            <PriceList />
          </div>
          <div className={styles.exchangeRateChart}>
            <ExchangeRateChart />
          </div>
        </div>
      </div>
    );
}