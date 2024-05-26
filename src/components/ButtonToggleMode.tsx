import { useColorScheme } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SettingsBrightnessIcon from "@mui/icons-material/SettingsBrightness";
import Box from "@mui/material/Box";

const ButtonToggleMode = () => {
  const { mode, setMode } = useColorScheme();

  const handleChange = (event: SelectChangeEvent) => {
    setMode((event?.target?.value) as any);
  };
  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="label-select-dark-light-mode">Mode</InputLabel>
        <Select
          labelId="label-select-dark-light-mode"
          id="demo-select-small"
          label="mode"
          value={mode}
          onChange={handleChange}
        >
          <MenuItem value={"light"}>
            <Box sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1
            }}>
              <LightModeIcon fontSize="small" />
              <div>{"light"}</div>
            </Box>
          </MenuItem>
          <MenuItem value={"dark"}>
            <Box sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1
            }}>
              <DarkModeIcon fontSize="small" />
              <div>{"dark"}</div>
            </Box>
          </MenuItem>
          <MenuItem value={"system"}>
            <Box sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1
            }}>
              <SettingsBrightnessIcon fontSize="small" />
              {"system"}
            </Box>
          </MenuItem>
        </Select>
      </FormControl>
    </>
  );
}

export default ButtonToggleMode;