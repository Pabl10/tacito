// Utility function to handle base paths for different environments
export function getBasePath(): string {
  // No base path needed for Vercel with custom domain
  return '';
}

// Helper function to create URLs with correct base path
export function createUrl(path: string): string {
  const basePath = getBasePath();
  return `${basePath}${path}`;
}

// Helper function for navigation links
export function navLink(path: string): string {
  return createUrl(path);
}

// Helper function for asset URLs
export function assetUrl(path: string): string {
  return createUrl(`/assets${path}`);
}

// Helper function for project image URLs
export function projectImageUrl(path: string): string {
  // Remove /tacito prefix if present (legacy paths)
  return path.replace('/tacito', '');
} 