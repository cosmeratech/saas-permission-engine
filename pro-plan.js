import SubscriptionPlan from "./SubscriptionPlan.js";

export default class ProPlan extends SubscriptionPlan {
  constructor() {
    super({
      generateAI: 100,
      exportFile: 50,
      teamInvite: 5
    });
  }

  execute(action) {
    if (action === "generateAI") return "High-quality AI response";
    if (action === "exportFile") return "Clean export";
    if (action === "teamInvite") return "Team member invited";
  }
}