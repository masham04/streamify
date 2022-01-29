import { Button, Grid, Link } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import Header from "./Header";
import Step1 from "./steps/Step1";
import Step2 from "./steps/Step2";
import Step3 from "./steps/Step3";
import Step4 from "./steps/Step4";
import Step5 from "./steps/Step5";

const StepForm = () => {
  const [active, setActive] = useState(0);
  return (
    <div style={{ marginTop: "10vh" }}>
      <Header />

      {active === 0 && <Step1 />}
      {active === 1 && <Step2 />}
      {active === 2 && <Step3 />}
      {active === 3 && <Step4 />}
      {active === 4 && <Step5 />}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row-reverse",
          alignItems: "center",
        }}
      >
        <Button
          onClick={() => setActive(active + 1)}
          variant="contained"
          sx={{ mt: 3, mb: 2, float: "right" }}
        >
          Next
        </Button>
        <Grid container>
          <Grid item>
            <Link href="#" variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default StepForm;
