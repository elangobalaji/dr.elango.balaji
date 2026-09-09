# Personal Portfolio & Website

> Built with React 19, TypeScript, Vite, and Tailwind CSS. Pre-configured for automated **GitHub Pages** hosting.

## 🚀 Live Demo & Hosting on GitHub Pages

This project is tailored for zero-config hosting on GitHub Pages:
- **Relative asset paths** are enabled (`base: './'` in `vite.config.ts`), ensuring scripts and styles load smoothly whether on root domain or repository sub-paths (e.g. `https://<username>.github.io/<repo>/`).
- **Automated CI/CD workflow** is provided in `.github/workflows/deploy.yml` for automated GitHub Pages deployments on every push.

### Step-by-Step GitHub Pages Deployment:

1. **Create a GitHub repository** (e.g., `portfolio` or `<your-username>.github.io`).
2. **Push your code to GitHub**:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit for personal website"
   git branch -M main
   git remote add origin https://github.com/<your-username>/portfolio.git
   git push -u origin main
   ```
3. **Enable GitHub Pages**:
   - Navigate to your repository's **Settings** tab on GitHub.
   - Click **Pages** in the left navigation sidebar under "Code and automation".
   - Under **Build and deployment > Source**, select **GitHub Actions**.
   - GitHub Actions will automatically run the build and publish your site!

---

## 🛠️ Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

---

## 🎨 Features Included

- **Personal Profile & Hero**: Professional title, status indicator, bio, quick links, and interactive terminal code widget.
- **Projects Showcase**: Filterable gallery (Full-Stack, Systems, Cloud, Open Source) with architecture deep-dive modal, star counters, and links.
- **Skills Matrix**: Categorized technical stack with instant live search and proficiency ratings.
- **Career Milestones**: Timeline of roles, achievements, education, and credentials.
- **Writings & Insights**: Articles and notes with reading times and synopsis reader.
- **Contact & Availability**: Direct email with 1-click copy, live IST timezone clock, and contact form.
- **Interactive Customizer**: Update your name, title, bio, and links in-browser with local storage persistence and JSON export.
- **Printable Resume**: Instant PDF / print-friendly resume preview.
- **Dark / Light Theme**: Seamless toggle with persistent preferences.
