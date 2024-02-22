import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
function Prop(prop) {

  const [text, setText] = useState("")

  function uppeerla(e) {
    setText(e.target.value);
  }
  function toupper() {
    let newtext = text.toUpperCase();
    setText(newtext)
    prop.showalert("your paragraph is converted to uppercase", "success")
  }
  function toLower() {
    let newtext = text.toLowerCase();
    setText(newtext)
    prop.showalert("your paragraph is converted to Lowercase", "success")
  }
  const removeextraspace = () => {
    let newtext = text.split(/[ ]+/)
    setText(newtext.join(" "))
    prop.showalert("Extra space Removed", "success")
  }
  const handlecopy = () => {
    let text = document.getElementById("box")
    navigator.clipboard.writeText(text.value)
    prop.showalert("copied text your clipboard", "success")
  }

  const cleartext = () => {
    let newtext = ''
    setText(newtext)
    prop.showalert("your text Removed ", "success")
  }


  return (
    <>
      <div className='countainer' style={{color : prop.mode === 'dark'?'white':'#212832' }}>
        <div className="main" >
          <h1 >Enter the text Here</h1>
          
            <Form.Control
              id='box'
              value={text}
              onChange={uppeerla}
              as="textarea"
              style={{ height: '300px', width: '700px',backgroundColor : prop.mode === 'light'?'white':'#212832', color : prop.mode === 'dark'?'white':'#212832'  }}
            />
        
          <div className="btn">
            <Button variant=" btn btn-primary  my-1  mx-1" onClick={toupper}>Upper case</Button>
            <Button variant="btn btn-warning my-1 mx-1" onClick={toLower}>Lower case</Button></div>
          <Button variant="btn btn-success   my-1  mx-1" onClick={removeextraspace}>Remove extra space</Button>
          <Button variant="btn btn-primary  my-1  mx-1" onClick={handlecopy}>copy text</Button>
          <Button variant="outline-secondary   my-1  mx-1" onClick={cleartext}>clear text</Button>
        </div>
        <div className="countainer">
          <h3> {text.length} characters  {text.split(" ").filter((element)=>{ return element!==0} ).length} words</h3>
          <h3> {text.split(" ").length * 0.008} Miunts to read this paragraph</h3>
        </div>
      </div>
    </>
  )
}

export default Prop
