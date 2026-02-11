import { Box, Button, Card, Stack, Typography } from '@mui/material';
import { List, Shuffle, Sparkles } from 'lucide-react';
import { observer } from 'mobx-react-lite';

interface ActionSectionProps {
  onRandomChapter: () => void;
  onSelectChapter: () => void;
}

export const ActionSection = observer(({ onRandomChapter, onSelectChapter }: ActionSectionProps) => {
  return (
    <Card
      elevation={0}
      sx={{
        p: 4,
        textAlign: 'center',
        border: '1px solid',
        borderColor: '#fef3c7',
        background: 'linear-gradient(135deg, #faebc196 0%, #fefcf3 50%, #ffffff 100%)',
        borderRadius: 3,
        transition: 'all 0.3s ease',
      }}
    >
      <Stack alignItems="center" spacing={2}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            color: '#d97706',
            bgcolor: '#fef3c7',
            px: 2,
            py: 0.5,
            borderRadius: 99,
          }}
        >
          <Sparkles size={14} />
          <Typography variant="subtitle2" fontWeight="bold">
            הגרלת פרקים
          </Typography>
        </Box>

        <Typography variant="body1" color="text.secondary">
          לחצו להגרלת פרק תהילים אקראי או בחרו פרק מסוים
        </Typography>

        <Stack direction="row" spacing={2} justifyContent="center" sx={{ width: '100%', maxWidth: 600, gap: 2 }}>
                  <Button
            variant="contained"
            onClick={onRandomChapter}
            startIcon={<Shuffle size={20} />}
            sx={{
              flex: 1,
              borderRadius: 2,
              height: 48,
              gap: 1,
              bgcolor: '#d97706',
              '&:hover': {
                bgcolor: '#b45309',
              },
              boxShadow: '0 4px 6px -1px rgba(217, 119, 6, 0.2)',
            }}
          >
            הגרילו פרק
          </Button>
          <Button
            variant="outlined"
            onClick={onSelectChapter}
            startIcon={<List size={20} />}
            sx={{
              flex: 1,
              borderRadius: 2,
              height: 48,
              gap: 1,
              borderColor: '#3b82f6',
              bgcolor: 'transparent',
              color: '#3b82f6',
              '&:hover': {
                borderColor: '#2563eb',
                bgcolor: '#eff6ff',
              },
            }}
          >
            בחרו פרק מסוים
          </Button>
          
    
        </Stack>
      </Stack>
    </Card>
  );
});

