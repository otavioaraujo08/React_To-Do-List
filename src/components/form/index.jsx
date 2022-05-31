import { Box, Paper, Button, TextField } from '@mui/material'
import { styled } from '@mui/material/styles' 
import { useState } from "react"
import AddIcon from '@mui/icons-material/Add'

const FormComponent = styled(Box)({
    display: "flex", 
    justifyContent: "center"
})

function Form({ addTodo }){
    // O valor inicial sempre é nossa constane, e a proxima variável é uma função que altera o valor da primeira
    const [text, setText] = useState(null)
    const [id, setId] = useState(0)
    
    const todoCreate = (e) => {
        e.preventDefault()

        setId(id + 1)

        addTodo({text, id})
        // Para alterar o valor de text - usa-se o setText("O valor do text")
        setText('')
    }

    return(
        <Paper style={{ padding: "1em" }}>
            <FormComponent onSubmit={(e) => todoCreate(e)} component="form">
                {/* Input de Texto */}
                <TextField 
                  value={text}
                  label="Tarefa" 
                  placeholder="Digite uma tarefa" 
                  variant="outlined" 
                  fullWidth
                  style={{ marginRight: "1em" }}  
                  onChange = {(e) => setText(e.target.value)}
                />

                {/* Componente de botão */}
                <Button 
                  type="submit"
                  variant="contained"
                  size="large"
                >
                    <AddIcon />
                </Button>
            </FormComponent>
        </Paper>
    )
}

export default Form