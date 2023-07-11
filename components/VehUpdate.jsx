"use client";

import { useReducer, useState } from "react";
import styles from "./updateForm.module.css";
import { updateVehicle } from "@/libs/updateVehicle";
import FormItem from "./child_comp/FormItem";
import CustomBtn from "./child_comp/CustomBtn";
import SelectDrop from "./child_comp/SelectDrop";
import { FaPenToSquare, FaXmark } from "react-icons/fa6";

const VehUpdate = (id) => {
  const [upId, setUpId] = useState(null);
  const [show, setShow] = useState(false);

  const formReducer = (state, events) => {
    return {
      ...state,
      [events.target.name]:
        typeof events.target.value === "string"
          ? events.target.value.toLowerCase()
          : events.target.value,
    };
  };
  const [formData, setFormData] = useReducer(formReducer, {});

  const handleSubmit = (e) => {
    e.preventDefault();

    updateVehicle(formData, id.items)
      .then(() => {
        setShow(false);
        alert("Updated Successfully.");
      })
      .catch((err) => alert("ERROR!!! Something went wrong..."));
  };

  const handleUpdate = () => {
    setShow(true);
    setUpId(id.items);
  };

  return (
    <div>
      <FaPenToSquare
        className={`${styles.updateBtn} ${styles.editIcon}`}
        onClick={handleUpdate}
      />

      {show && (
        <div className={styles.showUpdate}>
          <CustomBtn onClick={() => setShow(false)} text={<FaXmark />} />

          <form onSubmit={handleSubmit} className={styles.formcontainer}>
            <FormItem
              label={"id"}
              type={"text"}
              defaultValue={upId}
              name="id"
              disabled
            />

            <SelectDrop
              label={"Manufacturer"}
              name={"make"}
              onChange={setFormData}
              values={[
                "GMC",
                "BMW",
                "Chevrolet",
                "Lexus",
                "Mitsubishi",
                "Nissan",
                "Renault",
                "Rolls-Royce",
                "Toyota",
              ]}
            />
            <FormItem
              label={"Model"}
              name={"model"}
              type={"text"}
              onChange={setFormData}
            />

            <FormItem
              label={"Color"}
              name={"color"}
              type={"text"}
              onChange={setFormData}
            />

            <FormItem
              label={"image"}
              name={"image"}
              type={"file"}
              onChange={setFormData}
              accept=".png, .jpg, .jpeg "
            />

            <SelectDrop
              label={"Type"}
              name={"type"}
              onChange={setFormData}
              values={[
                "Commercial Vehicle",
                "Private Vehicle",
                "Private Transportation",
              ]}
            />
            <FormItem
              label={"Year Of Made"}
              name={"year"}
              type={"date"}
              onChange={setFormData}
            />

            <FormItem
              label={"plate Number"}
              name={"platenum"}
              type={"text"}
              onChange={setFormData}
            />

            <FormItem
              label={"Tyre Size"}
              name={"tyresize"}
              type={"text"}
              onChange={setFormData}
            />

            <FormItem
              label={"Chassis Number"}
              name={"chassisnum"}
              type={"text"}
              onChange={setFormData}
            />

            <FormItem
              label={"Engine Number"}
              name={"enginenum"}
              type={"text"}
              onChange={setFormData}
            />

            <FormItem
              label={"Registration Number"}
              name={"registrationnum"}
              type={"text"}
              onChange={setFormData}
            />

            <FormItem
              label={"Registration Expiry Date"}
              name={"registrationexp"}
              type={"date"}
              onChange={setFormData}
            />

            <FormItem
              label={"InsuranceExpiry"}
              name={"insuranceexpiry"}
              type={"date"}
              onChange={setFormData}
            />

            <FormItem
              label={"Insured Value"}
              name={"insuredvalue"}
              type={"text"}
              onChange={setFormData}
            />

            <SelectDrop
              label={"Insurance Type(Company)"}
              name={"insurancecompany"}
              onChange={setFormData}
              values={[
                "Comprehensive",
                "Compulsory",
                "Insurance Company",
                "General Takaful",
              ]}
            />

            <FormItem
              label={"Insurance Terms"}
              name={"insuranceterms"}
              type={"text"}
              onChange={setFormData}
            />

            <SelectDrop
              label={"Owner"}
              name={"owner"}
              onChange={setFormData}
              values={[
                "Abdullah Haider SH Al Haider",
                "Ali Haider SH Al Haider",
                "Bador Haider SH Al Haider",
                "Falah haider SH Al Haider",
                "Haider Holding",
                "Sanam Veterinary Care",
                "Sulaiman Al-Haj Haider & Sons",
                "Suliman Akhwan",
              ]}
            />

            <SelectDrop
              label={"Location"}
              name={"location"}
              onChange={setFormData}
              values={[
                "Haider Holding",
                "SHH&Sons",
                "Sanam Veterinary Care",
                "Owner house",
                "Mazra",
                "SAHH&Sons-personal",
              ]}
            />

            <fieldset className={styles.fieldSet}>
              <legend>Status:</legend>
              <div className={styles.status}>
                <div>
                  <input
                    onChange={setFormData}
                    type="radio"
                    id="status1"
                    name="status"
                    value="active"
                  />
                  <label htmlFor="status1">active</label>
                </div>

                <div>
                  <input
                    onChange={setFormData}
                    type="radio"
                    id="status2"
                    name="status"
                    value="inActive"
                  />
                  <label htmlFor="status2">inActive</label>
                </div>

                <div>
                  <input
                    onChange={setFormData}
                    type="radio"
                    id="status3"
                    name="status"
                    value="inGarage"
                  />
                  <label htmlFor="status3">In Garage</label>
                </div>
              </div>
            </fieldset>

            <div className={styles.note}>
              <label htmlFor="note">Note:</label>
              <textarea
                name="note"
                id="note"
                cols="60"
                rows="6"
                onChange={setFormData}
              />
            </div>

            <CustomBtn type={"submit"} text={"Update"} />
          </form>
        </div>
      )}
    </div>
  );
};
export default VehUpdate;
