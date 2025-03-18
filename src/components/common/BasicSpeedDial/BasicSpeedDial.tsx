import { Box, SpeedDial, SpeedDialAction, SpeedDialProps, SxProps, Theme } from "@mui/material";
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import MenuIcon from '@mui/icons-material/Menu';
import styles from "./styles.module.scss"
import { useSelector } from "react-redux";
import { GlobalDataType } from "@/types/main/globalData.type";

interface Props {
  containerProps?: {}
  speedDialProps?: {}
  direction: SpeedDialProps['direction']
}

export default function BasicSpeedDial({containerProps, speedDialProps, direction}: Props){

  const {elementsSecondaryBg, elementsOptionalBg} = useSelector(({
    globalData: {colors: {backgrounds}}
  }: {globalData: GlobalDataType}) => (backgrounds))

  const actions = [
    { icon: <FileCopyIcon />, name: 'Copy' },
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <PrintIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' },
  ];

  const sx: SxProps<Theme> = {
    "& .css-k2gzza-MuiButtonBase-root-MuiFab-root-MuiSpeedDial-fab": {
      // borderRadius: "0", 
      // borderBottomRightRadius: "20px", 
      height: "60px",
      width: "60px",
      boxShadow: "none",
      margin: "5px",
      color: elementsSecondaryBg.hex,
      backgroundColor: elementsOptionalBg.hex
    }
  }
  
  return (
    // <Box {...containerProps} sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>
    //   {/* <SpeedDial {...speedDialProps} ariaLabel="SpeedDial basic example" sx={{ position: 'absolute', bottom: 16, right: 16 }} icon={<SpeedDialIcon />} > */}
    //   <SpeedDial {...speedDialProps} ariaLabel="SpeedDial basic example" sx={{}} icon={<SpeedDialIcon />} >
    //     {actions.map((action) => (
    //       <SpeedDialAction
    //         key={action.name}
    //         icon={action.icon}
    //         tooltipTitle={action.name}
    //       />
    //     ))}
    //   </SpeedDial>
    // </Box>

    <Box sx={{ position: 'relative', height: "100%" }}>
      <SpeedDial ariaLabel="SpeedDial" icon={<MenuIcon />} direction={direction} className={`${styles.button}`} 
      sx={sx}>
        {actions.map((action) => (
          <SpeedDialAction
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
          />
        ))}
      </SpeedDial>
    </Box>
  );
}