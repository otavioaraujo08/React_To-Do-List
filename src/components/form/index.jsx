import { Paper, Button, TextField } from '@mui/material'
import { useState } from "react"
import AddIcon from '@mui/icons-material/Add';

function Form({ addTodo, }){
    const [text, setText] = useState(null)
    const [id, setId] = useState(0)
    
    const todoCreate = (text) => {
        const todoObj = {text: text, id: id}
        setId(id + 1)
        addTodo(todoObj)
        
        document.getElementById("outlined-basic").value = null;
    }

    return(
        <Paper style={{ padding: "1em" }}>
            <div style={{ display: "flex", justifyContent: "center"}}>
                {/* Input de Texto */}
                <TextField 
                  id="outlined-basic" 
                  label="Tarefa" 
                  placeholder="Digite sua tarefa" 
                  variant="outlined" 
                  fullWidth
                  style={{ marginRight: "1em" }}  
                  onChange = {(e) => setText(e.target.value)}
                />

                {/* Componente de botão */}
                <Button 
                  variant="contained"
                  size="large"
                  onClick = {() => todoCreate(text)}
                >
                    <AddIcon />
                </Button>
            </div>
        </Paper>
    )
}

export default Form