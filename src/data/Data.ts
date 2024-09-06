interface User {
    name: string
    nameWithoutSuffix: string
    role: string
    nickname: string
    ed: string
    about: string
    orgs: Organization[]
    education: Education[]
    skills: Skill[]
    projects: Project[]
    experience: Experience[]
    contact_links: ContactLink[]
}

interface Organization {
    name: string
    role: string
    logo: string
    href: string
}

interface Education {
    name: string
    href: string
    school: string
    timespan: string
}

interface Skill {
    name: string
    icon: string
    site: string
}

interface Experience {
    role: string
    timespan: string
    href: string
    external_links: ExternalLink[]
    description: string
}

interface Project {
    role: string
    timespan: string
    href: string
    short_description: string
    external_links: ExternalLink[]
    tags: string[]
    description: string
}

interface ExternalLink {
    label: string
    url: string
}

interface ContactLink {
    title: string
    text: string
    href: string
    ctaText: string
    icon: string
}

let baseIconsURL = 'https://cdn.simpleicons.org';


export let user: User = {
    name: "Sivaraman N",
    nameWithoutSuffix: "Sivaraman",
    role: "Backend Engineer,Technologist",
    nickname: "Siva",
    ed: "Technologist, Backend Engineer",
    about: "Hey there! 👋 I'm a  backend developer specializing in JavaScript and Python is responsible for building and maintaining the server-side logic, APIs, and database interactions that power web and mobile applications. Using JavaScript (with Node.js) and Python (with frameworks like Django or Flask), they ensure efficient data processing, secure communication, and seamless integration with front-end components. They focus on scalability, security, and performance, managing databases like PostgreSQL or MongoDB, and implementing RESTful or GraphQL APIs. These developers also collaborate with front-end teams to deliver cohesive, full-stack solutions tailored to the application's requirements.",
    orgs: [
        {
            name: "Talentship Private  Corporation",
            role: "Backend Developer",
            logo: "https://res.cloudinary.com/dwir71gi2/image/upload/v1725605316/ts-1_logp_c1hrgw.png",
            href: "https://talentship.io"
        },
    ],
    education: [
        {
            name: "Bachelor of Science  Mathematics",
            href: "https://www.tvu.edu.in/",
            school: "Thiruvalluvar University",
            timespan: "April 2018 - 2021"
        },
        {
            name: "Master of Computer Apllication",
            href: "https://www.pondiuni.edu.in/",
            school: "Christ of College of Engineering & Technologies",
            timespan: "August 2022 - 2024"
        }
    ],
    skills: [
        {
            name: 'Python',
            icon: `${baseIconsURL}/python`,
            site: 'https://python.org'
        },
       
       
        {
            name: 'Javascript',
            icon: `${baseIconsURL}/javascript`,
            site: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
        },
       
        {
            name: 'MySQL',
            icon: `${baseIconsURL}/mysql`,
            site: 'https://www.mysql.com'
        },
        {
            name: 'React',
            icon: `${baseIconsURL}/react`,
            site: 'https://www.react.dev'
        },
        {
            name: 'Version Control (Git)',
            icon: `${baseIconsURL}/git`,
            site: 'https://git-scm.com/'
        },
        
        {
            name: 'Node',
            icon: `${baseIconsURL}/npm`,
            site: 'https://www.npmjs.com/'
        },
        {
            name: 'Figma',
            icon: `${baseIconsURL}/figma`,
            site: 'https://www.figma.com/about/'
        }
    ],
    projects: [
        {
            role: "Creator/ Developer",
            href: "https://mca-smart-learn.vercel.app/",
            timespan: "April 2024",
            short_description: "Smart Learn Web Applications for Learning  Management",
            external_links: [
                {
                    url: 'https://github.com/sivaraman123456/MCA_smart_learn',
                    label: 'Repo Link'
                }
            ],
            tags: ['ReactJS', 'Material UI', 'Express JS', 'MongoDB'],
            description: "Created a Complete Learning Management web applications links named <a class='relative inline-flex items-center text-sm font-medium dark:text-mocha-lavender text-latte-lavender transition duration-100 hover:scale-[1.03] hover:text-latte-lavender dark:hover:text-mocha-lavender focus-visible:text-mocha-lavender' href='https://mca-smart-learn.vercel.app/'>smart learn</a> for a College Event with efficient web client and server optimization using several frameworks packages",
        },
        {
            role: "Creator",
            href: "https://github.com/sivaraman123456/farmer-portal",
            timespan: "Febuary 2023 - June 2023",
            short_description: " Farmer Management ",
            external_links: [],
            tags: ['Python- Flask', 'Sqlite3', 'Javascript'],
            description: "Creating an app to help farmers sell their cultivated products online.",
        },
       
    ],
    experience: [
                {
            role: "Software Engineer Intern @Talentship.io",
            href: "https://talentship.io/en/",
            timespan: " Feb 2024 - July 2024",
            external_links: [
                {
                    url: 'https://talentship.io/en/',
                    label: 'Website'
                },
            ],
            description: `
                • Working With Front-ends Projects using React Framework for (Keel) Employe Management System <br > <br >
                • Designing the aspect applications to ensure the proper acquirements of web apps!`
        },
        
        
     
    ],
    contact_links: [
        {
            title: "Mail",
            text: "sivaraman93440@gmail.com",
            href: "mailto:sivaraman93440@gmail.com",
            ctaText: "Contact",
            icon: "<svg class='h-11 w-11 text-gray-900 dark:text-gray-300' aria-hidden='true' fill='none' stroke='currentColor' stroke-width='2.5' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'> <path d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75' stroke-linecap='round' stroke-linejoin='round' /> </svg>"
        },
      
        {
            title: "LinkedIn",
            text: "in.linkedin.com/siva-raman-a13333242",
            href: "https://www.linkedin.com/in/siva-raman-a13333242/",
            ctaText: "Connect!",
            icon: "<i class='text-5xl fa-brands fa-linkedin text-gray-900 dark:text-gray-300' />"
        },
        {
            title: "Instagram",
            text: "instagram.com/chill_alwaysss",
            href: "https://www.instagram.com/chill_alwaysss/",
            ctaText: "Follow",
            icon: "<i class='text-5xl fa-brands fa-instagram text-gray-900 dark:text-gray-300' />"
        },
        {
            title: "GitHub",
            text: "github.com/sivaraman123456",
            href: "https://github.com/sivaraman123456",
            ctaText: "Follow",
            icon: "<i class='text-5xl fa-brands fa-github text-gray-900 dark:text-gray-300' />"
        },
      
      
      
       

    ]

}
