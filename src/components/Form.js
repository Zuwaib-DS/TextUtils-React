import React, {useState} from "react";

function Form({showAlert, hideAlert}) {
const TransformToUppercase = () => {
    const textarea = document.getElementById("exampleFormControlTextarea1");
    if (textarea) {
        if(textarea.value === "") {
            showAlert("Please enter some text to convert!", "warning");
            return;
        }
        // Update the result textarea with the transformed text
        setText(textarea.value.toUpperCase());
        showAlert("Text converted to uppercase!", "success");
    }
}

const TransformToLowercase = () => {
    const textarea = document.getElementById("exampleFormControlTextarea1");
    if (textarea) {
        if(textarea.value === "") {
            showAlert("Please enter some text to convert!", "warning");
            return;
        }
        // Update the result textarea with the transformed text
        setText(textarea.value.toLowerCase());
        showAlert("Text converted to lowercase!", "info");
    }
}

const [upperCaseText, setText] = useState("");


return (
    <>
        <div className="mb-3">
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
                Insert your text here
            </label>
            <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
            ></textarea>
        </div>
        <div>
            <button type="button" className="btn btn-primary" onClick={TransformToUppercase}>TO UPPERCASE</button>
            <button type="button" className="btn btn-primary mx-2" onClick={TransformToLowercase}>to lowercase</button>
        </div>
        <hr></hr>
        <div className="mb-3">
            <label htmlFor="resultTextArea" className="form-label">
                Result
            </label>
            <textarea
                className="form-control"
                id="resultTextArea"
                rows="3" disabled value={upperCaseText}
            ></textarea>
        </div>
    </>
)
}
export default Form;
