"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentsMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ComponentsMinAggregate = class ComponentsMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ComponentsMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], ComponentsMinAggregate.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ComponentsMinAggregate.prototype, "projectId", void 0);
ComponentsMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ComponentsMinAggregate", {
        isAbstract: true
    })
], ComponentsMinAggregate);
exports.ComponentsMinAggregate = ComponentsMinAggregate;
