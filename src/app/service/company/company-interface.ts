export interface Company {
    id: number;
    name: string;
    tel: string;
    owner: string;
    companyNumber: string;
    address: string;
    createdAt: Date;
    updatedAt: Date;
    deletedAt: Date | null;
}