import React from "react";
import styles from "../styles/Home.module.css";
//import GrossIncome from "./GrossIncome";
//import BarChart from "./BarChart";
//import ShoppingHourGraph from "./ShoppingHourGraph";
import PieChart from "./PieChart";
//import Combined from "./Combined";

const ChartGrid = ({data}) => {
    return (
        <div className={styles.grid}>
            {/* <GrossIncome data={data.data.gross_income_data}/> */}
            {/* <BarChart data={data.data.total_sales_per_branch}/> */}
            {/* <ShoppingHourGraph data={data.data.shopping_hour_data}/> */}
            <PieChart data={data.data.pitch_pie_chart}/>
            {/* <Combined data1={data.data.product_line_by_total_sales}
                data2={data.data.product_line_by_rating}
                data3={data.data.product_line_by_gross_income} /> */}
        </div>
    )
}
export default ChartGrid;