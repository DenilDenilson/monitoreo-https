import {
	dataReceived,
	getEnviromentData,
	insertEnviromentData,
} from '../utils/enviromentData';

export async function GET() {
	console.log('*** API GET request ***');
	const data = await getEnviromentData();

	return Response.json(data);
}

export async function POST(req: Request) {
	console.log('*** API POST request ***');
	const newData: dataReceived = await req.json();
	console.log(newData);
	try {
		await insertEnviromentData(newData);
	} catch (error) {
		console.log(error);
		return Response.json({ error: error });
	}

	return Response.json({ message: 'Data inserted' });
}
