export interface IMomentModel {
    createMoment(
        title: String,
        Tags: Array<String>,
        imgFile: String,
    ): Promise<any>;
}