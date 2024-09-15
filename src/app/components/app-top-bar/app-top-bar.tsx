'use client';

import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import ThemeSwitch from '@/app/components/theme-switch/theme-switch';
import { IcecreamOutlined } from '@mui/icons-material';


const AppTopBar = () => {
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <IconButton size="large" edge="start" aria-label="menu" sx={{ marginLeft: 1 }}>
                    <IcecreamOutlined />
                </IconButton>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Sea-salt Ice-cream
                </Typography>
                <ThemeSwitch />
            </Toolbar>
        </AppBar>
    );
};

export default AppTopBar;