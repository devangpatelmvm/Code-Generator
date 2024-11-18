"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TsLines = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TsLines = class TsLines {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TsLines.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], TsLines.prototype, "line", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], TsLines.prototype, "componentId", void 0);
TsLines = tslib_1.__decorate([
    TypeGraphQL.ObjectType("TsLines", {
        isAbstract: true
    })
], TsLines);
exports.TsLines = TsLines;
