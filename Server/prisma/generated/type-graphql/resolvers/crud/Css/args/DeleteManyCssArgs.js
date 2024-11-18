"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteManyCssArgs = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
const CssWhereInput_1 = require("../../../inputs/CssWhereInput");
let DeleteManyCssArgs = class DeleteManyCssArgs {
};
tslib_1.__decorate([
    TypeGraphQL.Field(_type => CssWhereInput_1.CssWhereInput, {
        nullable: true
    }),
    tslib_1.__metadata("design:type", CssWhereInput_1.CssWhereInput)
], DeleteManyCssArgs.prototype, "where", void 0);
DeleteManyCssArgs = tslib_1.__decorate([
    TypeGraphQL.ArgsType()
], DeleteManyCssArgs);
exports.DeleteManyCssArgs = DeleteManyCssArgs;
