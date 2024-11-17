import { Controller, Get, Post, Put, Delete, Body, Param, BadRequestException } from '@nestjs/common';
import { CatalogService } from './catalog.service';
import { Catalog } from './schemas/catalog.schema';

@Controller('catalogs')
export class CatalogController {
    constructor(private readonly catalogService: CatalogService) {}

    // Get all catalogs
    @Get()
    async findAll(): Promise<Catalog[]> {
        return this.catalogService.findAll();
    }

    // Create a catalog
    @Post()
    async create(@Body() createCatalogDto: Partial<Catalog>): Promise<Catalog> {
        return this.catalogService.create(createCatalogDto);
    }

    // Update a catalog
    @Put(':id')
    async updateCatalog(@Param('id') id: string, @Body() updateData: any): Promise<void> {
        await this.catalogService.update(id, updateData);
    }

    // Delete a catalog
    @Delete(':id')
    async deleteCatalog(@Param('id') id: string): Promise<void> {
        if (!id) {
            throw new BadRequestException('Catalog ID must be provided');
        }

        await this.catalogService.delete(id);
    }
}
