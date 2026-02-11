import { Box, Container, Stack, Typography } from '@mui/material';

export const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        borderTop: '1px solid',
        borderColor: '#e2e8f0',
        bgcolor: 'white',
        py: 2,
        mt: 6,
        minHeight: 70,
      }}
    >
      <Container maxWidth="lg" sx={{ height: '100%' }}>
        <Stack alignItems="center" justifyContent="center" sx={{ textAlign: 'center', minHeight: '100%' }}>
          <Typography variant="body1" fontWeight={300} sx={{ color: '#9ca3af' }}>
            יהי רצון שתפילתינו תתקבל לרצון
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};
