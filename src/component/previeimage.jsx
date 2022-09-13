import React from "react";
// import {useState} from "react";

const Preview =({ file })=>{
    const [preview, setPreview] = React.useState(null);
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload=()=>{
        setPreview(reader.result);
    };
    return(
            <div className="image">
                { preview? <img src={ preview } alt="preview" width="100px" height="100px" />: "loading.."}
            </div>

    );
}
export default Preview
