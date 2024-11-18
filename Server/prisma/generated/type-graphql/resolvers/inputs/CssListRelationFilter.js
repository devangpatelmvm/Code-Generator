"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CssListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CssWhereInput_1 = require("../inputs/CssWhereInput");
let CssListRelationFilter = class CssListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CssWhereInput_1.CssWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CssWhereInput_1.CssWhereInput)
], CssListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CssWhereInput_1.CssWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CssWhereInput_1.CssWhereInput)
], CssListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CssWhereInput_1.CssWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CssWhereInput_1.CssWhereInput)
], CssListRelationFilter.prototype, "none", void 0);
CssListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("CssListRelationFilter", {
        isAbstract: true
    })
], CssListRelationFilter);
exports.CssListRelationFilter = CssListRelationFilter;
