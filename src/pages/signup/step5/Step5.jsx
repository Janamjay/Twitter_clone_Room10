import React,{useState} from 'react'
import s5 from './step5.module.css'
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";

const Step5 = () => {
    const[password,setPassword]=useState("")
  return (
    <div className={s5.main_container}>
    <div className={s5.inner_container}>
      <div className={s5.heading}>
        <h3> Step 5 of 5</h3>
        <h1>You'll need a password</h1>
        <p>Make sure it's 8 characters or more.</p>
      </div>
      <div className={s5.input}>
        <TextField
          id="outlined-basic-name"
          value={password}
          label="Password"
          variant="outlined"
          type="text"
          size="small"
          fullWidth
          onChange={(event) => setPassword(event.target.value)}
          sx={{
            display: "block",
            margin: "1rem 0",
            marginBottom: "0px",
          }}
        />
      </div>
      <div className={s5.next}>
      <Link to="/">
          <Button
            variant="contained"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "20px",
              backgroundColor: "grey",
              color: "white",
              outline: "none",
              border: "none",
              margin: "1rem 0",
              width: "100%",
              textTransform: "none",
              fontSize: "1.2rem",
              "&:hover": {
                backgroundColor: "black",
                color: "grey",
              },
            }}
          >
            Next
          </Button>
        </Link>
      </div>
      </div>
    </div>
  )
}

export default Step5
