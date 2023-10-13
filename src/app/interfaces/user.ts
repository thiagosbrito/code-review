export interface User {
  id: number;
  name: string;
  email: string;
  dob: string;
  address: Address
}

interface Address { // could be moved to address.ts
  street_name: string;
  complement: string;
  number: number;
  city: string;
  zip_code: string;
}
