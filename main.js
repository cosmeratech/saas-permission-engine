import User from "../user/user.js";
import FreePlan from "../plans/free-plan.js";
import ProPlan from "../plans/pro-plan.js";
import EnterprisePlan from "../plans/enterprise-plan.js";

const freeUser = new User("Aarav", new FreePlan());
const proUser = new User("Meera", new ProPlan());
const enterpriseUser = new User("CorpX", new EnterprisePlan());

freeUser.performAction("generateAI");
freeUser.performAction("exportFile");
freeUser.performAction("exportFile"); // ❌

proUser.performAction("teamInvite");
enterpriseUser.performAction("generateAI");