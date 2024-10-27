import  Server  from '../src/server';
import supertest from "supertest";

let api = supertest(Server);

export { api }