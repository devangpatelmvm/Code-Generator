"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TsLinesOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ComponentsOrderByWithRelationInput_1 = require("../inputs/ComponentsOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let TsLinesOrderByWithRelationInput = class TsLinesOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TsLinesOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TsLinesOrderByWithRelationInput.prototype, "line", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsOrderByWithRelationInput_1.ComponentsOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsOrderByWithRelationInput_1.ComponentsOrderByWithRelationInput)
], TsLinesOrderByWithRelationInput.prototype, "component", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TsLinesOrderByWithRelationInput.prototype, "componentId", void 0);
TsLinesOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TsLinesOrderByWithRelationInput", {
        isAbstract: true
    })
], TsLinesOrderByWithRelationInput);
exports.TsLinesOrderByWithRelationInput = TsLinesOrderByWithRelationInput;
