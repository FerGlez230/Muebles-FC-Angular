import { LinksObjectPaginator, PaginatorObject } from "../../interfaces/Paginator.interface";

export interface ProductItem {
    id: string;
    name: string;
    price: number;
    category: string;
    shortTermPrice: number;
    longTermPrice: number;
}
export interface ProductsResponse {
    items: ProductItem[],
    links: LinksObjectPaginator,
    meta: PaginatorObject
}