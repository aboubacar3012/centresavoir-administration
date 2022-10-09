import { Student } from './student';

export interface Parent {
  id: string;
  firstname: string;
  lastname: string;
  dateOfBirth: string;
  address: string;
  email?: string;
  telephone?: string;
  students: Student[];
}
