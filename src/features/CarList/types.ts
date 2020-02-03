import { Car } from 'features/CarInfo/types';

export type PageQuery = string;

export type Cars = Car[];

export interface CarListResponse {
  cars: Cars;
  totalPageCount: number;
  totalCarsCount: number;
}
