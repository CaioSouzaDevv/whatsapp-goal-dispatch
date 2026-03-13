import { StoreGoal } from "../types/store-goal";

export function buildGoalMessage(store: StoreGoal): string {
	return `
 📊 Atualização de meta

Loja: ${store.storeName}
Meta atual: R$ ${store.goalValue}
`.trim();
}
