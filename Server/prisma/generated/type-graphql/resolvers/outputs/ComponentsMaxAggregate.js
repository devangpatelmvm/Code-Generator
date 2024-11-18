"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentsMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ComponentsMaxAggregate = class ComponentsMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ComponentsMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ComponentsMaxAggregate.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ComponentsMaxAggregate.prototype, "projectId", void 0);
ComponentsMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ComponentsMaxAggregate", {
        isAbstract: true
    })
], ComponentsMaxAggregate);
exports.ComponentsMaxAggregate = ComponentsMaxAggregate;
