"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablesCount = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TablesCount = class TablesCount {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TablesCount.prototype, "column", void 0);
TablesCount = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TablesCount", {
        isAbstract: true
    })
], TablesCount);
exports.TablesCount = TablesCount;
