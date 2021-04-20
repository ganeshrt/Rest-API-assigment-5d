import { logger } from './../../lib/logger';
import mongoose from 'mongoose';
import Moment from './momentModel'
export class MomentRepository {

    /**
     * insert
     */
    public insert(title: String, tags: Array<String>, imgFile: String,) {
        logger("BaseRepository - insert ", {});
        const moment = new Moment({ title, tags, imgFile });
        return moment.save().then((res: any) => {
            return res;
        }).catch((err: any) => {
            console.log("failed to insert.", err);
            return err;
        })

    }

    /**
     * name
     */
    public deleteOne(id: String) {
        // const Moment = new Moment({ name, password });
        logger("BaseRepository - getOne ", {});

        return Moment.remove({ _id: id }).then(res => {
            console.log("Moment exist...!");
            return res;
        }).catch(err => {
            console.log("Moment not exist..");
            return err;
        })

    }
    public getAll() {
        // const Moment = new Moment({ name, password });
        logger("BaseRepository - getAllMoments ", {});
        return Moment.find({}).then(res => {
            console.log("Moment exist...!", res);

            return res;
        }).catch(err => {
            console.log("Moment not exist..");
            return err;
        })
    }

    public update(id: String, obj: any) {
        // const Moment = new Moment({ name, password });
        logger("BaseRepository - getAllMoments ", {});
        return Moment.updateOne({ _id: id }, { ...obj }).then(res => {
            console.log("Moment exist...!");
            return res;
        }).catch(err => {
            console.log("Moment not exist..");
            return err;
        })
    }

}