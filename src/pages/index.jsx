// Import dos meus components
import Form     from '../components/form/index'
import Todolist from '../components/todolist/index'
// Import dos components do material ui
import { Container, List } from '@mui/material'
import { useEffect, useState } from "react"

// Minha tela principal
function Home(){
    // Estados das minhas variáveis antes e depois
    const [todos, setTodos] = useState([])

    // Adicionando Tarefas
    const addTodo = (todo) => {
        setTodos([...todos, todo])
    }
    // Removendo Tarefas
    const deleteTodo = (id) => {
        var filterId = todos.filter((todo) => todo.id !== id)

        setTodos(filterId)
    }
    
    useEffect(() => {
        console.log(`Alterou o ${todos}`)
    }, [todos])
    return(
        <Container maxWidth="xs" style={{marginTop: '1em'}}>
            <Form addTodo={addTodo} />

            <List sx={{ marginTop: "1em" }}>
                {todos.map((todo, key) => (
                    <Todolist key={key} todo={todo} deleteTodo={deleteTodo}/>
                ))}
            </List>
        </Container>
    )
}

export default Home