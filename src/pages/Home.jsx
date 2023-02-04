import {useEffect, useRef, useState} from 'react'

export default function HomePage(props) {

  const [, setTriggerRender] = useState({})
  const [newName, setNewName] = useState("fred")
  const [newAge, setNewAge] = useState("44")
  const [data, setData] = useState(
    {
      things: [
        {
          name: "MyName",
          age: 47
        },
        {
          name: "yourName",
          age: 50
        }
      ] 
    }
  )
  let nameRef = useRef(null)
  let ageRef = useRef(null)

  useEffect(() => {
    if ( localStorage.getItem('xrSlate') == null ) {
      localStorage.setItem('xrSlate', JSON.stringify(data))
    } else {
      setData(JSON.parse(localStorage.getItem('xrSlate')))
    }
    
  }, [])

  const handleClick = () => {
    data.things.push({name: newName, age: newAge})
    setNewName("")
    setNewAge("")
    nameRef.current.value = ""
    ageRef.current.value = ""
    setData(data)
    setTriggerRender({})
    localStorage.setItem('xrSlate', JSON.stringify(data))
  }

  return (
    <div className='homeMain'>
      Home page, <a onClick={props.handleClick}>{props.msgText}</a>
      <div style={props.style()}>Home Message</div>
      <div className='table'>
        <table>
        <tbody>
        { data.things.map((_, i) => 
          <tr key={i}><td>{_.name}</td> <td>{_.age}</td></tr>
        )}
          <tr><td>
              <input type="text" ref={nameRef} defaultValue={newName} className='nameInput'
              onBlur={(_) => setNewName(_.target.value)}/>
            </td>
            <td>
              <input type="number" ref={ageRef} defaultValue={newAge}  className='ageInput'
              onBlur={(_) => setNewAge(_.target.value)}/>
            </td></tr>
        </tbody>
        </table>
      </div>
      <div onClick={handleClick}>add item</div>
    </div>
  );
}