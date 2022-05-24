import DialogActions from "@material-ui/core/DialogActions";
import React from "react";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContentText from "@material-ui/core/DialogContentText";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";
import loader from './loader.gif'

export default function DeleteSpinner({url,deleting, collection}) {
  let navigate = useNavigate();

  //===============================================================
  //=============================================================== STATE
  const [open, setOpen] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  //===============================================================
  // const [collections, setCollections] = React.useState([]);
  //============================================================== SIDE_EFFECTS
  //===============================================================
  // React.useEffect(() => {
    //   const fetchcollections = async () => {
  //     const { data: foundCollections } = await Axios.get(
  //       `${BASE_URL}/api/collection`
  //     );
  //     console.log(foundCollections);
  //     setCollections(foundCollections);
  //   };
  //   fetchcollections();
  // }, []);

  //===============================================================
  //=============================================================== EVENT_HANDLER
  const handleClickOpen = () => {
    console.log("============================> open");
    setOpen(true);
  };
  //===============================================================
  const handleClose = () => {
    setOpen(false);

    console.log("============================> close");
  };
  //===============================================================
  const handleDeletion = () => {
if(collection._id){

  setOpen(false);
  console.log(collection._id);
  deleting(collection._id).then(()=>{
    navigate(url);

  });
 
  setIsOpen(true);

  console.log("==========================> delete");
}else{
  setOpen(false);
  console.log(collection.id);
  deleting(collection.id).then(()=>{
    navigate(url);

  });
 
  setIsOpen(true);

  console.log("==========================> delete");
}
  };
  //===============================================================
  //=============================================================== RENDERING
  return (
    <>
      <Button id='delete-btn' variant="none" color="primary" onClick={handleClickOpen}>
        <span class="svg-icon svg-icon-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M5 9C5 8.44772 5.44772 8 6 8H18C18.5523 8 19 8.44772 19 9V18C19 19.6569 17.6569 21 16 21H8C6.34315 21 5 19.6569 5 18V9Z"
              fill="black"
            />
            <path
              opacity="0.5"
              d="M5 5C5 4.44772 5.44772 4 6 4H18C18.5523 4 19 4.44772 19 5V5C19 5.55228 18.5523 6 18 6H6C5.44772 6 5 5.55228 5 5V5Z"
              fill="black"
            />
            <path
              opacity="0.5"
              d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4V4H9V4Z"
              fill="black"
            />
          </svg>
        </span>
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Processing Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText>Do you want to delete ?</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
          <Button onClick={handleDeletion} color="primary" autoFocus>
            Yes
          </Button>
        </DialogActions>
      </Dialog>
      

      <Dialog open={isOpen} onClose={handleClose}>
        <DialogTitle>Deleting</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>{loader}</DialogContentText> */}
          <img src ={loader}/>
            
        </DialogContent>
      </Dialog>
    </>
  );
};

