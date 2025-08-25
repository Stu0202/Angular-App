
import { Component, signal } from "@angular/core";
import { CharacterListComponent } from "../../components/dragonball/character-list/character-list.component";
import { CharacterAddComponent } from "../../components/dragonball/character-add/character-add.component";


interface Character {
  id: number;
  name: string;
  power: number;
}


@Component({
  templateUrl: './dragonball-super-page.component.html',
  selector: 'dragonball-super',
  imports: [CharacterListComponent, CharacterAddComponent]

})
export class DragonballSuperPageComponent {

  name = signal('')
  power = signal(100)
  characters = signal<Character[]>([
    { id: 1, name: 'Goku', power: 9001 },
    { id: 2, name: 'Vegeta', power: 8000 },

  ])



  addCharacter() {
    if (!this.name() || !this.power() || this.power() <= 0) {
      return;
    }
    const newCharacter: Character = {
      //id: this.characters().length + 1,
      id: 1000,
      name: this.name(),
      power: this.power()
    }

    //this.characters.update((list) => [...list, newCharacter])
    console.log({ newCharacter })
    this.resetFields()
  }

  resetFields() {
    this.name.set('')
    this.power.set(0)
  }
}

