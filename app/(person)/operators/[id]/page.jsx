import getDriver from "@/libs/getDriver";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import formatedDate from "@/libs/formatedDate";

export default async function DinamicPage({ params: { id } }) {
  const driverId = await getDriver(id);

  const pi = (p) => {
    return p ? p.substring(p.indexOf("akepath") + 8) : null;
  };

  return (
    <div className={styles.container}>
      <div className={styles.imgNameCon}>
        <div>
          {driverId.image ? (
            <Image
              alt={driverId.name}
              src={`/images/${pi(driverId.image)}`}
              width={80}
              height={80}
            />
          ) : (
            <span>No Image</span>
          )}
        </div>
        <div>
          <div className={styles.items}>
            <span>Name:</span>
            <span> {driverId.name}</span>
          </div>
          <div className={styles.items}>
            <span>DrCode: </span>
            <span> {driverId.drCode}</span>
          </div>
        </div>
      </div>

      <div className={styles.items}>
        <span>ID:</span> <span>{driverId.id}</span>
      </div>

      <div className={styles.items}>
        <span>Age: </span>
        <span> {driverId.age}</span>
      </div>

      <div className={styles.items}>
        <span>Contact: </span>
        <span> {driverId.contact && driverId.contact.toString()}</span>
      </div>

      <div className={styles.items}>
        <span>Country: </span>
        <span> {driverId.country}</span>
      </div>

      <div className={styles.items}>
        <span>Email: </span>
        <span> {driverId.email}</span>
      </div>

      <div className={styles.items}>
        <span>License: </span>
        <span> {driverId.license}</span>
      </div>

      <div className={styles.items}>
        <span>License Category: </span>
        <span> {driverId.licensecategory}</span>
      </div>

      <div className={styles.items}>
        <span>Status: </span>
        <span> {driverId.status}</span>
      </div>

      <div className={styles.items}>
        <span>License Expiry Date: </span>
        <span> {driverId.licenseExp && formatedDate(driverId.licenseExp)}</span>
      </div>

      <div className={styles.items}>
        <span>Updated At: </span>
        <span> {formatedDate(driverId.updatedAt)}</span>
      </div>

      <div className={styles.items}>
        <span>Created Date: </span>
        <span> {formatedDate(driverId.createdAt)}</span>
      </div>

      <div className={styles.items}>
        <span>Note: </span>
        <span> {driverId.note}</span>
      </div>

      {driverId.vehicleId && (
        <Link href={`/vehicles/${driverId.vehicleId}`}>
          <span>Vehicle ID: </span>
          <span> {driverId.vehicleId}</span>
        </Link>
      )}
    </div>
  );
}
