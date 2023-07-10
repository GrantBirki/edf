// Configuration for the header component on all pages

// ----------- imports -----------
import { getPermalink, getBlogPermalink } from '~/utils/permalinks';
// ----------- imports -----------

const headerData = {
  // List of links to be displayed in the header
  links: [
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
        {
          // The blog link is a special case, it uses the getBlogPermalink function
          text: 'Blog',
          href: getBlogPermalink(),
        },
      ],
    },
    {
      text: 'Past Events',
      links: [
        {
          text: 'EDF 2023',
          href: getPermalink('/edf-2023-memories'),
        },
        {
          text: 'EDF 2022',
          href: getPermalink('/edf-2022-memories')
        }
      ]
    }
  ],

  // List of buttons to be displayed in the header
  actions: [
    // {
    //   // text to display on the button
    //   text: 'EDF 2023',
    //   // link to go to when the button is clicked
    //   href: '/edf-2023',
    //   // can be 'button', 'primary', or 'ghost'
    //   type: 'button',
    //   // HTML rel attribute
    //   rel: 'noopener',
    //   // HTML target attribute
    //   target: '_self',
    // },
  ],
};

export default headerData;
