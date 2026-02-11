import { Box, Button, Card, Stack, Typography } from '@mui/material';
import { Check, RefreshCw, Sparkles } from 'lucide-react';
import { observer } from 'mobx-react-lite';

interface ResultViewProps {
  chapterNumber: number;
  onDrawAnother: () => void;
  onAcceptChapter: () => void;
}

// Helper function to convert numbers to Hebrew letters
function getHebrewNumber(num: number): string {
  const ones = ['', 'א', 'ב', 'ג', 'ד', 'ה', 'ו', 'ז', 'ח', 'ט'];
  const tens = ['', 'י', 'כ', 'ל', 'מ', 'נ', 'ס', 'ע', 'פ', 'צ'];
  const hundreds = ['', 'ק', 'ר', 'ש', 'ת'];

  if (num === 15) return 'טו';
  if (num === 16) return 'טז';

  let result = '';
  const h = Math.floor(num / 100);
  const t = Math.floor((num % 100) / 10);
  const o = num % 10;

  if (h > 0) result += hundreds[h];
  if (t > 0) result += tens[t];
  if (o > 0) result += ones[o];

  return result;
}

export const ResultView = observer(({ chapterNumber, onDrawAnother, onAcceptChapter }: ResultViewProps) => {
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
      <Stack alignItems="center" spacing={3}>
        {/* Badge Header */}
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

        {/* Explanation Text */}
        <Typography variant="body1" color="text.secondary">
          הפרק שהוגרל:
        </Typography>

        {/* Chapter Number Box */}
        <Box
          sx={{
            border: '2px solid #fcd34d',
            borderRadius: 4,
            px: 8,
            py: 2,
            bgcolor: 'white',
            boxShadow: '0 2px 8px rgba(252, 211, 77, 0.15)',
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 'bold',
              color: '#d97706',
              textAlign: 'center',
              fontSize: { xs: '2.5rem', sm: '3rem' },
            }}
          >
            פרק {getHebrewNumber(chapterNumber)}
          </Typography>
        </Box>

        {/* Action Buttons */}
        <Stack 
          direction="row" 
          spacing={2} 
          justifyContent="center" 
          sx={{ width: '100%', maxWidth: 600, gap: 2, mt: 1 }}
        >
             <Button
            variant="contained"
            startIcon={<Check size={20} />}
            onClick={onAcceptChapter}
            fullWidth
            sx={{
              borderRadius: 3.2,
              height: 48,
              gap: 1,
              bgcolor: '#10b981',
              '&:hover': {
                bgcolor: '#059669',
              },
              boxShadow: '0 4px 6px -1px rgba(16, 185, 129, 0.2)',
              '& .MuiButton-startIcon': {
                marginRight: '4px',
                marginLeft: 0,
              },
            }}
          >
            אני לוקח את הפרק
          </Button>
          <Button
            variant="outlined"
            startIcon={<RefreshCw size={20} />}
            onClick={onDrawAnother}
            fullWidth
            sx={{
              borderRadius: 3.2,
              height: 48,
              gap: 1,
              borderColor: '#e2e8f0',
              color: '#0a0b0cff',
              bgcolor: 'white',
              '&:hover': {
                borderColor: '#cbd5e1',
                bgcolor: '#f8fafc',
              },
              '& .MuiButton-startIcon': {
                marginRight: '4px',
                marginLeft: 0,
              },
            }}
          >
            הגרילו פרק אחר
          </Button>
         
        </Stack>
      </Stack>
    </Card>
  );
});
