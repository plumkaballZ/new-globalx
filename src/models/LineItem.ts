import { Product } from "./Product";

export class LineItem {
  public id: number;
  public quantity: number;
  public price: number;
  public single_display_amount: number;
  public total: number;
  public _total: number;
  public display_amount: number;
  public variant_id: number;
  // public variant: Variant;
  public prod: Product;

  public size: string;
  public color: string;

  public deleted: boolean;
  public newLine: boolean;
  public updated: boolean;

  public smallImage: string;

  constructor() {
  }
}