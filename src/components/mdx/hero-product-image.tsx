'use client';

import Image from 'next/image';
import { useSyncExternalStore } from 'react';
import { useTheme } from 'fumadocs-ui/provider/base';

const subscribeToHydration = () => () => {};

export function HeroProductImage() {
  const { resolvedTheme } = useTheme();
  const hydrated = useSyncExternalStore(
    subscribeToHydration,
    () => true,
    () => false,
  );
  const source =
    hydrated && resolvedTheme === 'dark'
      ? '/brand/openimsdk-im-hero-dark.png'
      : '/brand/openimsdk-im-hero-light.png';

  return (
    <Image
      alt=""
      className="chat-hero-product-image"
      height={1086}
      priority
      sizes="(max-width: 900px) calc(100vw - 48px), 48vw"
      src={source}
      width={1448}
    />
  );
}
