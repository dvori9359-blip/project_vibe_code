import { Box, Paper, Typography } from '@mui/material';
import { BookOpen, CheckCircle2, Sparkles, Trophy } from 'lucide-react';
import { observer } from 'mobx-react-lite';

interface StatCardProps {
  title: string;
  value: number | string;
  iconType: 'trophy' | 'sparkles' | 'check' | 'book';
  color: string;
}

const iconMap = {
  trophy: Trophy,
  sparkles: Sparkles,
  check: CheckCircle2,
  book: BookOpen,
};

const colorMap: Record<string, { bg: string; color: string }> = {
  purple: { bg: '#f3e8ff', color: '#9333ea' },
  orange: { bg: '#ffedd5', color: '#f59e0b' },
  green: { bg: '#d1fae5', color: '#10b981' },
  blue: { bg: '#dbeafe', color: '#3b82f6' },
};

export const StatCard = observer(({ title, value, iconType, color }: StatCardProps) => {
  const Icon = iconMap[iconType];
  const colors = colorMap[color];

  return (
    <Paper
      sx={{
        p: 3,
        borderRadius: 2,
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)',
        transition: 'all 0.2s',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.12)',
        },
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box>
          <Typography variant="body2" sx={{ color: '#78716c', fontWeight: 500, mb: 1 }}>
            {title}
          </Typography>
          <Typography variant="h4" sx={{ fontWeight: 700, color: '#1c1917' }}>
            {value}
          </Typography>
        </Box>
        <Box
          sx={{
            width: 48,
            height: 48,
            borderRadius: 1.5,
            bgcolor: colors.bg,
            color: colors.color,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Icon size={24} />
        </Box>
      </Box>
    </Paper>
  );
});

