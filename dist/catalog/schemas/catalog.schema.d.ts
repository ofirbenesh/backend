import { Document } from 'mongoose';
export type CatalogDocument = Catalog & Document;
export declare class Catalog {
    name: string;
    primary: boolean;
    indexedAt: string;
}
export declare const CatalogSchema: import("mongoose").Schema<Catalog, import("mongoose").Model<Catalog, any, any, any, Document<unknown, any, Catalog> & Catalog & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, Catalog, Document<unknown, {}, import("mongoose").FlatRecord<Catalog>> & import("mongoose").FlatRecord<Catalog> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
