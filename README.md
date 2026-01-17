# saas-permission-engine
**Because not everyone deserves unlimited features (AI usage, exports, and team access).**

A modular JavaScript engine that models how real-world SaaS products enforce
subscription plans, usage limits, and feature access — using clean OOP,
polymorphism, and modern JavaScript patterns.

This is **not a toy project**.  
It mirrors the internal logic used by products like AI tools, streaming platforms,
and productivity SaaS apps.

## What This Project Solves

In real products:
- Free users shouldn’t spam AI
- Pro users get higher limits
- Enterprise users get “unlimited” (and special treatment)
- Business logic must be protected and extensible

This engine handles:
- Plan-based feature access
- Usage tracking and limits
- Different behaviors for the same action
- Clean separation of concerns

## Core Concepts Demonstrated

- **Private class fields (`#`)** → internal state protection
- **Inheritance & method overriding** → plan-specific behavior
- **Polymorphism** → same action, different outcome
- **Maps** → scalable permission & usage tracking
- **Composition** → users + plans, not messy conditionals

---

## Project Structure

subscription-access-engine/
│
├── plans/
│ ├── SubscriptionPlan.js # Base abstract logic
│ ├── FreePlan.js # Limited access
│ ├── ProPlan.js # Extended access
│ └── EnterprisePlan.js # Unlimited + SLA logic
│
├── User.js # User ↔ Plan composition
└── main.js # Entry point / simulation

## Example Features Controlled

| Feature        | Free | Pro | Enterprise |
|---------------|------|-----|------------|
| AI Generation | Limited | High | Unlimited |
| Export Files  | Watermarked | Clean | Unlimited |
| Team Invites  | ❌ | Limited | Unlimited |
