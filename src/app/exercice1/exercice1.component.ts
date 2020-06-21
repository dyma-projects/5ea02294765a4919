import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-exercice1",
  templateUrl: "./exercice1.component.html",
  styleUrls: ["./exercice1.component.css"],
})
export class Exercice1Component implements OnInit {
  public valeurExo1 = "exo1";

  pressedHard = "";

  pressMe() {
    console.log("Outch ! press pas si fort !");
    this.pressedHard = "Aie dis donc !";
  }

  constructor() {}

  ngOnInit(): void {}
}
