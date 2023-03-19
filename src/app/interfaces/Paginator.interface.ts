export interface PaginatorObject {
    totalItems: number,
    itemCount: number,
    itemsPerPage: number,
    totalPages: number,
    currentPage: number,
}
export interface LinksObjectPaginator {
    first: string,
    previous: string,
    next: string,
    last: string,
}