'use client';
import React, { useState, useEffect, useCallback } from "react";
import homeContent from "@/content/homeContent";
import { Folder, ArrowLeft, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Box, Card, CardContent, Typography, IconButton, useTheme } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Popover from "@/components/common/Popover";

const getCardsToShow = (width: number) => {
  if (width < 640) return 1;
  if (width < 1024) return 2;
  return 3;
};

const RecentWork = () => {
  const theme = useTheme();
  const sliderRef = React.useRef<Slider>(null);
  const [isPaused, setIsPaused] = React.useState(false);

  // Helper to get the current slide index (center)
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const totalSlides = homeContent.recentWork.projects.length;

  // Update currentSlide on change
  const handleBeforeChange = (oldIndex: number, newIndex: number) => {
    setCurrentSlide(newIndex);
    setIsPaused(false);
  };

  // Responsive settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 786,
        settings: { slidesToShow: 1 }
      }
    ],
    beforeChange: handleBeforeChange,
  };

  // Helper to get the number of visible slides (responsive)
  const getSlidesToShow = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth < 786) return 1;
      if (window.innerWidth < 1024) return 2;
    }
    return 3;
  };

  const [slidesToShow, setSlidesToShow] = React.useState(3);
  React.useEffect(() => {
    const handleResize = () => setSlidesToShow(getSlidesToShow());
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // The center index among visible slides
  const centerOffset = Math.floor(slidesToShow / 2);
  const getRelativeIndex = (idx: number) => {
    let rel = idx - (currentSlide + centerOffset);
    // Handle wrap-around
    if (rel > totalSlides / 2) rel -= totalSlides;
    if (rel < -totalSlides / 2) rel += totalSlides;
    return rel;
  };

  // Custom Arrow Components
  const arrowSx = {
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    zIndex: 30,
    bgcolor: 'primary.main',
    color: 'white',
    boxShadow: 3,
    '&:hover': { bgcolor: 'primary.dark' },
    left: { xs: 8, md: 0 },
    right: { xs: 8, md: 0 },
    display: 'flex',
    width: 36,
    height: 36,
  };
  const PrevArrow = () => (
    <IconButton
      onClick={() => sliderRef.current?.slickPrev()}
      sx={{ ...arrowSx, left: 8, right: 'auto' }}
      aria-label="Previous"
    >
      <ArrowBackIosNewIcon fontSize="small" />
    </IconButton>
  );
  const NextArrow = () => (
    <IconButton
      onClick={() => sliderRef.current?.slickNext()}
      sx={{ ...arrowSx, right: 8, left: 'auto' }}
      aria-label="Next"
    >
      <ArrowForwardIosIcon fontSize="small" />
    </IconButton>
  );

  return (
    <Box sx={{
      width: '100%',
      maxWidth: { xs: '100vw', xl: '1400px' },
      px: { xs: 2, md: 6 },
      py: { xs: 10, md: 14 },
      position: 'relative',
      mx: 'auto',
      overflow: 'visible',
    }}>
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 4 }}>
        <Box>
          <Typography variant="h4" fontWeight={700} color="white" mb={0.5}>
            {homeContent.recentWork.title}
          </Typography>
          <Typography variant="subtitle1" color="grey.300">
            {homeContent.recentWork.subtitle}
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Box sx={{ borderRadius: '50%', bgcolor: 'primary.100', p: 2 }}>
            {/* You can use an icon here if desired */}
          </Box>
        </Box>
      </Box>
      <Box sx={{
        position: 'relative',
        width: '100%',
        mx: 'auto',
        maxWidth: { xs: '100vw', xl: '1200px' },
        py: { xs: 2, md: 4 },
        overflow: 'visible',
        minHeight: 380,
      }}>
        <PrevArrow />
        <NextArrow />
        <Box
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          sx={{ position: 'relative' }}
        >
          {/* Left strong circular gradient overlay */}
          <Box
            className="hidden md:block"
            sx={{
              position: 'absolute',
              left: -2,
              top: '50%',
              transform: 'translateY(-50%)',
              height: '100%',
              width: 164,
              zIndex: 10,
              pointerEvents: 'none',
              background: 'linear-gradient(to right, #18181b 30%, transparent 100%)',
              filter: 'blur(10px)',
            }}
          />
          {/* Right strong circular gradient overlay */}
          <Box
            className="hidden md:block"
            sx={{
              position: 'absolute',
              right: 0,
              top: '50%',
              transform: 'translateY(-50%)',
              height: '100%',
              width: 164,
              zIndex: 10,
              pointerEvents: 'none',
              background: 'linear-gradient(to left, #18181b 30%, transparent 100%)',
              filter: 'blur(8px)',
            }}
          />
          <Slider
            ref={sliderRef}
            {...settings}
          >
            {homeContent.recentWork.projects.map((project, idx) => {
              const rel = getRelativeIndex(idx);
              // Use absolute value for rel to make left/right animation symmetric
              const absRel = Math.abs(rel);
              const scale = rel === 0 ? 1.08 : absRel === 1 ? 0.92 : 0.85;
              const y = rel === 0 ? 0 : rel > 0 ? absRel * 18 : -absRel * 18;
              const z = rel === 0 ? 2 : 1;
              return (
                <Box key={project.title + idx} px={{ xs: 1, md: 2 }} sx={{ zIndex: z }}>
                  <motion.div
                    animate={{ scale, y }}
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  >
                    <Popover
                      trigger={
                        <Card
                          sx={{
                            borderRadius: 5,
                            boxShadow: 8,
                            bgcolor: 'rgba(30, 41, 59, 0.85)',
                            backdropFilter: 'blur(12px)',
                            border: '1.5px solid',
                            borderColor: rel === 0 ? 'primary.main' : 'primary.900',
                            minHeight: 340,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            position: 'relative',
                            overflow: 'hidden',
                            transition: 'transform 0.4s cubic-bezier(.22,1,.36,1), box-shadow 0.4s',
                            my: 2,
                          }}
                        >
                          <Box
                            component="img"
                            src={project.image}
                            alt={project.title}
                            sx={{
                              width: '100%',
                              height: 160,
                              objectFit: 'cover',
                              borderRadius: 3,
                              mb: 2,
                              boxShadow: 3,
                            }}
                          />
                          <CardContent sx={{ width: '100%', textAlign: 'center', p: 0 }}>
                            <Typography variant="h6" fontWeight={700} color="white" mb={1}>
                              {project.title}
                            </Typography>
                            <Box
                              sx={{
                                display: 'inline-block',
                                px: 1.5,
                                py: 0.5,
                                borderRadius: 2,
                                bgcolor: 'primary.900',
                                color: 'primary.main',
                                fontWeight: 600,
                                fontSize: 13,
                                mb: 2,
                              }}
                            >
                              {project.tag}
                            </Box>
                            <Box mt={2}>
                              <Link
                                href={project.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                style={{ textDecoration: 'none' }}
                              >
                                <Box
                                  sx={{
                                    px: 3,
                                    py: 1.2,
                                    borderRadius: 2,
                                    bgcolor: 'primary.main',
                                    color: 'white',
                                    fontWeight: 700,
                                    fontSize: 15,
                                    boxShadow: 2,
                                    transition: 'background 0.2s',
                                    '&:hover': { bgcolor: 'primary.dark' },
                                    display: 'inline-block',
                                  }}
                                >
                                  Visit Project
                                </Box>
                              </Link>
                            </Box>
                          </CardContent>
                          {/* Glassmorphism overlay */}
                          <Box
                            sx={{
                              position: 'absolute',
                              inset: 0,
                              borderRadius: 5,
                              pointerEvents: 'none',
                              background: 'linear-gradient(120deg, rgba(99,102,241,0.13) 0%, rgba(14,165,233,0.13) 100%)',
                            }}
                          />
                        </Card>
                      }
                    >
                      <div className="text-left">
                        <div className="font-bold text-lg mb-1">{project.title}</div>
                        <div className="text-primary font-semibold mb-2">{project.tag}</div>
                        <Link href={project.href} target="_blank" rel="noopener noreferrer" className="underline text-primary">
                          View Project
                        </Link>
                      </div>
                    </Popover>
                  </motion.div>
                </Box>
              );
            })}
          </Slider>
        </Box>
      </Box>
    </Box>
  );
};

export default RecentWork; 