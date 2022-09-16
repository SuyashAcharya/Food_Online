import React from 'react'



const LogOutbtn = ({handelLogout}) => {
  return (
    <div>
         <span className="logout-btn" onClick={handelLogout}>
          <i className="ri-logout-box-line"></i>
        </span>
    </div>
  )
}

export default LogOutbtn