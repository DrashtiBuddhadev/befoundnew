# 📊 Project Type Comparison Guide

Quick reference to understand which fields are available in each project type.

---

## 🎯 Common Fields (All Project Types)

These fields are available in **ALL** project types:

| Field | Type | Description |
|-------|------|-------------|
| **Title** | Text | Project name |
| **Slug** | Slug | URL-friendly identifier (auto-generated) |
| **Category** | Text | Auto-set based on project type |
| **Tags** | Array | Keywords/categories |
| **Year** | Text | Project year |
| **Hero Image** | Image | Main project image |
| **Gallery** | Image Array | Additional project images |
| **Description** | Text | Short description (for cards) |
| **Overview** | Text | Longer description (for detail page) |
| **Client** | Text | Client/brand name |
| **Country** | Text | Client country |
| **Industry** | Text | Industry/vertical |
| **Tools** | Text | Tools/software used |
| **Services** | Array | Services delivered |
| **Highlights** | Object Array | Key project highlights with images |
| **Moodboard** | Object | Color palette + inspiration images |
| **Live URL** | URL | Link to live project |
| **Video URL** | URL | Project showcase video |
| **Featured** | Boolean | Feature on homepage? |
| **Published At** | DateTime | Publication date |

---

## 🎨 Logo & Branding Projects

**Category:** `Brand Identity`

### Unique Fields:

| Field | Type | Description |
|-------|------|-------------|
| **Brand Story** | Text | Narrative behind the brand |
| **Logo Conceptualization** | Text | Logo design thinking/process |
| **Color Palette** | Object Array | Brand colors with hex codes + labels |
| **Typography** | Object | Font system (primary/secondary + scale) |
| **Brand Applications** | Object Array | Real-world applications (packaging, signage) with images |

### Best For:
- Brand identity projects
- Logo design
- Visual identity systems
- Rebranding projects
- Style guide creation

### Example Projects:
- Soulful Swaad (cloud kitchen branding)
- Kaizen Dezain (Japanese-inspired identity)

### Content Tips:
- Focus on the "why" behind design decisions
- Show color psychology reasoning
- Include before/after if rebranding
- Show applications in real contexts

---

## 🖼️ Website Design Projects

**Category:** `Website Design`

### Unique Fields:

| Field | Type | Description |
|-------|------|-------------|
| **Wireframes** | Object Array | Design evolution (low-fi → high-fi → final) with learnings |
| **Design Progression** | Object Array | Process timeline (research → wireframe → prototype → final) |
| **Typography** | Object | Font system used in design |
| **Design Principles** | Array | Core principles guiding the design |
| **User Personas** | Object Array | Target user definitions with images |
| **User Flows** | Object Array | User journey diagrams |
| **Figma Prototype** | URL | Link to interactive prototype |
| **Functionality** | Text | Feature description |

### Best For:
- UI/UX design case studies
- Wireframing process
- Design system showcases
- Prototyping work
- User research projects

### Example Projects:
- PeopleVerse (HR platform design)
- NW9 Studio (design system)

### Content Tips:
- Show your design thinking process
- Include user research insights
- Display wireframe evolution
- Link to interactive prototypes
- Explain design decisions

---

## 💻 Website Development Projects

**Category:** `Website Development`

### Unique Fields:

| Field | Type | Description |
|-------|------|-------------|
| **Tech Stack** | Object | Detailed breakdown (frontend, backend, database, infrastructure, other) |
| **Features** | Object Array | Key features with descriptions, icons, and screenshots |
| **Code Highlights** | Object Array | Notable code snippets with language and explanation |
| **Performance Metrics** | Object | Lighthouse scores (performance, accessibility, best practices, SEO) + load time |
| **Functionality** | Text | Technical functionality description |
| **GitHub URL** | URL | Repository link (if public) |
| **API Documentation** | URL | API docs link |

### Best For:
- Full-stack development projects
- Custom web applications
- Technical showcases
- API development
- Performance optimization projects

### Example Projects:
- Blue Escape Holidays (travel booking platform)
- LumnLab (React.js tech platform)
- Muse & Masterpiece (e-commerce site)

### Content Tips:
- Highlight technical challenges solved
- Show performance improvements
- Include architecture diagrams
- Share interesting code solutions
- Display before/after metrics

---

## 📈 SEO Projects

**Category:** `SEO & Digital Marketing`

### Unique Fields:

| Field | Type | Description |
|-------|------|-------------|
| **Campaign Duration** | Text | How long the campaign ran |
| **Initial Metrics** | Object | Before metrics (traffic, rankings, DA, backlinks, conversion rate) |
| **Final Metrics** | Object | After metrics (same fields) |
| **Strategy Implemented** | Object Array | SEO strategies with descriptions and results |
| **Keyword Targets** | Object Array | Keywords with initial/final rank and search volume |
| **Content Strategy** | Text | Content approach taken |
| **Technical SEO** | Array | Technical improvements made |
| **Link Building Strategy** | Text | Link acquisition approach |
| **Analytics Report** | URL | Link to detailed report |

### Best For:
- SEO campaigns
- Digital marketing results
- Organic growth case studies
- Local SEO projects
- Content marketing showcases

### Example Projects:
- Weston Family Dental (healthcare SEO)
- Local business growth campaigns

