import React, { useEffect, useRef, useState } from 'react'

const TestUseRef = () => {
  // useState
  const [range, setRange] = useState(10)
  const [color, setColor] = useState('black')
  const [bgColor, setBgColor] = useState('white')
  // useRef
  const inpt = useRef(null)
  const btnOne = useRef(null)
  const divOne = useRef(null)
  // use Effect
  useEffect(() => {
    //todo File Fetch from folder

    console.log(`${__dirname}`)
    // first
    divOne.current.children[0].style.color = `${color}`
    divOne.current.children[0].style.backgroundColor = `${bgColor}`
    divOne.current.children[0].textContent = 'Hello World!'
    divOne.current.children[0].style.fontSize = '40px'
    // Second Children
    divOne.current.children[1].style.color = `${color}`
    divOne.current.children[1].textContent = 'Its Work!'
    divOne.current.children[1].style.fontSize = '40px'
  }, [color, bgColor])

  function onclickUseRef() {
    inpt.current.className = 'colorChange'
    btnOne.current.style.color = 'brown'
    // Div One

    console.log(divOne.current.children[0])
    divOne.current.children[0].textContent = 'Hello World!'
    divOne.current.children[0].style.fontFamily = 'myfont1'
    divOne.current.children[0].style.fontSize = '40px'
  }
  function popMonthHere(val) {
    divOne.current.children[0].textContent = 'Hello World!'
    divOne.current.children[0].style.fontFamily = `${val}`
    divOne.current.children[0].style.fontSize = '40px'
    // Second Children
    divOne.current.children[1].textContent = 'Its Work!'
    divOne.current.children[1].style.fontFamily = `${val}`
    divOne.current.children[1].style.fontSize = '40px'
  }
  // Range Value Function
  function rangeValueFun(val) {
    divOne.current.children[0].style.fontSize = `${val}px`
    console.log(val)
  }

  // Render components
  return (
    <div className="flex flex-col">
      <div className="flex flex-row mb-10" ref={divOne}>
        <div className="basis-1/2 h-40 w-40 bg-red-400"></div>
        <div className="basis-1/2 h-40 w-40 bg-lime-400"></div>
      </div>
      <input
        ref={inpt}
        type="text"
        id="inp"
        className="shadow appearance-none border rounded  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
      <button
        onClick={onclickUseRef}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        ref={btnOne}
      >
        click me
      </button>
      <select
        name=""
        onChange={(e) => popMonthHere(e.target.value)}
        className="w-40 flex justify-center items-center text-start pl-1 "
      >
        <option>Select My Font</option>
        <option value={'myfont'} key={'1'}>
          My Font
        </option>
        <option value={'myfont1'} key={'2'}>
          My Font 1
        </option>
        <option value={'myfont2'} key={'3'}>
          My Font 2
        </option>
        <option value={'myfont3'} key={'4'}>
          My Font 3
        </option>
        <option value={'myfont4'} key={'5'}>
          My Font 4
        </option>
        <option value={'myfont5'} key={'6'}>
          My Font 5
        </option>
      </select>
      <label htmlFor="vol">Volume {range}:</label>
      <input
        type="range"
        id="vol"
        name="vol"
        min="10"
        max="100"
        onChange={(e) => rangeValueFun(e.target.value)}
        value={range}
      ></input>
      <div>
        <h3>Font Color:</h3>
        <input onChange={(e) => setColor(e.target.value)} type="text" />
      </div>
      <div>
        <h3>Background Color:</h3>
        <input onChange={(e) => setBgColor(e.target.value)} type="text" />
      </div>
    </div>
  )
}

export default TestUseRef
