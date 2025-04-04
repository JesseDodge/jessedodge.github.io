const allTalksData = [
  {
    title: 'Machine Learning Reproducibility Challenge at Princeton University',
    venue: 'Princeton University, August 21 2025',
    description: 'Keynote speaker: Reproducibility in the Science of AI',
    mediaType: 'image',
    mediaSource: './public/images/princeton_banner.jpg',
    mediaAlt:
      'Machine Learning Reproducibility Challenge at Princeton University',
    url: 'https://reproml.org/#:~:text=We%20are%20happy%20to%20announce,oral%20presentations%20and%20poster%20sessions.',
  },
  {
    title: 'Workshop on Data Contamination (CONDA)',
    venue: 'ACL, August 16 2024',
    description:
      'Invited speaker: Contamination in Web-Scale Datasets and Large Model Evaluations',
    mediaType: 'image',
    mediaSource: './public/images/conda.png',
    url: 'https://conda-workshop.github.io/',
  },
  {
    title: 'Stanford Data Science Cores Annual Symposium',
    venue: 'Stanford University, May 21 2024',
    description:
      'Keynote speaker: Improving Reproducibility and Transparency in the Science of AI',
    mediaType: 'image',
    mediaSource: './public/images/stanford.png',
    url: 'https://datascience.stanford.edu/cores/cores-annual-symposium-2024',
  },
  {
    title: 'AI and Climate Panel at US Senate',
    venue: 'Washington DC, February 6 2024',
    description: 'Invited panelist, hosted by Senators Markey and Heinrich',
    mediaType: 'image',
    mediaSource: './public/images/dc.jpeg',
    url: 'https://allenai.org/blog/ai-climate-a-first-of-its-kind-conversation-on-the-hill-10baea2a0d13',
  },
  {
    title: 'Bill & Melinda Gates Foundation IDM Symposium',
    venue: 'Bill & Melinda Gates Foundation, May 22 2023',
    description: 'Invited talk: Green AI: Implications of Web-Scale AI',
    mediaType: 'video',
    mediaSource:
      'https://www.youtube.com/embed/zixfb0k0F7M?si=SNUmRZi1zf9izKMo',
    mediaTitle: 'YouTube video player',
    url: 'https://www.idmod.org/wp-content/uploads/2023/05/2023-IDM-Symposium-Program.pdf',
  },
  {
    title: 'Playground.VC',
    venue: 'Playground Global, May 31 2023',
    description:
      'Invited to organize event with 100+ attendees, spoke on panel',
    mediaType: 'video',
    mediaSource:
      'https://www.youtube.com/embed/V77ZkoWmKco?si=Fy-3Zir3enyjn_XV',
    mediaTitle: 'YouTube video player',
  },
  {
    title: 'CMU LTI Colloquium',
    venue: 'Carnegie Mellon University, March 24 2023',
    description: 'Invited talk',
    mediaType: 'video',
    mediaSource:
      'https://www.youtube.com/embed/ZFqm7NnRAe0?si=JPBGIfnP4Tnet3DB',
    mediaTitle: 'YouTube video player',
  },
  {
    title: 'CMU LTI Ethics Course	',
    venue: 'Carnegie Mellon University, March 23 2023',
    description: 'Invited Guest Lecture',
  },
  {
    title: 'Learning Workshop 2023',
    venue: 'March 11 2023',
    description: 'Invited talk',
  },
  {
    title: 'Advanced Language Processing Winter School',
    venue: 'January 17 2023',
    description:
      'Invited to host birds-of-a-feather session on Reproducibility',
  },
  {
    title: 'Financial Times',
    venue: 'December 6 2022',
    description: 'Invited Panelist: Leveraging AI to achieve Net-Zero ',
  },
  {
    title: 'IEEE Society on Social Implications of Technology',
    venue: 'November 10 2022',
    description:
      'Invited Talk: Green AI: Measuring the Carbon Intensity of AI in Cloud Instances',
  },
  {
    title: 'Colloquium at University of Zurich',
    venue: 'November 1 2022',
    description: 'Invited Talk: Improving Transparency in the Science of NLP',
  },
  {
    title: 'Workshop on Assessing Social Impacts of General Purpose AI Systems',
    venue: 'October 25 2022',
    description:
      'Invited Participant: discussion on impact of AI, hosted by HuggingFace',
  },
  {
    title: 'TTI Vanguard	',
    venue: 'September 14 2022',
    description:
      'Invited Talk: Green AI: Measuring the Carbon Intensity of AI in Cloud Instances',
  },
  {
    title: 'FAccT CRAFT Panel on ML Evaluation',
    venue: 'June 21 2022',
    description:
      'Invited Panelist: Communication Across Communities in Machine Learning Research and Practice',
  },
  {
    title: 'Learning Workshop 2022',
    venue: 'March 4 2022',
    description: 'Invited Talk: Data-first Machine Learning',
  },
  {
    title: 'TVMCon 2021',
    venue: 'December 17 2021',
    description: 'Invited Talk: Green AI',
  },
  {
    title: 'NeurIPS Plenary Panel, NeurIPS 2021',
    venue: 'NeurIPS November 16 2021',
    description: 'Invited Talk: Green AI',
    mediaType: 'image',
    mediaSource: './interview_screenshots/reliabilityInterview.png',
    url: 'https://neurips.cc/virtual/2021/panel/44887',
  },
  {
    title: 'Workshop on Enormous Language Models',
    venue: 'ICLR, May 7 2021',
    description:
      'Invited Talk: Is Brevity the Soul of Wit? What Information to Report About Our Data',
    mediaType: 'video',
    mediaSource:
      'https://www.youtube.com/embed/x-9KxACAPIo?si=qLt1gwkITXgFuRaG&amp;start=6864',
    mediaTitle: 'YouTube video player',
    url: 'https://welmworkshop.github.io/#speakers',
  },
  {
    title: 'Negative Results Workshop',
    venue: 'EMNLP, December 15 2020',
    description: 'Invited Panelist: Leaderboardism in NLP',
    mediaType: 'video',
    mediaSource:
      'https://www.youtube.com/embed/VauPmCJSlH8?si=jzQURjBahFxT-1kb',
    mediaTitle: 'YouTube video player',
    url: 'https://insights-workshop.github.io/2020/program/',
  },
  {
    title: 'Allen Institute for Artificial Intelligence',
    venue: 'Allen Institute for AI, April 18 2018',
    description: 'Invited Panelist: Leaderboardism in NLP',
    mediaType: 'video',
    mediaSource:
      'https://www.youtube.com/embed/el_DbbqXuQY?si=CnxR1Z-RMQwUlyck',
    mediaTitle: 'YouTube video player',
  },
  {
    title: 'NLP Seminar',
    venue: 'Cambridge University, July 18 2014',
    description:
      'Invited Talk: Context-dependent Semantic Parsing for Time Expressions',
  },
];
