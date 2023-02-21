import supertest from "supertest";

import app from "../src/app";

describe('GET /tasks',()=>{
    test('should response with a 200 status code',async ()=>{
        const resp = await supertest(app).get('/tasks').send();

        expect(resp.statusCode).toBe(200);
    })

    test('should response with an array',async () => {
        const resp = await supertest(app).get('/tasks').send();

        expect(resp.body).toBeInstanceOf(Array);
    } )
})

describe('POST /tasks', ()=>{

    describe('given a title and description', ()=>{

        let body = {
            title:'text title',
            description:'text description'
        }

        test('should response with a 200 status code',async ()=>{
            const resp = await supertest(app).post('/tasks').send(body);
    
            expect(resp.statusCode).toBe(200);
        })
    
        test('should have a content-type: application/json in header', async ()=>{
            const resp = await supertest(app).post('/tasks').send(body);
    
            expect(resp.headers['content-type']).toEqual(
                expect.stringContaining('json')
            )
        })
    
        test('should response with a task ID', async ()=>{
            const resp = await supertest(app).post('/tasks').send(body);
    
            expect(resp.body.id).toBeDefined()
        })
    })

    describe('when title and description is missing', ()=>{
        let tasks = [
            {},
            {title: 'text title'},
            {description: 'text description'}
        ]

        for(let body of tasks){
            test('should response with a 400 status code', async ()=>{
                const resp = await supertest(app).post('/tasks').send(body);
    
                expect(resp.statusCode).toBe(400)
            })
        }
    })

})