import { AccessRequestInterface } from 'interfaces/access-request';
import { DataInterface } from 'interfaces/data';
import { DocumentInterface } from 'interfaces/document';
import { IntegrationInterface } from 'interfaces/integration';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface OrganizationInterface {
  id?: string;
  description?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  access_request?: AccessRequestInterface[];
  data?: DataInterface[];
  document?: DocumentInterface[];
  integration?: IntegrationInterface[];
  user?: UserInterface;
  _count?: {
    access_request?: number;
    data?: number;
    document?: number;
    integration?: number;
  };
}

export interface OrganizationGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
