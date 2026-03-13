import fs from "fs"
import { parse } from "csv-parse"
import { StoreGoal } from "../types/store-goal"

export function readCsv(path: string): Promise<StoreGoal[]> {
  return new Promise((resolve, reject) => {
    const records: StoreGoal[] = []

    fs.createReadStream(path)
      .pipe(parse({ columns: true, trim: true }))
      .on("data", (data: StoreGoal) => {
        records.push(data)
      })
      .on("end", () => {
        resolve(records)
      })
      .on("error", (error) => {
        reject(error)
      })
  })
}