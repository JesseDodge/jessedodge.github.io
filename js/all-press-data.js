const allPressData = [
  {
    "date": "2025-02-24",
    "publication": "Smithsonian Magazine",
    "title": "Bletchley Park Exhibition Shows How World War II-Era Research Shaped Artificial Intelligence",
    "url": "https://www.smithsonianmag.com/smart-news/bletchley-park-exhibition-shows-how-world-war-ii-era-research-shaped-artificial-intelligence-180986075/",
    "author": "Ella Jeffries"
  },
  {
    "date": "2025-01-02",
    "publication": "San Francisco Examiner",
    "title": "Tech’s Trump optimism might be false hope, policy experts say",
    "url": "https://www.sfexaminer.com/news/technology/why-experts-warn-donald-trump-could-be-bad-for-tech-industry/article_2eaaf8b4-c21b-11ef-95aa-73c754eedc84.html",
    "author": "Troy Wolverton"
  },
  {
    "date": "2024-12-27",
    "publication": "San Francisco Examiner",
    "title": "Progress, shortcomings of AI came to the fore in 2024",
    "url": "https://www.sfexaminer.com/news/technology/ai-saw-substantial-progress-in-2024-amid-growing-challenges/article_b70556aa-c162-11ef-9cc2-9ba6afed2ba8.html",
    "author": "Troy Wolverton"
  },
  {
    "date": "2024-12-06",
    "publication": "San Francisco Examiner",
    "title": "AI is boosting interest in nuclear power, but won’t soon benefit from it",
    "url": "https://www.sfexaminer.com/news/technology/ai-is-boosting-interest-in-nuclear-power-but-won-t-soon-benefit-from-it/article_4237704a-b287-11ef-ac85-b740331d93fa.html?utm_medium=social&utm_source=twitter_sfexaminer&utm_medium=social&utm_source=twitter_sfexaminer&utm_medium=social&utm_source=twitter_sfexaminer",
    "author": "Troy Wolverton"
  },
  {
    "date": "2024-11-21",
    "publication": "Geographical Magazine",
    "title": "Can we stop AI fuelling the spread of climate change denial and misinformation?",
    "url": "https://geographical.co.uk/climate-change/could-ai-fuel-the-spread-of-climate-change-denial",
    "author": "Victoria Heath"
  },
  {
    "date": "2024-09-27",
    "publication": "New York Times",
    "title": "Nuclear Power Is the New A.I. Trade. What Could Possibly Go Wrong?",
    "url": "https://www.nytimes.com/2024/09/27/business/ai-nuclear-power-stocks.html",
    "author": "Jeff Sommer"
  },
  {
    "date": "2024-09-24",
    "publication": "Nature Computational Science",
    "title": "The lost data: how AI systems censor LGBTQ+ content in the name of safety",
    "url": "https://www.nature.com/articles/s43588-024-00695-4",
    "author": "Sophia Chen"
  },
  {
    "date": "2024-07-18",
    "publication": "Forbes",
    "title": "What AI Is The Best? Chatbot Arena Relies On Millions Of Human Votes",
    "url": "https://www.forbes.com/sites/roberthart/2024/07/18/what-ai-is-the-best-chatbot-arena-relies-on-millions-of-human-votes/",
    "author": "Robert Hart"
  },
  {
    "date": "2024-07-10",
    "publication": "NPR's Morning Edition",
    "title": "Artificial intelligence's thirst for electricity",
    "url": "https://www.npr.org/2024/07/10/nx-s1-5028558/artificial-intelligences-thirst-for-electricity",
    "author": "Dara Kerr"
  },
  {
    "date": "2024-06-20",
    "publication": "POLITICO Tech",
    "title": "How much energy does AI use? A lot, actually",
    "url": "https://podcasts.apple.com/us/podcast/how-much-energy-does-ai-use-a-lot-actually/id1500970749?i=1000659616000",
    "author": "Steven Overly"
  },
  {
    "date": "2024-05-05",
    "publication": "BBC World Service",
    "title": "Newshour (interview starts at 45 minutes, Newshour has 98 million weekly listeners)",
    "url": "https://www.bbc.co.uk/programmes/w172zb8v0rdd2xm",
    "author": "Rebecca Kesby"
  },
  {
    "date": "2024-05-05",
    "publication": "San Francisco Examiner",
    "title": "Into thin air: How AI's water use could alter watersheds",
    "url": "https://www.sfexaminer.com/news/technology/how-growth-of-ai-could-stress-san-francisco-water-supplies/article_3a37584a-08d4-11ef-a0d1-6bb1d94583ae.html",
    "author": "Troy Wolverton"
  },
  {
    "date": "2024-04-29",
    "publication": "DW News",
    "title": "How AI causes serious environmental problems (but might also provide solutions)",
    "url": "https://www.youtube.com/watch?v=9aBNIekp4qY",
    "author": "Emily Leshner"
  },
  {
    "date": "2024-04-28",
    "publication": "San Francisco Examiner",
    "title": "Popularity of ChatGPT, AI tools comes with big climate cost",
    "url": "https://www.sfexaminer.com/news/technology/chatgpt-other-ai-tools-come-with-significant-climate-costs/article_ed96060a-0359-11ef-ae12-3b49734e50c5.html",
    "author": "Troy Wolverton"
  },
  {
    "date": "2024-03-21",
    "publication": "The Week",
    "title": "The complex environmental toll of artificial intelligence",
    "url": "https://theweek.com/tech/AI-climate-effects",
    "author": "Devika Rao"
  },
  {
    "date": "2024-03-17",
    "publication": "South China Morning Post",
    "title": "Let's talk about how to power AI, the new energy-guzzling industry",
    "url": "https://www.scmp.com/comment/opinion/world/article/3255657/lets-talk-about-how-power-ai-new-energy-guzzling-industry",
    "author": "David Dodwell"
  },
  {
    "date": "2024-03-11",
    "publication": "Breaking Latest News",
    "title": "AI is increasing energy and water demand worldwide",
    "url": "",
    "author": ""
  },
  {
    "date": "2024-03-07",
    "publication": "TechCrunch",
    "title": "Why most AI benchmarks tell us so little",
    "url": "https://ca.style.yahoo.com/heres-why-most-ai-benchmarks-211012586.html",
    "author": "Kyle Wiggers"
  },
  {
    "date": "2024-03-07",
    "publication": "BNN Breaking",
    "title": "Generative AI Race Heats Up: Anthropic vs. Inflection AI Challenge OpenAI's Dominance",
    "url": "",
    "author": "Ebenezer Mensah"
  },
  {
    "date": "2024-03-07",
    "publication": "The Guardian",
    "title": "AI likely to increase energy use and accelerate climate misinformation – report",
    "url": "http://theguardian.com/technology/2024/mar/07/ai-climate-change-energy-disinformation-report",
    "author": "Oliver Milman"
  },
  {
    "date": "2024-03-07",
    "publication": "Cryptopolitan",
    "title": "Climate Change Faces Dual Impact From AI",
    "url": "https://www.cryptopolitan.com/climate-change-impact-from-ai/",
    "author": "Randa Moses"
  },
  {
    "date": "2024-03-06",
    "publication": "Analytics India Magazine",
    "title": "This Bengaluru-based AI Startup is Helping Reduce Carbon Footprint",
    "url": "https://analyticsindiamag.com/how-this-bengaluru-based-ai-startup-is-helping-reduce-carbon-footprint/",
    "author": "Shyam Nandan Upadhyay"
  },
  {
    "date": "2024-02-20",
    "publication": "Undark",
    "title": "The Growing Environmental Footprint Of Generative AI",
    "url": "https://undark.org/2024/02/20/ai-environmental-footprint/",
    "author": "David Berreby"
  },
  {
    "date": "2024-02-20",
    "publication": "Medriva",
    "title": "Addressing the Environmental Impact of Generative AI: A Call for Sustainable Development",
    "url": "https://medriva.com/health/environmental-health/addressing-the-environmental-impact-of-generative-ai-a-call-for-sustainable-development/",
    "author": "Ethan Sulliva"
  },
  {
    "date": "2024-02-19",
    "publication": "Mother Jones",
    "title": "Another Big Question About AI: Its Carbon Footprint",
    "url": "",
    "author": "David Berreby"
  },
  {
    "date": "2024-02-16",
    "publication": "NPR's Science Friday",
    "title": "Understanding And Curbing Generative AI's Energy Consumption",
    "url": "https://www.sciencefriday.com/segments/generative-ai-energy-consumption/",
    "author": "Ira Flatow"
  },
  {
    "date": "2024-02-09",
    "publication": "Yale e360",
    "title": "As Use of A.I. Soars, So Does the Energy and Water It Requires",
    "url": "https://e360.yale.edu/features/artificial-intelligence-climate-energy-emissions",
    "author": "David Berreby"
  },
  {
    "date": "2024-01-04",
    "publication": "KTVU Fox",
    "title": "AI Revolution: Unintended consequences for the environment",
    "url": "https://www.ktvu.com/video/1391187",
    "author": "Kait McAfee"
  },
  {
    "date": "2023-12-20",
    "publication": "VentureBeat",
    "title": "A free AI image dataset, removed for child sex abuse images, has come under fire before",
    "url": "https://venturebeat.com/ai/a-free-ai-image-dataset-removed-for-child-sex-abuse-images-has-come-under-fire-before/",
    "author": "Sharon Goldman"
  },
  {
    "date": "2023-12-20",
    "publication": "NotebookCheck",
    "title": "AI image uses as much energy as a phone charge — are ChatGPT & co. harmful to the climate?",
    "url": "https://www.notebookcheck.net/AI-image-uses-as-much-energy-as-a-phone-charge-are-ChatGPT-co-harmful-to-the-climate.785320.0.html",
    "author": "Nicole Dominikowski"
  },
  {
    "date": "2023-12-07",
    "publication": "Business Insider",
    "title": "The version of Google's Gemini you can use right now doesn't beat OpenAI's GPT-4",
    "url": "https://www.businessinsider.com/google-gemini-ai-performance-openai-chatgpt-gpt4-2023-12",
    "author": "Kai Xiang Teo"
  },
  {
    "date": "2023-12-07",
    "publication": "Scientific American",
    "title": "AI's Climate Impact Goes Beyond Its Emissions",
    "url": "https://www.scientificamerican.com/article/ais-climate-impact-goes-beyond-its-emissions/",
    "author": "Jude Coleman"
  },
  {
    "date": "2023-12-01",
    "publication": "MIT Technology Review",
    "title": "Making an image with generative AI uses as much energy as charging your phone",
    "url": "https://www.technologyreview.com/2023/12/01/1084189/making-an-image-with-generative-ai-uses-as-much-energy-as-charging-your-phone/",
    "author": "Melissa Heikkilä"
  },
  {
    "date": "2023-11-29",
    "publication": "The New Yorker",
    "title": "How Moral Can A.I. Really Be?",
    "url": "https://www.newyorker.com/science/annals-of-artificial-intelligence/how-moral-can-ai-really-be",
    "author": "Paul Bloom"
  },
  {
    "date": "2023-10-23",
    "publication": "New York Times",
    "title": "An Industry Insider Drives an Open Alternative to Big Tech's A.I.",
    "url": "https://www.nytimes.com/2023/10/19/technology/allen-institute-open-source-ai.html",
    "author": "Steve Lohr"
  },
  {
    "date": "2023-10-19",
    "publication": "WIRED",
    "title": "AI Is Becoming More Powerful—but Also More Secretive",
    "url": "https://www.wired.com/story/fast-forward-ai-powerful-secretive/",
    "author": "Will Knight"
  },
  {
    "date": "2023-10-19",
    "publication": "Scientific American",
    "title": "Your Personal Information Is Probably Being Used to Train Generative AI Models",
    "url": "https://www.scientificamerican.com/article/your-personal-information-is-probably-being-used-to-train-generative-ai-models/",
    "author": "Lauren Leffer"
  },
  {
    "date": "2023-09-12",
    "publication": "Bulletin of the Atomic Scientists",
    "title": "Popping the chatbot hype balloon",
    "url": "https://thebulletin.org/premium/2023-09/popping-the-chatbot-hype-balloon/",
    "author": "Sara Goudarzi"
  },
  {
    "date": "2023-09-06",
    "publication": "Capital Brief",
    "title": "AI is growing at an extraordinary pace. So is its carbon footprint",
    "url": "https://www.capitalbrief.com/article/nvidia-basks-in-the-sunshine-of-ai-the-stockmarket-summer-aaf9bda5-a059-4530-92ef-76625977a22d/preview/",
    "author": "Dan Van Boom"
  },
  {
    "date": "2023-08-25",
    "publication": "Capital Brief",
    "title": "Nvidia basks in the glow of the AI summer",
    "url": "https://www.capitalbrief.com/article/nvidia-basks-in-the-sunshine-of-ai-the-stockmarket-summer-aaf9bda5-a059-4530-92ef-76625977a22d/preview/",
    "author": "Dan Van Boom"
  },
  {
    "date": "2023-08-23",
    "publication": "The Atlantic",
    "title": "The Internet's Next Great Power Suck",
    "url": "https://www.theatlantic.com/technology/archive/2023/08/ai-carbon-emissions-data-centers/675094/",
    "author": "Matteo Wong"
  },
  {
    "date": "2023-08-18",
    "publication": "TechCrunch",
    "title": "AI2 drops biggest open dataset yet for training language models",
    "url": "https://techcrunch.com/2023/08/18/ai2-drops-biggest-open-dataset-yet-for-training-language-models/",
    "author": "Devin Coldewey"
  },
  {
    "date": "2023-08-07",
    "publication": "GeekWire",
    "title": "Allen Institute for AI takes new approach to managing AI risks and promoting transparency",
    "url": "https://www.geekwire.com/2023/allen-institute-for-ai-takes-new-approach-to-managing-ai-risks-and-promoting-transparency/",
    "author": "Richard Yonck"
  },
  {
    "date": "2023-08-07",
    "publication": "Digital Technology Guru",
    "title": "Artificial Intelligence Institute Develops Impact Licenses to Promote Transparency",
    "url": "https://dtgreviews.com/ai/allen-institute-for-ai-takes-new-approach-to-managing-ai-risks-and-promoting-transparency/136301/",
    "author": "Kathryn Hernandez"
  },
  {
    "date": "2023-07-25",
    "publication": "Communications of the ACM",
    "title": "The Carbon Footprint of Artificial Intelligence",
    "url": "https://cacm.acm.org/news/274925-the-carbon-footprint-of-artificial-intelligence/fulltext",
    "author": "Keith Kirkpatrick"
  },
  {
    "date": "2023-07-18",
    "publication": "New York Times",
    "title": "Wikipedia's Moment of Truth",
    "url": "https://www.nytimes.com/2023/07/18/magazine/wikipedia-ai-chatgpt.html",
    "author": "Jon Gertner"
  },
  {
    "date": "2023-04-29",
    "publication": "GeekWire",
    "title": "AI2 researchers release new multimodal approach to boost AI capabilities using images and audio",
    "url": "https://www.geekwire.com/2023/ai2-researchers-release-new-multimodal-approach-to-boost-ai-capabilities-using-images-and-audio/",
    "author": "Richard Yonck"
  },
  {
    "date": "2023-04-29",
    "publication": "Wall Street Journal",
    "title": "Chatbots Are Digesting the Internet. The Internet Wants to Get Paid.",
    "url": "https://www.wsj.com/articles/chatgpt-ai-artificial-intelligence-openai-personal-writing-5328339a",
    "author": "Christopher Mims"
  },
  {
    "date": "2023-04-20",
    "publication": "The Register",
    "title": "4chan and other web sewers scraped up into Google's mega-library for training ML",
    "url": "https://www.theregister.com/2023/04/20/google_c4_data_nasty_sources/",
    "author": "Katyanna Quach"
  },
  {
    "date": "2023-04-19",
    "publication": "Washington Post",
    "title": "Inside the secret list of websites that make AI like ChatGPT sound smart",
    "url": "https://www.washingtonpost.com/technology/interactive/2023/ai-chatbot-learning/",
    "author": "Kevin Schaul, Szu Yu Chen, and Nitasha Tiku"
  },
  {
    "date": "2023-03-30",
    "publication": "WIRED",
    "title": "Review: We Put ChatGPT, Bing Chat, and Bard to the Test",
    "url": "https://www.wired.com/story/review-ai-chatbots-bing-bard-chat-gpt/",
    "author": "Lauren Goode"
  },
  {
    "date": "2023-02-24",
    "publication": "TechCrunch",
    "title": "Can AI really be protected from text-based attacks?",
    "url": "https://techcrunch.com/2023/02/24/can-language-models-really-be-protected-from-text-based-attacks/?guccounter=1&guce_referrer=aHR0cHM6Ly90LmNvLw&guce_referrer_sig=AQAAAM4VfzTmbgUEbUUGEK-_d2XPtTkupL0dvhjf10hIqjfsVQ9BRw0TZ2fnFWbFZFGpXF7KRISQBtMLZKsR7y5FMYj0GFkBR8etyG9mCRE2-HxXGAZj7Vg6hSZo-elhvmBIpLN4yEIN56kji5ZAmL2T3dVFDzRZxKtXFL3dI1C-S819",
    "author": "Kyle Wiggers"
  },
  {
    "date": "2023-02-15",
    "publication": "Fast Company",
    "title": "AI can help address climate change—as long as it doesn't exacerbate it",
    "url": "https://www.fastcompany.com/90850222/ai-climate-change-carbon-footprint-transparency",
    "author": "Jesse Dodge"
  },
  {
    "date": "2022-08-25",
    "publication": "Analytics India Magazine",
    "title": "Meta's 'No Language Left Behind' 450GB training dataset reproduced & released online",
    "url": "https://analyticsindiamag.com/metas-no-language-left-behind-450gb-training-dataset-reproduced-released-online/",
    "author": "Bhuvana Kamath"
  },
  {
    "date": "2022-07-22",
    "publication": "Nature News",
    "title": "How to shrink AI’s ballooning carbon footprint",
    "url": "https://www.nature.com/articles/d41586-022-01983-7",
    "author": "Elizabeth Gibney"
  },
  {
    "date": "2022-07-06",
    "publication": "MIT Technology Review",
    "title": "These simple changes can make AI research much more energy efficient",
    "url": "https://www.technologyreview.com/2022/07/06/1055458/ai-research-emissions-energy-efficient/",
    "author": "Tammy Xu"
  },
  {
    "date": "2022-05-25",
    "publication": "GeekWire",
    "title": "AI2 researchers win 'Test-of-Time' award that honors long-lasting influence for AI-related papers",
    "url": "https://www.geekwire.com/2022/ai2-researchers-win-test-of-time-award-that-honors-long-lasting-influence-for-ai-related-papers/",
    "author": "Richard Yonck"
  },
  {
    "date": "2021-11-19",
    "publication": "New York Times",
    "title": "Can a Machine Learn Morality?",
    "url": "https://www.nytimes.com/2021/11/19/technology/can-a-machine-learn-morality.html?smtyp=cur&smid=tw-nytimes",
    "author": "Cade Metz"
  },
  {
    "date": "2021-10-07",
    "publication": "IEEE Spectrum",
    "title": "Making Information Tech Greener Can Help Address the Climate Crisis",
    "url": "https://spectrum.ieee.org/making-information-tech-greener",
    "author": "San Murugesan"
  },
  {
    "date": "2021-09-24",
    "publication": "Unite.AI",
    "title": "Minority Voices 'Filtered' Out of Google Natural Language Processing Models",
    "url": "https://www.unite.ai/minority-voices-filtered-out-of-google-natural-language-processing-models/",
    "author": "Martin Anderson"
  },
  {
    "date": "2021-09-13",
    "publication": "The Register",
    "title": "AI caramba, those neural networks are power-hungry: Counting the environmental cost of artificial intelligence",
    "url": "https://www.theregister.com/2021/09/13/ai_environmental_cost/",
    "author": "Danny Bradbury"
  },
  {
    "date": "2021-06-17",
    "publication": "WIRED",
    "title": "The Efforts to Make Text-Based AI Less Racist and Terrible",
    "url": "https://www.wired.com/story/efforts-make-text-ai-less-racist-terrible/",
    "author": "Khari Johnson"
  },
  {
    "date": "2021-02-04",
    "publication": "Practical AI Podcast",
    "title": "Green AI",
    "url": "https://changelog.com/practicalai/124",
    "author": "Chris Benson and Daniel Whitenack"
  },
  {
    "date": "2021-01-19",
    "publication": "TechWireAsia",
    "title": "Is 'Green AI' the same as environmental AI?",
    "url": "https://techwireasia.com/2021/01/is-green-ai-the-same-as-environmental-ai/",
    "author": "Joe Devanesan"
  },
  {
    "date": "2020-12-10",
    "publication": "WIRED",
    "title": "The Dark Side of Big Tech's Funding for AI Research",
    "url": "https://www.wired.com/story/dark-side-big-tech-funding-ai-research/",
    "author": "Tom Simonite"
  },
  {
    "date": "2020-06-17",
    "publication": "Forbes",
    "title": "Deep Learning's Carbon Emissions Problem",
    "url": "https://www.forbes.com/sites/robtoews/2020/06/17/deep-learnings-climate-change-problem/?sh=ca9a8ef6b438",
    "author": "Rob Toews"
  },
  {
    "date": "2019-09-26",
    "publication": "New York Times",
    "title": "At Tech's Leading Edge, Worry About a Concentration of Power",
    "url": "https://www.nytimes.com/2019/09/26/technology/ai-computer-expense.html",
    "author": "Steve Lohr"
  },
  {
    "date": "2016-06-28",
    "publication": "Slate.com",
    "title": "Facebook Thinks It Has Found the Secret to Making Bots Less Dumb",
    "url": "https://slate.com/technology/2016/06/facebooks-a-i-researchers-are-making-bots-smarter-by-giving-them-memory.html",
    "author": "Will Oremus"
  }
]
