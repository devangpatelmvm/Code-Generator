"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentsRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ComponentsWhereInput_1 = require("../inputs/ComponentsWhereInput");
let ComponentsRelationFilter = class ComponentsRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsWhereInput_1.ComponentsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsWhereInput_1.ComponentsWhereInput)
], ComponentsRelationFilter.prototype, "is", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsWhereInput_1.ComponentsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsWhereInput_1.ComponentsWhereInput)
], ComponentsRelationFilter.prototype, "isNot", void 0);
ComponentsRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("ComponentsRelationFilter", {
        isAbstract: true
    })
], ComponentsRelationFilter);
exports.ComponentsRelationFilter = ComponentsRelationFilter;
