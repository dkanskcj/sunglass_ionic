export interface Product {
    id: number;
    thumbnailMain: string;
    thumbnailSub: string;
    name: string;
    cost: number;
    discount: number;
    discountStartDate?: Date;
    discountEndDate?: Date;
    amount: number;
    optionName?: string;
    optionValues: string;
    optionList?: [];
    description?: string;
    modelName: string;
    brandName: string;
    isKC: boolean;
    kcInfo: string;
    origin: string;
    madeStartDate?: Date;
    validEndDate?: Date;
    isTeenager: boolean;
    isShowDetail: boolean;
    courier: string;
    refundDeliveryFee: number;
    changeDeliveryFee: number;
    address: string;
    addressDetail: string;
    tel: string;
    referenceDate: string;
    cancelReason: string;
    remark: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date
}