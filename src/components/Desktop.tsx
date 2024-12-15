import React, { useState } from 'react';
import styled from 'styled-components';
import { AppBar, Toolbar, Button, MenuList, MenuListItem } from 'react95';
import { Computer3, FileText, Mmsys101, Progman15, Confcp102 } from '@react95/icons';
import DesktopIcon from './DesktopIcon';
import WindowManager from './WindowManager';
import TaskBarItem from './TaskBarItem';
import { desktopIcons } from '../data/icons';
import { skills } from '../data/skills';
import { projects } from '../data/projects';
import Clock from './Clock';

const DesktopWrapper = styled.div`
  height: 100vh;
  background: ${({ theme }) => theme.desktopBackground};
  position: relative;
  overflow: hidden;
  background-image: url('/imagen.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const IconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  width: 140px;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding: 10px;
    gap: 15px;
  }
`;

const TaskbarContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`;

const TaskbarItemsContainer = styled.div`
  display: flex;
  flex: 1;
  margin: 0 4px;
  overflow-x: auto;
  
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Desktop: React.FC = () => {
  const [openWindows, setOpenWindows] = useState<{[key: string]: boolean}>({
    about: true,
    projects: false,
    skills: false,
    contact: false,
    blog: false,
  });
  const [showStartMenu, setShowStartMenu] = useState(false);

  const toggleWindow = (window: string) => {
    setOpenWindows(prev => {
      // If the window is already open, just close it
      if (prev[window]) {
        return {
          ...prev,
          [window]: false
        };
      }
      
      // If opening a new window, close all others and open the new one
      const newState = Object.keys(prev).reduce((acc, key) => ({
        ...acc,
        [key]: false
      }), {});
      
      return {
        ...newState,
        [window]: true
      };
    });
    setShowStartMenu(false);
  };

  const handleStartClick = () => {
    setShowStartMenu(!showStartMenu);
  };

  // Helper function to get icon for window
  const getWindowIcon = (windowId: string) => {
    switch (windowId) {
      case 'about':
        return <FileText variant="32x32_4" />;
      case 'projects':
        return <Computer3 variant="32x32_4" />;
      case 'skills':
        return <Mmsys101 variant="32x32_4" />;
      case 'contact':
        return <Confcp102 variant="32x32_4" />;
      case 'blog':
        return <Progman15 variant="32x32_4" />;
      default:
        return <FileText variant="32x32_4" />;
    }
  };

  // Helper function to get window title
  const getWindowTitle = (windowId: string) => {
    switch (windowId) {
      case 'about':
        return 'About Me';
      case 'projects':
        return 'Projects';
      case 'skills':
        return 'Skills';
      case 'contact':
        return 'Contact';
      case 'blog':
        return 'Blog';
      default:
        return windowId;
    }
  };

  return (
    <DesktopWrapper>
      <IconsContainer>
        {desktopIcons.map((icon) => (
          <DesktopIcon
            key={icon.id}
            icon={icon}
            onClick={() => toggleWindow(icon.id)}
          />
        ))}
      </IconsContainer>

      <WindowManager
        openWindows={openWindows}
        toggleWindow={toggleWindow}
        skills={skills}
        projects={projects}
        isStartOpen={showStartMenu}
      />

      <TaskbarContainer>
        <AppBar style={{ position: 'relative' }}>
          <Toolbar style={{ justifyContent: 'space-between', position: 'relative' }}>
            <div style={{ display: 'flex', alignItems: 'center', flex: 1 }}>
              <Button onClick={handleStartClick} active={showStartMenu} style={{ fontWeight: 'bold' }}>
                <img
                  src="https://win98icons.alexmeub.com/icons/png/windows-0.png"
                  alt="windows-logo"
                  style={{ marginRight: 4, width: 20, height: 20 }}
                />
                Start
              </Button>
              
              <TaskbarItemsContainer>
                {Object.entries(openWindows)
                  .filter(([_, isOpen]) => isOpen)
                  .map(([windowId]) => (
                    <TaskBarItem
                      key={windowId}
                      label={getWindowTitle(windowId)}
                      isActive={openWindows[windowId]}
                      onClick={() => toggleWindow(windowId)}
                      windowId={windowId}
                    />
                  ))}
              </TaskbarItemsContainer>
              
              {showStartMenu && (
                <MenuList
                  style={{
                    position: 'absolute',
                    left: '0',
                    bottom: '100%',
                  }}
                >
                  <MenuListItem onClick={() => window.location.reload()}>
                    <img
                      src="https://win98icons.alexmeub.com/icons/png/shut_down_normal-4.png"
                      alt="shutdown"
                      style={{ marginRight: 8, width: 20, height: 20 }}
                    />
                    Restart
                  </MenuListItem>
                </MenuList>
              )}
            </div>
            <Clock />
          </Toolbar>
        </AppBar>
      </TaskbarContainer>
    </DesktopWrapper>
  );
};

export default Desktop;