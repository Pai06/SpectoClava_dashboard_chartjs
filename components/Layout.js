import styles from "../styles/Home.module.css";
import Meta from "./Meta";
import NavigationBar from "./NavigationBar";

const Layout = ({children}) =>{
    return( 
        <>
        <Meta title="Graphs with ChartJS"/>
        <NavigationBar/>
            <div className={styles.container}>
                <div className={styles.main}>
                    {children}
                </div>
            </div>
        </>
    )
}

export default Layout;