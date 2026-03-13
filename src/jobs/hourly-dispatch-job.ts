import cron from "node-cron";
import { readCsv } from "../readers/csv-reader";
import { buildGoalMessage } from "../services/message-services";
import { sendWhatsappMessage } from "../senders/whatsapp-sender";

async function processGoals(): Promise<void> {
	console.log("Iniciando processamento das metas...");

	const stores = await readCsv("data/stores-goals.csv");

	for (const store of stores) {
		const message = buildGoalMessage(store);
		await sendWhatsappMessage(store.coordinatorPhone, message);
	}

	console.log("Processamento finalizado.");
}

export function startDispatchJob(): void {
	processGoals();
	cron.schedule("0 * * * *", async () => {
		await processGoals();
	});
}
