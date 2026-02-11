import { useState } from 'react';
import { Box, Card, Slide, Stack, Typography } from '@mui/material';
import { BookOpen } from 'lucide-react';
import { observer } from 'mobx-react-lite';
import type { Chapter } from '../types';
import { ChapterCard } from './ChapterCard';
import { ChapterViewer } from './ChapterViewer';

interface ReadingListProps {
  chapters: Chapter[];
  onFinish: (chapterNumber: number) => void;
  onView: (chapterNumber: number) => void;
}

export const ReadingList = observer(({ chapters, onFinish, onView }: ReadingListProps) => {
  const [viewingChapter, setViewingChapter] = useState<number | null>(null);
  const [removingChapter, setRemovingChapter] = useState<number | null>(null);
  const [selectedChapterForViewer, setSelectedChapterForViewer] = useState<Chapter | null>(null);

  const readingChapters = chapters.filter(ch => ch.isReading && !ch.isRead);

  if (readingChapters.length === 0) return null;

  const handleView = (chapterNumber: number) => {
    const chapter = chapters.find(ch => ch.number === chapterNumber);
    if (chapter) {
      setViewingChapter(chapterNumber);
      setSelectedChapterForViewer(chapter);
      onView(chapterNumber);
    }
  };

  const handleFinish = (chapterNumber: number) => {
    setRemovingChapter(chapterNumber);
    setTimeout(() => {
      onFinish(chapterNumber);
      setRemovingChapter(null);
      if (viewingChapter === chapterNumber) {
        setViewingChapter(null);
        setSelectedChapterForViewer(null);
      }
    }, 300);
  };

  const handleCloseViewer = () => {
    setViewingChapter(null);
    setSelectedChapterForViewer(null);
  };

  const handleFinishFromViewer = (chapter: Chapter) => {
    handleFinish(chapter.number);
  };

  return (
    <Box sx={{ display: 'flex', gap: 3, alignItems: 'flex-start' }}>
      {/* Reading List Card */}
      <Card
        elevation={0}
        sx={{
          p: 3,
          border: '1px solid #e5e7eb',
          borderRadius: 3,
          flex: selectedChapterForViewer ? '0 0 auto' : 1,
          minWidth: selectedChapterForViewer ? 400 : 'auto',
          transition: 'all 0.3s ease',
        }}
      >
        <Stack spacing={2}>
          {/* Header */}
          <Stack direction="row" alignItems="center" gap={1.5}>
            <Box
              sx={{
                width: 40,
                height: 40,
                borderRadius: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <BookOpen size={22} color="#0ea5e9" />
            </Box>
            <Typography variant="h6" fontWeight="450" color="text.primary">
              פרקים בקריאה
            </Typography>
            <Box
              sx={{
                minWidth: 32,
                height: 32,
                px: 1,
                borderRadius: '17px',
                bgcolor: '#dbeafe',
                color: '#05618bff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 500,
                fontSize: '0.85rem',
              }}
            >
              {readingChapters.length}
            </Box>
          </Stack>

          {/* Chapter Cards */}
          <Stack spacing={1.5}>
            {readingChapters.map((chapter) => (
              <Slide
                key={chapter.number}
                direction="left"
                in={removingChapter !== chapter.number}
                timeout={400}
                mountOnEnter
                unmountOnExit
              >
                <Box>
                  <ChapterCard
                    chapter={chapter}
                    isViewing={viewingChapter === chapter.number}
                    onView={handleView}
                    onFinish={handleFinish}
                  />
                </Box>
              </Slide>
            ))}
          </Stack>

          {/* Footer Text */}
          <Typography
            variant="body2"
            sx={{
              color: '#9ca3af',
              textAlign: 'center',
              mt: 2,
              fontWeight: 300,
            }}
          >
           
          </Typography>
        </Stack>
      </Card>

      {/* Chapter Viewer */}
      {selectedChapterForViewer && (
        <Slide direction="left" in={!!selectedChapterForViewer} timeout={400}>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <ChapterViewer
              chapter={selectedChapterForViewer}
              onClose={handleCloseViewer}
              onFinish={handleFinishFromViewer}
            />
          </Box>
        </Slide>
      )}
    </Box>
  );
});
