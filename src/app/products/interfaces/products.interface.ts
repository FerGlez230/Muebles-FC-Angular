import { LinksObjectPaginator, PaginatorObject } from "../../interfaces/Paginator.interface";
export interface ProductBaseItem {
    name: string;
    price: number;
    category: string;
}
export interface ProductItem extends ProductBaseItem {
    id: string;
    shortTermPrice: number;
    longTermPrice: number;
}
export interface ProductsResponse {
    items: ProductItem[],
    links: LinksObjectPaginator,
    meta: PaginatorObject
}