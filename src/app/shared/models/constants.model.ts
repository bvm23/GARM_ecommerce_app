export interface ISubmenu {
  name: string;
  options?: string[];
}

export type IMenu = 'shop' | 'collections' | 'more';

export type IMenuData = Record<IMenu, ISubmenu[]>;
