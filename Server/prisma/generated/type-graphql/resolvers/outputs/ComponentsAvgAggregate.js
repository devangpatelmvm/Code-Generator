"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentsAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ComponentsAvgAggregate = class ComponentsAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ComponentsAvgAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ComponentsAvgAggregate.prototype, "projectId", void 0);
ComponentsAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ComponentsAvgAggregate", {
        isAbstract: true
    })
], ComponentsAvgAggregate);
exports.ComponentsAvgAggregate = ComponentsAvgAggregate;
