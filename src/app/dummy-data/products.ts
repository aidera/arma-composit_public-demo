import { Product } from '../shared/models/Product';
import { Unit } from '../shared/models/Unit';

export const PRODUCTS: Product[] = [
  {
    id: '1',
    categoryId: '1',
    title: {
      en: 'Product name 1',
      ru: 'Product name 1',
      ua: 'Product name 1',
    },
    image: 'assets/images/products/1.png',
    description: {
      en:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      ru:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      ua:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    parameters: {
      price: 20,
      unitToPrice: Unit.Meter,
      withNDS: true,
      diameter: 14,
      unitToDiameter: Unit.Millimeter,
    },
  },
  {
    id: '2',
    categoryId: '1',
    title: {
      en: 'Product name 2',
      ru: 'Product name 2',
      ua: 'Product name 2',
    },
    image: 'assets/images/products/2.jpeg',
    description: {
      en:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      ru:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      ua:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    parameters: {
      price: 30,
      unitToPrice: Unit.Meter,
      withNDS: true,
      diameter: 16,
      unitToDiameter: Unit.Millimeter,
    },
  },
  {
    id: '3',
    categoryId: '1',
    title: {
      en: 'Product name 3',
      ru: 'Product name 3',
      ua: 'Product name 3',
    },
    image: 'assets/images/products/2.jpeg',
    description: {
      en:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      ru:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      ua:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    parameters: {
      price: 30,
      unitToPrice: Unit.Meter,
      withNDS: true,
      diameter: 16,
      unitToDiameter: Unit.Millimeter,
    },
  },
  {
    id: '4',
    categoryId: '1',
    title: {
      en: 'Product name 4',
      ru: 'Product name 4',
      ua: 'Product name 4',
    },
    image: 'assets/images/products/2.jpeg',
    description: {
      en:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      ru:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      ua:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    parameters: {
      price: 30,
      unitToPrice: Unit.Meter,
      withNDS: true,
      diameter: 16,
      unitToDiameter: Unit.Millimeter,
    },
  },
  {
    id: '5',
    categoryId: '2',
    title: {
      en: 'Product name 5',
      ru: 'Product name 5',
      ua: 'Product name 5',
    },
    image: 'assets/images/products/3.jpg',
    description: {
      en:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      ru:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      ua:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    parameters: {
      price: 30,
      unitToPrice: Unit.Meter,
      withNDS: true,
      diameter: 16,
      unitToDiameter: Unit.Millimeter,
    },
  },
  {
    id: '6',
    categoryId: '2',
    title: {
      en: 'Product name 6',
      ru: 'Product name 6',
      ua: 'Product name 6',
    },
    image: 'assets/images/products/3.jpg',
    description: {
      en:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      ru:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      ua:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    parameters: {
      price: 30,
      unitToPrice: Unit.Meter,
      withNDS: true,
      diameter: 16,
      unitToDiameter: Unit.Millimeter,
    },
  },
];
