"use client";

import { useReducer, useState } from "react";
import styles from "./createVeh.module.css";
import FormItem from "./child_comp/FormItem";
import { createVeh } from "@/libs/createVeh";
import SelectDrop from "./child_comp/SelectDrop";
import Title from "./child_comp/Title";
import CustomBtn from "./child_comp/CustomBtn";
import Success from "./Success";

const CreateVeh = () => {
  const [test, setTest] = useState(false);

  const formReducer = (state, events) => {
    return {
      ...state,
      [events.target.name]: events.target.value,
    };
  };
  const [formData, setFormData] = useReducer(formReducer, {});

  const handleSubmit = (e) => {
    e.preventDefault();

    createVeh(formData)
      .then(() => {
        setTest(true);
        // alert(" Vehicle Added Successfully.");
      })
      .catch((err) =>
        alert("ERROR!!! Something went wrong...(Check Duplicate value!)")
      );
  };

  return (
    <div className={styles.formContainer}>
      {test && (
        <Success
          message={"Vehicle Updated Successfully."}
          onClick={() => setTest(false)}
        />
      )}

      <Title title={"Add Vehicle Form"} />

      <form onSubmit={handleSubmit}>
        <FormItem
          label={"Registration Number *"}
          name={"platenum"}
          type={"text"}
          onChange={setFormData}
          required
        />

        <SelectDrop
          label={"Manufacturer *"}
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
          label={"Model *"}
          name={"model"}
          type={"text"}
          onChange={setFormData}
          required
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
          label={"Fuel"}
          name={"fuel"}
          onChange={setFormData}
          values={["Petrol 95", "Diesel"]}
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

        <SelectDrop
          label={"year"}
          name={"registrationNum"}
          onChange={setFormData}
          values={[
            "1990",
            "1991",
            "1992",
            "1993",
            "1994",
            "1995",
            "1996",
            "1997",
            "1998",
            "1999",
            "2000",
            "2001",
            "2002",
            "2003",
            "2004",
            "2005",
            "2006",
            "2007",
            "2008",
            "2009",
            "2010",
            "2011",
            "2012",
            "2013",
            "2014",
            "2015",
            "2016",
            "2017",
            "2018",
            "2019",
            "2020",
            "2021",
            "2022",
            "2023",
            "2024",
            "2025",
            "2026",
            "2027",
            "2028",
            "2029",
            "2030",
          ]}
        />

        {/* <FormItem
          label={"Year"}
          name={"registrationNum"}
          type={"text"}
          onChange={setFormData}
        /> */}

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
          label={"Registration Expiry Date"}
          name={"registrationexp"}
          type={"date"}
          onChange={setFormData}
        />

        <FormItem
          label={"Insurance Expiry Date"}
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
          label={"Insurance Company"}
          name={"insurancecompany"}
          onChange={setFormData}
          values={["Insurance Company", "General Takaful"]}
        />

        <SelectDrop
          label={"Insurance Terms "}
          name={"insuranceterms"}
          onChange={setFormData}
          values={["Comprehensive", "Compulsory"]}
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
            "Owner House",
            "Mazra",
            "SAHH&Sons-Personal",
          ]}
        />

        <SelectDrop
          label={"Status"}
          name={"status"}
          onChange={setFormData}
          values={["Active", "In Active", "In Garage"]}
        />

        <div className={styles.note}>
          <label htmlFor="note">Note:</label>
          <textarea
            name="note"
            id="note"
            cols="60"
            rows="3"
            onChange={setFormData}
          />
        </div>

        <CustomBtn text={"Submit"} type={"submit"} />
      </form>
    </div>
  );
};
export default CreateVeh;
