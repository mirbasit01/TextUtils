import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("upercase was click" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to uppercase" , "success")
  };

  const handleLoClick = () => {
    // console.log("lowercase was click" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase" , "success")

  }

  const  handleclerClick = () => {
    // console.log("lowercase was click" + text);
    let newText = ' ';
    setText(newText);
    props.showAlert("Text Cler" , "success")
  }
  const handelOnChange = (event) => {
    // console.log("On change ");
    setText(event.target.value);
    
  };

  const handleCopy = () =>{
    var text = document.getElementById("mybox");
    text.select();
    // text.setSelectionRang(0, 9999);
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRange();
    props.showAlert("Text Copy" , "success")


  }


  const handelextrspaces = () => {
    let newText = text.split(/[ ]+ /);
    setText(newText.join(" "))
    props.showAlert("Text Remove Extra spaceing" , "success")

    
  }



   const [text, setText] = useState("");

  return (
    <>
      <div className="container"  style={{color: props.mode=== 'dark'?'white':'black'  }}
      >
        <h1>{props.heading}</h1>

        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handelOnChange}
            style={{backgroundColor: props.mode=== 'dark'?'#13466e':'white ', color: props.mode=== 'dark'?'white':'black' }}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length===0}  className="btn- btn-primary mx-2" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        
        <button disabled={text.length===0} className="btn- btn-primary mx-2 mt-2" onClick={handleLoClick}>
          Convert to Lowercase
        </button>
        <button disabled={text.length===0} className="btn- btn-primary mx-2 mt-2" onClick={handleclerClick}>
           Cler text
        </button>
        <button disabled={text.length===0} className="btn- btn-primary mx-2 mt-2" onClick={handleCopy}>
           Copy text
        </button>
  
     <button disabled={text.length===0} className="btn- btn-primary mx-2 mt-2" onClick={handelextrspaces}>
     Remove Extra Space
  </button>

      </div>
      <div className="container my-3" style={{color: props.mode=== 'dark'?'white':'black'  }}>
        <h2> Your Text summary </h2>
        <p>
          {text.split(/\s+ /) .length} words, and {text.length} characters
        </p>
        <p>
          {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read  
        </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview !"}</p>

      </div>
    </>
  );
}
