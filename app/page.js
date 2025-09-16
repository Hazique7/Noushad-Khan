import Image from "next/image";
import styles from "./page.module.css";
import HomePage, { Banner } from "./components/Banner/page";
import About from "./components/About/page";


export default function Home() {
  return (
    <div >
      <HomePage/>
      {/* <About/> */}
    </div>
  );
}
