# 🚀 Sanity CMS Quick Start

Complete Sanity CMS integration for beFound with separate schemas for **Logo & Branding**, **Website Design**, **Website Development**, and **SEO** projects.

---

## ⚡ Get Started in 5 Minutes

### Step 1: Install Sanity CLI

```bash
npm install -g @sanity/cli
```

### Step 2: Login to Sanity

```bash
sanity login
```

### Step 3: Setup Sanity Studio

```bash
cd studio
npm install
```

### Step 4: Initialize Your Sanity Project

If you **don't have** a Sanity account/project:

```bash
sanity init
```

Select:
- Create new project
- Use default dataset configuration
- Output path: Current folder
- Select project template: Clean project

**Copy your Project ID** from the output.

If you **already have** a Sanity project, update `studio/sanity.config.ts` and `studio/sanity.cli.ts` with your project ID.

### Step 5: Configure Environment Variables

**Root `.env` file:**

```bash
VITE_SANITY_PROJECT_ID=your_project_id_here
VITE_SANITY_DATASET=production
```

**Studio `.env` file (studio/.env):**

```bash
SANITY_STUDIO_PROJECT_ID=your_project_id_here
SANITY_STUDIO_DATASET=production
```

### Step 6: Start Sanity Studio

```bash
cd studio
npm run dev
```

Visit **http://localhost:3333** to access Sanity Studio.

### Step 7: Configure CORS

