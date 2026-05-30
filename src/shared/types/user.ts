import { IBaseEntity } from './baseEntity';

export interface IUser extends IBaseEntity {
  name: string;
  email: string;
}
