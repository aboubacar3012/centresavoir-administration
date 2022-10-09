import { Class } from './classe';

enum roles {
  teacher,
  comptable,
  director,
  teacherAssistant,
}

export interface Employee {
  id: string;
  registrationId: string;
  firstname: string;
  lastname: string;
  dateOfBirth: string;
  address: string;
  role: roles;
  email?: string;
  telephone?: string;
  class?: Class[];
}
