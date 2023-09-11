interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Admin'],
  customerRoles: ['Guest'],
  tenantRoles: ['Owner', 'Admin'],
  tenantName: 'Organization',
  applicationName: 'DataHarbor Pro',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    "Request access to an Organization's data or documents.",
    'View encrypted data or documents granted access to.',
  ],
  ownerAbilities: [
    'Manage Organizations',
    'Assign Owner to an Organization',
    'Remove an Owner from an Organization',
    'Update encryption of data and documents in Organizations',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/d4b5f12a-02ca-46a7-9fa0-c4a65ea4e915',
};
