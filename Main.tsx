import { signal, property, tool, onready, node } from "./decorators";

export default class Main extends godot.SceneTree {
  _initialize() {
    console.log('here')
  }
}
