import {makeStyles} from "@material-ui/core"

export const customCss = makeStyles({
  dialogBoxStyles: {
      width: "550px",
      height: "380px",
      maxWidth: "500px",
      borderRadius: "3px",
    },
  
    dialogHeader: {
      display: "flex",
      flexFlow: "row nowrap",
      background: "#475569",
      color: "#FFFFFF",
    },
  
    dialogTitle: {
      padding: "20px",
      flex: 1,
      "& .MuiTypography-root": {
        fontWeight: "600",
        fontSize: "18px",
        lineHeight: "18px",
      },
    },
  
    contentHeader: {
      fontWeight: 600,
      margin: "0.5rem 0",
      fontSize: "16px",
      fontStyle: "normal",
      lineHeight: "24px",
      color: "#172B4D",
    },
  
    dropDownLabel: {
      margin: "1rem 0 0.5rem 0",
      fontWeight: 600,
      fontSize: "14px",
      fontStyle: "normal",
      lineHeight: "18px",
      color: "#475569",
    },
  
    dialogAction: {
      backgroundColor: "#F8F8F8",
      marginTop: "auto",
      padding: "0.75rem 0.5rem",
    },
  
    btn: {
      fontSize: "16px",
      textTransform: "none",
      padding: "13px 30px",
      width: "110px",
      height: "40px",
      margin: "0px 0.75rem",
  
      "&.MuiButton-contained": {
        color: "#FFFFFF",
        background: "#4A49DC",
      },
      "&.MuiButton-outlined": {
        color: "#334155",
        background: "#F8FAFC",
        border: "1.5px solid #94A3B8",
      },
    },
  });