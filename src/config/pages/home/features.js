// Configuration for the features component on the homepage

const features = {
  // If the features component should be enabled or not on the homepage
  enabled: true,

  // highlight text for the features component
  highlight: 'Bring the Bass',

  // Title for the features component
  title: 'For Friends, By Friends',

  // Subtitle for the features component
  subtitle:
    'EDF is the premier electronic bean event of the summer. It is a gathering for friends, by friends. Here are some highlights of what you can expect at EDF',

  // List of features to display with HTML support
  items: [
    [
      {
        title: 'Bass',
        description:
          'We use only the finest of subs to make your innards shake and the cows moo.',
        icon: 'tabler:device-speaker',
      },
      {
        title: 'Lights',
        description:
          'We have a full lighting setup including a custom build LED wall',
        icon: 'tabler:bulb',
      },
      {
        title: 'Lasers',
        description:
          'Our lighting setup also includes lasers because what is electronic music without lasers?',
        icon: 'tabler:ad-2',
      },
    ],
    [
      {
        title: 'Live DJs',
        description:
          'We have a full lineup of DJs who are our friends and share the love of electronic music.',
        icon: 'tabler:headphones',
      },
      {
        title: 'Fireworks',
        description:
          'EDF takes place near the 4th of July so naturally we have fireworks.',
        icon: 'tabler:stars',
      },
      {
        title: 'Friends',
        description:
          'EDF is a gathering for friends, by friends. There will be plenty of food, drinks, alcohol, and friends.',
        icon: 'tabler:friends',
      },
    ],
  ],
};

export default features;
