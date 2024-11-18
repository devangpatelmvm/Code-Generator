"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User_rolesScalarFieldEnum = void 0;
const tslib_1 = require("tslib");
const TypeGraphQL = tslib_1.__importStar(require("type-graphql"));
var User_rolesScalarFieldEnum;
(function (User_rolesScalarFieldEnum) {
    User_rolesScalarFieldEnum["id"] = "id";
    User_rolesScalarFieldEnum["name"] = "name";
    User_rolesScalarFieldEnum["permissions"] = "permissions";
})(User_rolesScalarFieldEnum = exports.User_rolesScalarFieldEnum || (exports.User_rolesScalarFieldEnum = {}));
TypeGraphQL.registerEnumType(User_rolesScalarFieldEnum, {
    name: "User_rolesScalarFieldEnum",
    description: undefined,
});
