export const dynamic = 'force-dynamic';

export function GET() {
  return Response.json(
    {
      revision: process.env.APP_REVISION ?? 'unknown',
      status: 'ok',
    },
    {
      headers: {
        'Cache-Control': 'no-store',
      },
    },
  );
}
