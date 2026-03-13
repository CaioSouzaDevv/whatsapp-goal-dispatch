import { readCsv } from "./readers/csv-reader"
import { buildGoalMessage } from "./services/message-services"

async function main() {
  const stores = await readCsv("data/stores-goals.csv")

  for (const store of stores) {
    const message = buildGoalMessage(store)

    console.log("Enviando para:", store.coordinatorPhone)
    console.log(message)
    console.log("-------------")
  }
}

main()