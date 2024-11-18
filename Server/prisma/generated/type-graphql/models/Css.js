"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Css = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let Css = class Css {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Css.prototype, "id", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], Css.prototype, "content", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", Number)
], Css.prototype, "componentId", void 0);
Css = tslib_1.__decorate([
    TypeGraphQL.ObjectType("Css", {
        isAbstract: true
    })
], Css);
exports.Css = Css;
