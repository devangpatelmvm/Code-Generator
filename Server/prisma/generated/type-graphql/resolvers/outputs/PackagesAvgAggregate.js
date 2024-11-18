"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackagesAvgAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let PackagesAvgAggregate = class PackagesAvgAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], PackagesAvgAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Float, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], PackagesAvgAggregate.prototype, "projectId", void 0);
PackagesAvgAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("PackagesAvgAggregate", {
        isAbstract: true
    })
], PackagesAvgAggregate);
exports.PackagesAvgAggregate = PackagesAvgAggregate;
