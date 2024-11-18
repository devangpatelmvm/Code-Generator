"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablesCreateNestedManyWithoutProjectInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const TablesCreateOrConnectWithoutProjectInput_1 = require("../inputs/TablesCreateOrConnectWithoutProjectInput");
const TablesCreateWithoutProjectInput_1 = require("../inputs/TablesCreateWithoutProjectInput");
const TablesWhereUniqueInput_1 = require("../inputs/TablesWhereUniqueInput");
let TablesCreateNestedManyWithoutProjectInput = class TablesCreateNestedManyWithoutProjectInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TablesCreateWithoutProjectInput_1.TablesCreateWithoutProjectInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TablesCreateNestedManyWithoutProjectInput.prototype, "create", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TablesCreateOrConnectWithoutProjectInput_1.TablesCreateOrConnectWithoutProjectInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TablesCreateNestedManyWithoutProjectInput.prototype, "connectOrCreate", void 0);
tslib_1.__decorate([
    TypeGraphQL.Field(_type => [TablesWhereUniqueInput_1.TablesWhereUniqueInput], {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Array)
], TablesCreateNestedManyWithoutProjectInput.prototype, "connect", void 0);
TablesCreateNestedManyWithoutProjectInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TablesCreateNestedManyWithoutProjectInput", {
        isAbstract: true
    })
], TablesCreateNestedManyWithoutProjectInput);
exports.TablesCreateNestedManyWithoutProjectInput = TablesCreateNestedManyWithoutProjectInput;
