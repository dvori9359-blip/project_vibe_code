import { Box, Card, Stack, Typography } from '@mui/material';
import { BookOpen, CheckCircle, Shuffle, Trophy } from 'lucide-react';
import { observer } from 'mobx-react-lite';
import type { LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: number | string;
  iconType: 'trophy' | 'sparkles' | 'check' | 'book';
  color: string;
}

const iconMap: Record<string, LucideIcon> = {
  trophy: Trophy,
  sparkles: Shuffle,
  check: CheckCircle,
  book: BookOpen,
};

const colorMap: Record<string, string> = {
  purple: '#8b5cf6',
  orange: '#f59e0b',
  green: '#10b981',
  blue: '#3b82f6',
};

export const StatCard = observer(({ title, value, iconType, color }: StatCardProps) => {
  const Icon = iconMap[iconType];
  const iconColor = colorMap[color];

  return (
    <Card
      elevation={0}
      sx={{
        p: 2,
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderRadius: 3,
        border: '1px solid',
        borderColor: `${iconColor}30`,
        transition: 'all 0.2s ease-in-out',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: `0 9px 16px -8px ${iconColor}40`,
        }
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: 48,
          height: 48,
          borderRadius: 2.5,
          color: iconColor,
          bgcolor: `${iconColor}15`,
          flexShrink: 0
        }}
      >
         <Icon size={22} strokeWidth={2.5} />
      </Box>

      <Stack spacing={0.25} sx={{ textAlign: 'right', alignItems: 'flex-start', mr: 2, flex: 1 }}>
        <Typography variant="body2" sx={{ color: 'text.secondary', fontWeight: 500, fontSize: '0.85rem' }}>
          {title}
        </Typography>
        <Typography variant="h6" sx={{ fontWeight: 700, color: 'text.primary', lineHeight: 1 }}>
          {value}
        </Typography>
      </Stack>
    </Card>
  );
});

