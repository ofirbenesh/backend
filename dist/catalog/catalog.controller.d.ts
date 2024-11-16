import { CatalogService } from './catalog.service';
import { Catalog } from './schemas/catalog.schema';
export declare class CatalogController {
    private readonly catalogService;
    constructor(catalogService: CatalogService);
    findAll(): Promise<Catalog[]>;
    create(createCatalogDto: Partial<Catalog>): Promise<Catalog>;
    update(id: string, updateCatalogDto: Partial<Catalog>): Promise<Catalog>;
    deleteCatalog(id: string): Promise<void>;
}
