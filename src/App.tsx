import { Box, Container, Stack, ThemeProvider, createTheme } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { ActionSection } from './components/ActionSection';
import { ChapterList } from './components/ChapterList';
import { EmptyState } from './components/EmptyState';
import { Header } from './components/Header';
import { ResultView } from './components/ResultView';
import { StatCard } from './components/StatCard';
import { tehillimStore } from './stores/TehillimStore';

const theme = createTheme({
  direction: 'rtl',
  palette: {
    mode: 'light',
    primary: {
      main: '#f59e0b',
    },
    background: {
      default: '#f5f1eb',
      paper: '#ffffff',
    },
    text: {
      primary: '#1c1917',
      secondary: '#78716c',
    },
  },
  typography: {
    fontFamily: '"Assistant", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          borderRadius: '12px',
          fontWeight: 600,
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
  },
});

export const App = observer(() => {
  const store = tehillimStore;

  return (
    <ThemeProvider theme={theme}>
      <Box 
        sx={{ 
          minHeight: '100vh', 
          background: 'linear-gradient(to bottom, #f5f1eb 0%, #ede8e1 100%)',
          pb: 8,
          position: 'relative',
        }}
      >
        <Header />
        <Container maxWidth="xl" sx={{ px: { xs: 2, sm: 3 } }}>
          <Stack 
            direction="row" 
            spacing={2.5} 
            sx={{ 
              mb: 4, 
              flexWrap: 'wrap',
              '& > *': {
                flex: { xs: '1 1 100%', sm: '1 1 calc(50% - 10px)', md: '1 1 calc(25% - 15px)' },
                minWidth: { xs: '100%', sm: 'calc(50% - 10px)', md: '250px' },
              }
            }}
          >
            <StatCard title="ספרים שהושלמו" value={store.completedBooks} iconType="trophy" color="purple" />
            <StatCard title="נשארו להגרלה" value={store.remainingChapters} iconType="sparkles" color="orange" />
            <StatCard
              title="פרקים שנקראו"
              value={`${store.readChapters} מתוך ${store.totalChapters}`}
              iconType="check"
              color="green"
            />
            <StatCard title="פרקים בקריאה" value={store.readingChapters} iconType="book" color="blue" />
          </Stack>

          {store.selectedChapter !== null ? (
            <ResultView
              chapterNumber={store.selectedChapter}
              onDrawAnother={() => store.drawRandomChapter()}
              onAcceptChapter={() => store.acceptChapter()}
            />
          ) : (
            <Box>
              <ActionSection
                onRandomChapter={() => store.drawRandomChapter()}
                onSelectChapter={() => alert('תכונה זו תפותח בקרוב')}
              />
              <Box sx={{ mt: 4 }}>
                {store.chapters.length === 0 ? (
                  <EmptyState />
                ) : (
                  <ChapterList chapters={store.chapters} onChapterClick={(ch) => store.markComplete(ch.id)} />
                )}
              </Box>
            </Box>
          )}
        </Container>

        <Box
          sx={{
            position: 'fixed',
            bottom: 20,
            left: 20,
            opacity: 0.15,
            fontSize: '2rem',
            fontWeight: 700,
            color: '#78716c',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        >
          NetFree
        </Box>
      </Box>
    </ThemeProvider>
  );
});

export default App;
