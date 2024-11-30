import React from "react";
import { Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { Home, Store, LocalShipping, Group, AccountCircle } from "@mui/icons-material";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: 240,
                flexShrink: 0,
                "& .MuiDrawer-paper": {
                    width: 240,
                    boxSizing: "border-box",
                    backgroundColor: "#2c3e50",
                    color: "#fff",
                },
            }}
        >
            <div
                style={{
                    fontSize: "24px",
                    fontWeight: "bold",
                    textAlign: "center",
                    padding: "20px 0",
                }}
            >
                LOGO
            </div>
            <List>
                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/">
                        <ListItemIcon>
                            <Home sx={{ color: "#fff" }} />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/product">
                        <ListItemIcon>
                            <Store sx={{ color: "#fff" }} />
                        </ListItemIcon>
                        <ListItemText primary="Product" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/supplier">
                        <ListItemIcon>
                            <LocalShipping sx={{ color: "#fff" }} />
                        </ListItemIcon>
                        <ListItemText primary="Supplier" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/branch">
                        <ListItemIcon>
                            <Store sx={{ color: "#fff" }} />
                        </ListItemIcon>
                        <ListItemText primary="Branch" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/employee">
                        <ListItemIcon>
                            <Group sx={{ color: "#fff" }} />
                        </ListItemIcon>
                        <ListItemText primary="Employee" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton component={Link} to="/account">
                        <ListItemIcon>
                            <AccountCircle sx={{ color: "#fff" }} />
                        </ListItemIcon>
                        <ListItemText primary="Account" />
                    </ListItemButton>
                </ListItem>
            </List>
        </Drawer>
    );
};

export default Sidebar;
