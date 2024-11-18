"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablesMaxAggregate = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TablesMaxAggregate = class TablesMaxAggregate {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TablesMaxAggregate.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TablesMaxAggregate.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TablesMaxAggregate.prototype, "projectId", void 0);
TablesMaxAggregate = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TablesMaxAggregate", {
        isAbstract: true
    })
], TablesMaxAggregate);
exports.TablesMaxAggregate = TablesMaxAggregate;
