import React from 'react';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import { styled } from '@mui/system';

const LessonContainer = styled('div')({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  padding: '2rem',
});

const LessonButton = styled(Button)({
  width: '80px',
  height: '80px',
  padding: '10px',
  lineHeight: '1.33',
  borderRadius: '50%',
  backgroundColor: '#6A994E',
  textAlign: 'center',
    
  fontSize: '16px',
  borderWidth: '2px',
  borderColor: '#00ABE2',
  color: '#ffffff', // Set text color to white
  marginBottom: '1rem',
  '&:hover': {
    backgroundColor: '#f0f0f0',
  },
});

const HorizontalLine = styled('div')({
  width: '100px',
  height: '2px',
  backgroundColor: '#00ABE2',
  marginBottom: '1rem',
});

const LessonScreen = () => {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">Lesson Screen</Typography>
        </Toolbar>
      </AppBar>
      <Container className="mt-8">
        <LessonContainer>
          <LessonButton onClick={() => console.log('No')}>1</LessonButton>
          <HorizontalLine />
          <LessonButton onClick={() => console.log('Yes')}>2</LessonButton>
          <HorizontalLine />
          <LessonButton onClick={() => console.log('Maybe')}>3</LessonButton>
          <HorizontalLine />
          <LessonButton onClick={() => console.log('Not Sure')}>4</LessonButton>
          <HorizontalLine />
        </LessonContainer>
      </Container>
    </div>
  );
};

export default LessonScreen;