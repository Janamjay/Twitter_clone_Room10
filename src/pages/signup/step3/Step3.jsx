import React from 'react'
import { Button,Checkbox } from "@mui/material";
import { Link } from "react-router-dom";
import s3 from './step3.module.css'

const Step3 = () => {
  return (
    <div className={s3.main_container}>
      <div className={s3.inner_container}>
        <div className={s3.heading}>
          <h3> Step 3 of 5</h3>
          <h1>Customize your experience</h1>
        </div>
        <div className={s3.customize}>
            <h2>Track where you see Twitter content across the web</h2>
        </div>
        <div className={s3.read}>
            <p>Twitter uses this data to personalize your experience. This web browsing history will never be stored with your name, email, or phone number.</p>
            <Checkbox defaultChecked />
        </div>
        
        <div className={s3.next}>
          <Link to="/signup?step=4">
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
                margin: "2rem 0",
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

export default Step3
