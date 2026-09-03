# 🚀 Vercel Deployment Guide: Tristan Portfolio (Akumon.dev)

A complete, step-by-step manual for deploying your Next.js portfolio to the **Vercel Platform**, covering **Preview Deployments**, **Production Deployment**, **Environment Variables for Gmail Contact Form**, and **Custom Domains**.

---

## 📑 Table of Contents
1. [Prerequisites](#1-prerequisites)
2. [Step 1: Push All Code to GitHub](#step-1-push-all-code-to-github)
3. [Step 2: Connect GitHub Repository to Vercel](#step-2-connect-github-repository-to-vercel)
4. [Step 3: Configure Environment Variables (Gmail Contact Form)](#step-3-configure-environment-variables-gmail-contact-form)
5. [Step 4: Initial Production Deployment](#step-4-initial-production-deployment)
6. [Step 5: Testing Preview vs. Production Workflows](#step-5-testing-preview-vs-production-workflows)
7. [Step 6: Post-Deployment Verification Checklist](#step-6-post-deployment-verification-checklist)
8. [Troubleshooting Common Issues](#troubleshooting-common-issues)

---

## 1. Prerequisites

Before starting, make sure you have:
* An active **GitHub account** with access to your repository: `https://github.com/AKUMON12/Tristan-portfolio`
* A **Vercel account** (you can log in for free using your GitHub account at [https://vercel.com/signup](https://vercel.com/signup))
* A generated 16-character **Google App Password** for the Gmail contact form:
  1. Go to [https://myaccount.google.com/security](https://myaccount.google.com/security)
  2. Enable **2-Step Verification**
  3. Go to [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
  4. Create an App Password with the name `Vercel Portfolio` and copy the 16 characters.

---

## Step 1: Push All Code to GitHub

Ensure all your latest local commits are pushed to the remote repository.

In your terminal / PowerShell:
```bash
# Check status to ensure working directory is clean
git status

# Stage any unstaged changes
git add .

# Commit with a clear message
git commit -m "feat: complete portfolio with Gmail API contact form, Cisco certificates, and responsive design"

# Push to your main branch
git push origin main
```

---

## Step 2: Connect GitHub Repository to Vercel

1. Open your browser and navigate to the **[Vercel Dashboard](https://vercel.com/dashboard)**.
2. Click the **"Add New..."** button in the top-right corner and select **"Project"**.
3. Under **"Import Git Repository"**, search for or select:
   ```text
   AKUMON12/Tristan-portfolio
   ```
4. Click **"Import"**.

---

## Step 3: Configure Environment Variables (Gmail Contact Form)

In the **Configure Project** screen before clicking deploy:

1. **Framework Preset**: Vercel will automatically detect `Next.js`.
2. **Root Directory**: Leave as `./` (default).
3. Expand the **"Environment Variables"** accordion section.
4. Add the following **3 environment variables**:

| KEY | VALUE | DESCRIPTION |
| :--- | :--- | :--- |
| `GMAIL_USER` | `tjelvinia@gmail.com` | Your Gmail address used as the sender |
| `GMAIL_APP_PASSWORD` | `your16characterapppassword` | Your 16-character Google App Password (without spaces) |
| `CONTACT_RECEIVER_EMAIL` | `tjelvinia@gmail.com` | The destination inbox where inquiries will arrive |

> [!IMPORTANT]
> Make sure all three checkboxes (**Production**, **Preview**, and **Development**) are checked so your contact form works across all environments!

---

## Step 4: Initial Production Deployment

1. Click the **"Deploy"** button at the bottom.
2. Vercel will start building the project. The build log will run:
   - `npm install`
   - `next build`
   - Static page generation & API route registration (`/api/contact`)
3. When complete (usually 45-60 seconds), you will see confetti 🎉 and the message:
   ```text
   Congratulations! You just deployed a new Project to Vercel.
   ```
4. Click **"Continue to Dashboard"** or click on the preview thumbnail to visit your live site!

Your site will now be live on a URL like:
`https://tristan-portfolio-akumons-projects.vercel.app` or `https://elvinia-portfolio.vercel.app`.

---

## Step 5: Testing Preview vs. Production Workflows

Vercel provides automatic CI/CD branching pipelines:

### 🌟 1. Production Workflow (Live Site)
* Any commit pushed to the **`main`** branch automatically triggers a **Production Deployment**.
* Your live production domain updates instantly with zero downtime.

### 🔍 2. Preview Workflow (Testing Features Before Going Live)
To test a new feature without affecting your live website:
1. Create a new branch in Git:
   ```bash
   git checkout -b feature/new-update
   ```
2. Make your edits and push the branch:
   ```bash
   git add .
   git commit -m "test: update layout"
   git push origin feature/new-update
   ```
3. Open a **Pull Request (PR)** on GitHub.
4. Vercel will automatically generate a **unique Preview URL** (e.g., `https://tristan-portfolio-git-feature-new-update-akumon.vercel.app`).
5. You can test your preview site with team members or recruiters.
6. Once satisfied, merge the Pull Request into `main` to automatically publish it to Production!

---

## Step 6: Post-Deployment Verification Checklist

After deployment, test the following key items on your live Vercel URL:

* [ ] **Navbar & Navigation**: Test jumping smoothly to `#projects`, `#tools`, `#skills`, `#certifications`, and `#contact`.
* [ ] **Dark / Light Mode**: Toggle the sun/moon button in the navbar to ensure light mode is eye-friendly with high contrast and dark mode maintains cyber glassmorphism.
* [ ] **Certifications Modal**: Click any of the 3 Cisco certificate cards to verify the official credential modal pops up with correct details and print options.
* [ ] **Contact Form Submission**:
  1. Fill in your name, a test email, and a test message.
  2. Click **"Send Message"**.
  3. Verify the loading spinner displays `"Sending Message..."`.
  4. Verify the success confirmation card appears.
  5. Check `tjelvinia@gmail.com` inbox to verify the inquiry arrived with `Reply-To` properly configured.
* [ ] **Mobile Responsiveness**: Open the live URL on your smartphone to ensure no horizontal scrolling and touch-friendly controls.

---

## 🛠️ Troubleshooting Common Issues

### Issue 1: Contact form returns error on Vercel
* **Cause**: `GMAIL_APP_PASSWORD` is missing or typed with incorrect characters in Vercel environment variables.
* **Fix**: Go to **Vercel Dashboard → Your Project → Settings → Environment Variables**. Ensure `GMAIL_APP_PASSWORD` is saved without spaces and redeploy via **Deployments → ... → Redeploy**.

### Issue 2: Favicon does not appear immediately
* **Cause**: Browser cache holding older favicon.
* **Fix**: Perform a hard refresh (`Ctrl + Shift + R` or `Cmd + Shift + R`) or open the site in an Incognito window.

---

**Congratulations! Your portfolio is now deployed worldwide on Vercel's Edge Network! 🚀**
