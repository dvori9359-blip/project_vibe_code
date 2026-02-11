import { Box, Button, Card, IconButton, Stack, Typography } from '@mui/material';
import { CheckCircle, X } from 'lucide-react';
import type { Chapter } from '../types';

interface ChapterViewerProps {
  chapter: Chapter | null;
  onClose: () => void;
  onFinish: (chapter: Chapter) => void;
}

export const ChapterViewer = ({ chapter, onClose, onFinish }: ChapterViewerProps) => {
  if (!chapter) return null;

  return (
    <Card
      elevation={0}
      sx={{
        border: '1.5px solid',
        borderColor: '#e5e7eb',
        borderRadius: 2.5,
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      {/* Header */}
      <Box
        sx={{
          p: 2.5,
          borderBottom: '1.5px solid #e5e7eb',
          bgcolor: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="h6" fontWeight="600" color="text.primary">
          פרק {chapter.name}
        </Typography>
        <IconButton onClick={onClose} size="small" sx={{ color: '#6b7280' }}>
          <X size={20} />
        </IconButton>
      </Box>

      {/* Content */}
      <Box
        sx={{
          p: 3,
          bgcolor: 'white',
          overflowY: 'auto',
          flex: 1,
        }}
      >
        <Stack spacing={2.5}>
          {chapter.verses.map((verse, index) => (
            <Typography
              key={index}
              variant="body1"
              sx={{
                fontSize: '1.15rem',
                lineHeight: 2,
                textAlign: 'justify',
                color: 'text.primary',
              }}
            >
              {verse}
            </Typography>
          ))}
        </Stack>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          p: 2.5,
          borderTop: '1.5px solid #e5e7eb',
          bgcolor: 'white',
          display: 'flex',
          gap: 1.5,
          justifyContent: 'flex-end',
        }}
      >
        <Button
          onClick={onClose}
          variant="outlined"
          sx={{
            borderRadius: 2,
            textTransform: 'none',
            borderColor: '#e5e7eb',
            color: '#6b7280',
            '&:hover': {
              borderColor: '#d1d5db',
              bgcolor: '#f9fafb',
            },
          }}
        >
          סגור
        </Button>
        <Button
          onClick={() => onFinish(chapter)}
          variant="contained"
          startIcon={<CheckCircle size={18} />}
          sx={{
            borderRadius: 2,
            textTransform: 'none',
            bgcolor: '#10b981',
            px: 3,
            '&:hover': {
              bgcolor: '#059669',
            },
            '& .MuiButton-startIcon': {
              marginRight: '6px',
              marginLeft: 0,
            },
          }}
        >
          סיימתי לקרוא
        </Button>
      </Box>
    </Card>
  );
};
