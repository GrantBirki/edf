// Configuration for the header component on all pages

// ----------- imports -----------
import { getPermalink, getBlogPermalink } from '~/utils/permalinks';
// ----------- imports -----------

const headerData = {
  // List of links to be displayed in the header
  links: [
    {
      text: 'EDF 2023',
      href: '/edf-2023',
    },
    {
      text: 'Pages',
      links: [
        {
          text: 'About',
          href: getPermalink('/about'),
        },
        {
          text: 'Team',
          href: getPermalink('/team'),
        },
        {
          text: 'Gallery',
          href: getPermalink('/gallery'),
        },
      ],
    },

    // The blog link is a special case, it uses the getBlogPermalink function
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],

  // List of buttons to be displayed in the header
  actions: [
  ],
};

export default headerData;
