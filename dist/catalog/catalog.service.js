"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatalogService = void 0;
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const catalog_schema_1 = require("./schemas/catalog.schema");
let CatalogService = class CatalogService {
    constructor(catalogModel) {
        this.catalogModel = catalogModel;
    }
    async findAll() {
        const catalogs = await this.catalogModel.find().exec();
        return catalogs.map((catalog) => ({
            id: catalog._id.toString(),
            name: catalog.name,
            primary: catalog.primary,
            indexedAt: catalog.indexedAt,
        }));
    }
    async create(createCatalogDto) {
        const createdCatalog = new this.catalogModel(createCatalogDto);
        return createdCatalog.save();
    }
    async update(id, updateData) {
        const { primary } = updateData;
        if (primary) {
            await this.catalogModel.updateMany({ primary: true }, { primary: false }).exec();
        }
        const result = await this.catalogModel.findByIdAndUpdate(id, updateData, { new: true }).exec();
        if (!result) {
            throw new common_1.NotFoundException(`Catalog with ID ${id} not found`);
        }
    }
    async delete(id) {
        if (!(0, mongoose_2.isValidObjectId)(id)) {
            throw new common_1.NotFoundException(`Invalid Catalog ID: ${id}`);
        }
        const result = await this.catalogModel.findByIdAndDelete(id).exec();
        if (!result) {
            throw new common_1.NotFoundException(`Catalog with ID ${id} not found`);
        }
    }
};
exports.CatalogService = CatalogService;
exports.CatalogService = CatalogService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, mongoose_1.InjectModel)(catalog_schema_1.Catalog.name)),
    __metadata("design:paramtypes", [mongoose_2.Model])
], CatalogService);
//# sourceMappingURL=catalog.service.js.map