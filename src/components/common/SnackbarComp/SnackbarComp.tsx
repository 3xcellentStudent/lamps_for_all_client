import { Alert, AlertColor, Button, Stack } from "@mui/material"
import Snackbar from '@mui/material/Snackbar'
import { useEffect, useState } from "react"

export default function SnackbarComp({status}: {status: number}){

  const [open, setOpen] = useState(false)
  const [text, setText] = useState('')
  const [severity, setSeverity] = useState<AlertColor>('success')

  function setDataForSnackbar(type: AlertColor, text: string){
    setSeverity(type)
    setText(text)
    setOpen(true)
  }

  useEffect(() => {
    switch(status){
      case 201:
        return setDataForSnackbar('success', 'Product added to cart!')
      case 204:
        return setDataForSnackbar('success', 'Product removed from cart!')
      case 409:
        return setDataForSnackbar('info', 'Has already been added!')
    }
  }, [status])

  function handleClose(){setOpen(false)}

  return(
    <Stack>
      <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert variant="filled" onClose={handleClose} severity={severity} sx={{width: '300px'}}>
          {text}
        </Alert>
      </Snackbar>
    </Stack>
  )
}