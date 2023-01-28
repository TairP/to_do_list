import React, {useState} from 'react'
import ToDoForm from "./TodoForm"
import TodoRow from './TodoRow'
import styled from "styled-components";

function TodoList() {
    const [todos, setTodos] = useState([])
    const [filter, setFilter] = useState("all");

    const filterTodos = (filter) => {
      switch (filter) {
        case "all":
          return todos;
        case "active":
          return todos.filter((todo) => !todo.isComplete);
        case "completed":
          return todos.filter((todo) => todo.isComplete);
        default:
          return todos;
      }
    };

    const filteredTodos = filterTodos(filter);

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
          todo.isComplete = !todo.isComplete;
        }
        return todo
      })
      setTodos(updatedTodos)
      console.log('completed task')
    }

    const removeTodo = id => {
      const removeArr = [...todos].filter(todo => todo.id !== id)
      setTodos(removeArr)
    }

  return (
    <Container>
      <Form>
        <ToDoForm onSubmit={addTodo}/>
      </Form>
      <Row>
        <TodoRow todos={filteredTodos} completeTodo={completeTodo} removeTodo={removeTodo} updateTodo={updateTodo}/>
      </Row>
      <Filter>
        <FilterButton onClick={() => setFilter("all")}>All</FilterButton>
        <FilterButton onClick={() => setFilter("active")}>Active</FilterButton>
        <FilterButton onClick={() => setFilter("completed")}>Completed</FilterButton>
      </Filter>
    </Container>
  )
}

export default TodoList

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: auto;
  width: 100%;
  border-radius: 10px;
  padding: 0;
`

const Form = styled.div`
  display: flex;
  justify-content: center;
  color: white;
  border-radius: 10px;
  width: 60%;
  margin: auto;
`

const Row = styled.div `
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: auto;
  justify-content: center;
`

const Filter = styled.div `
  margin: auto;
  color: white;
  padding: 20px;
  font-size: 20px;
  width: 40%;
`

const FilterButton = styled.button `
  background-color: transparent;
  border: none;
  padding: 5px;
  width: 100px;
  height: 50px;

  &:hover {
    font-size: 15px;
  }

  &:active {
    color: #91B6F2;
  }
`