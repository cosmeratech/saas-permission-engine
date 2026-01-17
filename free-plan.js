import SubscriptionPlan from "./SubscriptionPlan.js";

export default class FreePlan extends SubscriptionPlan {
  constructor() {
    super({
      generateAI: 5,
      exportFile: 1
    });
  }

  execute(action) {
    if (action === "generateAI") return "AI response with watermark";
    if (action === "exportFile") return "Exported with branding";
  }
}