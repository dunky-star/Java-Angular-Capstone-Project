import { Drug } from './drug';

export class CartItem {

    id: string;
    name: string;
    imageUrl: string;
    unitPrice: number;

    quantity: number;

    constructor(drug: Drug) {
        this.id = drug.id!;
        this.name = drug.name!;
        this.imageUrl = drug.imageUrl!;
        this.unitPrice = drug.unitPrice!;

        this.quantity = 1;
    }
}
