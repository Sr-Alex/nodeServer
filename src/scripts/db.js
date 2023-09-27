import { randomUUID } from 'node:crypto';

export class DataBase {
    #profileList = new Map();

    create(profile){
        const id = randomUUID();
        this.#profileList.set(id, profile);
    };

    getList(){
        return Array.from(this.#profileList);
    }

    update(id, video){
        this.#profileList.set(id, video);
    }
    
    delete(id){
        this.#profileList.delete(id);
    }
}