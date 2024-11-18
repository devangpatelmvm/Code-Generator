"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackagesMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let PackagesMaxAggregate = class PackagesMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], PackagesMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PackagesMaxAggregate.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PackagesMaxAggregate.prototype, "version", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], PackagesMaxAggregate.prototype, "projectId", void 0);
PackagesMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("PackagesMaxAggregate", {
        isAbstract: true
    })
], PackagesMaxAggregate);
exports.PackagesMaxAggregate = PackagesMaxAggregate;
