"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackagesCreateWithoutProjectInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let PackagesCreateWithoutProjectInput = class PackagesCreateWithoutProjectInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PackagesCreateWithoutProjectInput.prototype, "name", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => String, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", String)
], PackagesCreateWithoutProjectInput.prototype, "version", void 0);
PackagesCreateWithoutProjectInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PackagesCreateWithoutProjectInput", {
        isAbstract: true
    })
], PackagesCreateWithoutProjectInput);
exports.PackagesCreateWithoutProjectInput = PackagesCreateWithoutProjectInput;
