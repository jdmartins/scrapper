import { model } from 'mongoose';
import { targetSchema, ITargetSchema } from '../schemas/targetSchema';
const Target = model<ITargetSchema>('Target', targetSchema);

async function add(item: ITargetSchema) {

}
async function update(item: ITargetSchema) {

}
export const remove = async (item: ITargetSchema) => {

}

export const getAllTargets = async () => {
    return Target.find();
};
