import React from 'react';
import formInstructions from '../data/form_instructions.json';
import Form from './Form/Form';
import { ThemeProvider } from '../context/ThemeContext';

const { sections } = formInstructions as Frontier.Job;

const App = () => (
  <ThemeProvider>
    <Form sections={sections} />
  </ThemeProvider>
);

export default App;
