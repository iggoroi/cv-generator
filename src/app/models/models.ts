export interface Information {
  name: string;
  surname: string;
  cellphone: string;
  email: string;
  birthdate: Date;
  birthPlace: string;
  residence: string;
}

export interface Experience {
  startDate: Date;
  endDate?: Date;
  name: string;
  agency: string;
  address: string;
}

export interface Education {
  school: string;
  startDate: Date;
  endDate: Date;
  address: string;
}

export interface License {
  name: string;
  number: number;
}

export interface Skills {
  name: string;
  power: 1 | 2 | 3 | 4 | 5;
}

export interface Project {
  name: string;
  startDate: Date;
  endDate?: Date;
  agency: string;
}

