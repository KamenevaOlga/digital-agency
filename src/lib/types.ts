export type Credentials = {
  fullname?: string;
  email?: string;
  yourmessage?: string;
};

export type FormState = {
  errors: Credentials;
  values: Credentials;
  message?: string;
  success?: boolean;
};

export type ElementFormItems = {
  id: number;
  title: string;
  completed: boolean;
};
