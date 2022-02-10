import React, { useState } from 'react'

export default function TextForm(props) {

    const[text,setText] = useState("");
    let newText = ""

    const onClickUpHandler = (e)=> {
        newText = text.toUpperCase();
        setText(newText);
    }

    const onClickLoHandler = (e)=> {
        newText = text.toLowerCase();
        setText(newText);
    }
    
    const onClickClearHandler =(e) =>{
        newText = "";
        setText(newText);
    }
    
    const onChangeHandler = (e) => {
        setText(e.target.value);
    }

    const handleCopy = () => {
        let text = document.getElementById("exampleFormControlTextarea1");
        text.select();
        navigator.clipboard.writeText(text.value);
    }


  return (
      <>
    <div className='container' style ={{color:props.mode ==="dark"?"white":"black"}} >
      
        <div className="mb-3">
           <h2>Enter your Text Here</h2>
            <textarea className="form-control" value={text} onChange={onChangeHandler} style ={{backgroundColor:props.mode ==="dark"?"#848484":"white",color:props.mode ==="dark"?"white":"black"}}  id="exampleFormControlTextarea1" rows="10"></textarea>
        </div>
        <button className="btn btn-dark" onClick={onClickUpHandler} >Click for UpperCase</button>
        <button className="btn btn-dark mx-1 " onClick={onClickLoHandler} >Click for UpperCase</button>
        <button className="btn btn-dark mx-1 " onClick={onClickClearHandler} >Clear</button>
        <button className="btn btn-dark mx-1 " onClick={handleCopy} >Copy</button>
       
    </div>
     <div className="container my-2">
        <h3>Text Summary</h3> 
        <p>Word Count :- {text?text.split(" ").length:""} || Character Length :- {text?text.length:""} </p>

        <h3>Text Preview</h3>
        <p>{text}</p>
     </div>

     </>
  )
}
