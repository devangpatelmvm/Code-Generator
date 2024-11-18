"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnsListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ColumnsWhereInput_1 = require("../inputs/ColumnsWhereInput");
let ColumnsListRelationFilter = class ColumnsListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColumnsWhereInput_1.ColumnsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColumnsWhereInput_1.ColumnsWhereInput)
], ColumnsListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColumnsWhereInput_1.ColumnsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColumnsWhereInput_1.ColumnsWhereInput)
], ColumnsListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ColumnsWhereInput_1.ColumnsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ColumnsWhereInput_1.ColumnsWhereInput)
], ColumnsListRelationFilter.prototype, "none", void 0);
ColumnsListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("ColumnsListRelationFilter", {
        isAbstract: true
    })
], ColumnsListRelationFilter);
exports.ColumnsListRelationFilter = ColumnsListRelationFilter;
