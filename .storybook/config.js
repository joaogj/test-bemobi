import { configure } from '@storybook/react';
// import { setDefaults } from '@storybook/addon-info';


const req = require.context('../src/components', true, /.stories.js$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

// setDefaults({
//   header: true, // Toggles display of header with component name and description
//   inline: true, // Displays info inline vs click button to view
//   source: true // Displays the source of story Component
// });

// function loadStories() {
//   require('../src/components/atoms/Title/index.stories.js');
// }

configure(loadStories, module);
