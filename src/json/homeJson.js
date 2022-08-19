
/* Header Menu */
export const menuItems = [
    {
        name : 'Home',
        link : '/',
        submenu : []
    },
    {
        name : 'Quick notes',
        link : '',
        submenu : [
            {
                link : '',
                name : 'Javascript Notes Modern ES6 and more.txt',
                divider: false
            },
            {
                link : '',
                name : 'React Doc. Summary',
                divider: false
            },
            {
                link : '',
                name : 'Useful Packages',
                divider: false
            } 
        ],
    },
    {
        name : 'Class component examples',
        link : '/class-component-examples',
        submenu : [
            {
                link : 'clock-ticks',
                name : 'Clock Ticks',
                divider: false
            },
            {
                link : 'toggle',
                name : 'Toggle',
                divider: false
            },
            {
                link : 'warning',
                name : 'Warning',
                divider: false
            },
            {
                link : 'login',
                name : 'Login',
                divider: false
            },
            {
                link : 'form',
                name : 'Form',
                divider: false
            },
            {
                link : 'temperature-calculator',
                name : 'Temperature calculator',
                divider: true
            },
            {
                link : 'search-product',
                name : 'Search Product',
                divider: true
            },
            {
                link : 'click-counter',
                name : 'Click Counter',
                divider: true
            }      
        ],
    },
    {
        name : 'Hook examples',
        link : '/hook-examples',
        submenu : [
            {
                link : 'click-counter',
                name : 'Click Counter',
                divider: false
            },
            {
                link : 'theme',
                name : 'Theme',
                divider: false
            },
            {
                link : 'stop-watch',
                name : 'Stop Watch',
                divider: false
            }
        ],
    }
];

/* Image Slider */
export const sliderImages = [
    {
        fileName: "slider-react-planet.png",
        title   : "Welcome To React.",
        summary : "Prepare yourself for landing, before exploring."
    },
    {
        fileName: "slider-react-inner-me.png",
        title   : "Stuck, Now What?",
        summary : "Get inspired if all your hope is lost."
    },
    {
        fileName: "slider-react-info.png",
        title   : "Next Stop React Native.",
        summary : "Embrace yourself for another adventure."
    } 
];

/* To Do List */
export const toDoList = [
    {
        border: 'primary',
        header: 'Learn Modern Javascript.',
        title: 'Example Topics',
        text: [
          'Execution Context',
          'First Class Citizen',
          'Class field',
          'Rest parameters',
          'Spread Operator',
          'Computed property names',
          'Destructuring assignment',
          'Object prototypes'
        ],
        link:'https://www.youtube.com/watch?v=pN6jk0uUrD8&list=PLlasXeu85E9cQ32gLCvAvr9vNaUccPVNP&index=1',
        linkName:'Video Tutorial',
        timeline: '1 month'
    },
    {
      border: 'secondary',
      header: 'Learn React Js.',
      title: 'Important Topics',
      text: [
        'Props and State',
        'Class Component',
        'Higher-Order Components',
        'Uncontrolled Components',
        'Lifting State Up',
        'Composition vs Inheritance',
        'Hooks',
        'Reducer'
      ],
      link:'https://reactjs.org/docs/getting-started.html',
      linkName:'React Documentation',
      timeline: '3 month'
    },
    {
      border: 'warning',
      header: 'Create And Host A Simple Web App.',
      title: 'Website Design',
      text: [
        'Menu',
        'Slider',
        'Body',
        'Footer',
        'Navigation using react router',
        'Contact Us (EmailJs)',
        'Weather or Search api',
        'CRUD operation'
      ],
      link:'https://www.netlify.com/',
      linkName:'Free Hosting Netlify',
      timeline: '1 month'
    }
];

/* Query List */
export const faqList = [
    {
        title: 'Why react ?',
        summary: 'React focuses on thinking about how the UI should look at any given moment, rather than how to change it over time, which eliminates a whole class of bugs.',
    },
    {
        title: 'What is purpose of react ?',
        summary: 'There should be a single “source of truth” for any data that changes in a React application.',
    },
    {
        title: 'How to decide when to make a new component ?',
        summary: 'By using the Single-responsibility principle.',
    },
    {
        title: 'Which data model does react use ?',
        summary: 'Json data model.',
    },
    {
        title: 'How many data model does react use ?',
        summary: 'There are two types of “model” data in React: props and state.',
    },
    {
        title: 'When does componenet re-render ?',
        summary: 'React components automatically re-render whenever there is a change in their state or props.',
    },
    {
        title: 'Do two components using the same custom Hook share state ?',
        summary: 'No. Custom Hooks are a mechanism to reuse stateful logic not state itself. Every time we call a custom hook all state and effects inside of it are fully isolated',
    },

];