import React from 'react';
import Link from '@docusaurus/Link';
import clsx from 'clsx';
import ThemedImage from '@theme/ThemedImage';
import {
  AngularIcon,
  ElectronIcon,
  FlutterIcon,
  HTMLIcon,
  VueIcon,
  JSIcon,
  KotlinIcon,
  ReactIcon,
  SwiftIcon,
} from '../../icons';
import Head from '@docusaurus/Head';
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
        <div className="dyte-badge">SDKs</div>

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
                  <SDKLink href="sdks" Icon={ReactIcon} label="React" />
                </li>
                <li className="basis-[48%]">
                  <SDKLink href="sdks" Icon={VueIcon} label="Vue" />
                </li>
                <li className="basis-[48%]">
                  <SDKLink href="sdks" Icon={AngularIcon} label="Angular" />
                </li>
                <li className="basis-[48%]">
                  <SDKLink href="sdks" Icon={HTMLIcon} label="HTML" />
                </li>
                <li className="basis-[48%]">
                  <SDKLink href="sdks" Icon={ElectronIcon} label="Electron" />
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
                Dyte can help you deliver best-in-class communication experience
                for your mobile applications.
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
                <SDKLink href="sdks" Icon={KotlinIcon} label="Android" />
              </li>
              <li className="basis-[48%]">
                <SDKLink href="sdks" Icon={SwiftIcon} label="iOS" />
              </li>
              <li className="basis-[48%]">
                <SDKLink href="sdks" Icon={ReactIcon} label="React Native" />
              </li>
              <li className="basis-[48%]">
                <SDKLink href="sdks" Icon={FlutterIcon} label="Flutter" />
              </li>
            </ul>
            {/* <div className="flex flex-1 flex-col justify-end">
              <div className="rounded-2xl bg-secondary-700 p-4 dark:bg-secondary-900">
                <h5 className="text-center text-xs text-text-400">
                  COMING SOON
                </h5>
                <ul className="mb-0 flex list-none flex-col gap-2 pl-0"></ul>
              </div>
            </div> */}
          </div>
        </div>

        {/* <div
          className="sdk-section mb-16 flex flex-col rounded-3xl bg-secondary-900 lg:flex-row"
          data-section="desktop"
          id="desktop"
        >
          <div className="flex flex-[2] flex-col justify-center p-6 text-center lg:pl-16 lg:text-left">
            <div className="mb-4 text-xs font-semibold">COMING SOON</div>
            <h3 className="text-4xl font-semibold">Desktop</h3>
            <p className="text-sm leading-relaxed text-text-400 lg:max-w-sm">
              Take Dyte for a spin to build real-time communication solutions
              for Electron. Read the docs to get started with your desktop
              applications.
            </p>
            <Link href="#" className="text-sm">
              Learn More &rarr;
            </Link>
          </div>
          <div className="flex-1 rounded-3xl bg-secondary-800 p-6 px-8">
            <h4>Core SDK</h4>
            <p className="text-sm leading-relaxed text-text-400">
              Build high-quality custom video and voice calls with real-time
              communication using fully customizable and easy to integrate Core
              SDKs.
            </p>
            <ul className="flex list-none flex-col gap-2 pl-0">
              <li>
                <SDKLink
                  href="#"
                  Icon={ElectronIcon}
                  label="Electron"
                  disabled
                />
              </li>
            </ul>
          </div>
          <div className="flex-1 p-6 px-8">
            <h4>UI Kit</h4>
            <p className="text-sm leading-relaxed text-text-400">
              Integrate video and voice calls to your app or website in minutes
              using Dyte&apos;s prebuilt design library of UI components.
            </p>
            <div>
              <ul className="mb-0 flex list-none flex-col gap-2 pl-0">
                <li>
                  <SDKLink
                    href="#"
                    disabled
                    Icon={ElectronIcon}
                    label="Electron"
                  />
                </li>
              </ul>
            </div>
          </div>
        </div> */}
      </div>
      {/* <div className="text-center text-text-400">
        <p>
          Don&apos;t see your tech stack here?{' '}
          <Link href="https://dyte.io/contact">Contact Us</Link>
        </p>
      </div> */}
    </section>
  );
}
