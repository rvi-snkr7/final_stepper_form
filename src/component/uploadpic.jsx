import React from "react";
import {useFormik, FieldArray} from "formik";
function Pic(){
    const formik=useFormik({
        initialValues:{
            photo:"",
            name:"",
        },
        onSubmit:(values)=>{
            console.log(values);
        }
    });
    return(
        <>
            <form onSubmit={formik.handleSubmit} encType="multipart/form-data">
                <div>
                    <label>Upload File</label>
                    <input type={"file"} name={"photo"} accept={'image/*'} onChange={(e)=>
                        formik.setFieldValue(
                        'photo',e.currentTarget.files[0])}/>
                    <input type={"text"} name={'name'} placeholder={"Name"} onChange={formik.handleChange} value={formik.values.name}/>

                </div>
                <button type={'submit'}>Submit</button>
            </form>

        </>
    )
}
export default Pic;
