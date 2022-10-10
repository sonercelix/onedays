export interface IUser {
  name: string;
  surname: string;
  age: number;
  status: boolean;
  email?: string;
  address: IAddress;
}

export interface IAddress {
  title: string;
  code: number;
  no: number;
}
