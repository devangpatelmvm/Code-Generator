"use strict";
var ComponentsScalarWhereInput_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentsScalarWhereInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const IntFilter_1 = require("../inputs/IntFilter");
const StringFilter_1 = require("../inputs/StringFilter");
let ComponentsScalarWhereInput = ComponentsScalarWhereInput_1 = class ComponentsScalarWhereInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ComponentsScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ComponentsScalarWhereInput.prototype, "AND", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ComponentsScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ComponentsScalarWhereInput.prototype, "OR", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [ComponentsScalarWhereInput_1], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], ComponentsScalarWhereInput.prototype, "NOT", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], ComponentsScalarWhereInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => StringFilter_1.StringFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", StringFilter_1.StringFilter)
], ComponentsScalarWhereInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => IntFilter_1.IntFilter, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", IntFilter_1.IntFilter)
], ComponentsScalarWhereInput.prototype, "projectId", void 0);
ComponentsScalarWhereInput = ComponentsScalarWhereInput_1 = tslib_1.__decorate([
    TypeGraphQL.InputType("ComponentsScalarWhereInput", {
        isAbstract: true
    })
], ComponentsScalarWhereInput);
exports.ComponentsScalarWhereInput = ComponentsScalarWhereInput;
