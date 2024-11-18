"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablesUpdateManyWithWhereWithoutProjectInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TablesScalarWhereInput_1 = require("../inputs/TablesScalarWhereInput");
const TablesUpdateManyMutationInput_1 = require("../inputs/TablesUpdateManyMutationInput");
let TablesUpdateManyWithWhereWithoutProjectInput = class TablesUpdateManyWithWhereWithoutProjectInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesScalarWhereInput_1.TablesScalarWhereInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TablesScalarWhereInput_1.TablesScalarWhereInput)
], TablesUpdateManyWithWhereWithoutProjectInput.prototype, "where", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TablesUpdateManyMutationInput_1.TablesUpdateManyMutationInput, {
        nullable: false
    }),
    tslib_1.__metadata("design:type", TablesUpdateManyMutationInput_1.TablesUpdateManyMutationInput)
], TablesUpdateManyWithWhereWithoutProjectInput.prototype, "data", void 0);
TablesUpdateManyWithWhereWithoutProjectInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TablesUpdateManyWithWhereWithoutProjectInput", {
        isAbstract: true
    })
], TablesUpdateManyWithWhereWithoutProjectInput);
exports.TablesUpdateManyWithWhereWithoutProjectInput = TablesUpdateManyWithWhereWithoutProjectInput;
