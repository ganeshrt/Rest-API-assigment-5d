import { MomentRepository } from '../../repositories/Moment/momentRepo';
import { logger } from '../../lib/logger';
import { IMomentModel } from './IMomentModel';
import jwt from 'jsonwebtoken'
require('dotenv').config()
export class MomentService implements IMomentModel {
    private momentRepo = new MomentRepository();

    public static getInstance() {
        if (!MomentService.instance) {
            MomentService.instance = new MomentService();
        }
        return MomentService.instance;
    }
    private static instance: MomentService;

    public createMoment = async (
        title: String,
        tags: Array<String>,
        imgFile: String): Promise<any> => {


        logger("Moment service - create :::::", JSON.stringify({ title, tags, imgFile }));
        return this.momentRepo.insert(title, tags, imgFile);

    }

    /**
     * getUserrole
     */
    public getAllMoment = async (): Promise<any> => {
        let moments: any;
        logger("moment Service -get all::::: ", {});
        try {

            moments = await this.momentRepo.getAll();
            // throw new Error({ message: 'email or password incorrect', status: 404 } as any);

        } catch (e) {
            console.log("err", e)
            throw new Error(e);
        }
        return moments;
    }

    public updateMoment = async (id: String, data: any): Promise<any> => {

        logger("Moment Service Update moment::::: ",);
        try {

            const moment: any = await this.momentRepo.update(id, data);
            if (moment) {
                // Generate an access token

                return ({
                    data: moment
                });
            } else {
                throw new Error({ message: 'moment not found', status: 404 } as any);
            }
        } catch (e) {
            console.log("err", e)
            throw new Error(e);
        }

    }

    public deleteMoment = async (id: String): Promise<any> => {

        try {

            return await this.momentRepo.deleteOne(id);
            // throw new Error({ message: 'email or password incorrect', status: 404 } as any);

        } catch (e) {
            console.log("err", e)
            throw new Error(e);
        }
    }


}
export const momentService = MomentService.getInstance()