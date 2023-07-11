import getDriver from "@/libs/getDriver";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default async function DinamicPage({ params: { id } }) {
  const driverId = await getDriver(id);

  const pi = (p) => {
    return p ? p.substring(p.indexOf("akepath") + 8) : null;
  };

  return (
    <div className={styles.container}>
      <div className={styles.imgNameContainer}>
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
          <div>
            <span className={styles.label}>Name:</span>
            <span> {driverId.name}</span>
          </div>
          <div>
            <span className={styles.label}>DrCode: </span>
            <span> {driverId.drCode}</span>
          </div>
        </div>
      </div>

      <div>
        <span className={styles.label}>ID:</span> <span>{driverId.id}</span>
      </div>

      <div>
        <span className={styles.label}>Age: </span>
        <span> {driverId.age}</span>
      </div>

      <div>
        <span className={styles.label}>Contact: </span>
        <span> {driverId.contact && driverId.contact.toString()}</span>
      </div>

      <div>
        <span className={styles.label}>Country: </span>
        <span> {driverId.country}</span>
      </div>

      <div>
        <span className={styles.label}>Email: </span>
        <span> {driverId.email}</span>
      </div>

      <div>
        <span className={styles.label}>License: </span>
        <span> {driverId.license}</span>
      </div>

      <div>
        <span className={styles.label}>License Category: </span>
        <span> {driverId.licensecategory}</span>
      </div>
      <div>
        <span className={styles.label}>Status: </span>
        <span> {driverId.status}</span>
      </div>

      <div>
        <span className={styles.label}>License Expiry Date: </span>
        <span>
          {" "}
          {driverId.licenseExp && driverId.licenseExp.toLocaleDateString()}
        </span>
      </div>

      <div>
        <span className={styles.label}>Updated At: </span>
        <span> {driverId.updatedAt.toLocaleDateString()}</span>
      </div>
      <div>
        <span className={styles.label}>Created Date: </span>
        <span> {driverId.createdAt.toLocaleDateString()}</span>
      </div>

      <div>
        <span className={styles.label}>Note: </span>
        <span> {driverId.note}</span>
      </div>

      {driverId.vehicleId && (
        <Link href={`/vehicles/${driverId.vehicleId}`}>
          <span className={styles.label}>Vehicle ID: </span>
          <span> {driverId.vehicleId}</span>
        </Link>
      )}
    </div>
  );
}
