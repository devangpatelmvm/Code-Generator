import { UsersOrderByWithRelationInput } from "../../../inputs/UsersOrderByWithRelationInput";
import { UsersWhereInput } from "../../../inputs/UsersWhereInput";
import { UsersWhereUniqueInput } from "../../../inputs/UsersWhereUniqueInput";
export declare class User_rolesUsersArgs {
    where?: UsersWhereInput | undefined;
    orderBy?: UsersOrderByWithRelationInput[] | undefined;
    cursor?: UsersWhereUniqueInput | undefined;
    take?: number | undefined;
    skip?: number | undefined;
    distinct?: Array<"id" | "first_name" | "last_name" | "email" | "password" | "createdAt" | "user_rolesId"> | undefined;
}
