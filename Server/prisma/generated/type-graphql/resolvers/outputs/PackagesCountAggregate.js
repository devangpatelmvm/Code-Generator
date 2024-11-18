"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackagesCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let PackagesCountAggregate = class PackagesCountAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], PackagesCountAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], PackagesCountAggregate.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], PackagesCountAggregate.prototype, "version", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], PackagesCountAggregate.prototype, "projectId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], PackagesCountAggregate.prototype, "_all", void 0);
PackagesCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("PackagesCountAggregate", {
        isAbstract: true
    })
], PackagesCountAggregate);
exports.PackagesCountAggregate = PackagesCountAggregate;
