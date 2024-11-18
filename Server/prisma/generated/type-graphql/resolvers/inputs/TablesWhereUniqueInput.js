"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TablesWhereUniqueInput = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
let TablesWhereUniqueInput = class TablesWhereUniqueInput {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => TypeGraphQL.Int, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", Number)
], TablesWhereUniqueInput.prototype, "id", void 0);
TablesWhereUniqueInput = tslib_1.__decorate([
    TypeGraphQL.InputType("TablesWhereUniqueInput", {
        isAbstract: true
    })
], TablesWhereUniqueInput);
exports.TablesWhereUniqueInput = TablesWhereUniqueInput;
