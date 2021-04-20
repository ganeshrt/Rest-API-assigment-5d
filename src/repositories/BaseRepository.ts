import { logger } from './../lib/logger';
import { IUserModel } from './../services/UserService/IUserModel';
import mongoose from 'mongoose';
import User from './User/userModel'
export class BaseRepository {

    /**
     * insert
     */
    public insert(email: String, password: String, name: String, city: String) {
        logger("BaseRepository - insert ", {});
        const user = new User({ email, password, name, city });
        return user.save().then(res => {
            return res;
        }).catch(err => {
            console.log("failed to insert.", err);
            return err;
        })

    }

    /**
     * name
     */
    public getOne(email: String, password: String) {
        // const user = new User({ name, password });
        logger("BaseRepository - getOne ", {});

        return User.findOne({ email, password }).then(res => {
            console.log("user exist...!");
            return res;
        }).catch(err => {
            console.log("user not exist..");
            return err;
        })

    }
    public getAll() {
        // const user = new User({ name, password });
        logger("BaseRepository - getAllUsers ", {});

        return User.find().then(res => {
            console.log("user exist...!");
            return res;
        }).catch(err => {
            console.log("user not exist..");
            return err;
        })

    }
}