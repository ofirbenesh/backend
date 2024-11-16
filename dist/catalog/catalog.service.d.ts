import { Model } from 'mongoose';
import { Catalog, CatalogDocument } from './schemas/catalog.schema';
export declare class CatalogService {
    private catalogModel;
    constructor(catalogModel: Model<CatalogDocument>);
    findAll(): Promise<Catalog[]>;
    create(createCatalogDto: Partial<Catalog>): Promise<Catalog>;
    update(id: string, updateCatalogDto: Partial<Catalog>): Promise<Catalog>;
    delete(id: string): Promise<void>;
}
