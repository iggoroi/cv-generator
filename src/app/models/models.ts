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
  position: string;
  agency: string;
  address: string;
}

export interface Education {
  school: string;
  endDate: Date;
  certificate: string;
}

export interface License {
  field: string;
  name: string;
  number: number;
}

export interface Skills {
  field: string;
  name: string;
  power: 1 | 2 | 3 | 4 | 5;
}

export interface Project {
  name: string;
  startDate: Date;
  endDate: Date;
  agency: string;
}

export interface Languages {
  language: string;
  level: "A1" | "A2" | "B1" | "B2" | "C1" | "C2" | "Madrelingua";
}
