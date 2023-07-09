import GetPath from "./child_comp/GetPath";
import Spacer from "./child_comp/Spacer";
import styles from "./nav.module.css";
import { Wallpoet } from "next/font/google";

const wallPoet = Wallpoet({ subsets: ["latin"], weight: ["400"] });

const Nav = () => {
  return (
    <div>
      <h2 className={`${wallPoet.className} ${styles.brand}`}>
        <span>Haider</span> <span>Holding</span>
      </h2>
      <Spacer />
      <GetPath />
    </div>
  );
};
export default Nav;
