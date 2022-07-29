import loader from "./loader.gif";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import React from "react";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";
import { omitBy, isNil } from 'lodash';
export default function AddUpdateSpinner({
  url,
  adding,
  updating,
  collection,
  update, //api function
  validate, //validation Object
  
}) {
  let navigate = useNavigate();
  //=======================================
  const [on, setOn] = React.useState(false);
  //===============================================

  //===============================================
  const handleAdd = () => {
    for (const key in validate) {
      if (!collection[key]) {
        return alert(validate[key]);
      }
    }

    setOn(true);
    adding({ ...collection }).then(() => {
      navigate(url);
    });
    console.log("====> adding");
  };
  //===============================================
  const handleUpdate = () => {
    collection = omitBy(collection, (e) => e === 0 ? false : !e);
    console.log(collection)
    for (const key in validate) {
      if (!collection[key]) {
        return alert(validate[key]);
      }
    }

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
          <img alt="Loading spinner" src={loader} />
        </DialogContent>
      </Dialog>
    </>
  );
}
