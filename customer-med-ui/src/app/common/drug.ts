export class Drug {
  constructor(
                public id?: string,
                public sku="",
                public name="",
                public description="",
                public unitPrice=0,
                public imageUrl="",
                public active?: boolean,
                public unitsInStock=0,
                public dateCreated?: Date,
                public lastUpdated?: Date
        ) {

  }
}
