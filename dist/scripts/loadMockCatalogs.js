"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = loadMockCatalogs;
const mongoose_1 = require("mongoose");
const mongoose_2 = require("mongoose");
const catalog_schema_1 = require("../catalog/schemas/catalog.schema");
const mockCatalogs = [
    { name: 'interior design', primary: true },
    { name: 'Clothing', primary: false },
    { name: 'Jewelry', primary: false },
];
async function loadMockCatalogs() {
    try {
        await (0, mongoose_1.connect)(process.env.CONNECTION_STRING || 'mongodb://localhost:27017/catalog-dashboard');
        const CatalogModel = (0, mongoose_2.model)('Catalog', catalog_schema_1.CatalogSchema);
        const existingCatalogs = await CatalogModel.find();
        if (existingCatalogs.length > 0) {
            console.log('Catalogs already exist in the database.');
            return;
        }
        await CatalogModel.insertMany(mockCatalogs);
        console.log('Mock catalogs loaded successfully.');
    }
    catch (error) {
        console.error('Error loading mock catalogs:', error);
    }
}
loadMockCatalogs();
//# sourceMappingURL=loadMockCatalogs.js.map