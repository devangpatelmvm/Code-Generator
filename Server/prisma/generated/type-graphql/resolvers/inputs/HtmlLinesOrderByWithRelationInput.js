"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HtmlLinesOrderByWithRelationInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ComponentsOrderByWithRelationInput_1 = require("../inputs/ComponentsOrderByWithRelationInput");
const SortOrder_1 = require("../../enums/SortOrder");
let HtmlLinesOrderByWithRelationInput = class HtmlLinesOrderByWithRelationInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], HtmlLinesOrderByWithRelationInput.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], HtmlLinesOrderByWithRelationInput.prototype, "line", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsOrderByWithRelationInput_1.ComponentsOrderByWithRelationInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsOrderByWithRelationInput_1.ComponentsOrderByWithRelationInput)
], HtmlLinesOrderByWithRelationInput.prototype, "component", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => SortOrder_1.SortOrder, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], HtmlLinesOrderByWithRelationInput.prototype, "componentId", void 0);
HtmlLinesOrderByWithRelationInput = tslib_1.__decorate([
    TypeGraphQL.InputType("HtmlLinesOrderByWithRelationInput", {
        isAbstract: true
    })
], HtmlLinesOrderByWithRelationInput);
exports.HtmlLinesOrderByWithRelationInput = HtmlLinesOrderByWithRelationInput;
