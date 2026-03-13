// src/senders/whatsapp-sender.ts

export async function sendWhatsappMessage(phone: string, message: string): Promise<void> {
	// simulação de envio
	console.log("Enviando para:", phone);
	console.log(message);
	console.log("-------------");
}
