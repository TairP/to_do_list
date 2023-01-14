import React, {useState} from 'react'
import ToDoForm from "./TodoForm"
import TodoRow from './TodoRow'
import styled from "styled-components";

function TodoList() {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        if(!todo.text || /^\s*$/.test(todo.text)){
            return
        }
        const newTodos = [todo, ...todos]
        setTodos(newTodos)
        console.log(todo,...todos)
    }

    const updateTodo = (todoId, newValue) => {
      if(!newValue.text || /^\s*$/.test(newValue.text)){
        return
      }
      setTodos(prev=> prev.map(item => item.id === todoId ? newValue : item))
    }

    const completeTodo = id => {
      let updatedTodos = todos.map(todo => {
        if (todo.id === id) {
          todo.isComplete == !todo.isComplete
        }
        return todo
      })
      setTodos(updatedTodos)
    }

    const removeTodo = id => {
      const removeArr = [...todos].filter(todo => todo.id !== id)
      setTodos(removeArr)
    }

  return (
    <StyledContainer>
      <StyledSubmit>
        <ToDoForm onSubmit={addTodo}/>
      </StyledSubmit>
      <StyledTodoList>
        <TodoRow todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
      </StyledTodoList>
    </StyledContainer>
  )
}

export default TodoList

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  width: 90%;
  padding: 30px;
  border-radius: 10px;
`

const StyledSubmit = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  border-radius: 10px;
  width: 60%;
  // margin: 30px;
  margin: auto;
`

const StyledTodoList = styled.div `
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: auto;
  justify-content: center;
`