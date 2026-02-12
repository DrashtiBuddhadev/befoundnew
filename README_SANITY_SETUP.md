# Sanity CMS Setup Guide

This project uses Sanity CMS for managing project content with different schemas for Logo & Branding, Website Design, Website Development, and SEO projects.

## 🚀 Quick Start

### 1. Install Sanity CLI Globally

```bash
npm install -g @sanity/cli
```

### 2. Login to Sanity

```bash
sanity login
```

### 3. Initialize Sanity Project

```bash
cd studio
npm install
```

### 4. Create a New Sanity Project

If you don't have a Sanity project yet:

```bash
sanity init
```

Follow the prompts to create a new project. Note down your **Project ID**.

Alternatively, if you already have a project, you can link it:

```bash
sanity manage
```

### 5. Configure Environment Variables

Create a `.env` file in the **root directory** and add:

```env
VITE_SANITY_PROJECT_ID=your_project_id_here
VITE_SANITY_DATASET=production
```

Create a `.env` file in the **studio directory** (studio/.env):

```env
SANITY_STUDIO_PROJECT_ID=your_project_id_here
SANITY_STUDIO_DATASET=production
```

Replace `your_project_id_here` with your actual Sanity project ID.

### 6. Start Sanity Studio

```bash
cd studio
npm run dev
```

This will start the Sanity Studio at `http://localhost:3333`.

### 7. Deploy Sanity Studio (Optional)

To deploy your studio to Sanity's hosted environment:

```bash
cd studio
npm run deploy
```

You'll get a URL like `https://yourproject.sanity.studio`.

---

## 📋 Project Schemas

### 1. **Logo & Branding Projects** (`brandingProject`)

Fields include:
- Basic info (title, slug, tags, year)
- Hero image & gallery
- Client & industry info
- **Branding-specific**: Brand story, logo conceptualization, color palette, typography, brand applications
- Moodboard with palette swatches and images
- Key highlights
- Optional video showcase

**Use Case**: Brand identity projects, logo design, visual identity systems.

---

### 2. **Website Design Projects** (`websiteDesignProject`)

Fields include:
- Basic info (title, slug, tags, year)
- Hero image & gallery
- Client & industry info
- **Design-specific**: Wireframe evolution, design progression timeline, typography system, design principles
- User personas & user flows
- Figma prototype link
- Moodboard with palette swatches and images
- Key highlights

**Use Case**: UI/UX design case studies, wireframing, prototyping, design systems.

---

### 3. **Website Development Projects** (`websiteDevelopmentProject`)

Fields include:
- Basic info (title, slug, tags, year)
- Hero image & gallery
- Client & industry info
- **Development-specific**: Detailed tech stack (frontend, backend, database, infrastructure), key features, code highlights, performance metrics (Lighthouse scores)
- GitHub repository & API documentation links
- Moodboard with palette swatches and images
- Key highlights
- Optional video showcase

**Use Case**: Full-stack development projects, custom web applications, technical showcases.

---

### 4. **SEO Projects** (`seoProject`)

Fields include:
- Basic info (title, slug, tags, year)
- Hero image & gallery
- Client & industry info
- **SEO-specific**: Campaign duration, initial & final metrics (organic traffic, keyword rankings, domain authority, backlinks, conversion rate)
- Strategy implemented, keyword targets, content strategy, technical SEO improvements, link building strategy
- Analytics report link
- Key highlights

**Use Case**: SEO campaigns, digital marketing results, organic growth case studies.

---

## 🎨 Shared Objects

These are reusable components across all project types:

- **Highlight**: Step-by-step project highlights with images
- **Palette Swatch**: Color definitions with hex codes and labels
- **Moodboard Image**: Images for moodboard grids
- **Wireframe Step**: Wireframe progression (low-fi → high-fi → final)
- **Design Progression**: Design stages (research → wireframe → prototype → final)
- **Typography System**: Font definitions and typography scales

---

## 🔄 Frontend Integration

### Fetch Projects in React

```typescript
import { getAllProjects, getProjectBySlug } from '@/lib/sanity/api';

// Fetch all projects
const projects = await getAllProjects();

// Fetch a specific project by slug
const project = await getProjectBySlug('soulful-swaad');
```

### Update `ProjectDetailPage.tsx`

Replace the static data import with Sanity fetching:

```typescript
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProjectBySlug } from '@/lib/sanity/api';
import type { SanityProject } from '@/lib/sanity/types';

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [project, setProject] = useState<SanityProject | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProject() {
      if (!slug) return;
      const data = await getProjectBySlug(slug);
      setProject(data);
      setLoading(false);
    }
    fetchProject();
  }, [slug]);

  if (loading) return <div>Loading...</div>;
  if (!project) return <div>Project not found</div>;

  return (
    <div>
      {/* Render project details */}
      <h1>{project.title}</h1>
      <img src={project.heroImage} alt={project.title} />
      {/* ... rest of your component */}
    </div>
  );
}
```

---

## 🛠️ Migration from Static Data

If you're migrating from `projectsData.ts`:

1. **Create projects in Sanity Studio** manually or via script
2. **Update routing** from `/work/:id` to `/work/:slug`
3. **Update `WorkPage.tsx`** to fetch from Sanity instead of static data
4. **Test thoroughly** before removing `projectsData.ts`

---

## 📦 Content Workflow

1. **Create content in Sanity Studio** (http://localhost:3333)
2. **Publish projects** by filling in all required fields
3. **Frontend automatically fetches** latest content from Sanity
4. **Images are served** via Sanity's CDN with automatic optimization

---

## 🔐 CORS & API Permissions

If you encounter CORS issues:

1. Go to **Sanity Manage** (https://www.sanity.io/manage)
2. Select your project
3. Go to **Settings → API**
4. Add your frontend domain to **CORS origins**:
   - `http://localhost:5173` (for local dev)
   - Your production domain (e.g., `https://befound.com`)

---

## 📝 Tips

- **Use slugs instead of numeric IDs** for better SEO and cleaner URLs
- **Set `featured: true`** for projects you want to highlight on the homepage
- **Optimize images** before uploading (Sanity will serve them via CDN, but smaller source images load faster)
- **Use the Vision plugin** in Sanity Studio to test GROQ queries
- **Version control**: Sanity Studio schemas are in Git, but content is in Sanity's cloud

---

## 🚨 Troubleshooting

### "Project ID not found"
- Check that `.env` file exists and has the correct `VITE_SANITY_PROJECT_ID`
- Restart your dev server after adding environment variables

### "Unauthorized"
- Run `sanity login` to authenticate
- Check API permissions in Sanity Manage

### Images not loading
- Ensure images are published in Sanity Studio
- Check that the GROQ query includes `.asset->url` for image fields
- Verify CORS settings in Sanity Manage

---

## 📚 Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
- [Sanity React Hooks](https://www.sanity.io/docs/react-hooks)
- [Image URLs](https://www.sanity.io/docs/image-url)

---

## 🎯 Next Steps

1. Install dependencies and start Sanity Studio
2. Create your first project in each category
3. Update frontend components to fetch from Sanity
4. Test thoroughly
5. Deploy Sanity Studio
6. Migrate existing projects (if any)
7. Remove `projectsData.ts` once migration is complete

Happy content managing! 🎉
