import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const ClockWrapper = styled.div`
  padding: 0 16px;
  height: 100%;
  display: flex;
  align-items: center;
  border-left: 2px solid #888;
`;

const Clock: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <ClockWrapper>
      {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
    </ClockWrapper>
  );
};

export default Clock;
