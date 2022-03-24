import { ErrorMessage} from './errormessage';
export interface SuccessResponse{
        succcessIndicator:boolean,
        errorMessages:Array<ErrorMessage>

}