1. Go to [Sanity Manage](https://www.sanity.io/manage)
2. Select your project
3. Go to **Settings → API → CORS Origins**
4. Add:
   - `http://localhost:5173` (Vite dev server)
   - `http://localhost:3000` (if using other dev server)
   - Your production domain

### Step 8: Create Your First Project

In Sanity Studio (http://localhost:3333):

1. Click **"Logo & Branding Project"** (or any project type)
2. Fill in required fields:
   - Title
   - Slug (auto-generated from title)
   - Year
   - Description
   - Overview
   - Client
   - Country
   - Industry
   - Hero Image
3. Add type-specific fields (branding colors, wireframes, tech stack, etc.)
4. Click **Publish**

### Step 9: Update Your Frontend

**Option A: Use the new Sanity-powered component**

In `src/App.tsx`, replace:

```typescript
import ProjectDetailPage from './pages/work/ProjectDetailPage';
```

with:

```typescript
import ProjectDetailPage from './pages/work/ProjectDetailPageSanity';
```

**Option B: Update routing to use slugs**

In `src/App.tsx`:

```typescript
<Route path="/work/:slug" element={<ProjectDetailPage />} />
```

And update your `WorkPage.tsx` to navigate using slugs:

```typescript
navigate(`/work/${project.slug}`);
```

### Step 10: Test

```bash
npm run dev
```

Navigate to a project detail page and you should see data from Sanity!

---

## 📋 What's Included

### 4 Project Types with Unique Fields

#### 1. **Logo & Branding** (`brandingProject`)
- Brand story & logo conceptualization
- Color palette with hex codes
- Typography system
- Brand applications (packaging, signage, etc.)
- Moodboard with palette swatches

#### 2. **Website Design** (`websiteDesignProject`)
- Wireframe evolution (low-fi → high-fi → final)
- Design progression timeline (research → wireframe → prototype → final)
- User personas & user flows
- Figma prototype embed
- Design principles

#### 3. **Website Development** (`websiteDevelopmentProject`)
- Detailed tech stack (frontend, backend, database, infrastructure)
- Key features with screenshots
- Code highlights
- Performance metrics (Lighthouse scores)
- GitHub & API documentation links

#### 4. **SEO** (`seoProject`)
- Campaign duration
- Before/After metrics (traffic, rankings, DA, backlinks)
- Strategy implemented
- Keyword targets with rank improvements
- Content & link building strategy
- Analytics report link

### Shared Components
- **Highlights**: Step-by-step project breakdown
- **Gallery**: Multiple project images
- **Moodboard**: Color palettes + design inspiration images
- **Video Showcase**: Gumlet/video embed URLs

---

## 🎯 Content Structure

```
┌─────────────────────────────────────────┐
│  Sanity Studio (Content Management)     │
│  http://localhost:3333                  │
│                                         │
│  ✓ Logo & Branding Projects            │
│  ✓ Website Design Projects              │
│  ✓ Website Development Projects         │
│  ✓ SEO Projects                         │
└─────────────────────────────────────────┘
              ↓ (API)
┌─────────────────────────────────────────┐
│  React Frontend (Your Website)          │
│  http://localhost:5173                  │
│                                         │
│  Fetches projects via:                  │
│  - getAllProjects()                     │
│  - getProjectBySlug(slug)               │
│  - getFeaturedProjects()                │
└─────────────────────────────────────────┘
```

---

## 🔄 Migration from Static Data

If you're currently using `projectsData.ts`:

### 1. Export Current Data (Optional)

Create a script to migrate existing projects to Sanity or manually recreate them in Sanity Studio.

### 2. Update Routes

Change from numeric IDs to slugs:

**Before:**
```typescript
<Route path="/work/:id" element={<ProjectDetailPage />} />
```

**After:**
```typescript
<Route path="/work/:slug" element={<ProjectDetailPage />} />
```

### 3. Update Navigation

**Before:**
```typescript
navigate(`/work/${project.id}`);
```

**After:**
```typescript
navigate(`/work/${project.slug}`);
```

### 4. Test Thoroughly

- Verify all project pages load correctly
- Check images display properly
- Ensure type-specific fields show for correct project types
- Test featured projects functionality

### 5. Remove Static Data

Once everything works, you can remove `src/pages/work/projectsData.ts`.

---

## 🎨 Customization

### Add New Fields to a Schema

Edit schemas in `studio/schemas/`:

```typescript
defineField({
  name: 'customField',
  title: 'Custom Field',
  type: 'string',
}),
```

Restart Sanity Studio to see changes.

### Add New Project Type

1. Create new schema in `studio/schemas/myNewProject.ts`
2. Import in `studio/schemas/index.ts`
3. Update TypeScript types in `src/lib/sanity/types.ts`
4. Update GROQ queries in `src/lib/sanity/queries.ts`

---

## 🚨 Common Issues

### "Project ID not set"
- Check `.env` files exist in both root and `studio/` directories
- Restart dev servers after adding env variables

### "Failed to fetch projects"
- Ensure Sanity Studio is published (click Publish in Studio)
- Check CORS settings in Sanity Manage
- Verify API token permissions (if using authenticated queries)

### Images not loading
- Ensure images are uploaded and published in Sanity Studio
- Check that GROQ query includes `.asset->url`
- Verify image URLs in browser console

### TypeScript errors
- Run `npm install` in both root and studio folders
- Check that `@sanity/client` and `@sanity/image-url` are installed

---

## 📚 Useful Commands

```bash
# Start Sanity Studio
cd studio && npm run dev

# Deploy Sanity Studio to Sanity Cloud
cd studio && npm run deploy

# Start React dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 🔐 Security Best Practices

1. **Never commit `.env` files** (already in `.gitignore`)
2. **Use environment variables** for project ID and dataset
3. **Set up CORS properly** in Sanity Manage
4. **Use read-only API tokens** for frontend (if needed)
5. **Keep Sanity CLI and packages updated**

---

## 🎉 You're Done!

You now have a fully-functioning Sanity CMS with:

✅ 4 distinct project types with custom fields  
✅ Image optimization via Sanity CDN  
✅ Real-time content updates  
✅ Type-safe TypeScript integration  
✅ Flexible GROQ queries  
✅ Production-ready setup  

### Next Steps:

1. Create more projects in Sanity Studio
2. Customize schemas to your needs
3. Deploy Sanity Studio: `cd studio && npm run deploy`
4. Update frontend to use Sanity data everywhere
5. Remove static data files once migrated

Need help? Check **README_SANITY_SETUP.md** for detailed documentation.
