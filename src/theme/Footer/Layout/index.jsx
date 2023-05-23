import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';

export default function FooterLayout({ style, links, logo, copyright }) {
  return (
    <footer
      className={clsx('footer', {
        'footer--dark': style === 'dark',
      })}
    >
      <div className="container-fluid container">
        {logo && <div className="margin-bottom--sm">{logo}</div>}
        <p className="footer__description">
          OpenIM is an open source instant messaging component built by IM
          technical experts. OpenIM includes IM server and client SDK, which
          realizes important features such as high performance, light weight,
          and easy expansion. By integrating OpenIM components and privatizing
          the deployment of the server, developers can quickly integrate instant
          messaging and real-time network capabilities into their own
          applications, and ensure the security and privacy of business data.
        </p>
        <div className="footer__row">
          <div className="footer__data">
            <div className="footer__cta">
              <p>
                Join the Slack channel to communicate and discuss with everyone!
              </p>
              <Link href="https://join.slack.com/t/openimsdk/shared_invite/zt-1tmoj26uf-_FDy3dowVHBiGvLk9e5Xkg">
                Join
              </Link>
            </div>
          </div>
          <div className="links">{links}</div>
        </div>
        {copyright && (
          <div className="footer__bottom text--center">{copyright}</div>
        )}
      </div>
    </footer>
  );
}
