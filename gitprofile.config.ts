// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'moxharley', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'manual', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['moxharley/Mnemosyne_Term_Project', 'moxharley/WOTCR_JuniperDev', 'moxharley/Cryptophage_COMP-2522-202510', 'moxharley/Green_Scouts_1800_202530_DTC01', 'gboyal-bm/2800-202610-DTC03'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [],
    },
  },
  seo: {
    title: 'Portfolio of Harlan Bullock',
    description:
      'BCIT Computer Systems Technology student — game development, full-stack web, and systems projects.',
    imageURL: '',
  },
  social: {
    linkedin: 'harlan-bullock-4398353a2',
    x: '',
    mastodon: '',
    researchGate: '',
    facebook: '',
    instagram: '',
    reddit: '',
    threads: '',
    youtube: '', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: '',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    discord: '',
    telegram: '',
    website: '',
    phone: '778-938-4110',
    email: 'harlanbull7@gmail.com',
  },
  resume: {
    // TODO: replace with a real hosted link to your resume PDF (e.g. a GitHub raw link,
    // Google Drive share link, or a copy in this repo). Left empty for now so the
    // "Download Resume" button stays hidden instead of pointing at a dummy file.
    fileUrl: '',
  },
  skills: [
    'C++',
    'C',
    'C#',
    'Java',
    'Python',
    'JavaScript',
    'SQL',
    'Unity',
    'LibGDX',
    'MonoGame',
    'Unreal Engine 5',
    'React',
    'Node.js',
    'Firebase',
    'MongoDB',
    'Git',
  ],
  experiences: [
    {
      company: 'Personal / Peer Support',
      position: 'Computer Systems Assembly & Tech Support',
      from: 'October 2020',
      to: 'Present',
      companyLink: '',
    },
    {
      company: 'Marshalls',
      position: 'Sales Associate',
      from: 'August 2021',
      to: 'August 2025',
      companyLink: '',
    },
  ],
  certifications: [],
  educations: [
    {
      institution: 'British Columbia Institute of Technology (BCIT)',
      degree: 'Diploma, Computer Systems Technology',
      from: '2025',
      to: '2027',
    },
    {
      institution: 'University of the Fraser Valley',
      degree: 'Bachelor of Fine Arts (2½ years completed) and General Studies',
      from: '2022',
      to: '2025',
    },
  ],
  publications: [],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: 'dev', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 2, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: { id: '', snippetVersion: 6 },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'caramellatte',
      'abyss',
      'silk',
      'procyon',
    ],
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Made with <a 
      class="text-primary" href="https://github.com/arifszn/gitprofile"
      target="_blank"
      rel="noreferrer"
    >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
