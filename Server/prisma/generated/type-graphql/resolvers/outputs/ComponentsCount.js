"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComponentsCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let ComponentsCount = class ComponentsCount {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ComponentsCount.prototype, "htmlline", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ComponentsCount.prototype, "tsLine", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], ComponentsCount.prototype, "css", void 0);
ComponentsCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("ComponentsCount", {
        isAbstract: true
    })
], ComponentsCount);
exports.ComponentsCount = ComponentsCount;
