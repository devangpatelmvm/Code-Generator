"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackagesMinAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let PackagesMinAggregate = class PackagesMinAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], PackagesMinAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PackagesMinAggregate.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PackagesMinAggregate.prototype, "version", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], PackagesMinAggregate.prototype, "projectId", void 0);
PackagesMinAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("PackagesMinAggregate", {
        isAbstract: true
    })
], PackagesMinAggregate);
exports.PackagesMinAggregate = PackagesMinAggregate;
