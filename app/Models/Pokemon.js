export default class Pokemon{
  constructor({name, img, description, weight, height, types, id }){
  this.name = name
  this.height = height
  this.id = id
  this.weight = weight
  this.types = types
  this.img = img
  this.description = description

  }

  get Template(){
    return `
    <div class="card">
        <div class="card-body">
            <h4 class="card-title">${this.name} The ${this.types.join(", ")} Type Pokemon:</h4>
            <p class="card-text">${this.description}</p>
            <p class="card-text">Height:${this.height} | Weight:${this.weight}
            </div>
            ${this.Button}
    </div>
    
    `
  }
  get Button(){
    if(this.id){
      return  `<button class="btn btn-outline-success" onclick="app.myPokemonController.addPokemon()">Mark As Captured</button>`
    }
    return `<button class="btn btn-outline-danger" onclick="app.myPokemonController.removePokemon()">Release</button>`
  }
}