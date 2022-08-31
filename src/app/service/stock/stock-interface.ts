export interface stocks {
    id: number;
    company: string;
    products: string;
    now_stock: string;
    stock: string;
    stock_option?: string;
    cost: number;
    totalCost: number;
    reason?: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}