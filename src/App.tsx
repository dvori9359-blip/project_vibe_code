import { Box, Container, ThemeProvider, createTheme } from '@mui/material';
import { observer } from 'mobx-react-lite';
import { ActionSection } from './components/ActionSection';
import { EmptyState } from './components/EmptyState';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { ReadingList } from './components/ReadingList';
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
    fontFamily: 'Rubik, system-ui, sans-serif',
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
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0px 2px 4px rgba(0,0,0,0.05)',
        },
      },
    },
  },
});

export const App = observer(() => {
  const store = tehillimStore;

  const handleView = (chapterNumber: number) => {
    // TODO: Open chapter viewer dialog/panel
    console.log('View chapter:', chapterNumber);
  };

  const handleFinish = (chapterNumber: number) => {
    store.markCompleteByNumber(chapterNumber);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box 
        sx={{ 
          minHeight: '100vh', 
          background: 'linear-gradient(180deg, #fffcf0 0%, #fffef8 50%, #ffffff 100%)',
          backgroundAttachment: 'fixed',
          pb: 8,
          position: 'relative',
        }}
        dir="rtl"
      >
        <Header />
        <Container maxWidth="lg" sx={{ py: 4 }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: {
                xs: 'repeat(2, 1fr)',
                md: 'repeat(4, 1fr)'
              },
              gap: 2,
              mb: 4
            }}
          >
            <StatCard title="פרקים בקריאה" value={store.readingChapters} iconType="book" color="blue" />
            <StatCard
              title="פרקים שנקראו"
              value={`${store.readChapters} מתוך ${store.totalChapters}`}
              iconType="check"
              color="green"
            />
            <StatCard title="נשארו להגרלה" value={store.remainingChapters} iconType="sparkles" color="orange" />
            <StatCard title="ספרים שהושלמו" value={store.completedBooks} iconType="trophy" color="purple" />
          </Box>

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
                  <ReadingList 
                    chapters={store.chapters} 
                    onFinish={handleFinish}
                    onView={handleView}
                  />
                )}
              </Box>
            </Box>
          )}
        </Container>
        <Footer />
      </Box>
    </ThemeProvider>
  );
});

export default App;
