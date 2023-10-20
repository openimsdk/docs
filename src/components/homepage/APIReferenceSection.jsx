import React from 'react';
import Link from '@docusaurus/Link';
import { ArrowUpRight } from 'react-feather';
import Head from '@docusaurus/Head';
import ThemedImage from '@theme/ThemedImage';
import Translate from '@docusaurus/Translate';

export default function APIReferenceSection() {
  return (
    <section className="relative mb-20 px-6">
      <Head>
        <link rel="prefetch" href="/static/landing-page/api-ref-light.png" />
        <link rel="prefetch" href="/static/landing-page/api-ref-dark.png" />
      </Head>
      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-10 rounded-2xl bg-gradient-to-r from-black to-zinc-800 px-6 py-20 text-center text-white dark:from-zinc-100 dark:to-white dark:text-black lg:flex-row lg:p-20 lg:text-left">
        <Link
          href="/restapi/introduction"
          aria-label="API Reference"
          target="_blank"
          className="absolute top-8 right-8 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-600/40 dark:bg-transparent"
        >
          <ArrowUpRight className="h-6 w-6 text-zinc-400 dark:text-black" />
        </Link>
        <div className="flex-1">
          <h2 className="text-4xl">
            <Translate id="homepage.apiSection.title">API Reference</Translate>
          </h2>
          <p className="text-zinc-400">
            <Translate id="homepage.apiSection.description">
              Don&apos;t worry, they are&apos;t complex. Use our
              developer-friendly APIs and integrate instant message
              communication into your web, mobile, or desktop applications
              programmatically.
            </Translate>
          </p>
          <Link
            href="/restapi/introduction"
            className="font-medium text-primary-100 dark:text-primary"
          >
            <Translate id="homepage.apiSection.getStarted">
              Get started with OpenIM APIs
            </Translate>
            &nbsp;&rarr;
          </Link>
        </div>
        <div className="flex flex-1 justify-end">
          <ThemedImage
            sources={{
              light: '/static/landing-page/api-ref-light.png',
              dark: '/static/landing-page/api-ref-dark.png',
            }}
            alt="API Reference Preview"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
