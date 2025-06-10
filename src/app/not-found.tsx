import React from 'react';
import Link from 'next/link';
import { headers } from 'next/headers';

export default async function NotFound() {
  const headersList = await headers();
  const domain = headersList.get('host');
  const data = {
    name: 'Not Found',
    domain: domain || 'unknown',
  };
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-4 text-center">
      <h1 className="text-4xl font-bold">404 - Page Not Found - {data.domain}</h1>
      <p className="mt-4 text-lg">Could not find the requested resource</p>
      <p className="mt-8">
        <Link href="/" className="rounded-md bg-blue-500 px-4 py-2 text-white hover:bg-blue-600">
          Return to Home
        </Link>
      </p>
    </div>
  );
}
