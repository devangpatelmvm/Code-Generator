import { ProjectsCreateNestedManyWithoutUserInput } from "../inputs/ProjectsCreateNestedManyWithoutUserInput";
import { User_rolesCreateNestedOneWithoutUsersInput } from "../inputs/User_rolesCreateNestedOneWithoutUsersInput";
export declare class UsersCreateInput {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    createdAt?: Date | undefined;
    user_roles?: User_rolesCreateNestedOneWithoutUsersInput | undefined;
    project?: ProjectsCreateNestedManyWithoutUserInput | undefined;
}
