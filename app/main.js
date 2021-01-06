import FreePokemonController from "./Controllers/FreePokemonController.js";
import MyPokemonController from "./Controllers/FreePokemonController.js"
class App {
  freePokemonController = new FreePokemonController();
  myPokemonController = new MyPokemonController();
}

window["app"] = new App();
