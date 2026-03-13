import { startDispatchJob } from "./jobs/hourly-dispatch-job";

function main() {
	console.log("Aplicação iniciada.");
	startDispatchJob();
}

main();
