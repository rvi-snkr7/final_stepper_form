import React, {useRef} from "react";
import {Formik,Field,FieldArray,Form} from "formik";
import Pic from "./uploadpic";
import TextField from '@mui/material/TextField';
import Preview from "./previeimage";

function Detail(){
    const fileRef=useRef(null);
    return(
        <div>
            {/*<Pic></Pic>*/}
            <h1>Details</h1>
            <Formik
                initialValues={{
                    file:"",
                    name:"", gender:"", religion:"",category:"",dob:"",father:"",
                    mother:"",spouse:"",child:"",degree:"",course:"",startyear:"",
                    endyear:"",mobile:[]
                }}
                onSubmit={(values) =>
                    setTimeout(() => {
                        console.log(JSON.stringify(values, null, 2));
                        console.log(values)
                    }, 500)
                }>
                {( {values,setFieldValue} ) => (
                    <Form>
                        <h4>Personal Detail</h4>
                        <input ref={fileRef} hidden type={"file"}  onChange={(event)=>{
                            setFieldValue("file",event.target.files[0])}}/>
                        { values.file && <Preview file={values.file}/>}
                        <button onClick={()=>{
                            fileRef.current.click();
                        }}>Attach Picture</button>

                        <br></br>
                        <Field name="name" placeholder={"Name"} required={true} /><br></br>
                        <Field name="gender"  placeholder={"Gender"} required={true}/>
                        <Field name="religion"   placeholder={"Religion"} required={true}/><br></br>
                        <Field name="category"   placeholder={"Category"} required={true}/>
                        <Field name="dob"      placeholder={"D.O.B"} required={true}/><br></br>
                        <Field name="father"   placeholder={"Father"} required={true}/>
                        <Field name="mother"   placeholder={"Mother"} required={true}/><br></br>
                        <Field name="spouse"   placeholder={"Spouse"} required={true}/>
                        <Field name="child"   placeholder={"Child"} required={true}/>


                        <h4>Communication Detail</h4>
                        <FieldArray
                            name="mobile"
                            render={arrayHelpers => (
                                <div>
                                    {values.mobile && values.mobile.length > 0 ? (
                                        values.mobile.map((phone, index) => (
                                            <div key={index}>
                                                <Field name={`mobile.${index}`} />
                                                <button
                                                    type="button"
                                                    onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                                                >
                                                    -
                                                </button>
                                                <button
                                                    type="button"
                                                    onClick={() => arrayHelpers.insert(index, '')} // insert an empty string at a position
                                                >
                                                    +
                                                </button>
                                            </div>
                                        ))
                                    ) :(
                                        <button type={"text"} onClick={() => arrayHelpers.push('')} >
                                              Mobile
                                         </button>
                                    )
                                    }
                                </div>
                            )}
                        />
                        <Field name="email"     placeholder="Email" required={true}/>
                        <h4>Education Detail</h4>
                        <Field name="degree"    placeholder={"Degree"} required={true}/>
                        <Field name="course"    placeholder={"Subject"} required={true}/><br></br>
                        <Field name="startyear" placeholder={"StartYear"} required={true}/>
                        <Field name="endyear"   placeholder={"Endyear"} required={true}/>

                        <div>
                            <button type="submit">Submit</button>
                        </div>
                    </Form>
                )}
            </Formik>

        </div>
    )
}
export default Detail
