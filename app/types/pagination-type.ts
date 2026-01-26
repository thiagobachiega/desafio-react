export type PaginationType<T> = {
    page: number;
    pageSize: number;
    totalItems: number;
    totalPages: number;
    results: T[];
}