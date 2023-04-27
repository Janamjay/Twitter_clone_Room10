import React, { useState } from "react";
import s2 from "./step2.module.css";
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import DateSelector from "./DateSelector";

const Step2 = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <div className={s2.main_container}>
      <div className={s2.inner_container}>
        <div className={s2.heading}>
          <h3> Step 2 of 5</h3>
          <h1>Create your account</h1>
        </div>
        <div className={s2.input}>
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
        </div>
        <div className={s2.content}>
          <h3>Date of birth</h3>
          <p>
            This will not be shown publicly. Confirm your own age, even if this
            account is for a business, a pet, or something else.
          </p>
          <div className={s2.date}>
            <DateSelector />
          </div>
        </div>
        <div className={s2.next}>
          <Link to="/signup?step=3">
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
  );
};

export default Step2;
