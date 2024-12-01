import React, { useState } from "react";
import StepProgressBar from "react-step-progress";
import "react-step-progress/dist/index.css";
const TimelineContainer = () => {
  return (
    <StepProgressBar
      startingStep={5} // Zero-based index for the last step
      steps={[
        {
          label: "Bidding start",
          subtitle: "12 Dec 2023",
          state: "completed",
          content: <div></div>, // Empty placeholder
        },
        {
          label: "Bidding end",
          subtitle: "15 Dec 2023",
          name: "step 2",
          state: "completed",
          content: <div></div>,
        },
        {
          label: "Allotment finalization",
          subtitle: "18 Dec 2023",
          name: "step 3",
          state: "completed",
          content: <div></div>,
        },
        {
          label: "Refund intiation",
          subtitle: "18 Dec 2023",
          name: "step 4",
          state: "completed",
          content: <div></div>,
        },
        {
          label: "Demat transfer",
          subtitle: "18 Dec 2023",
          name: "step 5",
          state: "completed",
          content: <div></div>,
        },
        {
          label: "Listing date",
          subtitle: "21 Dec 2023",
          name: "step 5",
          state: "completed",
          content: <div></div>,
        },
      ]}
      wrapperClass="step-progress-bar"
      progressClass="step"
    />
  );
};

export default TimelineContainer;
