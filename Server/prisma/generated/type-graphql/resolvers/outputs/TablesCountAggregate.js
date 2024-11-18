"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablesCountAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TablesCountAggregate = class TablesCountAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TablesCountAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TablesCountAggregate.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TablesCountAggregate.prototype, "projectId", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TablesCountAggregate.prototype, "_all", void 0);
TablesCountAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TablesCountAggregate", {
        isAbstract: true
    })
], TablesCountAggregate);
exports.TablesCountAggregate = TablesCountAggregate;
