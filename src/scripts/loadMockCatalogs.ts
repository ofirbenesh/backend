import { connect } from 'mongoose';
import { Model } from 'mongoose';
import { model } from 'mongoose';
import { Catalog, CatalogDocument } from '../catalog/schemas/catalog.schema';
import { CatalogSchema } from '../catalog/schemas/catalog.schema';


const mockCatalogs = [
  { name: 'Interior design', primary: true },
  { name: 'Clothing', primary: false },
  { name: 'Jewelry', primary: false },
];

export default async function loadMockCatalogs() {
  try {
    // Connect to the database
    await connect(process.env.CONNECTION_STRING || 'mongodb://localhost:27017/catalog-dashboard');


    const CatalogModel: Model<CatalogDocument> = model<CatalogDocument>('Catalog', CatalogSchema);

    // Check if catalogs already exist
    const existingCatalogs = await CatalogModel.find();
    if (existingCatalogs.length > 0) {
      console.log('Catalogs already exist in the database.');
      return;
    }

    // Insert mock catalogs
    await CatalogModel.insertMany(mockCatalogs);
    console.log('Mock catalogs loaded successfully.');
  } catch (error) {
    console.error('Error loading mock catalogs:', error);
  }
}

// Run the script
loadMockCatalogs();
