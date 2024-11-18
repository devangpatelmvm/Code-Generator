"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackagesListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PackagesWhereInput_1 = require("../inputs/PackagesWhereInput");
let PackagesListRelationFilter = class PackagesListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PackagesWhereInput_1.PackagesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PackagesWhereInput_1.PackagesWhereInput)
], PackagesListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PackagesWhereInput_1.PackagesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PackagesWhereInput_1.PackagesWhereInput)
], PackagesListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PackagesWhereInput_1.PackagesWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", PackagesWhereInput_1.PackagesWhereInput)
], PackagesListRelationFilter.prototype, "none", void 0);
PackagesListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("PackagesListRelationFilter", {
        isAbstract: true
    })
], PackagesListRelationFilter);
exports.PackagesListRelationFilter = PackagesListRelationFilter;
