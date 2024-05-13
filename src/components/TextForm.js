import React, {useState} from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("");

const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(": Converted to Uppercase","success")
}

const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(": Converted to Lowercase","success")
}

const handleClearClick = ()=>{
    let newText = "";
    setText(newText);
    props.showAlert(": All text is cleared now","success")
}

const handleCopyClick = ()=>{
    var text = document.getElementById('myBox');
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert(": Copied to clipboard","success")
}

const handleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(' '));
    props.showAlert(": Extra spaces is removed","success")
}

const handleOnChange = (event)=>{
    setText(event.target.value);
}

    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3"> 
            <label htmlFor="myBox" className="form-label"></label>
                <textarea className="form-control" id="myBox" rows="9" value={text} placeholder='Enter your text here:' onChange={handleOnChange} style={{backgroundColor: props.mode===`dark`?`gray`:`white`, color: props.mode===`dark`?`white`:`black`}} ></textarea>
                <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert to Uppercase</button>
                <button className="btn btn-primary my-3 mx-3" onClick={handleLoClick}>Convert to Lowercase</button>
                <button className="btn btn-primary my-3" onClick={handleClearClick}>Clear</button>
                <button className="btn btn-primary my-3 mx-3" onClick={handleCopyClick}>Copy</button>
                <button className="btn btn-primary my-3" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
        </div>
        <div className="container my-3">
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h2>Preview:</h2>
            <p>{text.length>0?text:'Enter your text in above textbox to preview it here' }</p>
        </div>
        </>
    )
}
