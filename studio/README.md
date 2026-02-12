# beFound Sanity Studio

This is the content management system (CMS) for the beFound portfolio website.

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Edit `.env` and add your Sanity project ID:

```env
SANITY_STUDIO_PROJECT_ID=your_actual_project_id
SANITY_STUDIO_DATASET=production
```

### 3. Start Studio

```bash
npm run dev
```

Visit http://localhost:3333 to access Sanity Studio.

## 📁 Project Structure

```
studio/
├── schemas/                    # Content schemas
│   ├── index.ts                # Schema registry
│   ├── sharedObjects.ts        # Reusable objects
│   ├── brandingProject.ts      # Logo & Branding schema
│   ├── websiteDesignProject.ts # Website Design schema
│   ├── websiteDevelopmentProject.ts # Development schema
│   └── seoProject.ts           # SEO Project schema
├── sanity.config.ts            # Studio configuration
├── sanity.cli.ts               # CLI configuration
└── package.json                # Dependencies
```

## 📋 Content Types

### 1. Logo & Branding Projects
For brand identity, logo design, and visual identity projects.

**Key Fields:**
- Brand story and logo conceptualization
- Color palette with hex codes
- Typography system
- Brand applications (packaging, signage, etc.)

### 2. Website Design Projects
For UI/UX design case studies and prototypes.

**Key Fields:**
- Wireframe evolution (low-fi → high-fi → final)
- Design progression timeline
- User personas and flows
- Figma prototype links

### 3. Website Development Projects
For technical projects and web applications.

**Key Fields:**
- Detailed tech stack
- Key features with screenshots
- Code highlights
- Performance metrics (Lighthouse scores)

### 4. SEO Projects
For SEO campaigns and digital marketing results.

**Key Fields:**
- Before/After metrics
- Keyword targets with rankings
- Strategy implemented
- Technical SEO improvements

## 🎨 Adding New Content

1. **Open Sanity Studio** at http://localhost:3333
2. **Choose a project type** from the left sidebar
3. **Click "Create new"**
4. **Fill in the required fields:**
   - Title (required)
   - Generate slug (auto-generated from title)
   - Upload hero image
   - Add description and overview
   - Fill in client and industry info
5. **Add type-specific content:**
   - Branding: Add color palette, brand story
   - Design: Add wireframes, user personas
   - Development: Add tech stack, features
   - SEO: Add metrics, keyword targets
6. **Publish** when ready

## 🛠️ Customization

### Adding New Fields

Edit the appropriate schema file in `schemas/`:

```typescript
defineField({
  name: 'myNewField',
  title: 'My New Field',
  type: 'string', // or 'text', 'image', 'array', etc.
  description: 'Field description',
})
```

### Adding New Project Type

1. Create new schema file: `schemas/myNewType.ts`
2. Import in `schemas/index.ts`
3. Update frontend types in `src/lib/sanity/types.ts`
4. Update GROQ queries in `src/lib/sanity/queries.ts`

## 📦 Deployment

### Deploy to Sanity Cloud

```bash
npm run deploy
```

You'll get a hosted URL like: `https://yourproject.sanity.studio`

## 🔐 API & Permissions

### CORS Configuration

Add your frontend domains in Sanity Manage:
1. Go to https://www.sanity.io/manage
2. Select your project
3. Go to Settings → API → CORS Origins
4. Add:
   - `http://localhost:5173` (dev)
   - Your production domain

### API Tokens

For authenticated requests:
1. Go to Settings → API → Tokens
2. Create a new token with appropriate permissions
3. Add to your frontend `.env` file

## 📚 Resources

- [Sanity Documentation](https://www.sanity.io/docs)
- [Schema Reference](https://www.sanity.io/docs/schema-types)
- [GROQ Query Language](https://www.sanity.io/docs/groq)
- [Sanity Studio Docs](https://www.sanity.io/docs/sanity-studio)

## 🆘 Troubleshooting

### Studio won't start
```bash
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Can't publish content
- Check that all required fields are filled
- Ensure you're logged in: `sanity login`

### Schema changes not appearing
- Restart the studio: `Ctrl+C` then `npm run dev`
- Clear browser cache

## 📞 Support

- Check `../SANITY_QUICKSTART.md` for setup guide
- See `../README_SANITY_SETUP.md` for detailed docs
- Sanity Community: https://www.sanity.io/community
