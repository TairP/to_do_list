import React, {useState} from 'react'
import TodoForm from './TodoForm'
import TodoList from './TodoList'
import {AiOutlineCloseCircle} from 'react-icons/ai'
import {AiOutlineEdit} from 'react-icons/ai'
import styled from "styled-components";

function TodoRow({todos, completeTodo, removeTodo, updateTodo}) {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  })

  const submitUpdate = value => {
    updateTodo(edit.id, value)
    setEdit({
      id: null,
      value: ''
    })
  }

  if (edit.id) {
    return (
    <Form>
    <TodoForm edit={edit} onSubmit={submitUpdate}/>
    </Form>)
  }

  return todos.map((todo,index) => (
    <Row className={todo.isComplete ? 'completed' : 'not'} key={index}>
    <Todo key={todo.id} onClick={()=>completeTodo(todo.id)}>
        {todo.text}
    </Todo>
    <Icons>
      <DeleteButton>
        <AiOutlineCloseCircle onClick={() => removeTodo(todo.id)}/>
      </DeleteButton>
      <EditButton>
        <AiOutlineEdit onClick={() => setEdit({id: todo.id, value: todo.text})}/>
      </EditButton>
    </Icons>
  </Row>
))
}
// value={{ color: 'blue', size: '50px' }}
// .complete {
//   text-decoration: line-through;
//   opacity: 0.4;
// }.attrs({ type: "checkbox" })``;
// $mode={todo.isCompleted ? 'todo-row complete' : 'todo-row'}

export default TodoRow

const Form = styled.div`
display: flex;
flex-wrap: wrap;
font-size: 15px;
padding: 20px;
width: 87%;
margin: auto;
`

const Row = styled.div`
display: flex;
wrap: nowrap;
height: 45px;
justify-content: space-between;
align-items: center;
width: 100%;
margin: 1px auto;
background: linear-gradient(
  90deg,
  #98BFFF 0%,
  #98D0FF 100%
);
border-radius: 8px;
color: black;

&:nth-child(4n + 1) {
  background: linear-gradient(
  90deg,
  #BAD0F5 0%,
  #6EA9FF 100%
  );
}
&:nth-child(4n + 2) {
  background: linear-gradient(
    90deg,
    #C2E6FE 0%,
    #89BDFF 100%
    );
  }
  &:nth-child(4n + 3) {
    background: linear-gradient(
      90deg,
      #A7E3FF 0%,
      #82BCFF 100%
      );
    }
`

const Todo = styled.div `
display: flex;
width: 87%;
margin: auto;
font-size: 15px;
padding: 10px;
margin-left: 10px;
`

const Icons = styled.div`
display: flex;
padding: 20px;
font-size: 25px;
padding-bottom: 15px;
`

const DeleteButton = styled.div`
&:hover{
  color: white;
}
&:active{
  color: gray;
}
`

const EditButton = styled.div`
&:hover{
  color: white;
}
&:active{
  color: gray;
}
`