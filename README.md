# Portfolio Website

A clean, minimalistic, and responsive portfolio website built with HTML, CSS, and JavaScript. Designed for developers, designers, and professionals to showcase their work.

**Live Demo:** [Add your GitHub Pages URL here]

---

## 📋 Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Local Development](#local-development)
  - [GitHub Pages Deployment](#github-pages-deployment)
- [Customization Guide](#customization-guide)
  - [Adding Your Information](#adding-your-information)
  - [Adding Projects](#adding-projects)
  - [Adding Images](#adding-images)
  - [Embedding Documents](#embedding-documents)
  - [Adding Contact Form](#adding-contact-form)
- [File Management](#file-management)
- [Troubleshooting](#troubleshooting)
- [Version Control](#version-control)
- [Browser Support](#browser-support)
- [License](#license)

---

## ✨ Features

- ✅ **Responsive Design** - Mobile-first approach, works on all devices
- ✅ **Smooth Navigation** - Sticky navbar with smooth scroll anchors
- ✅ **Modern Aesthetics** - Clean, minimalistic, academic/professional design
- ✅ **Multiple Sections** - Home, About, Skills, Projects, Experience, Education, Awards, and More
- ✅ **Project Showcase** - Featured projects with skills and links
- ✅ **Timeline Layout** - Work experience and education with visual timelines
- ✅ **PDF Embedding** - Embed research papers and CV as PDFs
- ✅ **Contact Form** - Front-end contact form (backend integration required)
- ✅ **SEO Friendly** - Semantic HTML structure
- ✅ **Dark/Light Ready** - Easily customizable color scheme
- ✅ **No Dependencies** - Pure HTML, CSS, and vanilla JavaScript

---

## 📁 Project Structure

```
Portfolio/
├── index.html              # Main HTML file with all sections
├── README.md               # This file
├── ysy.html                # Reference template (can be deleted)
│
├── css/
│   └── styles.css          # All styling and responsive design
│
├── js/
│   └── script.js           # JavaScript for interactivity
│
├── images/                 # Directory for all images
│   ├── profile.jpg         # Your profile photo
│   ├── project1.jpg        # Project screenshots
│   └── ...
│
├── files/                  # Directory for documents (PDF, etc.)
│   ├── CV.pdf              # Your resume/CV
│   ├── research-paper.pdf  # Research publications
│   └── ...
│
└── components/             # (Optional) Reusable HTML snippets
    └── header.html         # Example component
```

---

## 🚀 Getting Started

### Local Development

#### Step 1: Install a Live Server (VS Code)

Live Server allows you to see changes in real-time without manual refresh.

**Option A: Using Live Server Extension (Recommended)**

1. Open VS Code
2. Go to **Extensions** (Ctrl+Shift+X / Cmd+Shift+X)
3. Search for **"Live Server"** by Ritwick Dey
4. Click **Install**

**Using Live Server:**
1. Right-click on `index.html` in the file explorer
2. Select **"Open with Live Server"**
3. Your browser will open at `http://localhost:5500`
4. Any changes you save will automatically refresh

**Option B: Using Python (if Live Server not available)**

```bash
# Python 3.x
python -m http.server 8000

# Python 2.x
python -m SimpleHTTPServer 8000
```

Then open `http://localhost:8000` in your browser.

#### Step 2: Start Editing

1. Open `index.html` in VS Code
2. Replace all `<!-- PLACEHOLDER -->` comments with your content
3. Save files and see changes live in the browser

#### Step 3: Test Responsiveness

- Right-click → **Inspect** (or F12)
- Click the **device icon** to toggle mobile view
- Test different screen sizes: iPhone (375px), Tablet (768px), Desktop (1200px+)

---

### GitHub Pages Deployment

#### Step 1: Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial portfolio setup"

# Add GitHub repository as remote
# Replace USERNAME with your GitHub username, REPO with repo name
git remote add origin https://github.com/USERNAME/REPO.git

# Push to GitHub
git branch -M main
git push -u origin main
```

#### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings**
3. Scroll to **Pages** section
4. Under "Source", select **main** branch
5. Click **Save**
6. Wait 1-2 minutes
7. Your site will be available at: `https://USERNAME.github.io/REPO/`

#### Step 3: Custom Domain (Optional)

If you have a custom domain:

1. In **Settings → Pages**
2. Enter your custom domain
3. Update your domain's DNS settings (see GitHub docs)

#### Step 4: Update Links (if using subdirectory)

If your repo is NOT named `USERNAME.github.io`, all relative links should work as-is. If they don't, add a base path to your HTML:

```html
<head>
    <base href="/YOUR_REPO_NAME/">
</head>
```

---

## 🎨 Customization Guide

### Adding Your Information

#### 1. Hero Section (First Thing Visible)

Open `index.html` and find the **Hero Section**:

```html
<h1 class="hero-title">Your Full Name</h1>
<p class="hero-subtitle">Your Professional Title</p>
<p class="hero-description">
    A brief description of who you are and what you do.
</p>
```

Replace with your actual information.

#### 2. About Me Section

Find the **About Me Section** and replace:

```html
<p>
    I'm a [Your Title] based in [Your Location]. With [X years] of experience...
</p>
```

Add multiple paragraphs if needed. Update the profile image path:

```html
<img src="images/profile.jpg" alt="Your Name">
```

#### 3. Update All Placeholders

Search for `<!-- PLACEHOLDER -->` comments throughout the file and replace with your content:

- Names, dates, descriptions
- Project links and GitHub URLs
- Contact information and email
- Social media links
- Testimonials

Use **Find & Replace** (Ctrl+H) to find all placeholders quickly.

#### 4. Footer

Update the copyright year and site description:

```html
<footer class="footer">
    <div class="container">
        <p>&copy; 2024 Your Name. All rights reserved.</p>
        <p>Built with HTML, CSS, and JavaScript. Hosted on GitHub Pages.</p>
    </div>
</footer>
```

#### 5. Meta Information

Update the HTML `<head>` for SEO and browser tabs:

```html
<meta name="description" content="Your portfolio description">
<meta name="keywords" content="portfolio, developer, designer">
<title>Your Full Name - Portfolio</title>
```

---

### Adding Projects

#### Featured Projects (4-6 main projects)

Find the **Featured Projects Section** and duplicate a project card:

```html
<div class="project-card featured">
    <div class="project-image">
        <img src="images/project1.jpg" alt="Project Title">
    </div>
    <div class="project-info">
        <h3>Project Title</h3>
        <p class="project-description">
            What the project does and the problem it solves.
        </p>
        <div class="project-tech">
            <span class="tech-tag">React</span>
            <span class="tech-tag">Node.js</span>
            <span class="tech-tag">MongoDB</span>
        </div>
        <div class="project-links">
            <a href="https://your-project.com" class="link">Live Demo</a>
            <a href="https://github.com/username/project" class="link">GitHub</a>
        </div>
    </div>
</div>
```

Update:
- `images/project1.jpg` - Path to project screenshot
- `Project Title` - Your project name
- Description - What the project does
- Tech tags - Technologies used
- Links - Live demo and GitHub URLs

#### All Projects Grid

Add more projects to the **All Projects Section** by duplicating:

```html
<div class="project-grid-item">
    <div class="project-grid-image">
        <img src="images/project.jpg" alt="Project Name">
    </div>
    <h4>Project Name</h4>
    <p class="project-grid-description">Short description of the project.</p>
    <div class="project-grid-tech">
        <span>React</span>
        <span>CSS</span>
    </div>
</div>
```

---

### Adding Images

#### Step 1: Place Image in Folder

1. Go to the `images/` folder in your project
2. Add your image file (JPG, PNG, WebP recommended)
3. Name it descriptively (e.g., `profile.jpg`, `project-website.png`)

#### Step 2: Reference in HTML

```html
<!-- For profile image in About section -->
<img src="images/profile.jpg" alt="Yoon Sae-Young">

<!-- For project images in Featured Projects -->
<img src="images/project-name.jpg" alt="Project Title">

<!-- For background images in CSS -->
background-image: url('../images/background.jpg');
```

#### Image Optimization Tips

- Use **JPG** for photos (smaller file size)
- Use **PNG** for graphics with transparency
- Use **WebP** for modern browsers (better compression)
- Resize images before uploading:
  - Profile: 400x400px
  - Project thumbnails: 500x300px
  - Keep file size under 200KB for web

#### Responsive Images

Use `srcset` for different screen sizes:

```html
<img 
    src="images/profile-small.jpg"
    srcset="images/profile-small.jpg 480w,
            images/profile-medium.jpg 800w,
            images/profile-large.jpg 1200w"
    alt="Your Name"
>
```

---

### Embedding Documents

#### Embedding PDFs (CV, Research Papers, etc.)

##### Step 1: Place PDF in Files Folder

1. Go to `files/` directory
2. Add your PDF files:
   - `CV.pdf` - Your resume
   - `research-paper.pdf` - Your publications
   - etc.

##### Step 2: Embed as Iframe

In the **CV Section**, replace the placeholder:

```html
<!-- PDF Viewer (CV) -->
<iframe 
    src="files/CV.pdf" 
    class="cv-viewer" 
    title="CV">
</iframe>
```

In the **Research & Papers Section**:

```html
<!-- Research Paper Viewer -->
<iframe 
    src="files/research-paper.pdf" 
    title="Paper Title">
</iframe>
```

##### Step 3: Add Download Link

Provide a download link alongside the viewer:

```html
<a href="files/CV.pdf" download class="btn btn-primary">
    Download CV (PDF)
</a>
```

#### PDF Viewing (Not Downloading)

The iframe approach displays PDFs inline without allowing easy downloading. Alternatively, use Google Docs viewer:

```html
<iframe 
    src="https://docs.google.com/gview?url=YOUR_SITE/files/CV.pdf&embedded=true" 
    style="width:100%; height:600px;" 
    frameborder="0">
</iframe>
```

**Replace `YOUR_SITE` with your actual domain.**

---

### Editing Skills Section

```html
<div class="skill-category">
    <h3>Programming Languages</h3>
    <div class="skill-tags">
        <span class="skill-tag">Python</span>
        <span class="skill-tag">JavaScript</span>
        <span class="skill-tag">TypeScript</span>
        <!-- Add more skills here -->
    </div>
</div>
```

Add as many skill categories as needed.

---

### Editing Experience Timeline

```html
<div class="timeline-item">
    <div class="timeline-marker"></div>
    <div class="timeline-content">
        <h3>Job Title</h3>
        <p class="timeline-date">Company Name | Jun 2023 - Present</p>
        <p class="timeline-location">City, Country</p>
        <ul class="timeline-description">
            <li>Key achievement or responsibility</li>
            <li>Another accomplishment</li>
            <li>Impact or result</li>
        </ul>
    </div>
</div>
```

Add multiple timeline items for different jobs.

---

### Editing Education

Similar to experience timeline:

```html
<div class="education-item">
    <div class="education-marker"></div>
    <div class="education-content">
        <h3>Degree Name (e.g., B.S. Computer Science)</h3>
        <p class="education-school">University Name | Graduation: 2023</p>
        <p class="education-gpa">GPA: 3.8/4.0</p>
        <p class="education-details">
            Relevant coursework: Course 1, Course 2, Course 3
        </p>
        <p class="education-honors">Honors: Dean's List, Scholarship Name</p>
    </div>
</div>
```

---

### Adding Contact Form

#### Option 1: Formspree (Recommended - Easiest)

1. Go to [formspree.io](https://formspree.io/)
2. Sign up (free)
3. Create a new form
4. Get your Form ID (e.g., `f_xxxxx`)
5. In `index.html`, find the contact form:

```html
<form id="contactForm">
```

Change to:

```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
```

Replace `YOUR_FORM_ID` with your actual ID from Formspree.

#### Option 2: EmailJS

1. Go to [emailjs.com](https://www.emailjs.com/)
2. Sign up for free
3. Create an email service connection
4. In `index.html` `<head>`, add:

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/index.min.js"></script>
```

5. In `js/script.js`, find the `contactForm` section and uncomment the EmailJS code
6. Replace `YOUR_PUBLIC_KEY`, `YOUR_SERVICE_ID`, and `YOUR_TEMPLATE_ID` with your actual IDs

#### Option 3: Custom Backend

If you have your own server, update the form action:

```html
<form action="https://your-domain.com/submit-form" method="POST">
```

---

## 📄 File Management

### Adding Files (Resumes, Papers, etc.)

1. Place all documents in the `/files` directory
2. Reference them in HTML:

```html
<!-- Link to download -->
<a href="files/document.pdf" download>Download PDF</a>

<!-- Embed in iframe -->
<iframe src="files/document.pdf"></iframe>
```

### Image Organization

```
images/
├── profile.jpg           # Your photo
├── hero-bg.jpg          # Background image
├── project1.jpg         # Project screenshots
├── project2.png
└── project3.webp
```

### File Size Best Practices

- Images: 50-200 KB each
- PDFs: Keep under 2 MB
- Total site size: Try to stay under 5 MB for fast loading

---

## 🔧 Customization Examples

### Change Color Scheme

In `css/styles.css`, find the `:root` CSS variables section:

```css
:root {
    /* Update these colors */
    --primary-color: #1e1e1e;      /* Dark text */
    --secondary-color: #ffffff;    /* White background */
    --accent-color: #0066cc;       /* Blue - links and buttons */
    --text-secondary: #666666;     /* Gray text */
    --bg-light: #f8f8f8;          /* Light gray background */
    /* ... more colors */
}
```

Change any color and all elements using it will update automatically.

### Adjust Spacing

```css
:root {
    --spacing-unit: 1rem;
    --spacing-sm: 1rem;
    --spacing-md: 1.5rem;
    --spacing-lg: 2rem;
    /* ... etc */
}
```

### Change Typography

```css
:root {
    --font-family-main: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
}
```

Or use Google Fonts by adding to `<head>`:

```html
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
```

Then update CSS:

```css
:root {
    --font-family-main: 'Poppins', sans-serif;
}
```

---

## 🐛 Troubleshooting

### Live Server Not Working

**Problem:** "Port 5500 already in use"

**Solution:**
- Close other VS Code with Live Server running
- Or use a different port: Right-click Live Server icon → "Change Live Server Port"

### Images Not Displaying

**Problem:** Image shows as broken link

**Checklist:**
- ✅ Image file is in `/images` folder
- ✅ File name in HTML matches exactly (case-sensitive on Linux/Mac)
- ✅ Path is `images/filename.jpg` (not `/images/` or `../images/`)
- ✅ Image format is supported (JPG, PNG, WebP, GIF)

**Example:**
```html
<!-- ❌ Wrong -->
<img src="/images/photo.jpg">
<img src="../images/photo.jpg">

<!-- ✅ Correct -->
<img src="images/photo.jpg">
```

### PDF Not Embedding

**Problem:** PDF iframe shows blank or error

**Check:**
- ✅ PDF file is in `/files` folder
- ✅ PDF path is correct: `files/document.pdf`
- ✅ PDF file is readable (not corrupted)
- ✅ Browser allows iframes (some have restrictions)

**Alternative:**
Use Google Docs viewer:
```html
<iframe src="https://docs.google.com/gview?url=https://YOUR_DOMAIN/files/document.pdf&embedded=true"></iframe>
```

### GitHub Pages Not Updating

**Problem:** Changes don't appear on GitHub Pages

**Solution:**
1. Wait 1-2 minutes (GitHub needs time to rebuild)
2. Hard refresh browser: **Ctrl+Shift+R** (Windows) or **Cmd+Shift+R** (Mac)
3. Check repository settings → Pages → verify source branch is correct

### Contact Form Not Working

**Problem:** Form submit doesn't do anything

**Check:**
- ✅ Did you set up Formspree/EmailJS?
- ✅ Is your API key correct?
- ✅ Check browser console (F12 → Console tab) for errors

### Website Looks Different on Mobile

**Problem:** Layout broken on phone

**Solution:**
- Test in DevTools mobile view (F12 → device icon)
- Check if viewport meta tag is in `<head>`:
  ```html
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  ```

---

## 💾 Version Control with Git

### Basic Git Workflow

```bash
# Check status
git status

# Add changes
git add .

# Commit changes
git commit -m "Updated projects section"

# Push to GitHub
git push origin main

# Pull latest from GitHub
git pull origin main
```

### Good Commit Messages

```bash
# ✅ Good
git commit -m "Add 3 new featured projects"
git commit -m "Update contact form with Formspree integration"
git commit -m "Fix mobile menu hamburger styling"

# ❌ Bad
git commit -m "update"
git commit -m "changes"
git commit -m "fixed stuff"
```

---

## 🌐 Browser Support

- **Modern Browsers:** Chrome, Firefox, Safari, Edge (fully supported)
- **Mobile Browsers:** iOS Safari, Chrome Mobile, Firefox Mobile
- **IE 11:** Not supported (uses modern CSS features)

Test your site on:
- [BrowserStack](https://www.browserstack.com/)
- [Can I Use](https://caniuse.com/)

---

## ⚙️ Advanced Customization

### Adding Google Analytics

In `<head>`:

```html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_ID');
</script>
```

Replace `GA_ID` with your Google Analytics ID.

### Adding Font Awesome Icons

In `<head>`:

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
```

Then use icons:

```html
<i class="fab fa-github"></i> GitHub
<i class="fab fa-linkedin"></i> LinkedIn
```

### Custom Animations

Edit `css/styles.css` to add new animations:

```css
@keyframes myAnimation {
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.my-element {
    animation: myAnimation 0.6s ease-out;
}
```

---

## 📱 Mobile Optimization Checklist

- [ ] Test on iPhone (375px width)
- [ ] Test on Android (typical ~360px)
- [ ] Test on iPad (768px)
- [ ] Hamburger menu works on mobile
- [ ] Touch-friendly button sizes (minimum 44x44px)
- [ ] No horizontal scrolling
- [ ] Images responsive and load fast
- [ ] Form inputs are accessible
- [ ] Text is readable without zooming

---

## 📚 Learning Resources

- [MDN Web Docs](https://developer.mozilla.org/) - HTML/CSS/JS reference
- [CSS Tricks](https://css-tricks.com/) - CSS tips and tricks
- [Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [CSS Grid Guide](https://css-tricks.com/snippets/css/complete-guide-grid/)
- [JavaScript.info](https://javascript.info/) - JavaScript tutorial
- [GitHub Pages Docs](https://docs.github.com/en/pages)

---

## 🤝 Contributing & Support

If you find bugs or have improvements:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/improvement`
3. Make changes and commit
4. Push to branch: `git push origin feature/improvement`
5. Open a Pull Request

---

## 📄 License

This project is open source and available for personal and commercial use.

---

## ✅ Quick Start Checklist

- [ ] Clone/download this repository
- [ ] Open `index.html` with Live Server
- [ ] Replace all PLACEHOLDER comments with your info
- [ ] Add your images to `/images` folder
- [ ] Add your documents to `/files` folder
- [ ] Update colors in `css/styles.css` if desired
- [ ] Add contact form integration (Formspree/EmailJS)
- [ ] Test on mobile devices
- [ ] Push to GitHub
- [ ] Enable GitHub Pages in repository settings
- [ ] Share your portfolio! 🎉

---

## 📞 Support

For questions or issues:

1. Check the **Troubleshooting** section above
2. Review comments in the HTML code
3. Search for your issue online
4. Check browser console for errors (F12)

---

**Happy building! Your portfolio is just a few edits away.** 🚀 
