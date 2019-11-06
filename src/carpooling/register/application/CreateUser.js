const {basePath} = global;
const { User } = require(`${basePath}/src/carpooling/register/domain/models`);
const { polyfill } = require(`${basePath}/helpers`);

/**
 * Funcion que valida que el command recibido sea valido y cumpla
 * con los valores esperados.
 */
function assertThatCommandIsValid(command) {
  if (polyfill.empty(command.user())) {
    const err = new Error('No se encontró datos del usuario');
    err.code = 404;
    throw err;
  }
}

class CreateUser {

  /**
   * @param {UserRepository} repository
   */
  constructor(repository) {
    this.repository = repository;
  }

  /**
   * Metodo que se encarga de realizar el registro de usuario
   * en la base de datos.
   * 
   * @param {CreateuserCommand} command 
   */
  process(command) {
    assertThatCommandIsValid(command);
    return this.repository.create(
      new User(command.user())
    );
  }
}

module.exports = CreateUser;