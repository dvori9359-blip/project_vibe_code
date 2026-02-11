import { Box, Container, Stack, Typography } from '@mui/material';
import { BookOpen, Sparkles } from 'lucide-react';

export const Header = () => {
  return (
    <Box
      component="header"
      sx={{
        position: 'sticky',
        top: 0,
        zIndex: 1100,
        width: '100%',
        bgcolor: 'rgba(255, 255, 255, 0.59)',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid',
        borderColor: 'rgba(251, 191, 36, 0.2)',
        py: 1.5,
        mb: 4,
        transition: 'all 0.3s',
      }}
    >
      <Container maxWidth="lg">
        <Stack 
          direction="row" 
          alignItems="center" 
          justifyContent="center" 
          gap={2}
        >
          <Box 
            sx={{ 
              bgcolor: '#fbbf24', 
              color: 'white', 
              p: 1.2, 
              borderRadius: 2, 
              display: 'flex',
              boxShadow: '0 4px 6px -1px rgba(251, 191, 36, 0.4), 0 2px 4px -1px rgba(251, 191, 36, 0.2)'
            }}
          >
            <BookOpen size={28} strokeWidth={2.5} />
          </Box>
          
          <Box sx={{ textAlign: 'right' }}>
            <Typography 
              variant="h4" 
              fontWeight="700" 
              component="div"
              sx={{ 
                color: '#d97706',
                lineHeight: 1,
                mb: 0.5,
                fontSize: '1.75rem',
                letterSpacing: '-0.02em'
              }}
            >
              תהילים ביחד
            </Typography>
            
            <Stack 
              direction="row" 
              alignItems="center" 
              justifyContent="flex-end"
              gap={0.5}
              sx={{ opacity: 0.8 }}
            >
              <Typography 
                variant="caption" 
                sx={{ 
                  color: '#78716c',
                  fontSize: '0.8rem'
                }}
              >
                הגרלת פרקי תהילים
              </Typography>
              <Sparkles size={13} color="#f59e0b" />
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

