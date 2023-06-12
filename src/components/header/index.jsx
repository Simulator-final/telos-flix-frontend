import { useContext, useEffect, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Home, Search } from "@mui/icons-material";
import logo from "./Brand.png";
import LoginButton from "../loginButton";
import CreateAccountButton from "../createAccountButton";
import AppBarActions from "../appBarActions";
import CustomModal from "../customModal";
import LoginModalContent from "../loginModalContent";
import CreateAccountModalContent from "../createAccountModalContent";
import { AuthContext } from "../../contexts/AuthContext";
const drawerWidth = 240;

const openedMixin = (theme) => ({
  border: "none",
  width: drawerWidth,
  backgroundColor: "#212121",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  border: "none",
  backgroundColor: "#212121",
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  backgroundColor: "#212121",
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  color: "#eeeeee",
  fontWeight: "600",
  padding: "8px 16px",
}));

const ProfileComponent = ({ user, onLogout }) => {
  return (
    <StyledButton>
      <Grid container spacing={1} alignItems="center">
        <Grid item>
          <Avatar>{user?.name?.charAt(0)}</Avatar>
        </Grid>
        <Grid item>
          <IconButton onClick={onLogout}>
            <Logout style={{ marginRight: '-50px', color: '#eeeeee', opacity: '0.2' }} />
          </IconButton>
        </Grid>
      </Grid>
    </StyledButton>
  );
};

export default function Header() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [contentToShow, setContentToShow] = useState();
  const { storedUser, logout } = useContext(AuthContext);

  useEffect(() => {
    if (storedUser) {
      setOpen(false);
    }
  }, [storedUser]);

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" elevation={0}>
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <img src={logo} alt="logo" />
            <Typography variant="h6" sx={{ fontWeight: "500", ml: 1, marginTop: 0 }}>
              TelosFlix
            </Typography>
          </Box>
          {storedUser?.name && (
            <ProfileComponent user={storedUser} onLogout={logout} />
          )}
          {!storedUser?.name && (
            <AppBarActions
              actions={[
                <CreateAccountButton
                  onClick={() => {
                    setContentToShow(
                      <CreateAccountModalContent 
                        setCreateAccountContent={() => {
                          setContentToShow(<LoginModalContent />);
                        }}
                      />
                    );
                    setOpen(true);
                  }}
                />,
                <LoginButton
                  onClick={() => {
                    setContentToShow(
                      <LoginModalContent
                        setCreateAccountContent={() => {
                          setContentToShow(<CreateAccountModalContent />);
                        }}
                      />
                    );
                    setOpen(true);
                  }}
                />,
              ]}
            />
          )}
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent">
        <DrawerHeader>
          <IconButton sx={{ color: "#fff" }} onClick={() => setOpen(!open)}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>

        <List
          sx={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
        {["Home", "Search"].map((text, index) => (
          <ListItem key={text} disablePadding sx={{ display: "block" }}>
            <Link
              to="/"
              style={{
                textDecoration: "none",
                color: "#fff",
                minHeight: 48,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  color: "#FAFAFA",
                  minWidth: 0,
                  mr: "auto",
                  justifyContent: "center",
                }}
              >
                {index === 0 ? <Home /> : <Home />}
              </ListItemIcon>
              <ListItemText primary={text} sx={{ opacity: 0 }} />
            </Link>
          </ListItem>
        ))}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
      </Box>
      <CustomModal open={open} setOpen={setOpen} content={contentToShow} />
    </Box>
  );
}
