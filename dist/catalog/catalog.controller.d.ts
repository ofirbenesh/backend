import { CatalogService } from './catalog.service';
import { Catalog } from './schemas/catalog.schema';
export declare class CatalogController {
    private readonly catalogService;
    constructor(catalogService: CatalogService);
    findAll(): Promise<Catalog[]>;
    create(createCatalogDto: Partial<Catalog>): Promise<Catalog>;
    updateCatalog(id: string, updateData: any): Promise<void>;
    deleteCatalog(id: string): Promise<void>;
}
