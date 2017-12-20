import React from 'react';
import withDocs from '../../site/withDocs';

const DesignSystem = ({ compile }) => {
  return (
    <div>
      {compile(`

# Design System

Arwes uses a [HOC](https://reactjs.org/docs/higher-order-components.html)
to provide a design theme for the components. This provider should be at the
root of the application and receives a theme object. This will set the design
settings to use in the components and for you to extend new ones.

\`\`\`javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createTheme } from 'arwes';

const App = () => (
  <ThemeProvider theme={createTheme()}>
    <div>My Project</div>
  </ThemeProvider>
);

ReactDOM.render(<App />, document.querySelector('#root'));
\`\`\`

The main component which every application should have is the \`<Arwes />\` component.
It wraps the application with global styles and animations.

\`\`\`javascript
import { ThemeProvider, createTheme, Arwes } from 'arwes';

const App = () => (
  <ThemeProvider theme={createTheme()}>
    <Arwes>
      <h1>My App</h1>
      <p>A SciFi Project</p>
    </Arwes>
  </ThemeProvider>
);
\`\`\`

Now you'll see the new styles. All components under the theme provider will use
the styles provided. For example:

\`\`\`javascript
import { ThemeProvider, createTheme, Arwes, Button } from 'arwes';

const App = () => (
  <ThemeProvider theme={createTheme()}>
    <Arwes>
      <div style={{ padding: 20 }}>
        <Button>My Button</Button>
      </div>
    </Arwes>
  </ThemeProvider>
);
\`\`\`

## Theme

The theme let you define the colors, dimensions, sizes and some styles and animation
effects for your components.

The colors are scoped by the object \`color\` and each of them have
3 variations: \`base\`, \`dark\` and \`light\`. The variations are defined by
\`accent\`, the default is 20% (0.2).

The backgrounds are scoped by the object \`background\` and each of them have 4
variations named \`level0\`, \`level1\`, \`level2\` and \`level3\`, each more
lighted. By default the increment in light is by 1.5% (0.015).

Most components have the ability to get a \`layer\` to define its color/background.
For example, the \`<Button />\` by default takes the \`control\` layer. We can change it
to any other:

\`\`\`javascript
const App = () => (
  <ThemeProvider theme={createTheme()}>
    <Arwes>
      <div style={{ padding: 20 }}>
        <Button layer='success'>My Button</Button>
      </div>
    </Arwes>
  </ThemeProvider>
);
\`\`\`

By default the theme extends the default one but you can customize the settings.
For example to change the primary and header colors:

\`\`\`javascript
const myTheme = {
  color: {
    primary: {
      base: '#be26fc',
      dark: '#8e1bbd',
      light: '#c95bf6'
    },
    header: {
      base: '#fc26fa',
      dark: '#a818a7',
      light: '#f458f2'
    }
  }
};

const App = () => (
  <ThemeProvider theme={createTheme(myTheme)}>
    <Arwes>
      <h1>My App</h1>
      <p>A SciFi Project</p>
    </Arwes>
  </ThemeProvider>
);
\`\`\`

You can see the complete list of styles to define in the Arwes file
[/src/tools/createTheme/theme.js](https://github.com/romelperez/arwes/blob/master/src/tools/createTheme/theme.js).

      `).tree}
    </div>
  );
}

export default withDocs(DesignSystem);
