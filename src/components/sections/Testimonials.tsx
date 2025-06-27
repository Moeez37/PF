'use client';
import React from "react";
import homeContent from "@/content/homeContent";
import { Card, Typography, Box } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import Popover from "@/components/common/Popover";

const CARD_WIDTH = 440; // px, including margin
const GAP = 24; // px

const Testimonials = () => {
  const { title, subtitle, items } = homeContent.testimonials;
  // Triple testimonials for ultra-smooth loop
  const testimonials = [...items, ...items, ...items];

  // Calculate total width for animation
  const totalCards = testimonials.length;
  const totalWidth = totalCards * (CARD_WIDTH + GAP);
  const duration = totalWidth / 90; // 60px/sec

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      <Typography variant="h4" fontWeight={700} color="white" mb={1} textAlign="center">
        {title}
      </Typography>
      <Typography variant="subtitle1" color="grey.300" mb={6} textAlign="center">
        {subtitle}
      </Typography>
      <Box
        sx={{
          overflow: 'hidden',
          width: '100%',
          position: 'relative',
          py: 2,
        }}
      >
        {/* Left gradient overlay */}
        <Box
          sx={{
            position: 'absolute',
            left: -2,
            top: 0,
            height: '100%',
            width: 140,
            zIndex: 10,
            pointerEvents: 'none',
            background: 'linear-gradient(to right, #18181b 10%, transparent 100%)',
            filter: 'blur(12px)',
          }}
        />
        {/* Right gradient overlay */}
        <Box
          sx={{
            position: 'absolute',
            right: -2,
            top: 0,
            height: '100%',
            width: 140,
            zIndex: 10,
            pointerEvents: 'none',
            background: 'linear-gradient(to left, #18181b 10%, transparent 100%)',
            filter: 'blur(12px)',
          }}
        />
        <Box
          className="testimonial-marquee"
          sx={{
            display: 'flex',
            gap: `${GAP}px`,
            width: totalWidth,
            animation: `marquee ${duration}s linear infinite`,
            '&:hover': {
              animationPlayState: 'paused',
            },
          }}
        >
          {testimonials.map((item, idx) => (
            <Popover
              key={item.name + idx}
              trigger={
                <Card
                  sx={{
                    minWidth: CARD_WIDTH,
                    maxWidth: CARD_WIDTH,
                    flex: '0 0 auto',
                    borderRadius: 5,
                    boxShadow: 8,
                    bgcolor: 'rgba(30, 41, 59, 0.88)',
                    backdropFilter: 'blur(12px)',
                    border: '1.5px solid',
                    borderColor: 'primary.main',
                    minHeight: 360,
                    height:"100%",
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    position: 'relative',
                    overflow: 'hidden',
                    px: { xs: 2, md: 4 },
                    py: { xs: 4, md: 6 },
                  }}
                >
                  <FormatQuoteIcon sx={{ color: 'primary.main', fontSize: 36 }} />
                  <Typography
                    variant="body1"
                    color="grey.100"
                    fontStyle="italic"
                    textAlign="center"
                    sx={{ maxWidth: '80%', flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                  >
                    “{item.quote}”
                  </Typography>
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                      width: '100%',
                      justifyContent: 'center',
                    }}
                  >
                    <Box
                      component="img"
                      src={item.avatar}
                      alt={item.name}
                      sx={{
                        width: 60,
                        height: 60,
                        objectFit: 'cover',
                        borderRadius: '50%',
                        boxShadow: 3,
                        border: '3px solid',
                        borderColor: 'primary.100',
                      }}
                    />
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'flex-start',
                      }}
                    >
                      <Typography variant="h6" fontWeight={700} color="white" mb={0.5}>
                        {item.name}
                      </Typography>
                      <Typography variant="subtitle2" color="primary.main" fontWeight={600}>
                        {item.role}
                      </Typography>
                    </Box>
                  </Box>
                </Card>
              }
            >
              <div className="text-left">
                <div className="font-bold text-lg mb-1">{item.name}</div>
                <div className="text-primary font-semibold mb-2">{item.role}</div>
                <div className="italic mb-2">{item.quote}</div>
                <img src={item.avatar} alt={item.name} className="w-12 h-12 rounded-full object-cover border border-primary" />
              </div>
            </Popover>
          ))}
        </Box>
      </Box>
      <style jsx global>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-${totalWidth / 3}px); }
        }
      `}</style>
    </section>
  );
};

export default Testimonials;