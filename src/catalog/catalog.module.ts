import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatalogService } from './catalog.service';
import { CatalogController } from './catalog.controller';
import { Catalog, CatalogSchema } from './schemas/catalog.schema';

@Module({
  imports: [
    // Register the Catalog schema with Mongoose
    MongooseModule.forFeature([{ name: Catalog.name, schema: CatalogSchema }]),
  ],
  controllers: [CatalogController],
  providers: [CatalogService],
  exports: [MongooseModule], // Export MongooseModule to make the CatalogModel available
})
export class CatalogModule {}
