export interface IUserModel {
    createUser(
        name: String,
        email: String,
        password: String,
        city: String,
    ): Promise<any>;
}