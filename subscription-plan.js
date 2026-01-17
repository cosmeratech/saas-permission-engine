export default class SubscriptionPlan {
  #usage;
  #limits;

  constructor(limits) {
    this.#limits = new Map(Object.entries(limits));
    this.#usage = new Map();
  }

  canPerform(action) {
    const used = this.#usage.get(action) || 0;
    const limit = this.#limits.get(action);

    if (limit === undefined) return false;
    if (limit === Infinity) return true;

    return used < limit;
  }

  recordUsage(action) {
    this.#usage.set(action, (this.#usage.get(action) || 0) + 1);
  }

  perform(action) {
    if (!this.canPerform(action)) {
      throw new Error(`Action "${action}" limit reached`);
    }

    this.recordUsage(action);
    return this.execute(action);
  }

  execute() {
    throw new Error("execute() must be overridden");
  }
}