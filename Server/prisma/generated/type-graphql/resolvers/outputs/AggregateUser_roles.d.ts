import { User_rolesAvgAggregate } from "../outputs/User_rolesAvgAggregate";
import { User_rolesCountAggregate } from "../outputs/User_rolesCountAggregate";
import { User_rolesMaxAggregate } from "../outputs/User_rolesMaxAggregate";
import { User_rolesMinAggregate } from "../outputs/User_rolesMinAggregate";
import { User_rolesSumAggregate } from "../outputs/User_rolesSumAggregate";
export declare class AggregateUser_roles {
    _count: User_rolesCountAggregate | null;
    _avg: User_rolesAvgAggregate | null;
    _sum: User_rolesSumAggregate | null;
    _min: User_rolesMinAggregate | null;
    _max: User_rolesMaxAggregate | null;
}
