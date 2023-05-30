// Configuration for the primary content component on the home page

const content = {
  // If the entire content component should be enabled
  enabled: true,

  // Configuration for the primary section of the content component (the first and larger section)
  primary: {
    // If the primary section should be enabled
    enabled: true,

    // Small highlight text to go above the title
    highlight: 'EDF Details',

    // Main title text of the primary content component
    title: 'So what all is EDF? ...',

    // Main description text of the primary content component (HTML supported)
    description: `EDF is an event put on by bean-recordings. `,

    // The items to be displayed in the primary section
    items: [
      {
        title: 'Music',
        description:
          'Many of our friends have recently gotten into DJing and so we have music at the forefront of EDF. We have several DJs who will be playing a variety of electronic music throughout the night.',
        icon: 'tabler:headphones',
      },
      {
        title: 'Food, Drinks, and Alcohol',
        description:
          'We will have a variety of food that will be grilled up and you can take what you like. It is also BYOB so bring your favorite drinks and alcohol (and extra food too).',
        icon: 'tabler:beer',
      },
      {
        title: 'Camping',
        description:
          'The majority of us camp out at the venue after the music ends. There is plenty of space to camp in your car, tent, or hammock.',
        icon: 'tabler:tent',
      },
    ],

    // Configuration for the image to be displayed in the primary section
    image: {
      // If the image should be enabled
      enabled: true,
      // Alt text for the image
      alt: 'Colorful Image',
      // The image to be displayed
      src: import('~/assets/images/IMG_3983.png'),
    },
  },

  // Configuration for the secondary section of the content component (the second and smaller section)
  secondary: {
    // If the secondary section should be enabled
    enabled: true,

    // Items to be displayed in the secondary section
    items: [
      {
        title: '100% Free',
      },
      {
        title: 'Food, Drinks, and Alcohol',
      },
      {
        title: 'Live DJs',
      },
      {
        title: 'Lights, Lasers, and Fireworks',
      },
      {
        title: 'Camping',
      },
      {
        title: 'Friends',
      },
    ],

    // Configuration for the image to be displayed in the secondary section
    image: {
      // If the image should be enabled
      enabled: true,
      // Alt text for the image
      alt: 'Vintage Image',
      // The image to be displayed
      src: import('~/assets/images/IMG_4386_LR.jpg'),
    },
  },
};

export default content;
