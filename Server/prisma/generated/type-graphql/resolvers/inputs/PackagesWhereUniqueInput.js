"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackagesWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let PackagesWhereUniqueInput = class PackagesWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], PackagesWhereUniqueInput.prototype, "id", void 0);
PackagesWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PackagesWhereUniqueInput", {
        isAbstract: true
    })
], PackagesWhereUniqueInput);
exports.PackagesWhereUniqueInput = PackagesWhereUniqueInput;
