import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type CatalogDocument = Catalog & Document;

@Schema()
export class Catalog {
    @Prop({ required: true })
    name: string;

    @Prop({ required: true })
    primary: boolean;

    @Prop({ default: () => new Date().toISOString() })
    indexedAt: string;
}

export const CatalogSchema = SchemaFactory.createForClass(Catalog);

// Add a virtual 'id' field to map '_id' to 'id'
CatalogSchema.virtual('id').get(function () {
    return this._id.toHexString();
});

// Ensure virtual fields are included when converting documents to JSON
CatalogSchema.set('toJSON', { virtuals: true });
CatalogSchema.set('toObject', { virtuals: true });
