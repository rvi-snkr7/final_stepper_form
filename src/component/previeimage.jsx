import React from "react";
// import {useState} from "react";

const Preview = ({file}) => {
    const [preview, setPreview] = React.useState(null);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
        setPreview(reader.result);
    };
    return (
        <div className="container text-center">
            <div className="row align-items-start">
                <div className="col">

                    {preview ? <img src={preview} alt="preview" width="65px" height="65px"/> : "loading.."}
                </div>
            </div>
        </div>

    );
}
export default Preview
