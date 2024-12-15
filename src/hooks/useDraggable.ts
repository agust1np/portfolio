import { useCallback, useEffect, useRef, useState } from 'react';

interface Position {
  x: number;
  y: number;
}

interface DragOptions {
  defaultPosition?: Position;
  onDragStart?: () => void;
  onDragEnd?: () => void;
  bounds?: 'parent' | 'window';
}

interface DragState {
  isDragging: boolean;
  startX: number;
  startY: number;
  originalX: number;
  originalY: number;
}

export function useDraggable(options: DragOptions = {}) {
  const {
    defaultPosition = { x: 0, y: 0 },
    onDragStart,
    onDragEnd,
    bounds = 'window'
  } = options;

  const [position, setPosition] = useState<Position>(defaultPosition);
  const dragState = useRef<DragState | null>(null);
  const elementRef = useRef<HTMLDivElement | null>(null);

  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLElement>) => {
    // Solo permitir drag desde la barra de título
    const target = e.target as HTMLElement;
    if (!target.closest('.title-bar')) return;

    e.preventDefault();
    
    const element = elementRef.current;
    if (!element) return;

    const rect = element.getBoundingClientRect();

    dragState.current = {
      isDragging: true,
      startX: e.clientX,
      startY: e.clientY,
      originalX: rect.left,
      originalY: rect.top
    };

    onDragStart?.();
  }, [onDragStart]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const state = dragState.current;
    const element = elementRef.current;
    if (!state?.isDragging || !element) return;

    const deltaX = e.clientX - state.startX;
    const deltaY = e.clientY - state.startY;

    let newX = state.originalX + deltaX;
    let newY = state.originalY + deltaY;

    // Aplicar límites
    if (bounds === 'window') {
      const maxX = window.innerWidth - element.offsetWidth;
      const maxY = window.innerHeight - element.offsetHeight;
      
      newX = Math.max(0, Math.min(newX, maxX));
      newY = Math.max(0, Math.min(newY, maxY));
    }

    setPosition({ x: newX, y: newY });
  }, [bounds]);

  const handleMouseUp = useCallback(() => {
    if (dragState.current?.isDragging) {
      dragState.current = null;
      onDragEnd?.();
    }
  }, [onDragEnd]);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    if (dragState.current?.isDragging) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseup', handleMouseUp);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  return {
    ref: elementRef,
    style: {
      position: 'fixed' as const,
      left: `${position.x}px`,
      top: `${position.y}px`,
      cursor: dragState.current?.isDragging ? 'grabbing' : 'auto',
      userSelect: dragState.current?.isDragging ? 'none' : 'auto',
    },
    onMouseDown: handleMouseDown,
  };
} 