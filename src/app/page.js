import Image from "next/image";
import styles from "./page.module.css";
import './style.css'
import Grid from "./components/grid";
import 'bootstrap/dist/css/bootstrap.css';

export default function Home() {
  return (
 <>
 <div className="grid-container"><Grid/></div>
 
 </>
  );
}
