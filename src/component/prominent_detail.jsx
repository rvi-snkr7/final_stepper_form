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

    async function AddData(values) {
        let result = await fetch( "http://localhost:3000/api/detail/prominent", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json',
            },
            body: JSON.stringify(values)
        });
        result = await result.json();
        console.log("data",result)
    }
    return (
        <div>
            {/*<Pic></Pic>*/}
            <h1>Eminent Form</h1>
            <Formik
                initialValues={{
                    file: "",
                    name: "", gender: "", religion: "", category: "", dob: "", father: "",
                    mother: "", spouse: "", child: "",
                    education: [{degree: "", course: "", startyear: "", endyear: ""}],
                    mobile:[]
                }}
                onSubmit={(values) =>
                    setTimeout(() => {
                        AddData(values)
                        console.log(JSON.stringify(values, null, 2));
                        console.log(values)
                    }, 500)
                }>
                {({values, setFieldValue}) => (
                    <Formstepper>

                        <div className="container text-center">
                            <h4>Personal Detail</h4>
                            <div className="row justify-content-start ">
                                <div className={"col p-3"}>
                                    <div className="form-floating mb-0">
                                        <Field className="form-control form-control-lg" name="name" placeholder={"Name"}
                                               required={true} id={"floatingInputValue"}/>
                                        <label htmlFor="floatingTextarea">Name</label>
                                    </div>
                                </div>

                                <div className="col p-3">
                                    <input ref={fileRef} hidden type={"file"} onChange={(event) => {
                                        setFieldValue("file", event.target.files[0])
                                    }}/>
                                    {values.file && <Preview file={values.file}/>}
                                    <button className={"btn btn-danger"} onClick={() => {
                                        fileRef.current.click();
                                    }}>Attach Picture
                                    </button>
                                </div>
                            </div>

                            <div className="row align-items-start">

                                <div className="col p-3">
                                    {/*<div className="form-floating mb-0">*/}
                                    <Field className="form-control form-control-lg" name="gender"
                                           placeholder={"Gender"} as={"select"}>
                                        <option value="">Gender</option>
                                        <option value="MALE">MALE</option>
                                        <option value="FEMALE">FEMALE</option>
                                        <option value="OTHER">OTHER</option>
                                    </Field>

                                    {/*<label htmlFor="floatingTextarea">Gender</label>*/}
                                    {/*</div>*/}
                                </div>

                                <div className={"col p-3"}>
                                    <Field className="form-control form-control-lg" as={"select"} name="religion"
                                           placeholder={"Religion"}>
                                        <option value="">Religion</option>
                                        <option value="Hindu">HINDU</option>
                                        <option value="Islam">Islam</option>
                                        <option value="Jainism">Jainism</option>
                                        <option value="Buddhism">Buddhism</option>
                                        <option value="Christianity">Christianity</option>
                                    </Field>
                                </div>

                            </div>
                            <div className={"row align-items-start"}>
                                <div className={"col p-3 "}>
                                    <Field className="form-control form-control-lg " name="category"
                                           placeholder={"Category"}/>
                                </div>
                                <div className={"col p-3"}>
                                    <Field className="form-control form-control-lg" name="dob"
                                           type={"Date"}/>
                                </div>

                            </div>
                            <div className={"row align-items-start"}>
                                <div className={"col p-3"}>
                                    <Field className="form-control form-control-lg" name="father"
                                           placeholder={"Father"}/>
                                </div>
                                <div className={"col p-3"}>
                                    <Field className="form-control form-control-lg" name="mother"
                                           placeholder={"Mother"}/><br></br>
                                </div>
                            </div>

                            <div className={"row align-items-start"}>
                                <div className={"col p-3"}>
                                    <Field className="form-control form-control-lg" name="spouse"
                                           placeholder={"Spouse"}/>
                                </div>
                                <div className={"col p-3"}>
                                    <Field className="form-control form-control-lg" name="child" placeholder={"Child"}/>
                                </div>
                            </div>
                        </div>

                        <div className="container text-center">
                            <h4>Communication Detail</h4>
                            <div className="row align-items-start">
                                <div className={"col"}>
                                    <FieldArray name="mobile">

                                        {({insert, remove, push}) => (
                                            <div>
                                                {values.mobile.length > 0 &&
                                                    values.mobile.map((phone, index) => (
                                                        <div key={index}>
                                                            {/*<Field  name={`mobile.${index}`}/>*/}
                                                            <Field className="form-control form-control-lg"
                                                                   name={`mobile.${index}`}
                                                                   type={"number"} placeholder={"Enter Number"}/>

                                                            <button
                                                                type="button"
                                                                onClick={() => remove(index)} // remove a mobile from the list
                                                            >
                                                                <DeleteOutlineOutlinedIcon fontSize={"small"}/>
                                                            </button>
                                                            {/*<button*/}
                                                            {/*    type="button"*/}
                                                            {/*    onClick={() => insert(index, '')} // insert an empty string at a position*/}
                                                            {/*>*/}
                                                            {/*    <AddCircleOutlinedIcon fontSize="small"/>*/}
                                                            {/*</button>*/}
                                                        </div>
                                                    ))}
                                                <button className="btn btn-secondary"
                                                        onClick={() => push('')}>
                                                    <AddCircleOutlinedIcon fontSize="small"/>
                                                    {/*Add mob*/}
                                                </button>
                                            </div>
                                        )}
                                    </FieldArray>
                                </div>
                                <div className={"col"}>
                                    <Field className="form-control form-control-lg" name="email" placeholder="Email"/>
                                </div>
                            </div>
                        </div>

                        <div className="container text-center">
                            <h4>Education Detail</h4>
                            {/*<div className={"row align-items-start"}>*/}
                            {/*    <div className={"col p-3"}>*/}
                            {/*        <Field className="form-control form-control-lg" name="degree"*/}
                            {/*               placeholder={"Degree"}/>*/}
                            {/*    </div>*/}
                            {/*    <div className={"col p-3"}>*/}
                            {/*        <Field className="form-control form-control-lg" name="course"*/}
                            {/*               placeholder={"Subject"}/><br></br>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            {/*<div className={"row align-items-start"}>*/}
                            {/*    <div className={"col p-3"}>*/}
                            {/*        <Field className="form-control form-control-lg" name="startyear"*/}
                            {/*               placeholder={"StartYear"}/>*/}
                            {/*    </div>*/}
                            {/*    <div className={"col p-3"}>*/}
                            {/*        <Field className="form-control form-control-lg" name="endyear"*/}
                            {/*               placeholder={"Endyear"}/>*/}
                            {/*    </div>*/}

                            {/*</div>*/}

                            <FieldArray name="education">
                                {({insert, remove, push}) => (
                                    <div>
                                        {values.education.length > 0 &&
                                            values.education.map((edu, index) => (
                                                <div key={index}>
                                                    {/*<Field  name={`mobile.${index}`}/>*/}
                                                    <div className="row align-items-start">
                                                        <div className={"col"}>
                                                            <Field className="form-control form-control-lg"
                                                                   name={`education.${index}.degree`}
                                                                   type={"text"} placeholder={"Degree"}/>
                                                        </div>
                                                        <div className={"col"}>
                                                            <Field className="form-control form-control-lg"
                                                                   name={`education.${index}.course`}
                                                                   type={"text"} placeholder={"Course"}/>
                                                        </div>

                                                    </div>
                                                    <div className="row align-items-start">
                                                        <div className={"col"}>
                                                            <Field className="form-control form-control-lg"
                                                                   name={`education.${index}.startyear`}
                                                                   type={"text"} placeholder={"Startyear"}/>
                                                        </div>
                                                        <div className={"col"}>
                                                            <Field className="form-control form-control-lg"
                                                                   name={`education.${index}.endyear`}
                                                                   type={"text"} placeholder={"Endyear"}/>
                                                        </div>

                                                    </div>


                                                    <button
                                                        type="button"
                                                        onClick={() => remove(index)} // remove a mobile from the list
                                                    >
                                                        <DeleteOutlineOutlinedIcon fontSize={"small"}/>
                                                    </button>
                                                    {/*<button*/}
                                                    {/*    type="button"*/}
                                                    {/*    onClick={() => insert(index, '')} // insert an empty string at a position*/}
                                                    {/*>*/}
                                                    {/*    <AddCircleOutlinedIcon fontSize="small"/>*/}
                                                    {/*</button>*/}
                                                </div>
                                            ))}
                                        <button className="btn btn-secondary"
                                                onClick={() => push({
                                                    degree: "",
                                                    course: "",
                                                    startyear: "",
                                                    endyear: ""
                                                })}>
                                            <AddCircleOutlinedIcon fontSize="small"/>
                                            {/*Add mob*/}
                                        </button>

                                    </div>
                                )}
                            </FieldArray>


                        </div>

                        <div>
                            <button className="btn btn-primary" type="submit">Submit</button>
                        </div>
                    </Formstepper>
                )}
            </Formik>

        </div>
    )
}

