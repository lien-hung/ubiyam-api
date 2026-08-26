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

export interface BundleRequest {
  title: string;
  subtitle: string;
  badgeText: string;
  imageUrl: string;
  productId: number;
  buyQuantity: number;
  getQuantity: number;
}

export interface BundleGiftRequest {
  bundleId: number;
  productId: number;
  giftType: string;
  text: string;
  quantity: number;
  showPrice: boolean;
}

export interface CartItem {
  title: string;
  image?: string;
  price: number;
  quantity: number;
}