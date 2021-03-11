import { LanguageVariation } from './LanguageVariation';
import { Unit } from './Unit';

export interface Category {
  id: string;
  image: string;
  title: LanguageVariation;
  description: LanguageVariation;
  unitToPrice?: Unit;
  unitToDiameter?: Unit;
  unitToLength?: Unit;
  unitToWidth?: Unit;
  unitToHeight?: Unit;
  unitToHoleSizeX?: Unit;
  unitToHoleSizeY?: Unit;
}
