import {Request, Response} from 'express'
import {updateUserService} from '../../services/user/UpdateUserService'

class UpdateUserController{
  async handle(request: Request, response: Response){
    const {name, endereco} = request.body;
    const user_id = request.user_id;

    const updateUser = new updateUserService();

    const user = await updateUser.execute({
      user_id,
      name,
      endereco
    })

    return response.json(user);

  }
}

export {UpdateUserController}