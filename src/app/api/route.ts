export async function GET() {
	console.log('*** API GET request ***');
	return Response.json({ message: 'GET request to the API' });
}
