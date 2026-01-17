export default class User {
  constructor(name, plan) {
    this.name = name;
    this.plan = plan;
  }

  performAction(action) {
    try {
      const result = this.plan.perform(action);
      console.log(`${this.name}: ${result}`);
    } catch (err) {
      console.error(`${this.name}: ${err.message}`);
    }
  }
}