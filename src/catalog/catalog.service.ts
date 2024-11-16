import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { isValidObjectId, Model } from 'mongoose';
import { Catalog, CatalogDocument } from './schemas/catalog.schema';

@Injectable()
export class CatalogService {
    constructor(@InjectModel(Catalog.name) private catalogModel: Model<CatalogDocument>) {}

    // Get all catalogs
    async findAll(): Promise<Catalog[]> {
        const catalogs = await this.catalogModel.find().exec();
        return catalogs.map((catalog) => ({
            id: catalog._id.toString(), // Convert _id to id
            name: catalog.name,
            primary: catalog.primary,
            indexedAt: catalog.indexedAt,
        }));
    }
    
    

    // Create a catalog
    async create(createCatalogDto: Partial<Catalog>): Promise<Catalog> {
        const createdCatalog = new this.catalogModel(createCatalogDto);
        return createdCatalog.save();
    }

    // Update a catalog
    async update(id: string, updateCatalogDto: Partial<Catalog>): Promise<Catalog> {
        return this.catalogModel.findByIdAndUpdate(id, updateCatalogDto, { new: true }).exec();
    }

    // Delete a catalog
    async delete(id: string): Promise<void> {
        if (!isValidObjectId(id)) {
            throw new NotFoundException(`Invalid Catalog ID: ${id}`);
        }
    
        const result = await this.catalogModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new NotFoundException(`Catalog with ID ${id} not found`);
        }
    }
    
}