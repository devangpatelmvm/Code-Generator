"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentsListRelationFilter = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const ComponentsWhereInput_1 = require("../inputs/ComponentsWhereInput");
let ComponentsListRelationFilter = class ComponentsListRelationFilter {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsWhereInput_1.ComponentsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsWhereInput_1.ComponentsWhereInput)
], ComponentsListRelationFilter.prototype, "every", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsWhereInput_1.ComponentsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsWhereInput_1.ComponentsWhereInput)
], ComponentsListRelationFilter.prototype, "some", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => ComponentsWhereInput_1.ComponentsWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", ComponentsWhereInput_1.ComponentsWhereInput)
], ComponentsListRelationFilter.prototype, "none", void 0);
ComponentsListRelationFilter = tslib_1.__decorate([
    TypeGraphQL.InputType("ComponentsListRelationFilter", {
        isAbstract: true
    })
], ComponentsListRelationFilter);
exports.ComponentsListRelationFilter = ComponentsListRelationFilter;
