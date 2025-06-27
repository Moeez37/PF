'use client';
import React from "react";
import homeContent from "@/content/homeContent";
import { Box, Typography, Button, Card, CardContent } from '@mui/material';
import CircleIcon from '@mui/icons-material/Circle';
import Link from "next/link";
import Popover from "@/components/common/Popover";

const PricingPlans = () => {
  const { title, subtitle, plans } = homeContent.pricing;

  return (
    <section className="max-w-7xl mx-auto px-4 py-16 md:py-24">
      <Typography
        variant="h4"
        fontWeight={700}
        color="white"
        mb={1}
        textAlign="center"
      >
        {title}
      </Typography>
      <Typography
        variant="subtitle1"
        color="grey.200"
        mb={8}
        textAlign="center"
        sx={{ maxWidth: '600px', mx: 'auto' }}
      >
        {subtitle}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', lg: 'row' },
          gap: 4,
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: { lg: 'nowrap' },
        }}
      >
        {plans.slice(0, 3).map((plan) => (
          <Popover
            key={plan.tag}
            trigger={
              <Card
                sx={{
                  flex: { lg: '1 1 0' },
                  width: { xs: '100%', lg: '33%' },
                  minWidth: { xs: 260, lg: 300 },
                  maxWidth: { xs: 340, lg: 'none' },
                  bgcolor: 'rgba(0, 0, 0, 0.7)',
                  borderRadius: 16,
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)',
                  p: 3,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: 8,
                    right: 8,
                    bgcolor: 'rgba(16, 185, 129, 0.9)',
                    color: 'white',
                    px: 2,
                    py: 1,
                    borderRadius: '8px 0 8px 0',
                    fontWeight: 600,
                    fontSize: '0.75rem',
                    textTransform: 'uppercase',
                  }}
                >
                  {plan.tag}
                </Box>
                <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', p: 0, pt: 2 }}>
                  <Box>
                    <Typography
                      variant="h2"
                      fontWeight={800}
                      color="white"
                      mb={2}
                      sx={{ letterSpacing: '-0.03em' }}
                    >
                      {plan.price}
                    </Typography>
                    <Typography
                      variant="h6"
                      color="grey.300"
                      mb={4}
                      sx={{ maxWidth: '80%', mx: 'auto' }}
                    >
                      {plan.subtitle || 'Enhance your business potential.'}
                    </Typography>
                    <Box
                      component="ul"
                      sx={{
                        mb: 4,
                        px: 2,
                        flexGrow: 1,
                        color: 'grey.200',
                        '& li': { py: 1 },
                      }}
                    >
                      {plan.features.map((feature) => (
                        <Box
                          key={feature}
                          component="li"
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: 1.5,
                            fontSize: '1rem',
                          }}
                        >
                          <CircleIcon sx={{ fontSize: 8, color: 'rgba(16, 185, 129, 0.9)' }} />
                          {feature}
                        </Box>
                      ))}
                    </Box>
                  </Box>
                  <Button
                    component={Link}
                    href={plan.cta.href}
                    variant="contained"
                    sx={{
                      mt: 2,
                      px: 4,
                      py: 1.5,
                      borderRadius: 8,
                      fontWeight: 600,
                      textTransform: 'none',
                      bgcolor: 'rgba(16, 185, 129, 0.9)',
                      color: 'white',
                      border: '2px solid rgba(16, 185, 129, 0.9)',
                      '&:hover': {
                        bgcolor: 'rgba(16, 185, 129, 1)',
                        borderColor: 'rgba(16, 185, 129, 1)',
                      },
                    }}
                  >
                    {plan.cta.label}
                  </Button>
                </CardContent>
              </Card>
            }
          >
            <div className="text-left">
              <div className="font-bold text-lg mb-1">{plan.tag} - {plan.price}</div>
              <ul className="mb-2 list-disc pl-5">
                {plan.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
              <Link href={plan.cta.href} target="_blank" rel="noopener noreferrer" className="underline text-primary">
                {plan.cta.label}
              </Link>
            </div>
          </Popover>
        ))}
      </Box>
    </section>
  );
};

export default PricingPlans;