"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackagesUpdateWithWhereUniqueWithoutProjectInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PackagesUpdateWithoutProjectInput_1 = require("../inputs/PackagesUpdateWithoutProjectInput");
const PackagesWhereUniqueInput_1 = require("../inputs/PackagesWhereUniqueInput");
let PackagesUpdateWithWhereUniqueWithoutProjectInput = class PackagesUpdateWithWhereUniqueWithoutProjectInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PackagesWhereUniqueInput_1.PackagesWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PackagesWhereUniqueInput_1.PackagesWhereUniqueInput)
], PackagesUpdateWithWhereUniqueWithoutProjectInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PackagesUpdateWithoutProjectInput_1.PackagesUpdateWithoutProjectInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PackagesUpdateWithoutProjectInput_1.PackagesUpdateWithoutProjectInput)
], PackagesUpdateWithWhereUniqueWithoutProjectInput.prototype, "data", void 0);
PackagesUpdateWithWhereUniqueWithoutProjectInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PackagesUpdateWithWhereUniqueWithoutProjectInput", {
        isAbstract: true
    })
], PackagesUpdateWithWhereUniqueWithoutProjectInput);
exports.PackagesUpdateWithWhereUniqueWithoutProjectInput = PackagesUpdateWithWhereUniqueWithoutProjectInput;
