import React, { useEffect, useRef } from 'react';
import { useClippy } from '@react95/clippy';
import styled from 'styled-components';

const ClippyContainer = styled.div`
  position: fixed !important;
  right: 100px !important;
  bottom: 60px !important;
  z-index: 9999;
  pointer-events: none !important;

  & > div {
    position: static !important;
    pointer-events: none !important;
    transform: none !important;
    
    & * {
      pointer-events: none !important;
    }
  }
`;

const MESSAGES = [
  "Welcome to my retro portfolio!",
  "Want to see my projects? Click on Projects.exe!",
  "You can find my skills in the Control Panel!",
  "Feel free to contact me through Contact.exe!",
  "Want to know more about me? Open About Me.txt!",
  "You can drag me around the screen!",
  "Have you read my blog? There are interesting stories there!"
];

const ANIMATIONS = ["Congratulate", "Wave", "GetAttention", "Explain"];

const Assistant: React.FC = () => {
  const { clippy } = useClippy();
  const hasInitialized = useRef(false);
  const messageIntervalRef = useRef<number | null>(null);
  const isDraggingRef = useRef(false);

  useEffect(() => {
    if (!clippy || hasInitialized.current) return;

    hasInitialized.current = true;

    const element = document.querySelector('.clippy') as HTMLElement;
    if (!element) {
      console.error("No se encontró el elemento .clippy en el DOM");
      return;
    }

    const container = document.createElement('div');
    container.className = 'clippy-container';
    element.parentElement?.insertBefore(container, element);
    container.appendChild(element);

    const showRandomMessage = () => {
      if (!clippy || !hasInitialized.current) return;
      const randomMessage = MESSAGES[Math.floor(Math.random() * MESSAGES.length)];
      const randomAnimation = ANIMATIONS[Math.floor(Math.random() * ANIMATIONS.length)];
      clippy.speak(randomMessage, false);
      clippy.play(randomAnimation);
    };

    messageIntervalRef.current = window.setInterval(showRandomMessage, 7000);

    return () => {
      if (messageIntervalRef.current) {
        clearInterval(messageIntervalRef.current);
        messageIntervalRef.current = null;
      }

      if (clippy) {
        clippy.hide(true, () => {});
      }

      hasInitialized.current = false;
    };
  }, [clippy]);

  return <ClippyContainer className="clippy-container" />;
};

export default Assistant;
