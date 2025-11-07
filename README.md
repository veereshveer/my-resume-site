# Veeresh R - Professional Resume Website

A modern, responsive resume website built with React, TypeScript, and Tailwind CSS. Features a clean, professional design with dark mode support and print/PDF export functionality.

## Features

- ✨ **Beautiful Design**: Clean, professional layout optimized for readability
- 🌓 **Dark Mode**: Toggle between light and dark themes
- 📱 **Fully Responsive**: Looks great on all devices (mobile, tablet, desktop)
- 🖨️ **Print-Friendly**: Optimized for printing and PDF export
- ⚡ **Fast & Modern**: Built with React and Vite for optimal performance
- 🎨 **Professional UI**: Using Shadcn UI components and Tailwind CSS

## Local Development

### Prerequisites
- Node.js 20 or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd <repository-name>
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## Building for Production

To build the application for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deploying to GitLab Pages

This project is configured for easy deployment to GitLab Pages using GitLab CI/CD.

### Automatic Deployment

1. Push your code to GitLab
2. The `.gitlab-ci.yml` file will automatically trigger the deployment
3. Your resume will be available at: `https://<your-username>.gitlab.io/<repository-name>`

### Manual Deployment Steps

If you need to deploy manually:

1. Build the project:
```bash
npm run build
```

2. The `dist` folder contains your static website
3. Upload the contents of `dist` to your hosting provider

## Customizing Your Resume

To update the resume with your own information:

1. Edit `client/src/data/resumeData.ts`
2. Update all sections with your information:
   - Contact details
   - Career objective
   - Professional summary
   - Experience
   - Technical skills
   - Professional skills
   - Education
   - Projects

## Project Structure

```
├── client/
│   ├── src/
│   │   ├── components/     # Reusable components
│   │   ├── data/          # Resume data
│   │   ├── pages/         # Page components
│   │   └── index.css      # Global styles
├── shared/
│   └── schema.ts          # TypeScript types
└── server/                # Express server (for development)
```

## Technologies Used

- **Frontend Framework**: React 18
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Shadcn UI
- **Build Tool**: Vite
- **Icons**: Lucide React

## Features in Detail

### Dark Mode
Click the moon/sun icon in the top-right corner to toggle between light and dark themes. Your preference is saved in local storage.

### Print/PDF Export
Click the "Print" or "Download PDF" button to generate a print-friendly version. The print layout is optimized with clean formatting and proper page breaks.

### Responsive Design
The resume automatically adapts to different screen sizes:
- **Desktop**: Multi-column layout with optimal spacing
- **Tablet**: Adjusted layout for medium screens
- **Mobile**: Single-column layout for easy reading

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## License

This project is open source and available for personal use.

## Contact

For any questions or feedback, reach out to:
- Email: veereshr87@gmail.com
- LinkedIn: [veeresh-r-b59b68151](https://linkedin.com/in/veeresh-r-b59b68151)
