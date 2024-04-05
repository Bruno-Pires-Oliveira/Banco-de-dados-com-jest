const knex = require("../database/knex");

const UserRepository = require("../repositories/userRepository/userRepository");

const UserCreateServices = require("../services/userServices/UserCreateServices");

const userRepository = new UserRepository();

const UserListServices = require("../services/userServices/UserListService");

const userCreateService = new UserCreateServices(userRepository);

const userListService = new UserListServices(userRepository);

const UserListByIdServices = require("../services/userServices/UserListByIdServices");
const userlistbyidservices = new UserListByIdServices(userRepository);
const UserUpdateServices = require("../services/userServices/UserUpdateServices");

const userupdateservices = new UserUpdateServices(userRepository);

const UserDeleteServices = require("../services/userServices/UserDeleteServices");
const userdeleteservices = new UserDeleteServices(userRepository);

class UserController {
  async createUser(req, res) {
    const { name, email, password } = req.body;

    await userCreateService.execute({ name, email, password });

    return res.status(201).json("Usuario cadastrado");
  }
  async listUser(req, res) {
    const users = await userListService.execute();
    return res.status(200).json(users);
  }
  async listUserById(req, res) {
    const { user_id } = req.params;

    const user = await userlistbyidservices.execute({ user_id });

    return res.status(200).json(user);
  }
  async updateUser(req, res) {
    const { user_id } = req.params;
    const { name, email } = req.body;
    await userupdateservices.execute({ user_id, name, email });

    return res.status(200).json("Usuario atualizado com sucesso");
  }
  async updateUserAdmin(req, res) {
    const { user_id } = req.params;

    await knex("users").where({ id: user_id }).update({ isAdmin: true });
    return res.status(200).json(" agora é administrador");
  }
  async updateUserAdminFalse(req, res) {
    const { user_id } = req.params;

    await knex("users").where({ id: user_id }).update({ isAdmin: false });
    return res.status(200).json("Não é  mais administrador");
  }
  async deleteUser(req, res) {
    const { user_id } = req.params;

    const user = await userdeleteservices.execute({ user_id });

    return res.status(200).json("Usuario deletado com sucesso");
  }
}
module.exports = UserController;
