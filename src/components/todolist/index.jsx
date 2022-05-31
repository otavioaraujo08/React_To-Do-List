import * as React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { 
  Paper, ListItem, ListItemButton, ListItemIcon, ListItemText,
  Checkbox, IconButton
} from '@mui/material'

export default function Todolist({ todo, deleteTodo }) {
  return (
    <Paper style={{marginBottom: '1rem'}}>
      <ListItem
        secondaryAction={
          <IconButton edge="end" aria-label="delete" onClick={() => deleteTodo(todo.id)}>
            <DeleteIcon />
          </IconButton>
        }
        disablePadding
      >
        <ListItemButton role={undefined} dense>
          <ListItemIcon>
            <Checkbox
              edge="start"
              tabIndex={-1}
              disableRipple
            />
          </ListItemIcon>

          <ListItemText primary={`${todo.id} - ${todo.text}`}/>
        </ListItemButton>
      </ListItem>
    </Paper>
  )
}
