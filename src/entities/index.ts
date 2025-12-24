/**
 * Auto-generated entity types
 * Contains all CMS collection interfaces in a single file 
 */

/**
 * Collection ID: awardsandrecognition
 * Interface for AwardsandRecognition
 */
export interface AwardsandRecognition {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  awardName?: string;
  /** @wixFieldType text */
  awardingBody?: string;
  /** @wixFieldType number */
  yearReceived?: number;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType image */
  awardImage?: string;
  /** @wixFieldType url */
  awardUrl?: string;
}


/**
 * Collection ID: portfolioprojects
 * Interface for PortfolioProjects
 */
export interface PortfolioProjects {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  projectName?: string;
  /** @wixFieldType image */
  thumbnailImage?: string;
  /** @wixFieldType text */
  projectDescription?: string;
  /** @wixFieldType text */
  projectCategory?: string;
  /** @wixFieldType text */
  clientName?: string;
  /** @wixFieldType url */
  mainMediaUrl?: string;
  /** @wixFieldType text */
  keyResults?: string;
}


/**
 * Collection ID: pricingplans
 * Interface for PricingPlans
 */
export interface PricingPlans {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  planName?: string;
  /** @wixFieldType text */
  targetAudience?: string;
  /** @wixFieldType text */
  whatsIncluded?: string;
  /** @wixFieldType text */
  platformFocus?: string;
  /** @wixFieldType text */
  deliverables?: string;
  /** @wixFieldType text */
  callToActionText?: string;
  /** @wixFieldType url */
  callToActionUrl?: string;
  /** @wixFieldType number */
  price?: number;
}


/**
 * Collection ID: services
 * Interface for Services
 */
export interface Services {
  _id: string;
  _createdDate?: Date;
  _updatedDate?: Date;
  /** @wixFieldType text */
  serviceName?: string;
  /** @wixFieldType text */
  tagline?: string;
  /** @wixFieldType text */
  description?: string;
  /** @wixFieldType image */
  previewImage?: string;
  /** @wixFieldType text */
  processStrategyDescription?: string;
  /** @wixFieldType text */
  processProductionDescription?: string;
  /** @wixFieldType text */
  processOptimizationDescription?: string;
  /** @wixFieldType text */
  processGrowthDescription?: string;
  /** @wixFieldType text */
  ctaButtonText?: string;
  /** @wixFieldType url */
  ctaButtonUrl?: string;
}
