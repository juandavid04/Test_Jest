import MunColombiaModel from '../model/munColombia.model.js'

class MunColombiaController{
    static async find(){
        try {
            let consulta = await MunColombiaModel.findAll();
            return consulta;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }
}

export default MunColombiaController;