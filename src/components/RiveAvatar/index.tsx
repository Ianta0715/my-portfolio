'use client';
import React from 'react';
import { useRive } from 'rive-react';

interface RiveAvatarProps {
  src: string;
  width?: number;
  height?: number;
  className?: string;
  stateMachine?: string;
  autoplay?: boolean;
  animationName?: string;
}

export const RiveAvatar: React.FC<RiveAvatarProps> = ({
  src,
  width = 80,
  height = 80,
  className = "",
  stateMachine = "State Machine 1",
  autoplay = true,
  animationName,
}) => {
  const riveConfig = animationName
    ? {
        src,
        animations: animationName,
        autoplay,
        onLoadError: (error: unknown) => {
          console.error('Error loading Rive animation:', error);
        }
      }
    : {
        src,
        stateMachines: stateMachine,
        autoplay,
        onLoadError: (error: unknown) => {
          console.error('Error loading Rive animation:', error);
        }
      };

  const { RiveComponent } = useRive(riveConfig);

  return (
    <div className={className} style={{ width, height }}>
      <RiveComponent />
    </div>
  );
};
