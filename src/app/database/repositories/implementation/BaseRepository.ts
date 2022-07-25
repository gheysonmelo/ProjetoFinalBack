import { Model } from "sequelize-typescript";
import { ResourceNotFoundError } from "@/shared/errors/";
import IBaseRepository from "../IBaseRepository";

// TODO: Find a way to remove the @ts-ignore comments without getting any errors
abstract class SequelizeBaseRepository<Input, Output>
    implements IBaseRepository<Input, Output>
{
    constructor(protected model: typeof Model) {}

    public async getAll(attributes?: string[]): Promise<Output[]> {
        // @ts-ignore
        return this.model.findAll({
            attributes, include: {all: true}
        });
    }

    public async getById(id: number, attributes?: string[]): Promise<Output> {
        // @ts-ignore
        const resource = await this.model.findByPk(id, {
            attributes,
        });

        if (resource) {
            // @ts-ignore
            return resource;
        }

        throw new ResourceNotFoundError();
    }

    public async create(data: any): Promise<Model> {
        // @ts-ignore
        return this.model.create(data);
    }

    public async updateById(id: number, data: any): Promise<Output> {
        const resource = await this.getById(id);

        if (resource) {
            // @ts-ignore
            return resource.update(data);
        }

        throw new ResourceNotFoundError();
    }

    public async deleteById(id: number): Promise<boolean> {
        const resource = await this.getById(id);

        if (resource) {
            // @ts-ignore
            await resource.destroy();
            return true;
        }

        throw new ResourceNotFoundError();
    }
}

export default SequelizeBaseRepository;
