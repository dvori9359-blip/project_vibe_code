import { Box, Button, Paper, Stack, Typography } from '@mui/material';
import { Check, RefreshCw } from 'lucide-react';
import { observer } from 'mobx-react-lite';
import { convertToHebrewNumeral } from '../utils/hebrewNumerals';

interface ResultViewProps {
  chapterNumber: number;
  onDrawAnother: () => void;
  onAcceptChapter: () => void;
}

export const ResultView = observer(({ chapterNumber, onDrawAnother, onAcceptChapter }: ResultViewProps) => {
  return (
    <Paper
      sx={{
        p: 6,
        borderRadius: 2.5,
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
        textAlign: 'center',
      }}
    >
      <Stack spacing={3}>
        <Typography variant="body1" sx={{ color: '#78716c' }}>
          הפרק שהוגרל:
        </Typography>

        <Box
          sx={{
            display: 'inline-block',
            border: '3px solid #f59e0b',
            borderRadius: 2,
            p: 4,
            mx: 'auto',
            boxShadow: '0 4px 12px rgba(245, 158, 11, 0.2)',
          }}
        >
          <Typography variant="h2" sx={{ fontWeight: 700, color: '#f59e0b' }}>
            פרק {convertToHebrewNumeral(chapterNumber)}
          </Typography>
        </Box>

        <Stack direction="row" spacing={2} sx={{ justifyContent: 'center', mt: 2 }}>
          <Button
            variant="outlined"
            startIcon={<RefreshCw size={20} />}
            onClick={onDrawAnother}
            sx={{
              borderRadius: 1.5,
              px: 3,
              py: 1.5,
              borderColor: '#e7e5e4',
              color: '#1c1917',
              '&:hover': { borderColor: '#d6d3d1', bgcolor: '#fafaf9' },
            }}
          >
            הגרילו פרק אחר
          </Button>
          <Button
            variant="contained"
            startIcon={<Check size={20} />}
            onClick={onAcceptChapter}
            sx={{
              borderRadius: 1.5,
              px: 3,
              py: 1.5,
              background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
              boxShadow: '0 4px 12px rgba(16, 185, 129, 0.3)',
              '&:hover': {
                boxShadow: '0 6px 16px rgba(16, 185, 129, 0.4)',
                transform: 'translateY(-2px)',
              },
            }}
          >
            אני לוקח את הפרק
          </Button>
        </Stack>
      </Stack>
    </Paper>
  );
});
