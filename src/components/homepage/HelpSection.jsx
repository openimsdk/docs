import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';

export default function HelpSection({ className = '' }) {
  return (
    <section className="px-4 pt-16">
      <div
        className={clsx(
          'mx-auto max-w-7xl rounded-3xl bg-white p-4 py-10 text-black dark:bg-black dark:text-white lg:p-24 lg:py-20',
          className
        )}
      >
        <h2 className="mb-12 text-center lg:text-3xl">
          <Translate id="homepage.helpSection.title">
            How can we help you today?
          </Translate>
        </h2>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          <div className="rounded-lg bg-zinc-100 p-6 dark:bg-zinc-900">
            <img
              src="/static/landing-page/calendar.svg"
              alt="View a demo"
              width="48"
              height="48"
            />
            <h3 className="my-3">
              <Translate id="homepage.helpSection.viewDemo">
                View a Demo
              </Translate>
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              <Translate id="homepage.helpSection.viewDemoDescription">
                You can go to download the app for user testing.
              </Translate>
            </p>
            <Link
              href="https://www.openim.online/demo"
              className="text-primary dark:text-primary-100"
            >
              <Translate id="homepage.helpSection.goNow">Go Now</Translate>
              &nbsp;&rarr;
            </Link>
          </div>

          <div className="rounded-lg bg-zinc-100 p-6 dark:bg-zinc-900">
            <img
              src="/static/landing-page/customer.svg"
              alt="Support"
              width="48"
              height="48"
            />
            <h3 className="my-3">
              <Translate id="homepage.helpSection.support">Support</Translate>
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              <Translate id="homepage.helpSection.supportDescription">
                You can find or raise related issues under the OpenIM&apos;s
                repository.
              </Translate>
            </p>
            <Link
              href="https://github.com/OpenIMSDK/Open-IM-Server/issues"
              className="text-primary dark:text-primary-100"
            >
              <Translate id="homepage.helpSection.goNow">Go Now</Translate>
              &nbsp;&rarr;
            </Link>
          </div>

          <div className="rounded-lg bg-zinc-100 p-6 dark:bg-zinc-900">
            <img
              src="/static/landing-page/chat.svg"
              alt="FAQs"
              width="48"
              height="48"
            />
            <h3 className="my-3">
              <Translate id="homepage.helpSection.faq">FAQs</Translate>
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400">
              <Translate id="homepage.helpSection.faqDescription">
                Browse through our FAQs to find answers to commonly asked
                questions.
              </Translate>
            </p>
            <Link href="/faq" className="text-primary dark:text-primary-100">
              <Translate id="homepage.helpSection.faq">View FAQs</Translate>
              &nbsp;&rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
