import { Button, IconButton, Modal, Tooltip } from "@mui/material";
import { useDispatch } from "react-redux";
import './ModalComp.scss'
import { actionCartReducer } from "@/redux/actions";
import { DELETE_CART } from "@/redux/constants/cartConst";
import ClearIcon from '@mui/icons-material/Clear';

interface Props {
  open: boolean
  action: (arg: boolean) => void
  idx: number
}

export default function ModalComp({open, action, idx}: Props){

  const dispatch = useDispatch()
  const btnStyle = (styles: string) => `py-1 rounded-none w-6/12 bg-gray-200 ${styles}`

  function confirmDeletion(){
    dispatch(actionCartReducer({type: DELETE_CART, payload: {idx}}))
    action(false)
  }

  return(
    <div>
      <Modal
        open={open}
        onClose={() => action(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="modal_cart">
          <div className="w-full flex justify-end">
            <Tooltip title="Close">
              <IconButton onClick={() => action(false)}>
                <ClearIcon/>
              </IconButton>
            </Tooltip>
          </div>
          <h6 className="mx-4 mt-2">Are you sure you want to remove from cart ?</h6>
          <div className="flex justify-around mt-4">
            <Button onClick={confirmDeletion} 
            className={btnStyle("hover:bg-emerald-600 rounded-bl-md")}>Confirm</Button>
            <Button className={btnStyle("hover:bg-rose-600 rounded-br-md")} 
            onClick={() => action(false)}>Close</Button>
          </div>
        </div>
      </Modal>
    </div>
  )
}