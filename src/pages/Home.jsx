import React, { useState } from 'react'

export default function HomePage(props) {

  const {msgText="default"} = {...props}

  const [showMsg, setShowMsg] = useState(props.showMsg)

  const style = () => {
    return {
      "display": showMsg ? 'block' : 'none'
    }
  }

  const handleClick = () => setShowMsg(!showMsg)

  return (
    <div>
      Home page, <a onClick={handleClick}>{msgText}</a>
      <div style={style()}>Message</div>
    </div>
  );
}