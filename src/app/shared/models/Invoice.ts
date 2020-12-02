export class Invoice {
    deliveryDate: string;
    deliveryStatus: number;
    discount: number;
    imageUrl: string;
    orderDate: string;
    orderPrice: number;
    paymentMethod: number;
    paymentStatus: boolean;
    productName: string;
    purchaseId: number;
    quantity: number;
    stockId: number;
    totalAmount: number;
    orderId: string;
    transactionId: number;
    address: Address;
}
export class Address {
    address: string;
    addressType: number;
    city: string;
    country: string;
    flatNo: string;
    id: number;
    landmark: string;
    locality: string;
    name: string;
    phonenumber: number;
    pincode: string;
    state: string;
    status: number;
}