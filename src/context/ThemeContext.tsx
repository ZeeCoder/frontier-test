import React, { createContext } from 'react';
import formInstructions from '../data/form_instructions.json';

// While technically this would not require a context as the JSON is available
// to us during build time as a module, I've put it in a context for future-proofing.

// Note that instead of using context for this that's shared between all
// components, we could've just used css properties as well, if target browsers
// allow for that. (Or have a graceful degradation path.)

// For this exercise I'm using the more common solution here.
const { theme } = formInstructions as Frontier.Job;
const resolvedTheme: Frontier.ResolvedTheme = {
  // As to what the defaults could be, or whether they're needed would require a
  // separate discussion.
  primary_color: '',
  secondary_color: '',
  background_color: '',
  text_color: '',
  ...theme,
};

// Applying global styles (Would be a useEffect if theme could change
document.documentElement.style.backgroundColor = resolvedTheme.background_color;
document.documentElement.style.color = resolvedTheme.text_color;

const ThemeContext = createContext<Frontier.ResolvedTheme>(resolvedTheme);
const { Provider } = ThemeContext;

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  return <Provider value={resolvedTheme}>{children}</Provider>;
};

export { ThemeContext, ThemeProvider };
