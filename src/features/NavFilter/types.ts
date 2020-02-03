export type ColorQuery = string;
export type ManufacturerQuery = string;

export type Color = string;
export type Colors = Color[];

export interface ColorsResponse {
  colors: Colors;
}

export interface Manufacturer {
  name: string;
  models: {
    name: string;
  }[];
}
export type Manufacturers = Manufacturer[];

export interface ManufacturersResponse {
  manufacturers: Manufacturers;
}
