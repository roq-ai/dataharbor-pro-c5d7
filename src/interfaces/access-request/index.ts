import { UserInterface } from 'interfaces/user';
import { OrganizationInterface } from 'interfaces/organization';
import { GetQueryInterface } from 'interfaces';

export interface AccessRequestInterface {
  id?: string;
  user_id: string;
  organization_id: string;
  status: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  organization?: OrganizationInterface;
  _count?: {};
}

export interface AccessRequestGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  organization_id?: string;
  status?: string;
}
