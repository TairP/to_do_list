import React, {useState, useEffect, useRef} from 'react'
import styled from "styled-components";

function TodoForm(props) {
    const [input, setInput]= useState(props.edit ? props.edit.value : '')

    const inputRef = useRef(null)

    useEffect(() => {
      inputRef.current.focus()
    })

    const handleChange = e => {
        setInput(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        props.onSubmit({
            id: Math.floor(Math.random()*10000),
            text: input
        })
        setInput('')
        
    }

  return (
    <Form onSubmit={handleSubmit}>
      {props.edit ? (
      <>
      <Input type="text"
      placeholder="Update your task"
      value={input}
      name="text"
      onChange={handleChange}
      ref={inputRef}>
      </Input>
      <Button>Update</Button>
      </>) : (
      <>
      <Input type="text"
      placeholder="What do you need to do today?"
      value={input}
      name="text"
      onChange={handleChange}
      ref={inputRef}>
      </Input>
      <Button>Add Todo</Button>
      </>)}
    </Form>
  )
}

export default TodoForm

const Form = styled.form`
  border: 3px solid #91B6F2;
  border-radius: 10px;
  background-color: black;
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  margin: 40px;
`

const Input = styled.input`
  background-color: black;
  border: none;
  border-radius: 5px;
  color: white;
  width: 70%;
  height: 44px;
  padding: 10px;
  margin: 3px;

  &:active{
    border: none;
  }
`

const Button = styled.button`
  background-color: #91B6F2;
  border: none;
  border-radius: 3px;
  color: black;
  height: 70px;
  width: 30%;
  overflow: hidden;
  position: relative;
  border: 0;

&:after{
  content: '';
  position: absolute;
  top: -50%;
  right: -50%;
  bottom: -50%;
  left: -50%;
  background: linear-gradient(to bottom, rgba(229, 172, 142, 0), rgba(255,255,255,0.5) 50%, rgba(229, 172, 142, 0));
  transform: rotateZ(60deg) translate(-1em, 7.5em);
}

&:hover::after, button:focus::after {
  animation: shine 1s forwards;
}

@keyframes shine {
  100% {
    transform: rotateZ(60deg) translate(1em, -9em);
  }
}

&:active{
  background-color: #82A3D9;
  color: grey;
`