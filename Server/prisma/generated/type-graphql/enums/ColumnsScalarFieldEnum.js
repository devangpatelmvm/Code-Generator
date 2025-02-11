"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColumnsScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var ColumnsScalarFieldEnum;
(function (ColumnsScalarFieldEnum) {
    ColumnsScalarFieldEnum["id"] = "id";
    ColumnsScalarFieldEnum["name"] = "name";
    ColumnsScalarFieldEnum["type"] = "type";
    ColumnsScalarFieldEnum["constraint"] = "constraint";
    ColumnsScalarFieldEnum["tableId"] = "tableId";
})(ColumnsScalarFieldEnum = exports.ColumnsScalarFieldEnum || (exports.ColumnsScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(ColumnsScalarFieldEnum, {
    name: "ColumnsScalarFieldEnum",
    description: undefined,
});
