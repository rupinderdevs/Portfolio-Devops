import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  html,
  css,
  git,
  docker,
  postgresql,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  practitioner,
  foundation,
  azure,
  deloitte
} from "../assets";

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: "Automation",
    icon: frontend,
  },
  {
    title: "CI/CD",
    icon: backend,
  },
  {
    title: "Infrastructure as Code (IaC)",
    icon: ux,
  },
  {
    title: "Monitoring and Logging",
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  // {
  //   name: 'TypeScript',
  //   icon: typescript,
  // },
  // {
  //   name: 'React JS',
  //   icon: reactjs,
  // },
  // {
  //   name: 'Redux Toolkit',
  //   icon: redux,
  // },
  // {
  //   name: 'Tailwind CSS',
  //   icon: tailwind,
  // },
  // {
  //   name: 'Node JS',
  //   icon: nodejs,
  // },
  // {
  //   name: 'Rails',
  //   icon: rubyrails,
  // },
  // {
  //   name: 'graphql',
  //   icon: graphql,
  // },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'DevOps Engineer',
    company_name: 'Ellocent Labs',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'May 2022 - Present',
  },
  {
    title: 'Softwaree Engineer associate',
    company_name: 'Xenonstack',
    icon: microverse,
    iconBg: '#333333',
    date: 'Jan 2022 - Apr 2022',
  },
  {
    title: 'Clound Engineer Intern',
    company_name: 'Simba Developers',
    icon: kelhel,
    iconBg: '#333333',
    date: 'June 2021 - Dec 2021',
  },
  {
    title: 'B.tech CSE',
    company_name: 'GNA University, Phagwara',
    icon: dcc,
    iconBg: '#333333',
    date: 'July 2018 - June 2022',
  },
];

const projects = [
  {
    id: "project-1",
    name: "AWS Academy Foundation Graduate ",
    description: "View my verified achievement from Amazon Web Services (AWS).",
    image: foundation,
    repo: "#",
    demo: "https://manp1209.s3.ap-south-1.amazonaws.com/AWS_Academy_Graduate___AWS_Academy_Cloud_Foundations_Badge20230804-28-luyiiy.pdf",
  },
  {
    id: "project-2",
    name: "AWS Certified Cloud Practitioner",
    description:
      "AWS Academy Graduate issued by  Amazon Web Services Training and Certification.",
    image: practitioner,
    repo: "#",
    demo: "https://manp1209.s3.ap-south-1.amazonaws.com/AWS+Certified+Cloud+Practitioner+certificate.pdf",
  },
  {
    id: "project-3",
    name: "Azure",
    description: "Create a virtual machine and deploy a Web Server",
    image: azure,
    repo: "#",
    demo: "https://manp1209.s3.ap-south-1.amazonaws.com/Azure.pdf",
  },
  {
    id: "project-4",
    name: "Deloitte",
    description:
      "Technology Consulting Virtual Internship",
    image: deloitte,
    repo: "#",
    demo: "https://manp1209.s3.ap-south-1.amazonaws.com/FqFtWwQzNxJ8Qsh5H_Deloitte_P9vz2x4Mcp37hehcd_completion_certificate.pdf",
  },
  {
    id: "project-5",
    name: "AWS Academy Foundation Graduate ",
    description: "View my verified achievement from Amazon Web Services (AWS).",
    image: foundation,
    repo: "#",
    demo: "https://manp1209.s3.ap-south-1.amazonaws.com/AWS_Academy_Graduate___AWS_Academy_Cloud_Foundations_Badge20230804-28-luyiiy.pdf",
  },
];

export { services, technologies, experiences, projects };
