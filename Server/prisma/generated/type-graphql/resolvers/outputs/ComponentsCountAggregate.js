"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentsCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ComponentsCountAggregate = class ComponentsCountAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ComponentsCountAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ComponentsCountAggregate.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ComponentsCountAggregate.prototype, "projectId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ComponentsCountAggregate.prototype, "_all", void 0);
ComponentsCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ComponentsCountAggregate", {
        isAbstract: true
    })
], ComponentsCountAggregate);
exports.ComponentsCountAggregate = ComponentsCountAggregate;
