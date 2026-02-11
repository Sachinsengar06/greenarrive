export interface Partner {
  id: string;
  name: string;
  logo?: string;
  description?: string;
  category?: "corporate" | "residential" | "institutional" | "hospitality";
}
