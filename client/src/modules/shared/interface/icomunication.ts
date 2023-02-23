export interface IComunication {
    create(data: Comunication.Data): Comunication.Response
    findOne(id: number): Comunication.Response
}