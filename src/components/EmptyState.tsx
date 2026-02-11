import { Box, Paper, Typography } from '@mui/material';
import { BookOpen } from 'lucide-react';
import { observer } from 'mobx-react-lite';

export const EmptyState = observer(() => {
  return (
    <Paper
      sx={{
        p: 6,
        borderRadius: 2.5,
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
        textAlign: 'center',
      }}
    >
      <Box
        sx={{
          width: 80,
          height: 80,
          bgcolor: '#f5f5f4',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#a8a29e',
          mx: 'auto',
          mb: 3,
        }}
      >
        <BookOpen size={48} strokeWidth={1.5} />
      </Box>
      <Typography variant="h6" sx={{ fontWeight: 600, color: '#1c1917', mb: 1 }}>
        עדיין לא נבחרו פרקים לקריאה
      </Typography>
      <Typography variant="body2" sx={{ color: '#78716c' }}>
        הגבילו פרק כדי להתחיל
      </Typography>
    </Paper>
  );
});
