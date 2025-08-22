import { Component, signal } from "@angular/core";


@Component({
  templateUrl: './hero-page.component.html'
})

export class HeroPageComponent {
  nameSignal = signal('IronMan')
  ageSignal = signal(45)

  getHeroDescription() {
    return `${this.nameSignal()} - ${this.ageSignal()}`
  }

  changeHero() {
    this.nameSignal.update(() => 'Spiderman')
    this.ageSignal.update(() => 22)
  }

  resetForm() {
    this.nameSignal.set('IronMan')
    this.ageSignal.set(45)
  }

  changeAge() {
    this.ageSignal.update(() => 60)
  }
}
