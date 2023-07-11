"use client";

import { createEmp } from "@/libs/createEmp";
import styles from "./createEmp.module.css";

import { useReducer } from "react";
import FormItem from "./child_comp/FormItem";
import SelectDrop from "./child_comp/SelectDrop";
import Title from "./child_comp/Title";
import CustomBtn from "./child_comp/CustomBtn";

const CreateEmp = () => {
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

    createEmp(formData)
      .then(() => alert("'Congratulation...', Employee Added successfully."))
      .catch((err) =>
        alert("ERROR!!! Something went worng... (Check Duplicate value)")
      );
  };

  return (
    <div className={styles.mainContainer}>
      <Title title={"Add Employee Form"} />

      <form onSubmit={handleSubmit} className={styles.formcontainer}>
        <FormItem
          label={"Name *"}
          name={"name"}
          type={"text"}
          onChange={setFormData}
          required
        />

        <FormItem
          label={"Employee Code *"}
          name={"empcode"}
          type={"text"}
          onChange={setFormData}
          required
        />

        <FormItem
          label={"Image of Employee"}
          name={"image"}
          type={"file"}
          onChange={setFormData}
          accept=".png, .jpg, .jpeg "
        />

        <FormItem
          label={"Email"}
          name={"email"}
          type={"email"}
          onChange={setFormData}
        />

        <FormItem
          label={"Country"}
          name={"country"}
          type={"text"}
          onChange={setFormData}
        />

        <FormItem
          label={"Age"}
          name={"age"}
          type={"number"}
          onChange={setFormData}
        />

        <FormItem
          label={"Contact"}
          name={"contact"}
          type={"number"}
          onChange={setFormData}
        />

        <FormItem
          label={"License"}
          name={"license"}
          type={"text"}
          onChange={setFormData}
        />

        <FormItem
          label={"License Expiry Date"}
          name={"licenseexp"}
          type={"date"}
          onChange={setFormData}
        />

        <SelectDrop
          label={"License Category"}
          name={"licensecategory"}
          onChange={setFormData}
          values={["Bus", "Car", "Medium Truck", "Motor Cycle"]}
        />

        <FormItem
          label={"Assign Vehicle To Operator"}
          name={"vehicleid"}
          type={"number"}
          onChange={setFormData}
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
                value="onVacation"
              />
              <label htmlFor="status3">On Vacation</label>
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

        <CustomBtn type={"submit"} text={"Submit"} />
      </form>
    </div>
  );
};
export default CreateEmp;
