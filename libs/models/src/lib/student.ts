import { Class } from './classe';
import { Option } from './option';
import { Parent } from './parent';

export interface Student {
  id: string;
  registrationId: string;
  firstname: string;
  lastname: string;
  dateOfBirth: string;
  address: string;
  email?: string;
  telephone?: string;
  class?: Class;
  option?: Option;
  parents?: Parent[];
}
