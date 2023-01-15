import React, { useState } from 'react'

const withMessage = (InnerComponent) => {
  const OuterComponent = (props) => {

    const {msgText="default"} = {...props}

    const [showMsg, setShowMsg] = useState(props.showMsg)
  
    const style = () => {
      return {
        "display": showMsg ? 'block' : 'none'
      }
    }
  
    const handleClick = () => setShowMsg(!showMsg)

    return <InnerComponent
      handleClick={handleClick}
      msgText={msgText}
      style={style}
    />
  }

  OuterComponent.displayName = `WithMessage(${InnerComponent.name})`
  return OuterComponent

}
export default withMessage