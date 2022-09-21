export interface IOrder {
    orderNumber: number;
    orderName: string;
    product: string;
    stock: string;
    shippingList?: [];
    companyId?: number;
    notice?: string;
    orderStatus: string;
    amount: number;
    phoneNumber: number;
    purchaseMethod: string;
    purchase: number;
    shippingStatus: string;
    shipping: string;
    shipcost: number;
    shipAddress: string;
    totalCost?: number;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}