export class NotFoundError extends Error {
    constructor (resourceName: string, id: string) {
        super(`Resource [${resourceName}] with id [${id}] not found!`)
        this.name = 'Resource not found!'
    } 
}