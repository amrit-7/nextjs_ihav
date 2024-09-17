import ArrowForward from "@mui/icons-material/ArrowForward";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";

export default function BannerFormComponent() {
  return (
    <Box sx={{ backgroundColor: "white", p: 4, maxWidth: "450px", mt: 5 }}>
      <Typography sx={{ fontSize: "20px", fontWeight: 700 }}>
        Build your app with React
      </Typography>
      <Typography sx={{ mt: 2 }}>
        Tell us about your challenges and let&apos;s accelerate your venture
        growth together!
      </Typography>
      <Box sx={{ mt: 2 }}>
        <Typography sx={{ fontSize: "16px", mt: 2, fontWeight: 500 }}>
          Full Name
        </Typography>
        <TextField fullWidth />
        <Typography sx={{ fontSize: "16px", mt: 2, fontWeight: 500 }}>
          Email
        </Typography>
        <TextField fullWidth />
        <Typography sx={{ fontSize: "16px", mt: 2, fontWeight: 500 }}>
          Phone
        </Typography>
        <TextField fullWidth />
        <Typography sx={{ fontSize: "16px", mt: 2, fontWeight: 500 }}>
          Message
        </Typography>
        <TextField multiline rows={2} fullWidth />
        <Box sx={{ display: "flex", mt: 2 }}>
          <Checkbox />
          <Typography
            sx={{ fontSize: "12px", fontWeight: 400 }}
            component={"div"}
          >
            I accept the
            <span
              style={{ fontSize: "12px", fontWeight: 600, margin: "0 5px" }}
            >
              Privacy Policy
            </span>
            and agree to process my personal data by PlumbingPro for marketing
            purposes.
          </Typography>
        </Box>
        <Box sx={{ width: "100%", mt: 2 }}>
          <Button
            sx={{ width: "100%", height: "50px" }}
            endIcon={<ArrowForward />}
            variant="contained"
          >
            Send Message
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
