import { sql } from '@vercel/postgres';

export interface dataReceived {
	temperature: number;
	humidity: number;
}

export async function getEnviromentData() {
	const { rows } = await sql`SELECT * FROM enviromentdata LIMIT 5`;
	console.log(rows);
	return rows;
}

// INSERT INTO enviromentData (temperature, humidity) VALUES (${Temperatura}, ${Humedad})

export async function insertEnviromentData(dataReceived: dataReceived) {
	const { temperature, humidity } = dataReceived;
	let wasCreatedData = false;
	try {
		await sql`INSERT INTO enviromentData (temperature, humidity) VALUES (${temperature}, ${humidity})`;
		wasCreatedData = true;
	} catch (error) {
		console.log(error);
	}
	return wasCreatedData;
}
