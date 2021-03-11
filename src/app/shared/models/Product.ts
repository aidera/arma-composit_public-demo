import { LanguageVariation } from './LanguageVariation';
import { Unit } from './Unit';

export interface ProductRaw {
  categoryId: string;
  parameters: {
    price: number;
    unitToPrice: Unit;
    withNDS: boolean;
    diameter?: number | 'any';
    unitToDiameter?: Unit;
    width?: number | 'any';
    unitToWidth?: Unit;
    height?: number | 'any';
    unitToHeight?: Unit;
    length?: number | 'any';
    unitToLength?: Unit;
    holeSizeX?: number | 'any';
    unitToHoleSizeX?: Unit;
    holeSizeY?: number | 'any';
    unitToHoleSizeY?: Unit;
  };
  title: LanguageVariation;
  description: LanguageVariation;
  image: string;
}

export interface Product {
  id: string;
  categoryId: string;
  parameters: {
    price: number;
    unitToPrice: Unit;
    withNDS: boolean;
    diameter?: number | 'any';
    unitToDiameter?: Unit;
    width?: number | 'any';
    unitToWidth?: Unit;
    height?: number | 'any';
    unitToHeight?: Unit;
    length?: number | 'any';
    unitToLength?: Unit;
    holeSizeX?: number | 'any';
    unitToHoleSizeX?: Unit;
    holeSizeY?: number | 'any';
    unitToHoleSizeY?: Unit;
  };
  title: LanguageVariation;
  description: LanguageVariation;
  image: string;
}
