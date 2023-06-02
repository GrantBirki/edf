// Configuration for the team component / page

const team = {
  // Whether the team page is enabled or not
  enabled: true,

  // The title of the team section
  title: 'The EDF Team',

  // The subtitle of the team section
  description: 'Meet the team behind EDF',

  // Members of the team
  members: [
    {
      // The name of the first member
      name: 'Grant Birkinbine',
      // Clickable link of the first member name
      nameLink: 'https://github.com/grantbirki',
      // The job title of the first member
      title: 'Event Organizer',
      // The avatar of the first member
      avatar: 'https://avatars.githubusercontent.com/u/23362539?v=4',
      // Social links of the first member
      social: {
        website: 'https://birki.io',
        // twitter: '#',
        instagram: 'https://www.instagram.com/grantbirki',
        // facebook: '#',
        // linkedin: '#',
        github: 'https://github.com/grantbirki',
      },
    },
    {
      name: 'Ian Weibel',
      nameLink: null,
      title: 'Event Host and Co-Organizer',
      avatar: 'https://avatars.githubusercontent.com/u/42787108?v=4',
      social: {
        // website: '#',
        // twitter: '#',
        // instagram: '#',
        // facebook: '#',
        // linkedin: '#',
        github: 'https://github.com/iybul',
      },
    },
  ],
};

export default team;
