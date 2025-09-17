# Windows 95 Style Portfolio

A retro-styled personal portfolio website built with React and styled to look like Windows 95. This project showcases my work, skills, and experiences through a nostalgic user interface.

![Portfolio Preview](public/main.png)

## 🚀 Features

- **Windows 95 UI**: Authentic Windows 95 look and feel using React95 components
- **Interactive Desktop**: Clickable icons and draggable windows
- **Retro Styling**: Complete with classic Windows 95 colors, borders, and buttons
- **Responsive Design**: Works on both desktop and mobile devices
- **Blog Section**: Share your thoughts and experiences
- **Project Showcase**: Display your work in a classic Windows style
- **Contact Information**: Easy-to-find contact details
- **Skills Terminal**: Command-line style skills display

## 🛠️ Built With

- [React](https://reactjs.org/) - Frontend framework
- [React95](https://github.com/arturbien/React95) - Windows 95 style UI components
- [TypeScript](https://www.typescriptlang.org/) - Type safety and better developer experience
- [Styled Components](https://styled-components.com/) - Styling
- [Vite](https://vitejs.dev/) - Build tool and development server

## 📦 Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/windows95-portfolio.git
   ```

2. Install dependencies:
   ```bash
   cd windows95-portfolio
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

## 🚀 Deployment

This portfolio is configured for deployment on GitHub Pages. Follow these steps to deploy:

1. Update the `vite.config.ts` file:
   ```typescript
   export default defineConfig({
     base: '/your-repo-name/',
     // ... other config
   })
   ```

2. Create a deployment script in `package.json`:
   ```json
   {
     "scripts": {
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Build and deploy:
   ```bash
   npm run build
   npm run deploy
   ```

1. **Personal Information**: Update `src/data/` files with your information
2. **Styling**: Modify theme colors in `src/App.tsx`
3. **Content**: Edit components in `src/components/`
4. **Icons**: Add or modify desktop icons in `src/data/icons.ts`



This project is open source and available under the MIT License.

- [React95](https://github.com/arturbien/React95) for the amazing Windows 95 components
- Microsoft for the original Windows 95 design inspiration
