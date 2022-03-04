import { Stock } from "./stock";

export interface StockResponse{
   stockPriceDetailList:Array<Stock>,
   maximumPrice: number,
   minimumPrice:number,
   averagePrice:number
   
}