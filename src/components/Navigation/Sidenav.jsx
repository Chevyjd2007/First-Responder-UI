import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import {useNavigate } from 'react-router-dom';
import { useAppStore } from '../../appStore';
import { TbHome , TbDeviceDesktop, TbFriends ,  TbNews } from "react-icons/tb";



const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    variants: [
      {
        props: ({ open }) => open,
        style: {
          ...openedMixin(theme),
          '& .MuiDrawer-paper': openedMixin(theme),
        },
      },
      {
        props: ({ open }) => !open,
        style: {
          ...closedMixin(theme),
          '& .MuiDrawer-paper': closedMixin(theme),
        },
      },
    ],
  }),
);

export default function Sidenav() {
  const theme = useTheme();
//   const [open, setOpen] = React.useState(true);
  const navigate = useNavigate();
  const open = useAppStore((state) => state.dopen);

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <Box height={30} />
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton>
            {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
            <ListItem disablePadding sx={{ display: "block"}} onClick={() => {navigate("/")}}>
                <ListItemButton
                sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5
                }}
                >
                    <ListItemIcon 
                        sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                        }}>
                            <TbDeviceDesktop size={28}/>
                        </ListItemIcon>
                        <ListItemText style={{fontFamily: 'var(--secondary-font)'}} primary="Home" sx={{ opacity: open ? 1 : 0}} />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ display: "block"}} onClick={() => {navigate("/project")}}>
                <ListItemButton
                sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5
                }}
                >
                    <ListItemIcon 
                        sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                        }}>
                            <TbHome size={28}/>
                        </ListItemIcon>
                        <ListItemText style={{fontFamily: 'var(--secondary-font)'}} primary="The Project" sx={{ opacity: open ? 1 : 0}} />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ display: "block"}} onClick={() => {navigate("/team")}}>
                <ListItemButton
                sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5
                }}
                >
                    <ListItemIcon 
                        sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                        }}>
                            <TbFriends size={28}/>
                        </ListItemIcon>
                        <ListItemText style={{fontFamily: 'var(--secondary-font)'}} primary="The Team" sx={{ opacity: open ? 1 : 0}} />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding sx={{ display: "block"}} onClick={() => {navigate("/updates")}}>
                <ListItemButton
                sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5
                }}
                >
                    <ListItemIcon 
                        sx={{
                            minWidth: 0,
                            mr: open ? 3 : "auto",
                            justifyContent: "center",
                        }}>
                            <TbNews size={28}/>
                        </ListItemIcon>
                        <ListItemText style={{fontFamily: 'var(--secondary-font)'}} primary="What's next" sx={{ opacity: open ? 1 : 0}} />
                </ListItemButton>
            </ListItem>
        </List>
        <Divider />
        <List>
        </List>
      </Drawer>
    </Box>
  );
}
