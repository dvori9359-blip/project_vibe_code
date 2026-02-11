import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import { List, Sparkles } from 'lucide-react';
import { observer } from 'mobx-react-lite';

interface ActionSectionProps {
  onRandomChapter: () => void;
  onSelectChapter: () => void;
}

export const ActionSection = observer(({ onRandomChapter, onSelectChapter }: ActionSectionProps) => {
  return (
    <Paper
      sx={{
        p: 4,
        borderRadius: 2.5,
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
        textAlign: 'center',
      }}
    >
      <Stack spacing={3}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1 }}>
          <Sparkles size={20} color="#f59e0b" />
          <Typography variant="h5" sx={{ fontWeight: 700, color: '#1c1917' }}>
            הגרלת פרקים
          </Typography>
        </Box>

        <Typography variant="body1" sx={{ color: '#78716c' }}>
          לחצו להגרלת פרק תהילים אקראי או בחרו פרק מסוים
        </Typography>

        <Stack direction="row" spacing={2} sx={{ justifyContent: 'center', flexWrap: 'wrap' }}>
          <Button
            variant="outlined"
            startIcon={<List size={20} />}
            onClick={onSelectChapter}
            sx={{
              borderRadius: 1.5,
              px: 3,
              py: 1.5,
              borderColor: '#e7e5e4',
              color: '#1c1917',
              '&:hover': { borderColor: '#d6d3d1', bgcolor: '#fafaf9' },
            }}
          >
            בחרו פרק מסוים
          </Button>
          <Button
            variant="contained"
            startIcon={<Sparkles size={20} />}
            onClick={onRandomChapter}
            sx={{
              borderRadius: 1.5,
              px: 3,
              py: 1.5,
              background: 'linear-gradient(135deg, #f59e0b 0%, #fb923c 100%)',
              boxShadow: '0 4px 12px rgba(245, 158, 11, 0.3)',
              '&:hover': {
                boxShadow: '0 6px 16px rgba(245, 158, 11, 0.4)',
                transform: 'translateY(-2px)',
              },
            }}
          >
            הגרילו פרק
          </Button>
        </Stack>
      </Stack>
    </Paper>
  );
});

