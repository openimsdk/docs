import React from 'react';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import ThemedImage from '@theme/ThemedImage';
import Translate from '@docusaurus/Translate';

export default function HeroSection() {
  return (
    <section className="noise-bg no-underline-links px-4 pt-16 lg:py-0">
      <Head>
        <link rel="prefetch" href="/static/landing-page/hero-light.png" />
        <link rel="prefetch" href="/static/landing-page/hero-dark.png" />
      </Head>
      <div className="mx-auto flex max-w-7xl flex-col items-center lg:h-[540px] lg:flex-row">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="mb-6 font-jakarta text-4xl font-bold lg:text-6xl">
            <Translate id="homepage.heroSection.title">
              Build with OpenIM
            </Translate>
          </h1>
          <p className="text-sm text-text-400 lg:max-w-lg lg:text-base">
            <Translate id="homepage.heroSection.mainContent">
              OpenIM is an open source instant messaging component built by IM
              technical experts. OpenIM includes IM server and client SDK, which
              realizes important features such as high performance, light
              weight, and easy expansion. By integrating OpenIM components and
              privatizing the deployment of the server, developers can quickly
              integrate instant messaging and real-time network capabilities
              into their own applications, and ensure the security and privacy
              of business data.
            </Translate>
          </p>
          <div className="mt-8 flex flex-col gap-4 lg:flex-row">
            <Link
              href="#start-building"
              className="rounded-sm bg-primary px-12 py-2.5 text-center font-semibold text-white hover:text-white"
            >
              <Translate id="homepage.heroSection.buildLink">
                Start building
              </Translate>
            </Link>
            <Link
              href="/guides"
              className="rounded-sm border border-solid border-primary bg-primary/10 px-12 py-2.5 text-center font-semibold text-primary hover:text-primary dark:border-primary-100 dark:text-primary-100"
            >
              <Translate id="homepage.heroSection.startLink">
                Getting started
              </Translate>
            </Link>
          </div>
        </div>
        <div className="mt-6 flex-1 lg:mt-0 xl:flex-none">
          <ThemedImage
            sources={{
              light: '/static/landing-page/hero-light.png',
              dark: '/static/landing-page/hero-dark.png',
            }}
            alt="Preview of using OpenIM SDKs"
            className="max-w-[420px] lg:max-w-[560px]"
          />
        </div>
      </div>
    </section>
  );
}
