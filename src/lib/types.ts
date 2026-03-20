export type Credentials = {
  fullname?: string;
  email?: string;
  yourmessage?: string;
  budget?: string;
};

export type FormValues = {
  fullname?: string;
  email?: string;
  yourmessage?: string;
  budgetMin?: number;
  budgetMax?: number;
};

export type FormState = {
  errors: Credentials;
  values: FormValues;
  message?: string;
  success?: boolean;
};

export type ElementFormItems = {
  id: number;
  title: string;
  completed: boolean;
};
