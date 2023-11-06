import {Request, Response} from 'express'
import {CreateHairCutService} from '../../services/haircut/CreateHairCutService'

class CreateHairCutController{
  async handle(request: Request, response: Response){
    const {name,price} = request.body;
    const user_id = request.user_id;

    const createHairCutService = new CreateHairCutService();

    const haircut = await createHairCutService.execute({
      user_id,
      name,
      price
    })

    return response.json(haircut)
  }
}

export {CreateHairCutController}