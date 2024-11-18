"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CssCreateNestedManyWithoutComponentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CssCreateOrConnectWithoutComponentInput_1 = require("../inputs/CssCreateOrConnectWithoutComponentInput");
const CssCreateWithoutComponentInput_1 = require("../inputs/CssCreateWithoutComponentInput");
const CssWhereUniqueInput_1 = require("../inputs/CssWhereUniqueInput");
let CssCreateNestedManyWithoutComponentInput = class CssCreateNestedManyWithoutComponentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CssCreateWithoutComponentInput_1.CssCreateWithoutComponentInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CssCreateNestedManyWithoutComponentInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CssCreateOrConnectWithoutComponentInput_1.CssCreateOrConnectWithoutComponentInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CssCreateNestedManyWithoutComponentInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [CssWhereUniqueInput_1.CssWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], CssCreateNestedManyWithoutComponentInput.prototype, "connect", void 0);
CssCreateNestedManyWithoutComponentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CssCreateNestedManyWithoutComponentInput", {
        isAbstract: true
    })
], CssCreateNestedManyWithoutComponentInput);
exports.CssCreateNestedManyWithoutComponentInput = CssCreateNestedManyWithoutComponentInput;
