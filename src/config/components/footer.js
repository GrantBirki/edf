// Configuration for the footer component on all pages

// ----------- imports -----------
import { getPermalink } from '~/utils/permalinks';
// ----------- imports -----------

const footerData = {
  // List of links to be displayed in the footer
  links: [
    {
      title: 'Planning',
      links: [
        { text: 'Event Planning Details', href: '/planning' },
        { text: 'Website Source Code', href: 'https://github.com/grantbirki/edf' },
      ],
    },
    {
      title: 'Blog',
      links: [{ text: 'The EDF Blog', href: '/blog' }],
    },
    {
      title: 'Photo Gallery',
      links: [{ text: 'Gallery', href: getPermalink('/gallery') }],
    },
    {
      title: 'About EDF',
      links: [
        { text: 'About', href: '/about' },
        { text: 'Team', href: getPermalink('/team') },
      ],
    },
  ],

  // Secondary links to be displayed in the footer
  secondaryLinks: [],

  // A list of social links to be displayed in the footer
  socialLinks: [{ ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/grantbirki/edf' }],

  // The footnote to be displayed in the footer (can contain HTML)
  footNote: `
    Made by <a class="text-blue-600 hover:underline dark:text-gray-200" href="https://github.com/GrantBirki"> GrantBirki</a> with ❤️ · EDF 🎧
  `,
};

export default footerData;
