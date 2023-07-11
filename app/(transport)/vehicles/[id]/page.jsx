import getVehicle from "@/libs/getVehicle";
import Image from "next/image";
import styles from "./page.module.css";

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
            width={80}
            height={80}
          />
        ) : (
          <span>No Image</span>
        )}

        <div>
          <div>
            <span>ID: {vehicleId.id}</span>
          </div>
          <span>Plate Number: </span> <span>{vehicleId.plateNum}</span>
        </div>
      </div>

      <div>
        <span>Created At: </span>{" "}
        <span>{vehicleId.createdAt.toLocaleDateString()}</span>
      </div>
      <div>
        <span>Manufacturer: </span> <span>{vehicleId.make}</span>
      </div>

      <div>
        <span>Model: </span> <span>{vehicleId.model}</span>
      </div>

      <div>
        <span>Color: </span> <span>{vehicleId.color}</span>
      </div>

      <div>
        <span>Fuel Type: </span> <span>{vehicleId.fuel}</span>
      </div>

      <div>
        <span>Type : </span> <span>{vehicleId.type}</span>
      </div>

      <div>
        <span>Year: </span>{" "}
        <span> {vehicleId.year && vehicleId.year.getFullYear()}</span>
      </div>

      <div>
        <span>Tyre Size: </span> <span>{vehicleId.tyreSize}</span>
      </div>

      <div>
        <span>Chassis Number: </span> <span>{vehicleId.chasisNum}</span>
      </div>

      <div>
        <span>Engine Number: </span> <span>{vehicleId.enginenNum}</span>
      </div>

      <div>
        <span>Status: </span> <span>{vehicleId.status}</span>
      </div>

      <div>
        <span>Registrtion Numver: </span>{" "}
        <span>{vehicleId.registrationNum}</span>
      </div>

      <div>
        <span>Registrtion Expiry Date: </span>{" "}
        <span>
          {vehicleId.registrationExp &&
            vehicleId.registrationExp.toLocaleDateString()}
        </span>
      </div>

      <div>
        <span>Insurance Expiry Date: </span>{" "}
        <span>
          {vehicleId.insuranceExpiry &&
            vehicleId.insuranceExpiry.toLocaleDateString()}
        </span>
      </div>

      <div>
        <span>Insured Value: </span> <span>{vehicleId.insuredValue}</span>
      </div>

      <div>
        <span>Insurance Company: </span>{" "}
        <span>{vehicleId.insuranceCompany}</span>
      </div>

      <div>
        <span>Insurane Terms: </span> <span>{vehicleId.insuranceTerms}</span>
      </div>

      <div>
        <span>Owner: </span> <span>{vehicleId.owner}</span>
      </div>

      <div>
        <span>Location: </span> <span>{vehicleId.location}</span>
      </div>

      <div>
        <span>Note: </span> <span>{vehicleId.note}</span>
      </div>

      <div>
        <span>Updated At: </span>{" "}
        <span>{vehicleId.updatedAt.toLocaleDateString()}</span>
      </div>
    </div>
  );
}
