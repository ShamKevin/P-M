import { 
  Code, 
  HeadsetIcon, 
  Users, 
  BarChart, 
  PhoneCall, 
  UserCheck,
  Building,
  Users2,
  UserPlus,
  LineChart
} from 'lucide-react';

// Featured services shown on main page
export const featuredServices = [
  {
    icon: BarChart,
    title: 'Sales Management',
    description: 'Data-driven sales strategies to maximize revenue and growth.',
    slug: 'sales-management',
    images: [
      'https://images.unsplash.com/photo-1552581234-26160f608093',
      'https://images.unsplash.com/photo-1552664730-d307ca884978'
    ],
    fullDescription: `Our Sales Management service provides comprehensive solutions to optimize your sales processes and drive revenue growth. We combine cutting-edge technology with proven methodologies to:

    • Develop customized sales strategies
    • Implement efficient sales processes
    • Provide detailed analytics and reporting
    • Train and develop sales teams
    • Monitor and improve performance metrics`
  },
  {
    icon: Users,
    title: 'HR Solutions',
    description: 'End-to-end human resource management and strategic recruitment services.',
    slug: 'hr-solutions',
    images: [
      'https://images.unsplash.com/photo-1600880292203-757bb62b4baf',
      'https://images.unsplash.com/photo-1551836022-deb4988cc6c0'
    ],
    fullDescription: `Our HR Solutions deliver comprehensive human resource management services tailored to your organization's needs. We focus on:

    • Strategic workforce planning
    • Talent acquisition and retention
    • Performance management systems
    • Employee development programs
    • HR policy development and implementation`
  },
  {
    icon: LineChart,
    title: 'Reports & Dashboard',
    description: 'Comprehensive analytics and visual insights for data-driven decision making.',
    slug: 'reports-dashboard',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f'
    ],
    fullDescription: `Transform your data into actionable insights with our Reports & Dashboard solutions. We provide:

    • Custom dashboard development
    • Real-time data visualization
    • Automated reporting systems
    • Performance metrics tracking
    • Predictive analytics`
  }
];

// All services including those not featured on main page
export const allServices = [
  ...featuredServices,
  {
    icon: Code,
    title: 'Technical Support',
    description: 'Comprehensive technical assistance to keep your business operations smooth.',
    slug: 'technical-support',
    images: [
      'https://images.unsplash.com/photo-1553877522-43269d4ea984',
      'https://images.unsplash.com/photo-1537432376769-00f5c2f4c8d2'
    ],
    fullDescription: `24/7 technical support services to ensure your business operations run smoothly...`
  },
  // Add remaining services with similar structure
];