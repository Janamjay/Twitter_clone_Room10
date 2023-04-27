import React, { useState } from 'react'
import s4 from "./step4.module.css";
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";

const Step4 = () => {
    
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
    
  return (
    <div className={s4.main_container}>
      <div className={s4.inner_container}>
        <div className={s4.heading}>
          <h3> Step 4 of 5</h3>
          <h1>Create your account</h1>
        </div>
        <div className={s4.input}>
          <TextField
            id="outlined-basic-name"
            value={name}
            label="Name"
            variant="outlined"
            type="text"
            size="small"
            fullWidth
            onChange={(event) => setName(event.target.value)}
            sx={{
              display: "block",
              margin: "1rem 0",
              marginBottom: "0px",
            }}
          />

          <TextField
            id="outlined-basic-email"
            value={phone}
            label="Phone"
            type="phone"
            variant="outlined"
            size="small"
            fullWidth
            onChange={(event) => setPhone(event.target.value)}
            sx={{
              display: "block",
              marginTop: "0",
              margin: "1rem 0",
            }}
          />
          <TextField
            id="outlined-basic-email"
            value={date}
            label="Date of birth"
            type="text"
            variant="outlined"
            size="small"
            fullWidth
            onChange={(event) => setDate(event.target.value)}
            sx={{
              display: "block",
              marginTop: "0",
              margin: "1rem 0",
            }}
          />
        </div>
        <div className={s4.content}>
            <p>By signing up, you agree to the <span>Terms of Service</span> and <span>Privacy Policy</span>, including <span>Cookie Use</span>. Twitter may use your contact information, including your email address and phone number for purposes outlined in our Privacy Policy, like keeping your account secure and personalizing our services, including ads. <span>Learn more</span>. Others will be able to find you by email or phone number, when provided, unless you choose otherwise <span>here</span>.</p>
        </div>
        <div className={s4.next}>
          <Link to="/signup?step=5">
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
              Sign up
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Step4
