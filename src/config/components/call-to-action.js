// Configuration for the site wide call to action
// This component config can be used on any page to display an identical call to action

const callToAction = {
  // If the call to action should be displayed
  enabled: false,

  // The title of the call to action component
  title: 'EDF 2023',

  // The subtitle of the call to action component (supports HTML)
  subtitle: `Want to join us for EDF 2023? Click below to learn more about the event!`,

  // Button configuration for the call to action component
  button: {
    // If the button should be displayed
    enabled: true,
    // The text of the button
    text: 'Learn More',
    // The link of the button
    // href: '/edf-2023',
    // The icon to the left of the button text
    icon: 'tabler:confetti',
    // HTML target attribute
    target: '_self',
    // HTML rel attribute
    rel: 'noopener',
  },
};

export default callToAction;
