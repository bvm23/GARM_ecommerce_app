export interface ISubmenu {
  name: string;
  options?: string[];
  href?: string;
}

export type IMenu = 'shop' | 'collections' | 'more';

export type IMenuData = Record<IMenu, ISubmenu[]>;

export interface IProduct {
  id: number;
  name: string;
  img: string;
  price: number;
}
