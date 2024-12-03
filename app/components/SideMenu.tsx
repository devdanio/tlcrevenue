import { styled } from "@mui/material/styles";
import Avatar from "@mui/material/Avatar";
import MuiDrawer, { drawerClasses } from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import SelectContent from "./SelectContent";
import MenuContent from "./MenuContent";
import CardAlert from "./CardAlert";
import OptionsMenu from "./OptionsMenu";
import { useUser } from "@clerk/tanstack-start";
import { FormControlLabel, FormGroup, Switch } from "@mui/material";
import { useVersion } from "~/hooks/useVersion";

const drawerWidth = 270;

const Drawer = styled(MuiDrawer)({
  width: drawerWidth,
  flexShrink: 0,
  boxSizing: "border-box",
  mt: 10,
  [`& .${drawerClasses.paper}`]: {
    width: drawerWidth,
    boxSizing: "border-box",
  },
});

export default function SideMenu() {
  const user = useUser();
  const { version, setVersion } = useVersion();
  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: "none", md: "block" },
        [`& .${drawerClasses.paper}`]: {
          backgroundColor: "background.paper",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          mt: "calc(var(--template-frame-height, 0px) + 4px)",
          p: 1.5,
          // alignItems: "center",
          flexDirection: "column",
        }}
      >
        {/* <SelectContent /> */}
        TLC Revenue
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                checked={version === "live"}
                onChange={(e) => {
                  setVersion(e.target.checked ? "live" : "demo");
                }}
              />
            }
            label="Live"
          />
        </FormGroup>
      </Box>
      <Divider />
      <MenuContent />

      <Stack
        direction="row"
        sx={{
          p: 2,
          gap: 1,
          alignItems: "center",
          borderTop: "1px solid",
          borderColor: "divider",
        }}
      >
        <Avatar
          sizes="small"
          alt={user.user?.fullName || "User name"}
          src="/static/images/avatar/7.jpg"
          sx={{ width: 36, height: 36 }}
        />
        <Box sx={{ mr: "auto" }}>
          <Typography
            variant="body2"
            sx={{ fontWeight: 500, lineHeight: "16px" }}
          >
            {user.user?.fullName}
          </Typography>
          <Typography variant="caption" sx={{ color: "text.secondary" }}>
            {user.user?.emailAddresses[0]?.emailAddress ?? ""}
          </Typography>
        </Box>
        <OptionsMenu />
      </Stack>
    </Drawer>
  );
}
