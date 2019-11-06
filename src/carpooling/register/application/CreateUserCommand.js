class CreateUserCommand {

  constructor(userData) {
    this.userData = userData;
  }
         
  user() {
      return this.userData;
  }
}

module.exports = CreateUserCommand;