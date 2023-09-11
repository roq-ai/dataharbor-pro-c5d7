import axios from 'axios';
import queryString from 'query-string';
import { AccessRequestInterface, AccessRequestGetQueryInterface } from 'interfaces/access-request';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getAccessRequests = async (
  query?: AccessRequestGetQueryInterface,
): Promise<PaginatedInterface<AccessRequestInterface>> => {
  const response = await axios.get('/api/access-requests', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createAccessRequest = async (accessRequest: AccessRequestInterface) => {
  const response = await axios.post('/api/access-requests', accessRequest);
  return response.data;
};

export const updateAccessRequestById = async (id: string, accessRequest: AccessRequestInterface) => {
  const response = await axios.put(`/api/access-requests/${id}`, accessRequest);
  return response.data;
};

export const getAccessRequestById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/access-requests/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteAccessRequestById = async (id: string) => {
  const response = await axios.delete(`/api/access-requests/${id}`);
  return response.data;
};
