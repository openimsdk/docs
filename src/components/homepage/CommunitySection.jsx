import React from 'react';
import Link from '@docusaurus/Link';

import { DiscordIcon } from '@site/src/icons';
import Translate from '@docusaurus/Translate';

const githubUsernames = [
  'hrxiang',
  'Oliver-WJ',
  'FGadvancer',
  'withchao',
  'wangchuxiao-dev',
  'skiffer-git',
  'cubxxw',
  'std-s',
  'MyCupOfTeaOo',
  'wangkaisGH',
  'airib',
  'sdzhu',
];

export default function CommunitySection() {
  return (
    <section className="no-underline-links">
      <div className="mx-auto flex w-full flex-col items-center justify-center bg-gradient-to-b from-[#262626] to-black px-4 py-16 pt-64 text-white dark:from-zinc-200/90 dark:to-white dark:text-zinc-700">
        <h2 className="text-3xl">
          <Translate id="homepage.communitySection.join">Join the </Translate>
          <span className="text-primary-100">
            <Translate id="homepage.communitySection.community">
              community
            </Translate>
          </span>
        </h2>
        <p className="mb-10 text-zinc-500">
          <Translate id="homepage.communitySection.subTitle">
            Engage with our ever-growing community to get the latest updates,
            product support, and more.
          </Translate>
        </p>
        <div className="mx-auto mb-16 flex flex-wrap -space-x-1.5">
          {githubUsernames.map((username) => (
            <img
              key={username}
              src={`https://github.com/${username}.png?size=60`}
              alt={`User ${username}`}
              loading="lazy"
              className="h-6 w-6 rounded-full border-2 border-solid border-white transition hover:-translate-y-2 hover:scale-150 lg:h-12 lg:w-12"
            />
          ))}
        </div>
        <div className="flex w-full flex-col items-center justify-center gap-2 text-sm font-semibold lg:flex-row lg:gap-8">
          <Link
            className="flex w-full items-center justify-center gap-2 rounded-sm border border-solid border-primary-100 bg-primary-100/10 px-2 py-2 text-primary-100 lg:w-auto"
            href="https://join.slack.com/t/openimsdk/shared_invite/zt-1tmoj26uf-_FDy3dowVHBiGvLk9e5Xkg"
          >
            <DiscordIcon className="h-6 w-6" /> Slack &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
