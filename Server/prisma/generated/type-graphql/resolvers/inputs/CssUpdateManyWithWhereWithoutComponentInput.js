"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CssUpdateManyWithWhereWithoutComponentInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CssScalarWhereInput_1 = require("../inputs/CssScalarWhereInput");
const CssUpdateManyMutationInput_1 = require("../inputs/CssUpdateManyMutationInput");
let CssUpdateManyWithWhereWithoutComponentInput = class CssUpdateManyWithWhereWithoutComponentInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CssScalarWhereInput_1.CssScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CssScalarWhereInput_1.CssScalarWhereInput)
], CssUpdateManyWithWhereWithoutComponentInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CssUpdateManyMutationInput_1.CssUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", CssUpdateManyMutationInput_1.CssUpdateManyMutationInput)
], CssUpdateManyWithWhereWithoutComponentInput.prototype, "data", void 0);
CssUpdateManyWithWhereWithoutComponentInput = tslib_1.__decorate([
    TypeGraphQL.InputType("CssUpdateManyWithWhereWithoutComponentInput", {
        isAbstract: true
    })
], CssUpdateManyWithWhereWithoutComponentInput);
exports.CssUpdateManyWithWhereWithoutComponentInput = CssUpdateManyWithWhereWithoutComponentInput;
