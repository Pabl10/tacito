// Utility function to handle base paths for different environments
export function getBasePath(): string {
  // In development, use empty string
  if (import.meta.env.DEV) {
    return '';
  }
  // In production (GitHub Pages), use /tacito
  return '/tacito';
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