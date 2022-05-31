import { Box, Button, TextField, Typography } from '@mui/material'
import './index.css'

function Form(){
    return(
        <Box>
            {/* Componente de Título/Paragráfo */}
            <Typography variant="h5" gutterBottom component="div">
                Formulário
            </Typography>

            {/* Input de Texto */}
            <TextField id="outlined-basic" label="Tarefa" placeholder="Digite sua tarefa" variant="outlined" />

            {/* Componente de botão */}
            <Button 
              variant="contained"
              size="large">
                Contained
            </Button>
        </Box>
    )
}

export default Form