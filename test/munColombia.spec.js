import { jest, describe, test, expect, beforeEach, afterEach } from '@jest/globals'
import { Model } from 'sequelize';
import MunColombiaController from '../src/controllers/munColombia.controller';

Model.findAll = jest.fn()

beforeEach(()=>{
    Model.findAll.mockReset();
});

afterEach(()=>{
    jest.restoreAllMocks();
});

describe('munColombiaModel findAll ',()=>{
    test('should return all the records',async ()=>{
        Model.findAll.mockResolvedValue([]);
        let consulta = await MunColombiaController.find();
        console.log('CONSULTA',consulta)
        expect(consulta).toEqual([]);
    });
});