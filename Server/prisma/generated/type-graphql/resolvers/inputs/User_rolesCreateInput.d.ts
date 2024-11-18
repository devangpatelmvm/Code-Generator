import { UsersCreateNestedManyWithoutUser_rolesInput } from "../inputs/UsersCreateNestedManyWithoutUser_rolesInput";
export declare class User_rolesCreateInput {
    name: string;
    permissions: string;
    users?: UsersCreateNestedManyWithoutUser_rolesInput | undefined;
}
