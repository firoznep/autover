import styles from "./page.module.css";
import { drivers, vehicles } from "@/libs/data";

export default async function Home() {
  const emps = await drivers();

  const vlcs = await vehicles();

  return (
    <main className={styles.mainContainer}>
      <div className={styles.container}>
        <div className={styles.items}>
          <span>Total Employees: </span> <span>{emps.length}</span>
        </div>
        <div className={styles.items}>
          <span>Total Vehicles: </span> <span>{vlcs.length}</span>
        </div>
      </div>
    </main>
  );
}
