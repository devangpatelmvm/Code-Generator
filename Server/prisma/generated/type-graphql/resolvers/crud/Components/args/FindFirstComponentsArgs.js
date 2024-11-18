"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FindFirstComponentsArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ComponentsOrderByWithRelationInput_1 = require("../../../inputs/ComponentsOrderByWithRelationInput");
const ComponentsWhereInput_1 = require("../../../inputs/ComponentsWhereInput");
const ComponentsWhereUniqueInput_1 = require("../../../inputs/ComponentsWhereUniqueInput");
const ComponentsScalarFieldEnum_1 = require("../../../../enums/ComponentsScalarFieldEnum");
let FindFirstComponentsArgs = class FindFirstComponentsArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsWhereInput_1.ComponentsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsWhereInput_1.ComponentsWhereInput)
], FindFirstComponentsArgs.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ComponentsOrderByWithRelationInput_1.ComponentsOrderByWithRelationInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstComponentsArgs.prototype, "orderBy", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsWhereUniqueInput_1.ComponentsWhereUniqueInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsWhereUniqueInput_1.ComponentsWhereUniqueInput)
], FindFirstComponentsArgs.prototype, "cursor", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstComponentsArgs.prototype, "take", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], FindFirstComponentsArgs.prototype, "skip", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ComponentsScalarFieldEnum_1.ComponentsScalarFieldEnum], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], FindFirstComponentsArgs.prototype, "distinct", void 0);
FindFirstComponentsArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], FindFirstComponentsArgs);
exports.FindFirstComponentsArgs = FindFirstComponentsArgs;
