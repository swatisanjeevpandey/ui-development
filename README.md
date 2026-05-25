# TheForestChapter – Setup & Deployment Documentation

## Project Overview

TheForestChapter is a static website project built using:

- HTML
- CSS
- JavaScript

The project contains multiple pages including:

- Home Page (`index.html`)
- About Page (`about.html`)
- Collection Page (`collection.html`)
- Contact Page (`contact.html`)

The project also includes Git version control configuration and can be deployed easily using Netlify.

---

# 1. Setup Documentation (Complete Git Workflow)

## 1.1 Prerequisites

Before setting up the project, install the following tools:

### Required Software

| Software | Purpose |
|---|---|
| Git | Version control |
| VS Code | Code editor |
| Browser | Run the website |

### Recommended Downloads

- Git: https://git-scm.com/
- VS Code: https://code.visualstudio.com/

---

# 1.2 Clone the Repository

```bash
git clone <repository-url>
cd TheForestChapter
```

---

# 1.3 Run the Project

### Using Browser
Open `index.html` directly in the browser.

### Using Live Server
1. Install Live Server extension in VS Code
2. Right click `index.html`
3. Click `Open with Live Server`

---

# 1.4 Git Workflow

## Create Branch

```bash
git checkout -b feature/navbar-update
```

## Add Files

```bash
git add .
```

## Commit Changes

```bash
git commit -m "Added homepage improvements"
```

## Push Code

```bash
git push
```

## Create PR

---

# 1.5 Common Git Commands

| Command | Description |
|---|---|
| git status | Check changes |
| git add . | Stage files |
| git commit | Commit changes |
| git push | Push code |
| git pull | Pull latest code |
| git branch | Show branches |

---


# 2. Netlify Deployment Documentation

## 2.1 Prerequisites

- GitHub account
- Netlify account
- Project uploaded to GitHub

---

# 2.3 Create/Login Netlify Account

Open:

https://www.netlify.com/

Login using GitHub.

---

# 2.4 Deploy Using GitHub

1. Login to Netlify
2. Click `Add new site`
3. Select `Import an existing project`
4. Connect GitHub
5. Select repository

---

# 2.5 Build Settings

| Setting | Value |
|---|---|
| Build Command | Leave Empty |
| Publish Directory | . |

---

# 2.6 Deploy Site

Click:

```text
Deploy Site
```

Netlify generates a live URL automatically.

Example:

```text
https://theforestchapter.netlify.app
```

---

# 2.7 Continuous Deployment

Whenever code is pushed to GitHub:

```bash
git add .
git commit -m "Updated website"
git push origin main
```

Netlify automatically redeploys the site.

---


# 2.8 Troubleshooting

## Page Not Found
Ensure `index.html` exists in root folder.

## CSS or JS Not Loading
Check file paths and folder names.

## Deployment Failed
Verify GitHub repository access.

---
