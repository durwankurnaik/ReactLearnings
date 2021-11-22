import React, { useState } from 'react'

export default function TextFrom(props) {
  const [text, setText] = useState("");

  const handleOnChange = (event) => {
    console.log("On Change function");
    setText(event.target.value);
  }

  const handleUpClick = (event) => {
    setText(text.toUpperCase());
  }

  const handleLoClick = () => {
    setText(text.toLowerCase());
  }

  const handleClearText = () => {
    setText('');
  }

  return (
    <div>
      <div className="container mt-4"> 
        <textarea className="form-control" value={text} onChange={handleOnChange} placeholder={props.temxt} rows="12" id="textInp"></textarea>
        <button onClick={handleUpClick} className="btn btn-primary mt-3">To Uppercase</button>
        <button onClick={handleLoClick} className="btn btn-primary mt-3 mx-2">To Lowercase</button>
        <button onClick={handleClearText} className="btn btn-primary mt-3">Clear Text</button>
      </div>
      <div className={`container mt-3 text-${props.tmode}`}>
        <h1>Summary of your entered text</h1>
        <p>{text.length > 0 ? text.split(/\s+/).length: 0} words and {text.length} characters</p>
      </div>
      <div className={`container mt-4 text-${props.tmode}`}>
        <h2>Preview of your text</h2>
        <p>{text.length > 0 ? text: "Enter your text above to see the preview in here"}</p>
      </div>
    </div>
  )
}
