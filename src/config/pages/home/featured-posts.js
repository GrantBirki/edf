// Configuration for the latest blog posts component on the homepage

const featuredPosts = {
  // Whether the component is enabled or not
  enabled: false,

  // The title of the component
  title: 'Find out more content in our EDF Blog',

  // The description of the component / information
  information: `The EDF blog contains all sorts of information about the event, planning for future events, and memories from past events.
  `,

  // The list of posts to be displayed
  // These ids are the file names of the posts in the content/post folder
  postIds: ['edf-2023.md', 'edf-2022-memories.md'],
};

export default featuredPosts;
