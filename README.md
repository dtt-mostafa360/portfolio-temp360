# Modern Portfolio Website

A modern, responsive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Beautiful animations powered by Framer Motion
- **Project Filtering**: Filter projects by category (Web, Mobile, AI)
- **Contact Form**: Functional contact form with validation
- **Skills Section**: Animated skill bars showing proficiency levels
- **Modern UI**: Glass-morphism effects and gradient text
- **SEO Optimized**: Built with Next.js for optimal SEO

## Sections

1. **Hero**: Eye-catching introduction with call-to-action buttons
2. **About**: Personal information and statistics
3. **Projects**: Showcase of projects with filtering capability
4. **Skills**: Technical skills organized by category
5. **Contact**: Contact form and contact information
6. **Footer**: Social links and copyright

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Image Optimization**: Next.js Image component

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd self
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

### Personal Information

Edit the following files to customize with your information:

- `components/Hero.tsx` - Your name, title, and introduction
- `components/About.tsx` - About section content and statistics
- `components/Projects.tsx` - Your projects data
- `components/Skills.tsx` - Your skills and proficiency levels
- `components/Contact.tsx` - Contact information
- `components/Footer.tsx` - Social media links

### Styling

- Colors can be customized in `tailwind.config.ts`
- Global styles are in `app/globals.css`

### Images

Replace project images in the `projects` array in `components/Projects.tsx` with your own images.

## Build for Production

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## Deploy

This project can be easily deployed to:

- **Vercel** (recommended): Deploy with a single click
- **Netlify**: Connect your repository and deploy
- **Any Node.js hosting**: Build and deploy the `.next` folder

## License

MIT License - feel free to use this template for your own portfolio!

## Support

For issues or questions, please open an issue in the repository.
