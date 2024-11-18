"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PackagesUpdateManyWithWhereWithoutProjectInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const PackagesScalarWhereInput_1 = require("../inputs/PackagesScalarWhereInput");
const PackagesUpdateManyMutationInput_1 = require("../inputs/PackagesUpdateManyMutationInput");
let PackagesUpdateManyWithWhereWithoutProjectInput = class PackagesUpdateManyWithWhereWithoutProjectInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PackagesScalarWhereInput_1.PackagesScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PackagesScalarWhereInput_1.PackagesScalarWhereInput)
], PackagesUpdateManyWithWhereWithoutProjectInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => PackagesUpdateManyMutationInput_1.PackagesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", PackagesUpdateManyMutationInput_1.PackagesUpdateManyMutationInput)
], PackagesUpdateManyWithWhereWithoutProjectInput.prototype, "data", void 0);
PackagesUpdateManyWithWhereWithoutProjectInput = tslib_1.__decorate([
    TypeGraphQL.InputType("PackagesUpdateManyWithWhereWithoutProjectInput", {
        isAbstract: true
    })
], PackagesUpdateManyWithWhereWithoutProjectInput);
exports.PackagesUpdateManyWithWhereWithoutProjectInput = PackagesUpdateManyWithWhereWithoutProjectInput;
