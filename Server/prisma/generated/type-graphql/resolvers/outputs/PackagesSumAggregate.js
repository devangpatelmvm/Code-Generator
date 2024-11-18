"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackagesSumAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let PackagesSumAggregate = class PackagesSumAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], PackagesSumAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], PackagesSumAggregate.prototype, "projectId", void 0);
PackagesSumAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("PackagesSumAggregate", {
        isAbstract: true
    })
], PackagesSumAggregate);
exports.PackagesSumAggregate = PackagesSumAggregate;
