"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CssCreateOrConnectWithoutComponentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CssCreateWithoutComponentInput_1 = require("../inputs/CssCreateWithoutComponentInput");
const CssWhereUniqueInput_1 = require("../inputs/CssWhereUniqueInput");
let CssCreateOrConnectWithoutComponentInput = class CssCreateOrConnectWithoutComponentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CssWhereUniqueInput_1.CssWhereUniqueInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CssWhereUniqueInput_1.CssWhereUniqueInput)
], CssCreateOrConnectWithoutComponentInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CssCreateWithoutComponentInput_1.CssCreateWithoutComponentInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CssCreateWithoutComponentInput_1.CssCreateWithoutComponentInput)
], CssCreateOrConnectWithoutComponentInput.prototype, "create", void 0);
CssCreateOrConnectWithoutComponentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CssCreateOrConnectWithoutComponentInput", {
        isAbstract: true
    })
], CssCreateOrConnectWithoutComponentInput);
exports.CssCreateOrConnectWithoutComponentInput = CssCreateOrConnectWithoutComponentInput;
