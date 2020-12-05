# Implementation Notes

- I've changed the CRA version, as the latest release now patches the TypeScript
  issue that made the build break.
  See: https://github.com/facebook/create-react-app/issues/10110#issuecomment-731109866
- I've also added the lock file to the project so that dependencies are locked
  and no such surprises occur in the future.
- As I'm not a designer, I've added just enough CSS to make the UI responsive
  and consistent.
- I've only used the theme for the Button component. It can be added the same
  way for other UI elements, depending on a discussion with the designer on how
  they use "primary" and "secondary" colors.
- Instead of storing the Theme within a context, it could also be implemented as
  CSS Custom Properties, depending on browser support requirements. (Unless
  future plans include values that cannot be stored or used as CSS custom
  properties.)
- I've spent about 3-4 hours on this, give or take.
