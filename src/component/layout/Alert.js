import React from 'react'

 const Alert =({alert}) => {
  return (
    alert !== null &&
    <div className={`alert alert-${alert.type}`}>
        <i className="fa-solid fa-circle-info"></i> {alert.msg}
    </div>
  )
}
export default Alert