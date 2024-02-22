import React from 'react'

function Alert(prop) {
    const capitlize =(word)=>{
const lower = word
return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
          
       prop.alert && <div className={`alert alert-${prop.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitlize(prop.alert.type)}</strong> : {prop.alert.msg}
           
        </div>

    )
}

export default Alert
