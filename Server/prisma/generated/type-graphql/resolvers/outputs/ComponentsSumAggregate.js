"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentsSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ComponentsSumAggregate = class ComponentsSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ComponentsSumAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], ComponentsSumAggregate.prototype, "projectId", void 0);
ComponentsSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ComponentsSumAggregate", {
        isAbstract: true
    })
], ComponentsSumAggregate);
exports.ComponentsSumAggregate = ComponentsSumAggregate;
