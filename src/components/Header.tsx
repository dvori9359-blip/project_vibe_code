import { Box, Typography } from '@mui/material';
import { BookOpenCheck } from 'lucide-react';
import { observer } from 'mobx-react-lite';

export const Header = observer(() => {
  return (
    <Box sx={{ textAlign: 'center', py: 4 }}>
      <Box
        sx={{
          width: 64,
          height: 64,
          background: 'linear-gradient(135deg, #f59e0b 0%, #fb923c 100%)',
          borderRadius: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          boxShadow: '0 4px 12px rgba(245, 158, 11, 0.3)',
          mx: 'auto',
          mb: 2,
        }}
      >
        <BookOpenCheck size={32} strokeWidth={2} />
      </Box>
      <Typography variant="h3" sx={{ fontWeight: 700, color: '#f59e0b', mb: 0.5 }}>
        תהילים ביחד
      </Typography>
      <Typography variant="body2" sx={{ color: '#78716c' }}>
        * הגרלת פרקי תהילים
      </Typography>
    </Box>
  );
});

