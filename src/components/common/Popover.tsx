import React, { useState } from "react";
import { Modal, Box, Button as MUIButton, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import FitScreenIcon from '@mui/icons-material/FitScreen';

interface PopoverProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}

const glassStyle = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  minWidth: 320,
  maxWidth: '90vw',
  background: 'rgba(255,255,255,0.85)', // Glassmorphism background
  color: 'var(--foreground)',
  boxShadow: 24,
  borderRadius: 12,
  p: 4,
  outline: 'none',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backdropFilter: 'blur(16px)',
  border: '1.5px solid var(--border)',
};

const glassFullscreenStyle = {
  position: 'fixed' as const,
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  background: 'rgba(255,255,255,0.85)',
  color: 'var(--foreground)',
  boxShadow: 24,
  borderRadius: 0,
  p: 4,
  outline: 'none',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  backdropFilter: 'blur(16px)',
  border: '1.5px solid var(--border)',
};

const Popover: React.FC<PopoverProps> = ({ trigger, children, className = "" }) => {
  const [open, setOpen] = useState(false);
  const [fitToWindow, setFitToWindow] = useState(false);

  return (
    <span className={className}>
      <span onClick={() => setOpen(true)} className="cursor-pointer">
        {trigger}
      </span>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={fitToWindow ? glassFullscreenStyle : glassStyle}>
          <Box sx={{ position: 'absolute', top: 12, right: 12, display: 'flex', gap: 1 }}>
            <IconButton onClick={() => setFitToWindow((v) => !v)} aria-label="Fit to Window">
              <FitScreenIcon />
            </IconButton>
            <IconButton onClick={() => setOpen(false)} aria-label="Close">
              <CloseIcon />
            </IconButton>
          </Box>
          <Box sx={{ width: '100%', mt: 4 }}>{children}</Box>
        </Box>
      </Modal>
    </span>
  );
};

export default Popover; 