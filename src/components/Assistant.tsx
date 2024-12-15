import React, { useEffect, useRef } from 'react';
import { useClippy } from '@react95/clippy';

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

    element.style.position = 'fixed';
    element.style.right = '100px';
    element.style.bottom = '60px';
    element.style.cursor = 'grab';
    element.style.zIndex = '9999';

    const handleMouseDown = (e: MouseEvent) => {
      isDraggingRef.current = true;
      const rect = element.getBoundingClientRect();
      const offset = { x: e.clientX - rect.left, y: e.clientY - rect.top };
      element.style.cursor = 'grabbing';

      const handleMouseMove = (e: MouseEvent) => {
        if (!isDraggingRef.current) return;
        element.style.left = `${e.clientX - offset.x}px`;
        element.style.top = `${e.clientY - offset.y}px`;
      };

      const handleMouseUp = () => {
        isDraggingRef.current = false;
        element.style.cursor = 'grab';
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseup', handleMouseUp);
      };

      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    };

    element.addEventListener('mousedown', handleMouseDown);

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

      element?.removeEventListener('mousedown', handleMouseDown);

      if (clippy) {
        clippy.hide(true, () => {});
      }

      hasInitialized.current = false;
    };
  }, [clippy]);

  return null;
};

export default Assistant;
