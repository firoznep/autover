import styles from "./title.module.css";
import { Roboto_Mono } from "next/font/google";

const robotoMono = Roboto_Mono({ subsets: ["latin"], weight: ["500"] });

const Title = ({ title }) => {
  return <h2 className={`${styles.title} ${robotoMono.className}`}>{title}</h2>;
};
export default Title;
