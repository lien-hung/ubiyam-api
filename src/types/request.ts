export interface ProductRequest {
  title: string;
  handle: string;
  price: number;
  compareAtPrice?: number;
  status: string;
  tags: string;
  image: string;
  description: string;
}

export type ProductVariantRequest = {
  label: string;
  price: number;
  compareAtPrice?: number;
  productId: number;
};

export interface CartItem {
  title: string;
  image?: string;
  price: number;
  quantity: number;
}