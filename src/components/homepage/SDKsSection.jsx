import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import {
  AngularIcon,
  ElectronIcon,
  FlutterIcon,
  HTMLIcon,
  VueIcon,
  KotlinIcon,
  ReactIcon,
  SwiftIcon,
} from '../../icons';
import { useState } from 'react';
import Translate from '@docusaurus/Translate';

function SDKLink({ href, Icon, label, disabled = false }) {
  return (
    <Link
      className={clsx(
        'flex items-center gap-2 rounded-md p-2 text-current transition hover:bg-secondary-700 hover:text-black hover:no-underline dark:hover:text-white',
        disabled && 'cursor-default'
      )}
      href={!disabled ? href : undefined}
    >
      <Icon className="h-8 w-8" />
      {label}
    </Link>
  );
}

export default function SDKsSection() {
  const [visibleSection, setVisibleSection] = useState('Web');

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const section = entry.target.getAttribute('data-section');

          if (entry.isIntersecting) {
            entry.target.classList.add('intersected');
            setVisibleSection(section);
          }
        }
      },
      { rootMargin: '-50% 0% -50% 0%' }
    );

    const elements = document.querySelectorAll('.sdk-section');
    for (const el of elements) {
      observer.observe(el);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  function Pill({ section }) {
    return (
      <div
        className={clsx(
          'flex-1 cursor-pointer rounded-md py-2 px-6 text-center font-jakarta text-sm font-semibold',
          visibleSection === section
            ? 'bg-primary text-white'
            : 'text-black dark:text-white'
        )}
        onClick={() => {
          document
            .getElementById(section)
            ?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }}
      >
        {`${section[0].toUpperCase()}${section.substring(1)}`}
      </div>
    );
  }

  return (
    <section className="bg-secondary-1000 py-20 px-4" id="start-building">
      <div className="mx-auto max-w-7xl">
        <div className="docs-badge">SDKs</div>

        <div className="sticky top-14 z-20 -mt-4 flex flex-col items-center gap-6 bg-secondary-1000 py-6 lg:flex-row lg:justify-between lg:py-0">
          <h2 className="my-0 text-center font-jakarta lg:text-3xl">
            <Translate id="homepage.sdksSection.title">
              We support your tech stack!
            </Translate>
          </h2>

          <div className="mx-auto flex h-20 w-full flex-1 items-center justify-center self-start lg:w-auto lg:justify-end">
            <div className="inline-flex items-center rounded-lg bg-zinc-100 p-2 text-sm dark:bg-zinc-800 lg:text-base">
              <Pill section="web" />
              <Pill section="mobile" />
            </div>
          </div>
        </div>

        <div
          className="sdk-section my-16 flex flex-col rounded-3xl bg-secondary-900 lg:flex-row"
          data-section="web"
          id="web"
        >
          <div className="flex flex-1 flex-col justify-center p-6 text-center lg:pl-16 lg:text-left">
            <h3 className="text-4xl font-semibold">Web</h3>
            <p className="text-sm leading-relaxed text-text-400 lg:max-w-sm">
              <Translate id="homepage.sdksSection.webDescription">
                Interested to build using React, Vue or most of Web Framework.
                this section covers everything you need to know for creating
                instant messaging solutions for web applications.
              </Translate>
            </p>
            {/* <Link className="text-sm">Learn More &rarr;</Link> */}
          </div>
          <div className="flex-1 bg-secondary-800 p-6 px-8 lg:rounded-l-3xl">
            <h4>Support</h4>
            <p className="text-sm leading-relaxed text-text-400">
              <Translate id="homepage.sdksSection.webSupport">
                Integrate instant messaging to your app or website in minutes
                using OpenIM&apos;s js sdk.
              </Translate>
            </p>
            <div>
              <ul className="mb-0 flex list-none flex-wrap gap-2 pl-0">
                <li className="basis-[48%]">
                  <SDKLink
                    href="sdks/quickstart/browser"
                    Icon={ReactIcon}
                    label="React"
                  />
                </li>
                <li className="basis-[48%]">
                  <SDKLink
                    href="sdks/quickstart/browser"
                    Icon={VueIcon}
                    label="Vue"
                  />
                </li>
                <li className="basis-[48%]">
                  <SDKLink
                    href="sdks/quickstart/browser"
                    Icon={AngularIcon}
                    label="Angular"
                  />
                </li>
                <li className="basis-[48%]">
                  <SDKLink
                    href="sdks/quickstart/browser"
                    Icon={HTMLIcon}
                    label="HTML"
                  />
                </li>
                <li className="basis-[48%]">
                  <SDKLink
                    href="sdks/quickstart/browser"
                    Icon={ElectronIcon}
                    label="Electron"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div
          className="sdk-section mb-16 flex flex-col rounded-3xl bg-secondary-900 lg:flex-row"
          data-section="mobile"
          id="mobile"
        >
          <div className="flex flex-1 flex-col justify-center p-6 text-center lg:pl-16 lg:text-left">
            <h3 className="text-4xl font-semibold">Mobile</h3>
            <p className="text-sm leading-relaxed text-text-400 lg:max-w-sm">
              <Translate id="homepage.sdksSection.nativeDescription">
                Plan to build a instant messaging solution for Android, React
                Native, iOS, or Flutter, check the docs here to understand how
                OpenIM can help you deliver best-in-class communication
                experience for your mobile applications.
              </Translate>
            </p>
            {/* <Link className="text-sm" href="#">
              Learn More &rarr;
            </Link> */}
          </div>
          <div className="flex flex-1 flex-col bg-secondary-800 p-6 px-8 lg:rounded-l-3xl">
            <h4>Support</h4>
            <p className="text-sm leading-relaxed text-text-400">
              <Translate id="homepage.sdksSection.nativeSupport">
                Integrate instant messaging to your app or website in minutes
                using OpenIM&apos;s native sdk.
              </Translate>
            </p>
            <ul className="mb-0 flex list-none flex-wrap gap-2 pl-0">
              <li className="basis-[48%]">
                <SDKLink
                  href="sdks/quickstart/android"
                  Icon={KotlinIcon}
                  label="Android"
                />
              </li>
              <li className="basis-[48%]">
                <SDKLink
                  href="sdks/quickstart/ios"
                  Icon={SwiftIcon}
                  label="iOS"
                />
              </li>
              <li className="basis-[48%]">
                <SDKLink
                  href="sdks/quickstart/reactNative"
                  Icon={ReactIcon}
                  label="React Native"
                />
              </li>
              <li className="basis-[48%]">
                <SDKLink
                  href="sdks/quickstart/flutter"
                  Icon={FlutterIcon}
                  label="Flutter"
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
