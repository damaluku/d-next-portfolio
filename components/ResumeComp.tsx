import React from "react";

import { Button, Tooltip } from "@mui/material";

import { handleDownload } from "@/utils/helpers";

import DownloadForOfflineIcon from "@mui/icons-material/DownloadForOffline";

const ResumeComp = () => {
  return (
    <Tooltip title="Download Resume">
      <Button
        variant="contained"
        startIcon={<DownloadForOfflineIcon />}
        onClick={handleDownload}
        sx={{
          position: "absolute",
          right: "1.5rem",
          bottom: "2rem",
        }}
      >
        Resume
      </Button>
    </Tooltip>
  );
};

export default ResumeComp;
