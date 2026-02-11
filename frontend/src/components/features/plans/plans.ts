import { ServiceCategory } from "../../../utils/types";

export type PlanType = 'one-time' | 'subscription';

export type SubscriptionDuration = 'monthly' | '6-months' | 'yearly';

export interface ServiceCategoryData {
  id: ServiceCategory;
  name: string;
  icon: string;
  description: string;
  planType: PlanType;
  hasCalculator: boolean;
  popularTag?: boolean;
}

export interface SubscriptionPlan {
  id: string;
  name: string;
  duration: SubscriptionDuration;
  price: number;
  originalPrice?: number;
  features: string[];
  popular?: boolean;
  savings?: string;
}

export interface OneTimePlan {
  id: string;
  name: string;
  description: string;
  startingPrice: number;
  features: string[];
}