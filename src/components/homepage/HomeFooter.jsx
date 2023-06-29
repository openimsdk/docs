import React from 'react';
import Link from '@docusaurus/Link';
import ThemedImage from '@theme/ThemedImage';
import clsx from 'clsx';

import { DiscordIcon } from '@site/src/icons';

export default function HomeFooter({ className }) {
  return (
    <footer className="bg-secondary-900">
      <div
        className={clsx(
          'mx-auto flex max-w-7xl flex-col gap-4 px-10 py-8 lg:flex-row lg:items-center lg:gap-8',
          className
        )}
      >
        <div>
          <ThemedImage
            sources={{ light: '/logo/light.png', dark: '/logo/dark.png' }}
            alt="Logo"
            className="h-10"
          />
        </div>
        <div className="flex items-center gap-3">
          <Link
            href="https://join.slack.com/t/openimsdk/shared_invite/zt-1tmoj26uf-_FDy3dowVHBiGvLk9e5Xkg"
            aria-label="Discord community"
          >
            <DiscordIcon className="h-7 w-7 text-zinc-400 hover:text-primary" />
          </Link>
        </div>
        <div className="flex-1 text-zinc-400 lg:text-right">
          Copyright &copy; OpenIM since 2023. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
