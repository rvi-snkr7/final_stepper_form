import React, {useRef, useState} from "react";
import {Formik, Field, FieldArray, Form, ErrorMessage, FieldProps} from "formik";
import Pic from "./uploadpic";
import Preview from "./previeimage";
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import {TextField} from "@mui/material";
import {Formstepper} from "./Formstepper";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Detail() {
    const fileRef = useRef(null);
    return (
        <div>
            {/*<Pic></Pic>*/}
            <h1>Eminent Form</h1>
            <Formik
                initialValues={{
                    file: "",
                    name: "", gender: "", religion: "", category: "", dob: "", father: "",
                    mother: "", spouse: "", child: "", degree: "", course: "", startyear: "",
                    endyear: "", mobile: []
                }}
                onSubmit={(values) =>
                    setTimeout(() => {
                        console.log(JSON.stringify(values, null, 2));
                        console.log(values)
                    }, 500)
                }>
                {({values, setFieldValue}) => (
                    <Formstepper>

                        <div class="container text-center">
                            <h4>Personal Detail</h4>
                            <div class="row justify-content-start ">
                                <div class={"col p-3"}>
                                    <Field class="form-control form-control-lg" name="name" placeholder={"Name"}
                                           required={true}/><br></br>
                                </div>

                                <div className="col p-3">
                                    <input ref={fileRef} hidden type={"file"} onChange={(event) => {
                                        setFieldValue("file", event.target.files[0])
                                    }}/>
                                    {values.file && <Preview file={values.file}/>}
                                    <button class={"btn btn-danger"} onClick={() => {
                                        fileRef.current.click();
                                    }}>Attach Picture
                                    </button>
                                </div>
                            </div>

                            <div class="row align-items-start">
                                <div class="col p-3">
                                    <Field class="form-control form-control-lg" name="gender" placeholder={"Gender"}/>
                                </div>
                                <div class={"col p-3"}>
                                    <Field class="form-control form-control-lg" as={"select"} name="religion" placeholder={"Religion"}>
                                        <option value="">Religion</option>
                                        <option value="Hindu">HINDU</option>
                                        <option value="Islam">Islam</option>
                                        <option value="Jainism">Jainism</option>
                                        <option value="Buddhism">Buddhism</option>
                                        <option value="Christianity">Christianity</option>
                                    </Field>
                                </div>
                            </div>
                            <div class={"row align-items-start"}>
                                <div class={"col p-3"}>
                                    <Field class="form-control form-control-lg" name="category" placeholder={"Category"}/>
                                </div>
                                <div class={"col p-3"}>
                                    <Field class="form-control form-control-lg" name="dob" placeholder={"D.O.B"}/><br></br>
                                </div>

                            </div>
                            <div class={"row align-items-start"}>
                                <div class={"col p-3"}>
                                    <Field class="form-control form-control-lg" name="father" placeholder={"Father"}/>
                                </div>
                                <div class={"col p-3"}>
                                    <Field class="form-control form-control-lg" name="mother" placeholder={"Mother"}/><br></br>
                                </div>
                            </div>

                            <div class={"row align-items-start"}>
                                <div class={"col p-3"}>
                                    <Field class="form-control form-control-lg" name="spouse" placeholder={"Spouse"}/>
                                </div>
                                <div class={"col p-3"}>
                                    <Field class="form-control form-control-lg" name="child" placeholder={"Child"}/>
                                </div>
                            </div>
                        </div>

                        <div class="container text-center">
                            <h4>Communication Detail</h4>
                            <div class="row align-items-start">
                                <div class={"col"}>
                                    <FieldArray
                                        name="mobile"
                                        render={arrayHelpers => (
                                            <div>
                                                {values.mobile && values.mobile.length > 0 ? (
                                                    values.mobile.map((phone, index) => (
                                                        <div key={index}>
                                                            <Field class="form-control form-control-lg" name={`mobile.${index}`}
                                                                   type={"number"} placeholder={"Enter Number"}/>
                                                            <button
                                                                type="button"
                                                                onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                                                            >
                                                                <DeleteOutlineOutlinedIcon fontSize={"small"}/>
                                                            </button>
                                                            <button
                                                                type="button"
                                                                onClick={() => arrayHelpers.insert(index, '')} // insert an empty string at a position
                                                            >
                                                                <AddCircleOutlinedIcon fontSize="small"/>
                                                            </button>
                                                        </div>
                                                    ))
                                                ) : (
                                                    <button class="btn btn-secondary"
                                                            onClick={() => arrayHelpers.push('')}>
                                                        Add Mobile
                                                    </button>
                                                )
                                                }
                                            </div>
                                        )}
                                    />
                                </div>
                                <div class={"col"}>
                                    <Field class="form-control form-control-lg" name="email" placeholder="Email"/>
                                </div>
                                {/*<Field name="email" placeholder="Email"/>*/}
                            </div>
                        </div>
                        <div class="container text-center">
                            <h4>Education Detail</h4>
                            <div class={"row align-items-start"}>
                                <div class={"col p-3"}>
                                    <Field class="form-control form-control-lg" name="degree" placeholder={"Degree"}/>
                                </div>
                                <div class={"col p-3"}>
                                    <Field class="form-control form-control-lg" name="course" placeholder={"Subject"}/><br></br>
                                </div>
                            </div>
                            <div class={"row align-items-start"}>
                                <div class={"col p-3"}>
                                    <Field class="form-control form-control-lg" name="startyear" placeholder={"StartYear"}/>
                                </div>
                                <div class={"col p-3"}>
                                    <Field class="form-control form-control-lg" name="endyear" placeholder={"Endyear"}/>
                                </div>

                            </div>

                        </div>

                        <div>
                            <button class="btn btn-primary" type="submit">Submit</button>
                        </div>
                    </Formstepper>
                )}
            </Formik>

        </div>
    )
}

