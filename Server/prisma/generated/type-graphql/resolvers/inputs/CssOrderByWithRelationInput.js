"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CssOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ComponentsOrderByWithRelationInput_1 = require("../inputs/ComponentsOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let CssOrderByWithRelationInput = class CssOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CssOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CssOrderByWithRelationInput.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsOrderByWithRelationInput_1.ComponentsOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsOrderByWithRelationInput_1.ComponentsOrderByWithRelationInput)
], CssOrderByWithRelationInput.prototype, "component", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], CssOrderByWithRelationInput.prototype, "componentId", void 0);
CssOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CssOrderByWithRelationInput", {
        isAbstract: true
    })
], CssOrderByWithRelationInput);
exports.CssOrderByWithRelationInput = CssOrderByWithRelationInput;
