const { basePath } = global;
const { polyfill } = require(`${basePath}/helpers`);
const { User } = require(`${basePath}/src/carpooling/register/domain/models`);

/**
 * Valida que el objeto recibido sea una instancia de User.
 * @param {User} user
 */
function assertThatIsUser(user) {
  if (!(user instanceof User))
    throw new TypeError('No se recibio un modelo de user');
}

class UserRepository {
  constructor(connection) {
    if (polyfill.isset(connection))
      this.repository = connection.getRepository(User);
  }

  /**
   * Método encargado de guardar una user.
   * @param {User} user
   */
  create(user) {
    assertThatIsUser(user);
    return this.persist(user);
  }

  /**
   * Método encargado de persistir el user en la base de datos.
   * @param {User} item
   */
  persist(item) {
    return this.repository.save(item);
  }
}

module.exports = UserRepository;
