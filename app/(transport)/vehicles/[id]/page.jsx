import getVehicle from "@/libs/getVehicle";
import Image from "next/image";
import styles from "./page.module.css";
import formatedDate from "@/libs/formatedDate";
import upperCaseFirstL from "@/libs/upperCaseFirstL";

export default async function DinamicPage({ params: { id } }) {
  const vehicleId = await getVehicle(id);

  const pi = (p) => {
    return p ? p.substring(p.indexOf("akepath") + 8) : null;
  };

  return (
    <div className={styles.container}>
      <div className={styles.imgNameCon}>
        {vehicleId.image ? (
          <Image
            alt={`Image of ${vehicleId.make}`}
            src={`/images/${pi(vehicleId.image)}`}
            width={150}
            height={100}
          />
        ) : (
          <span>No Image</span>
        )}

        <div>
          <div className={styles.items}>
            <span>ID: </span> <span>{vehicleId.id}</span>
          </div>
          <div className={styles.items}>
            <span>Registration Number: </span> <span>{vehicleId.plateNum}</span>
          </div>
        </div>
      </div>

      <div className={styles.items}>
        <span>Created At: </span>{" "}
        <span>{formatedDate(vehicleId.createdAt)}</span>
      </div>
      <div className={styles.items}>
        <span>Manufacturer: </span> <span>{vehicleId.make}</span>
      </div>

      <div className={styles.items}>
        <span>Model: </span> <span>{upperCaseFirstL(vehicleId.model)}</span>
      </div>

      <div className={styles.items}>
        <span>Color: </span> <span>{upperCaseFirstL(vehicleId.color)}</span>
      </div>

      <div className={styles.items}>
        <span>Fuel Type: </span> <span>{vehicleId.fuel}</span>
      </div>

      <div className={styles.items}>
        <span>Type : </span> <span>{vehicleId.type}</span>
      </div>

      <div className={styles.items}>
        <span>Year: </span>{" "}
        <span> {vehicleId.registrationNum && vehicleId.registrationNum}</span>
      </div>
      {/* 
      <div className={styles.items}>
        <span>Year: </span>{" "}
        <span> {vehicleId.year && vehicleId.year.getFullYear()}</span>
      </div> */}

      <div className={styles.items}>
        <span>Tyre Size: </span>{" "}
        <span>{vehicleId.tyreSize && vehicleId.tyreSize.toUpperCase()}</span>
      </div>

      <div className={styles.items}>
        <span>Chassis Number: </span>{" "}
        <span>{vehicleId.chasisNum && vehicleId.chasisNum.toUpperCase()}</span>
      </div>

      <div className={styles.items}>
        <span>Engine Number: </span>{" "}
        <span>
          {vehicleId.enginenNum && vehicleId.enginenNum.toUpperCase()}
        </span>
      </div>

      <div className={styles.items}>
        <span>Status: </span> <span>{vehicleId.status}</span>
      </div>

      <div className={styles.items}>
        <span>Registrtion Expiry Date: </span>{" "}
        <span>
          {vehicleId.registrationExp && formatedDate(vehicleId.registrationExp)}
        </span>
      </div>

      <div className={styles.items}>
        <span>Insurance Expiry Date: </span>{" "}
        <span>
          {vehicleId.insuranceExpiry && formatedDate(vehicleId.insuranceExpiry)}
        </span>
      </div>

      <div className={styles.items}>
        <span>Insured Value: </span> <span>{vehicleId.insuredValue}</span>
      </div>

      <div className={styles.items}>
        <span>Insurance Company: </span>{" "}
        <span>{vehicleId.insuranceCompany}</span>
      </div>

      <div className={styles.items}>
        <span>Insurane Terms: </span> <span>{vehicleId.insuranceTerms}</span>
      </div>

      <div className={styles.items}>
        <span>Owner: </span> <span>{vehicleId.owner}</span>
      </div>

      <div className={styles.items}>
        <span>Location: </span> <span>{vehicleId.location}</span>
      </div>

      <div className={styles.items}>
        <span>Note: </span> <span>{upperCaseFirstL(vehicleId.note)}</span>
      </div>

      <div className={styles.items}>
        <span>Updated At: </span>{" "}
        <span>{formatedDate(vehicleId.updatedAt)}</span>
      </div>
    </div>
  );
}
