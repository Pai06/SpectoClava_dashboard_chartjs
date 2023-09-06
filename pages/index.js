import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import ChartGrid from "../components/ChartGrid";

export default function Home({data}){
    console.log(data)

    return(
        <div className={styles.container}>
            <h3>SpectoClava</h3>
            <ChartGrid data={data}/>
        </div>
    )
}

export const getServerSideProps = async() => {
    const res = await fetch("http://localhost:8000")
    const data = await res.json()
    return{
        props:{
            data
        }
    }
}