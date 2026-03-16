import { readCsv } from "./readers/csv-reader"
import { buildGoalMessage } from "./services/message-services"
import { sendWhatsappMessage } from "./senders/whatsapp-sender"

async function main() {
  const stores = await readCsv("data/stores-goals.csv")

  for (const store of stores) {
    const message = buildGoalMessage(store)

    await sendWhatsappMessage(
      store.coordinatorPhone,
      message
    )
  }
}

main()