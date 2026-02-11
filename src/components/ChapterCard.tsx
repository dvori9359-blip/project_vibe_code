import { Box, Button, Card, Stack, Typography } from '@mui/material';
import { Eye, CheckCircle } from 'lucide-react';
import type { Chapter } from '../stores/TehillimStore';

interface ChapterCardProps {
  chapter: Chapter;
  isViewing: boolean;
  onView: (chapterNumber: number) => void;
  onFinish: (chapterNumber: number) => void;
}

export const ChapterCard = ({ chapter, isViewing, onView, onFinish }: ChapterCardProps) => {
  // Convert number to Hebrew letters
  const hebrewNumber = getHebrewNumber(chapter.number);
  const hebrewName = `פרק ${hebrewNumber}`;

  return (
    <Card
      elevation={0}
      sx={{
        p: 2,
        border: '1.5px solid',
        borderColor: isViewing ? '#0ea5e9' : '#e5e7eb',
        bgcolor: isViewing ? '#e0f2fe' : 'white',
        borderRadius: 2.5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        transition: 'all 0.2s ease',
        cursor: 'pointer',
        '&:hover': {
          borderColor: isViewing ? '#0ea5e9' : '#93c5fd',
          boxShadow: isViewing
            ? '0 4px 12px rgba(14, 165, 233, 0.25)'
            : '0 2px 8px rgba(0, 0, 0, 0.08)',
        },
      }}
    >
      <Stack direction="row" alignItems="center" gap={3}>
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: '12px',
            bgcolor: isViewing ? '#0ea5e9' : '#f3f4f6',
            color: isViewing ? 'white' : '#616876ff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontWeight: 600,
            fontSize: '1.1rem',
            transition: 'all 0.2s ease',
          }}
        >
          {hebrewNumber}
        </Box>
        <Typography variant="body1" fontWeight="500" color="text.primary">
          {hebrewName}
        </Typography>
      </Stack>

      <Stack direction="row" spacing={1.5}>
        <Button
          variant="text"
          startIcon={<Eye size={16} strokeWidth={2} />}
          onClick={() => onView(chapter.number)}
          sx={{
            color: '#0ea5e9',
            fontWeight: 400,
            textTransform: 'none',
            minWidth: 'auto',
            px: 1.5,
            py: 0.75,
            '&:hover': { bgcolor: '#f0f9ff' },
            '& .MuiButton-startIcon': {
              marginRight: '4px',
              marginLeft: 0,
            },
          }}
        >
          צפייה
        </Button>
        <Button
          variant="text"
          startIcon={<CheckCircle size={16} strokeWidth={2} />}
          onClick={() => onFinish(chapter.number)}
          sx={{
            color: '#10b981',
            fontWeight: 400,
            textTransform: 'none',
            minWidth: 'auto',
            px: 1.5,
            py: 0.75,
            '&:hover': { bgcolor: '#ecfdf5' },
            '& .MuiButton-startIcon': {
              marginRight: '4px',
              marginLeft: 0,
            },
          }}
        >
          סיימתי
        </Button>
      </Stack>
    </Card>
  );
};

// Helper function to convert numbers to Hebrew letters
function getHebrewNumber(num: number): string {
  const ones = ['', 'א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט'];
  const tens = ['', 'י', 'כ', 'ל', 'מ', 'נ', 'ס', 'ע', 'פ', 'צ'];
  const hundreds = ['', 'ק', 'ר', 'ש', 'ת'];

  if (num === 15) return 'טו'; // Special case
  if (num === 16) return 'טז'; // Special case

  let result = '';
  const h = Math.floor(num / 100);
  const t = Math.floor((num % 100) / 10);
  const o = num % 10;

  if (h > 0) result += hundreds[h];
  if (t > 0) result += tens[t];
  if (o > 0) result += ones[o];

  return result;
}
