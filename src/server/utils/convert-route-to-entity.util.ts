const mapping: Record<string, string> = {
  'access-requests': 'access_request',
  data: 'data',
  documents: 'document',
  integrations: 'integration',
  organizations: 'organization',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
