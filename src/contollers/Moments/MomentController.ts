import { momentService } from '../../services/MomentService/MomentService';
import { logger } from '../../lib/logger';
class MomentController {
    // constructor() {

    // }

    /**
     * static getInstance
     */
    public static getInstance() {
        if (!MomentController.instance) {
            MomentController.instance = new MomentController();
        }
        return MomentController.instance;
    }
    private static instance: MomentController;

    public createMoment = async ({ params, headers, body }: any) => {
        const { title, tags, imgFile } = body
        console.log("body::", body)
        return await momentService.createMoment(title, tags, imgFile);
    }
    public getAllMoment = async ({ params, headers, body }: any) => {

        return await momentService.getAllMoment();
    }

    public updateMoment = async ({ params, headers, body }: any) => {
        const { id } = params;
        return await momentService.updateMoment(id, body);

    }

    public deleteMoment = async ({ params, headers, body }: any) => {
        const { id } = params;
        return await momentService.deleteMoment(id as String);
    }

    // public createUser = async ({ params, headers, body }: any) => {
    //     const { email, password, name, city } = body;
    //     logger("User Controller -Create User :::::::::", body)
    //     return await userService.createUser(email, password, name, city);
    // }

    // public getUserToken = async ({ params, headers, body }: any) => {
    //     const { email, password } = params;
    //     logger("User Controller - get User ::::", JSON.stringify(params))
    //     console.log(email, password)
    //     return await userService.getUserToken(email, password);

    // }
    // public getAllUsers = async ({ params, headers, body }: any) => {
    //     const { email, password } = params;
    //     logger("User Controller - getAllUsers ::::", JSON.stringify(params))
    //     return await userService.getAllUsers();

    // }

}

export default MomentController.getInstance();