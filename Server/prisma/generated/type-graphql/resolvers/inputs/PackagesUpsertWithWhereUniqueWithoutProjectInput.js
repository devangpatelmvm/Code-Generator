"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackagesUpsertWithWhereUniqueWithoutProjectInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PackagesCreateWithoutProjectInput_1 = require("../inputs/PackagesCreateWithoutProjectInput");
const PackagesUpdateWithoutProjectInput_1 = require("../inputs/PackagesUpdateWithoutProjectInput");
const PackagesWhereUniqueInput_1 = require("../inputs/PackagesWhereUniqueInput");
let PackagesUpsertWithWhereUniqueWithoutProjectInput = class PackagesUpsertWithWhereUniqueWithoutProjectInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PackagesWhereUniqueInput_1.PackagesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PackagesWhereUniqueInput_1.PackagesWhereUniqueInput)
], PackagesUpsertWithWhereUniqueWithoutProjectInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PackagesUpdateWithoutProjectInput_1.PackagesUpdateWithoutProjectInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PackagesUpdateWithoutProjectInput_1.PackagesUpdateWithoutProjectInput)
], PackagesUpsertWithWhereUniqueWithoutProjectInput.prototype, "update", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PackagesCreateWithoutProjectInput_1.PackagesCreateWithoutProjectInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PackagesCreateWithoutProjectInput_1.PackagesCreateWithoutProjectInput)
], PackagesUpsertWithWhereUniqueWithoutProjectInput.prototype, "create", void 0);
PackagesUpsertWithWhereUniqueWithoutProjectInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PackagesUpsertWithWhereUniqueWithoutProjectInput", {
        isAbstract: true
    })
], PackagesUpsertWithWhereUniqueWithoutProjectInput);
exports.PackagesUpsertWithWhereUniqueWithoutProjectInput = PackagesUpsertWithWhereUniqueWithoutProjectInput;
