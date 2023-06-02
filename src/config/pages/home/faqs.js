// Configuration for the faqs component on the homepage

const faqs = {
  // If the faqs component should be enabled or not on the homepage
  enabled: true,

  // highlight text for the faqs component
  highlight: 'FAQs',

  // Title for the faqs component
  title: 'Frequently Asked Questions',

  // Subtitle for the faqs component
  subtitle: 'Here are some of the most frequently asked questions about EDF',

  // List of FAQs to display with HTML support
  items: [
    [
      {
        question: 'Can I camp at EDF?',
        answer:
          'Absolutely! Camping is actually encouraged. We have a large camping area with plenty of room for everyone. Bring your own tent, RV, or whatever stuff you need to camp. It can get cold at night, so bring warm clothes and blankets.',
      },
      {
        question: 'What should I bring?',
        answer:
          'You can really bring anything you want but here is a quick list of things we usually suggest in no particular order: water, warm clothes, food, your own alcohol, a tent, a sleeping bag, sunscreen, cups, chips, a flashlight, goofy costumes, a blanket, and good vibes. You may want earplugs if you are sensitive to loud music.',
      },
      {
        question: 'What should I not bring?',
        answer:
          'Please do not bring anything that may create a lot of trash or waste. We are trying to keep the area as clean as possible because it is a working dairy and we want to keep the land clean. Please do not bring glowsticks, confetti, or anything of that sort.',
      },
    ],
    [
      {
        question: 'What type of music will be played?',
        answer:
          'Electronic music of all kinds and flavors. A variety of DJs with varying skill levels will perform at EDF.',
      },
      {
        question: 'Does the event cost money?',
        answer:
          'Nope! EDF is 100% free but if you would like to toss us a few bucks via Venmo we will have QR codes floating about. The equipment we rent is expensive and we would appreciate any help we can get to cover those costs.',
      },
      {
        question: 'Can I invite my friends?',
        answer: 'Of course! This event is by friends and for friends. Bring them along!',
      },
    ],
  ],
};

export default faqs;
