import styles from "./listItem.module.css";
import { Caveat } from "next/font/google";
import Link from "next/link";
import { FaPlus, FaCircleInfo } from "react-icons/fa6";

const caveat = Caveat({ subsets: ["latin"], weight: ["400"] });

const ListItem = ({ itemOne, itemTwo, linkPathOne, linkPathTwo }) => {
  return (
    <ul className={`${caveat.className} `}>
      {itemOne && (
        <Link href={`${linkPathOne}`}>
          <li className={styles.listItem}>
            <FaPlus /> {itemOne}
          </li>
        </Link>
      )}

      {itemTwo && (
        <Link href={`${linkPathTwo}`}>
          <li className={styles.listItem}>
            <FaCircleInfo />
            {itemTwo}
          </li>
        </Link>
      )}
    </ul>
  );
};
export default ListItem;
