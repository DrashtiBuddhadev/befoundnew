// GROQ queries for fetching projects from Sanity

export const ALL_PROJECTS_QUERY = `
  *[
    _type in ["brandingProject", "websiteDesignProject", "websiteDevelopmentProject", "seoProject"]
  ] | order(publishedAt desc) {
    _id,
    _type,
    title,
    "slug": slug.current,
    category,
    tags,
    year,
    description,
    "heroImage": heroImage.asset->url,
    featured
  }
`;

export const PROJECT_BY_SLUG_QUERY = `
  *[
    _type in ["brandingProject", "websiteDesignProject", "websiteDevelopmentProject", "seoProject"] 
    && slug.current == $slug
  ][0] {
    _id,
    _type,
    title,
    "slug": slug.current,
    category,
    tags,
    year,
    description,
    overview,
    client,
    country,
    industry,
    tools,
    functionality,
    services,
    
    "heroImage": heroImage.asset->url,
    "gallery": gallery[].asset->url,
    
    highlights[] {
      step,
      title,
      content,
      "image": image.asset->url
    },
    
    moodboard {
      palette[] {
        color,
        label
      },
      images[] {
        "image": image.asset->url,
        caption
      }
    },
    
    // Branding specific
    brandStory,
    logoConceptualization,
    colorPalette[] {
      color,
      label
    },
    typography {
      primaryFont {
        name,
        weights
      },
      secondaryFont {
        name,
        weights
      },
      scale[] {
        name,
        size,
        weight,
        sample
      }
    },
    brandApplications[] {
      title,
      description,
      "image": image.asset->url
    },
    
    // Website Design specific
    wireframes[] {
      title,
      description,
      "image": image.asset->url,
      type,
      learnings
    },
    designProgression[] {
      stage,
      title,
      description,
      learnings,
      "image": image.asset->url
    },
    designPrinciples,
    figmaPrototype,
    userPersonas[] {
      name,
      role,
      goals,
      painPoints,
      "image": image.asset->url
    },
    userFlows[] {
      title,
      description,
      "flowImage": flowImage.asset->url
    },
    
    // Website Development specific
    techStack {
      frontend,
      backend,
      database,
      infrastructure,
      other
    },
    features[] {
      title,
      description,
      icon,
      "image": image.asset->url
    },
    codeHighlights[] {
      title,
      description,
      code,
      language
    },
    performanceMetrics {
      lighthouse {
        performance,
        accessibility,
        bestPractices,
        seo
      },
      loadTime,
      otherMetrics
    },
    githubUrl,
    apiDocumentation,
    
    // SEO specific
    campaignDuration,
    initialMetrics {
      organicTraffic,
      keywordRankings,
      domainAuthority,
      backlinks,
      conversionRate
    },
    finalMetrics {
      organicTraffic,
      keywordRankings,
      domainAuthority,
      backlinks,
      conversionRate
    },
    strategyImplemented[] {
      title,
      description,
      results
    },
    keywordTargets[] {
      keyword,
      initialRank,
      finalRank,
      searchVolume
    },
    contentStrategy,
    technicalSEO,
    linkBuildingStrategy,
    analyticsReport,
    
    // Common optional fields
    liveUrl,
    videoUrl,
    featured,
    publishedAt
  }
`;

export const PROJECTS_BY_CATEGORY_QUERY = `
  *[
    _type == $projectType
  ] | order(publishedAt desc) {
    _id,
    _type,
    title,
    "slug": slug.current,
    category,
    tags,
    year,
    description,
    "heroImage": heroImage.asset->url,
    featured
  }
`;

export const FEATURED_PROJECTS_QUERY = `
  *[
    _type in ["brandingProject", "websiteDesignProject", "websiteDevelopmentProject", "seoProject"]
    && featured == true
  ] | order(publishedAt desc) [0...6] {
    _id,
    _type,
    title,
    "slug": slug.current,
    category,
    tags,
    year,
    description,
    "heroImage": heroImage.asset->url
  }
`;
