import { UpperCasePipe } from "@angular/common";
import { Component, computed, signal } from "@angular/core";


@Component({
  templateUrl: './hero-page.component.html',
  imports: [UpperCasePipe]
})

export class HeroPageComponent {
  nameSignal = signal('IronMan')
  ageSignal = signal(45)

  heroDescription = computed(() => {
    const description = `${this.nameSignal()} - ${this.ageSignal()}`
    return description
  })

  captilizedName = computed(() => this.nameSignal().toUpperCase())


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
