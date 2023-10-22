export interface Billboard {
  id: string;
  label: string;
  imageUrl: string;
}

export interface Category {
  id: string;
  name: string;
  billboard: string;
}

export interface Product{
  id:string;
  name:string;
  category:Category;
  price:string;
  isFeatured:boolean;
  size:string;
  color:Color[];
  images:Image[];
}

export interface Image {
  id: string;
  url: string;
}

export interface Color {
  id: string;
  name: string;
  value:string;
}
