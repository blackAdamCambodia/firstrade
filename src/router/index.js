import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "about",
    component: () => import("../views/About.vue"),
  },
  {
    path: "/history",
    name: "history",
    component: () => import("../views/History.vue"),
  },
  {
    path: "/corporate-responsibility",
    name: "corporate-responsibility",
    component: () => import("../views/CorporateResponsibility.vue"),
  },
  {
    path: "/press",
    name: "press",
    component: () => import("../views/Press.vue"),
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/signup",
    name: "signup",
    component: () => import("../views/SignUp.vue"),
  },
  {
    path: "/trading",
    name: "trading",
    component: () => import("../views/Trading.vue"),
  },
  {
    path: "/trading/stocks",
    name: "stocks",
    component: () => import("../views/Stocks.vue"),
  },
  {
    path: "/trading/fixed-income",
    name: "fixed-income",
    component: () => import("../views/FixedIncome.vue"),
  },
  {
    path: "/trading/pricing",
    name: "pricing",
    component: () => import("../views/Pricing.vue"),
  },
  {
    path: "/trading/margin-loans",
    name: "margin-loans",
    component: () => import("../views/MarginLoans.vue"),
  },
  {
    path: "/trading/cash-management",
    name: "cash-management",
    component: () => import("../views/CashManagement.vue"),
  },
  {
    path: "/trading/extended-hours",
    name: "extended-hours",
    component: () => import("../views/ExtendedHours.vue"),
  },
  {
    path: "/trading/dividend-reinvestment",
    name: "dividend-reinvestment",
    component: () => import("../views/DividendReinvestment.vue"),
  },
  {
    path: "/accounts/brokerage",
    name: "brokerage",
    component: () => import("../views/Brokerage.vue"),
  },
  {
    path: "/accounts/acat-transfer",
    name: "acat-transfer",
    component: () => import("../views/AcatTransfer.vue"),
  },
  {
    path: "/accounts/international",
    name: "international",
    component: () => import("../views/International.vue"),
  },
  {
    path: "/accounts/wire-fee-rebate",
    name: "wire-fee-rebate",
    component: () => import("../views/WireFeeRebate.vue"),
  },
  
  {
    path: "/resources/research-tools",
    name: "research-tools",
    component: () => import("../views/ResearchTool.vue"),
  },
  {
    path: "/resources/upcoming-ipo",
    name: "upcoming-ipo",
    component: () => import("../views/UpcomingIpo.vue"),
  },
  {
    path: "/support/contact",
    name: "contact",
    component: () => import("../views/Contact.vue"),
  },
  {
    path: "/legal/terms",
    name: "terms",
    component: () => import("../views/Terms.vue"),
  },
  {
    path: "/legal/privacy",
    name: "privacy",
    component: () => import("../views/Privacy.vue"),
  },
  {
    path: "/legal/accessibility",
    name: "accessibility",
    component: () => import("../views/Accessibility.vue"),
  },
  {
    path: "/legal/business-continuity",
    name: "business-continuity",
    component: () => import("../views/BusinessContinuity.vue"),
  },
  { 
    path: '/:pathMatch(.*)*',
    name: 'NotFound', 
    component:  () => import("../views/NotFound.vue") },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;
