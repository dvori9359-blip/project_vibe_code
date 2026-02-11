import { Box, Paper, Stack, Typography } from '@mui/material';
import { CheckCircle2, Circle } from 'lucide-react';
import { observer } from 'mobx-react-lite';
import type { Chapter } from '../types';

interface ChapterListProps {
  chapters: Chapter[];
  onChapterClick?: (chapter: Chapter) => void;
}

export const ChapterList = observer(({ chapters, onChapterClick }: ChapterListProps) => {
  const readingChapters = chapters.filter(ch => ch.isReading);
  
  if (readingChapters.length === 0) return null;

  return (
    <Paper sx={{ p: 4, borderRadius: 2.5, boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)' }}>
      <Typography variant="h6" sx={{ fontWeight: 700, color: '#1c1917', mb: 3 }}>
        פרקים בקריאה
      </Typography>
      <Stack spacing={1.5}>
        {readingChapters.map((chapter) => (
          <Box
            key={chapter.id}
            onClick={() => onChapterClick?.(chapter)}
            sx={{
              p: 2,
              bgcolor: chapter.isRead ? '#d1fae5' : '#fafaf9',
              borderRadius: 1.5,
              cursor: 'pointer',
              transition: 'all 0.2s',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              '&:hover': {
                bgcolor: chapter.isRead ? '#a7f3d0' : '#f5f5f4',
                transform: 'translateX(-4px)',
              },
            }}
          >
            <Typography sx={{ fontWeight: 600, color: '#1c1917' }}>
              פרק {chapter.number}
            </Typography>
            {chapter.isRead ? (
              <CheckCircle2 size={20} color="#10b981" />
            ) : (
              <Circle size={20} color="#a8a29e" />
            )}
          </Box>
        ))}
      </Stack>
    </Paper>
  );
});
