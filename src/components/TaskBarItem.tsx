import React from 'react';
import styled from 'styled-components';
import { Button } from 'react95';
import { desktopIcons } from '../data/icons';

const StyledButton = styled(Button)`
  flex: 0 0 auto;
  margin: 2px;
  padding: 4px 8px;
  min-width: 180px;
  height: 32px;
  font-size: 14px;
  background-color: ${({ theme }) => theme.material};
  box-shadow: inset 1px 1px 0px 1px ${({ theme }) => theme.materialText},
              inset -1px -1px 0px 1px ${({ theme }) => theme.materialDark};
  
  &:active {
    box-shadow: inset -1px -1px 0px 1px ${({ theme }) => theme.materialText},
                inset 1px 1px 0px 1px ${({ theme }) => theme.materialDark};
  }

  div {
    display: flex;
    align-items: center;
    gap: 8px;
    justify-content: flex-start;
    width: 100%;
  }

  img, svg {
    width: 18px;
    height: 18px;
  }
`;

interface TaskBarItemProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
  windowId: string;
}

const TaskBarItem: React.FC<TaskBarItemProps> = ({ label, isActive, onClick, windowId }) => {
  const icon = desktopIcons.find(icon => icon.id === windowId);
  const IconComponent = icon?.Icon;

  return (
    <StyledButton active={isActive} onClick={onClick}>
      <div>
        {IconComponent && <IconComponent variant="16x16_4" />}
        <span>{label}</span>
      </div>
    </StyledButton>
  );
};

export default TaskBarItem;
