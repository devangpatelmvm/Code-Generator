import { ProjectsCreateNestedManyWithoutUserInput } from "../inputs/ProjectsCreateNestedManyWithoutUserInput";
export declare class UsersCreateWithoutUser_rolesInput {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    createdAt?: Date | undefined;
    project?: ProjectsCreateNestedManyWithoutUserInput | undefined;
}
