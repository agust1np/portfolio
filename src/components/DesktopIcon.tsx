import React from 'react';
import styled from 'styled-components';
import { DesktopIconData } from '../data/icons';

const IconWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px;
  cursor: pointer;
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.8);
  user-select: none;
  width: 120px;
  
  &:active {
    background: rgba(255, 255, 255, 0.2);
  }
`;

const IconLabel = styled.span`
  margin-top: 8px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
`;

interface DesktopIconProps {
  icon: DesktopIconData; 
  onClick: () => void;
}

const DesktopIcon: React.FC<DesktopIconProps> = ({ icon, onClick }) => {
  const IconComponent = icon.Icon;
  
  return (
    <IconWrapper onClick={onClick} title={icon.label}>
      <IconComponent variant="32x32_4" style={{ width: 48, height: 48 }} />
      <IconLabel>{icon.label}</IconLabel>
    </IconWrapper>
  );
};

export default DesktopIcon;