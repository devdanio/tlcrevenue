import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Stack from "@mui/material/Stack";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import AnalyticsRoundedIcon from "@mui/icons-material/AnalyticsRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import HelpRoundedIcon from "@mui/icons-material/HelpRounded";
import { Tab } from "@mui/material";
import {
  createLink,
  matchByPath,
  matchPathname,
  useLocation,
  useMatches,
  useNavigate,
  useRouterState,
} from "@tanstack/react-router";
import { FileRoutesByFullPath, FileRouteTypes } from "@/routeTree.gen";

type MenuItem = {
  text: string;
  icon: React.ReactElement;
  to: keyof FileRoutesByFullPath;
};
const mainListItems: MenuItem[] = [
  { text: "Overview", icon: <HomeRoundedIcon />, to: "/dashboard" },
  {
    text: "Net revenue",
    icon: <AnalyticsRoundedIcon />,
    to: "/dashboard/estimated-net-revenue",
  },
  {
    text: "Historical revenue",
    icon: <AssignmentRoundedIcon />,
    to: "/dashboard/historical-net-revenue",
  },
  {
    text: "Revenue waterfall",
    icon: <AssignmentRoundedIcon />,
    to: "/dashboard/net-revenue-waterfall",
  },
  {
    text: "Collections",
    icon: <PeopleRoundedIcon />,
    to: "/dashboard/estimated-remaining-collections",
  },
];

const secondaryListItems = [
  { text: "Settings", icon: <SettingsRoundedIcon /> },
];

export default function MenuContent() {
  const RouteLink = createLink(ListItem);
  const routerState = useLocation();

  console.log("routerState", routerState);

  return (
    <Stack sx={{ flexGrow: 1, p: 1, justifyContent: "space-between" }}>
      <List dense>
        {mainListItems.map((item, index) => {
          return (
            <RouteLink
              key={index}
              disablePadding
              sx={{ display: "block" }}
              to={item.to}
              activeOptions={{
                exact: true,
              }}
              activeProps={{
                className: "bg-gray-200",
              }}
            >
              <ListItemButton>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </RouteLink>
          );
        })}
      </List>

      {/* <List dense>
        {secondaryListItems.map((item, index) => (
          <ListItem key={index} disablePadding sx={{ display: "block" }}>
            <ListItemButton>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List> */}
    </Stack>
  );
}
