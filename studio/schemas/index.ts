import brandingProject from './brandingProject';
import websiteDesignProject from './websiteDesignProject';
import websiteDevelopmentProject from './websiteDevelopmentProject';
import seoProject from './seoProject';

// Shared schema objects
import { highlight, paletteSwatch, moodboardImage, wireframeStep, designProgression, typographySystem } from './sharedObjects';

export const schemaTypes = [
  // Project types
  brandingProject,
  websiteDesignProject,
  websiteDevelopmentProject,
  seoProject,
  
  // Shared objects
  highlight,
  paletteSwatch,
  moodboardImage,
  wireframeStep,
  designProgression,
  typographySystem,
];
