"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentsCssArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CssOrderByWithRelationInput_1 = require("../../../inputs/CssOrderByWithRelationInput");
const CssWhereInput_1 = require("../../../inputs/CssWhereInput");
const CssWhereUniqueInput_1 = require("../../../inputs/CssWhereUniqueInput");
const CssScalarFieldEnum_1 = require("../../../../enums/CssScalarFieldEnum");
let ComponentsCssArgs = class ComponentsCssArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CssWhereInput_1.CssWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CssWhereInput_1.CssWhereInput)
], ComponentsCssArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CssOrderByWithRelationInput_1.CssOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ComponentsCssArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CssWhereUniqueInput_1.CssWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CssWhereUniqueInput_1.CssWhereUniqueInput)
], ComponentsCssArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ComponentsCssArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ComponentsCssArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CssScalarFieldEnum_1.CssScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ComponentsCssArgs.prototype, "distinct", void 0);
ComponentsCssArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], ComponentsCssArgs);
exports.ComponentsCssArgs = ComponentsCssArgs;
