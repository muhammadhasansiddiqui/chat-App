import React from 'react';
import { Button as NextUIButton } from '@nextui-org/react';
import confetti from 'canvas-confetti';

const ConfettiButton = () => {
  const handleConfetti = () => {
    confetti({
      particleCount: 100, // Number of particles
      spread: 70,         // Spread of the confetti
      origin: { y: 0.6 }  // Origin point (y position)
    });
  };

  return (
    <NextUIButton
      className="relative overflow-visible rounded-full hover:-translate-y-1 px-12 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
      size="lg"
      onPress={handleConfetti}
    >
      Press me
    </NextUIButton>
  );
};

export default ConfettiButton;
