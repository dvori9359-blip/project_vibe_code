import { Autocomplete, Box, TextField } from '@mui/material';

interface ChapterPickerProps {
  onSelectChapter: (chapterNumber: number) => void;
  onClose: () => void;
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

// Generate list of all 150 chapters
const generateChapterList = () => {
  const chapters = [];
  for (let i = 1; i <= 150; i++) {
    chapters.push({
      number: i,
      hebrewNumber: getHebrewNumber(i),
      label: `פרק ${getHebrewNumber(i)}`,
    });
  }
  return chapters;
};

export const ChapterPicker = ({ onSelectChapter, onClose }: ChapterPickerProps) => {
  const chapters = generateChapterList();

  return (
    <Box sx={{ mt: 2 }}>
      <Autocomplete
        options={chapters}
        getOptionLabel={(option) => option.label}
        onChange={(_, value) => {
          if (value) {
            onSelectChapter(value.number);
            onClose();
          }
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="בחרו פרק מהרשימה..."
            size="small"
            sx={{
              '& .MuiOutlinedInput-root': {
                borderRadius: 2,
                bgcolor: 'white',
                '& fieldset': {
                  borderColor: '#d1d5db',
                },
                '&:hover fieldset': {
                  borderColor: '#9ca3af',
                },
                '&.Mui-focused fieldset': {
                  borderColor: '#6b7280',
                },
              },
              '& .MuiInputBase-input': {
                textAlign: 'right',
                fontSize: '0.95rem',
              },
            }}
          />
        )}
        ListboxProps={{
          dir: 'rtl',
          sx: {
            maxHeight: '250px',
            '& .MuiAutocomplete-option': {
              textAlign: 'right',
              fontSize: '0.95rem',
              padding: '8px 16px',
              '&[aria-selected="true"]': {
                bgcolor: '#fef3c7 !important',
              },
              '&.Mui-focused': {
                bgcolor: '#fffbf0 !important',
              },
            },
          },
        }}
        sx={{
          width: '100%',
        }}
      />
    </Box>
  );
};
