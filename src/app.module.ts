import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CatalogService } from './catalog/catalog.service';
import { CatalogModule } from './catalog/catalog.module';

@Module({
  imports: [
      MongooseModule.forRoot('mongodb://localhost:27017/catalog-dashboard'),
      CatalogModule,
  ],
  controllers: [AppController],
  providers: [CatalogService],
})
export class AppModule {}
