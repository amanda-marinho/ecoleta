import {Request, Response} from 'express';
import knex from '../database/connection';

class ItemsController {
    async index(request: Request, response: Response) {
        const items = await knex('items').select('*');
    
        const serializedItems = items.map(item => {
            return {
                id: item.id,
                title: item.title,
                //image_url: `http://localhost:3333/uploads/${item.image}`, //web
                image_url: `http://192.168.11.7:3333/uploads/${item.image}`, //mobile - alterar o link de acordo com o expo
            };
        });
    
        return response.json(serializedItems);
    }
}


export default ItemsController;