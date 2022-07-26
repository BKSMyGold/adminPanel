import loader from "./loader.gif";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import React from "react";
import Button from "@material-ui/core/Button";
// import { addcollection, updatecollection } from "./apis/Collections";
import { useNavigate } from "react-router-dom";

export default function AddUpdateSpinner({url,adding, updating, collection,update}) {
  let navigate = useNavigate();
  //=======================================
  const [on, setOn] = React.useState(false);
  //===============================================
  
  //===============================================
  const handleAdd = () => {
    let {conversionFactor, name} = collection
    console.log(typeof(conversionFactor))

    setOn(true);
    adding({ ...collection }).then(() => {
      navigate(url);
    });
    console.log("====> adding");
  };
  //===============================================
  const handleUpdate = () => {
    setOn(true);
    updating({ ...collection }).then(() => {
      navigate(url);
    });
    console.log("====> updating", collection.id);
  };
  //===============================================
  //===============================================
  return (
    <>
      <Button
        variant="outlined"
        color="primary"
        onClick={update ? handleUpdate : handleAdd}
      >
        {update ? "Update" : "Add"}
      </Button>

      <Dialog open={on}>
        <DialogTitle> {update ? "Updating" : "Adding"}</DialogTitle>
        <DialogContent>
          <img src={loader} />
        </DialogContent>
      </Dialog>
    </>
  );
}