### Content Tips:
- Show clear before/after data
- Highlight percentage improvements
- Explain strategy decisions
- Include keyword wins
- Show traffic/conversion growth charts

---

## 🔄 Quick Decision Matrix

**Choose Logo & Branding if:**
- Focus is on visual identity
- Need to showcase color/typography
- Want to display brand applications
- Emphasis on logo/mark design

**Choose Website Design if:**
- Focus is on UI/UX process
- Need to show wireframe evolution
- Want to display user research
- Emphasis on design thinking

**Choose Website Development if:**
- Focus is on technical implementation
- Need to showcase tech stack
- Want to display code/architecture
- Emphasis on performance/features

**Choose SEO if:**
- Focus is on search rankings
- Need to show metric improvements
- Want to display keyword wins
- Emphasis on organic growth

---

## 📊 Field Comparison Table

| Feature | Branding | Design | Development | SEO |
|---------|:--------:|:------:|:-----------:|:---:|
| **Brand Story** | ✅ | ❌ | ❌ | ❌ |
| **Color Palette** | ✅ | ❌ | ❌ | ❌ |
| **Brand Applications** | ✅ | ❌ | ❌ | ❌ |
| **Wireframes** | ❌ | ✅ | ❌ | ❌ |
| **User Personas** | ❌ | ✅ | ❌ | ❌ |
| **Design Progression** | ❌ | ✅ | ❌ | ❌ |
| **Tech Stack** | ❌ | ❌ | ✅ | ❌ |
| **Code Highlights** | ❌ | ❌ | ✅ | ❌ |
| **Performance Metrics** | ❌ | ❌ | ✅ | ❌ |
| **SEO Metrics** | ❌ | ❌ | ❌ | ✅ |
| **Keyword Targets** | ❌ | ❌ | ❌ | ✅ |
| **Link Building** | ❌ | ❌ | ❌ | ✅ |
| **Typography** | ✅ | ✅ | ❌ | ❌ |
| **Moodboard** | ✅ | ✅ | ✅ | ❌ |
| **Highlights** | ✅ | ✅ | ✅ | ✅ |
| **Video Showcase** | ✅ | ✅ | ✅ | ❌ |

---

## 💡 Pro Tips

### Mix & Match Projects
- One website can have multiple project entries
- Example: "Company X" could have:
  - Branding project (logo design)
  - Design project (website wireframes)
  - Development project (website build)
  - SEO project (ranking improvements)

### Choose the Right Type
Ask yourself: **What's the primary focus of this case study?**
- If it's about the **visual identity** → Branding
- If it's about the **UX/design process** → Design
- If it's about the **technical implementation** → Development
- If it's about **search performance** → SEO

### When in Doubt
If a project spans multiple types:
1. Create it under the **primary focus**
2. Mention other aspects in the description/highlights
3. Or create separate entries for each discipline

---

## 📝 Content Checklist

### Branding Projects ✓
- [ ] Upload high-quality logo images
- [ ] Define color palette with hex codes
- [ ] Add typography system
- [ ] Show brand applications
- [ ] Tell the brand story
- [ ] Include moodboard inspiration

### Design Projects ✓
- [ ] Show wireframe progression
- [ ] Document design decisions
- [ ] Include user personas
- [ ] Add user flow diagrams
- [ ] Link Figma prototype
- [ ] List design principles

### Development Projects ✓
- [ ] List complete tech stack
- [ ] Highlight key features
- [ ] Include code snippets
- [ ] Add Lighthouse scores
- [ ] Link GitHub repo (if public)
- [ ] Document API (if applicable)

### SEO Projects ✓
- [ ] Add before/after metrics
- [ ] List target keywords with rankings
- [ ] Document strategy implemented
- [ ] Show traffic/conversion graphs
- [ ] Include technical improvements
- [ ] Link analytics report

---

## 🎯 Example Scenarios

### Scenario 1: Full-Service Client Project

**Client:** Acme Corp  
**Scope:** Logo, website design, development, and SEO

**Solution:** Create 4 separate projects:
1. "Acme Corp Brand Identity" (Branding)
2. "Acme Corp Website Design" (Design)
3. "Acme Corp Website Development" (Development)
4. "Acme Corp SEO Campaign" (SEO)

Each showcases a different aspect of the project.

---

### Scenario 2: Pure Design Work

**Client:** Startup XYZ  
**Scope:** UI/UX design (no development)

**Solution:** Create 1 project:
- "Startup XYZ Platform Design" (Design)
- Include wireframes, prototypes, user research
- Note in description that development was done by client's team

---

### Scenario 3: Technical Migration

**Client:** Tech Company  
**Scope:** Rebuilding legacy system

**Solution:** Create 1 project:
- "Tech Company Platform Rebuild" (Development)
- Emphasize performance improvements
- Show tech stack comparison
- Include migration challenges solved

---

## 🚀 Getting Started

1. **Review your existing projects**
2. **Categorize each** by primary focus
3. **Start with Branding/Design** projects (usually more visual)
4. **Move to Development/SEO** projects
5. **Test each type** in Sanity Studio

Ready to add your first project? Head to:
- **Sanity Studio:** http://localhost:3333
- **Quick Start Guide:** `SANITY_QUICKSTART.md`
- **Action Plan:** `SANITY_ACTION_PLAN.md`

Happy content creating! 🎉
