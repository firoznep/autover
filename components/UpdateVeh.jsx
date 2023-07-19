"use client";

import { updateVehicle } from "@/libs/updateVehicle";
import { useReducer, useState } from "react";
import FormItem from "./child_comp/FormItem";
import SelectDrop from "./child_comp/SelectDrop";
import { FaPenToSquare, FaXmark } from "react-icons/fa6";
import styles from "@/components/listDisplay.module.css";
import CustomBtn from "./child_comp/CustomBtn";
import Title from "./child_comp/Title";
import formatedDate from "@/libs/formatedDate";
import Success from "./Success";

const UpdateVeh = ({ itm }) => {
  const [show, setShow] = useState(false);
  const [test, setTest] = useState(false);

  const [upId, setUpId] = useState(null);
  const [manuf, setManuf] = useState("");
  const [mdn, setMdn] = useState("");
  const [clr, setClr] = useState("");
  const [ful, setFul] = useState("");
  const [typ, setTyp] = useState("");
  const [own, setWon] = useState("");
  const [plt, setPlt] = useState("");
  const [sts, setSts] = useState("");
  const [regNum, setRegNum] = useState("");
  const [regExp, setRegExp] = useState(new Date());
  const [insExp, setInsExp] = useState(new Date());
  const [trs, setTrs] = useState("");
  const [chn, setChn] = useState("");
  const [engn, setEngn] = useState("");
  const [insv, setInsv] = useState("");
  const [insC, setInsC] = useState("");
  const [insT, setInsT] = useState("");
  const [loc, setLoc] = useState("");
  const [nt, setNt] = useState("");

  const formReducer = (state, events) => {
    return {
      ...state,
      [events.target.name]: events.target.value,
    };
  };
  const [formData, setFormData] = useReducer(formReducer, {});

  const handleSubmit = (e) => {
    e.preventDefault();
    updateVehicle(formData, upId)
      .then(() => {
        setTest(true);
        setShow(false);
        // alert("Vehicle Updated Successfully.");
      })
      .catch((err) => alert("ERROR!!! Something went wrong..."));
  };

  const handleUpdate = (it) => {
    setShow(true);
    setUpId(it.id);
    setManuf(it.make);
    setMdn(it.model);
    setWon(it.owner);
    setClr(it.color);
    setFul(it.fuel);
    setTyp(it.type);
    setPlt(it.plateNum);
    setSts(it.status);
    setRegNum(it.registrationNum);
    setRegExp(it.registrationExp);
    setInsExp(it.insuranceExpiry);
    setTrs(it.tyreSize);
    setChn(it.chasisNum);
    setEngn(it.enginenNum);
    setInsv(it.insuredValue);
    setInsC(it.insuranceCompany);
    setInsT(it.insuranceTerms);
    setLoc(it.location);
    setNt(it.note);
  };

  return (
    <div>
      {test && (
        <Success
          message={"Vehicle Updated Successfully."}
          onClick={() => setTest(false)}
        />
      )}

      <FaPenToSquare
        className={`${styles.updateBtn} ${styles.editIcon}`}
        onClick={() => handleUpdate(itm)}
      />

      {show && (
        <div className={styles.showUpdate}>
          <CustomBtn onClick={() => setShow(false)} text={<FaXmark />} />

          <Title title={"Vehicle Update Form"} />

          <form onSubmit={handleSubmit} className={styles.formcontainer}>
            {/* <FormItem
              label={"id"}
              type={"text"}
              defaultValue={upId}
              name="id"
              disabled
            /> */}

            <FormItem
              label={"Registration Number"}
              name={"platenum"}
              type={"text"}
              dvalue={plt}
              onChange={setFormData}
            />

            <SelectDrop
              label={"Manufacturer"}
              name={"make"}
              onChange={setFormData}
              defaultValue={manuf}
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
              dvalue={mdn}
              onChange={setFormData}
            />

            <FormItem
              label={"Color"}
              name={"color"}
              type={"text"}
              dvalue={clr}
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
              defaultValue={ful}
              onChange={setFormData}
              values={["Petrol 95", "Diesel"]}
            />

            <SelectDrop
              label={"Type"}
              name={"type"}
              defaultValue={typ}
              onChange={setFormData}
              values={[
                "Commercial Vehicle",
                "Private Vehicle",
                "Private Transportation",
              ]}
            />

            <SelectDrop
              label={"year"}
              name={"registrationnum"}
              defaultValue={regNum}
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

            <FormItem
              label={"Tyre Size"}
              name={"tyresize"}
              type={"text"}
              dvalue={trs}
              onChange={setFormData}
            />

            <FormItem
              label={"Chassis Number"}
              name={"chassisnum"}
              type={"text"}
              dvalue={chn}
              onChange={setFormData}
            />

            <FormItem
              label={"Engine Number"}
              name={"enginenum"}
              type={"text"}
              dvalue={engn}
              onChange={setFormData}
            />

            <FormItem
              label={"Registration Expiry Date"}
              name={"registrationexp"}
              type={"date"}
              preDate={regExp && formatedDate(regExp)}
              onChange={setFormData}
            />

            <FormItem
              label={"Insurance Expiry Date"}
              name={"insuranceexpiry"}
              type={"date"}
              preDate={insExp && formatedDate(insExp)}
              onChange={setFormData}
            />

            <FormItem
              label={"Insured Value"}
              name={"insuredvalue"}
              type={"text"}
              dvalue={insv}
              onChange={setFormData}
            />

            <SelectDrop
              label={"Insurance Company "}
              name={"insurancecompany"}
              defaultValue={insC}
              onChange={setFormData}
              values={["Insurance Company", "General Takaful"]}
            />

            <SelectDrop
              label={"Insurance Terms "}
              name={"insuranceterms"}
              defaultValue={insT}
              onChange={setFormData}
              values={["Comprehensive", "Compulsory"]}
            />

            <SelectDrop
              label={"Owner"}
              name={"owner"}
              defaultValue={own}
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
              defaultValue={loc}
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
              defaultValue={sts}
              onChange={setFormData}
              values={["Active", "In Active", "In Garage"]}
            />

            <div className={styles.note}>
              <label htmlFor="note">Note:</label>
              <textarea
                defaultValue={nt}
                name="note"
                id="note"
                cols="60"
                rows="3"
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
export default UpdateVeh;
