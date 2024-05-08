import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import Translate from '@docusaurus/Translate';

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
          <Translate id="homepage.heroSection.mainContent">
            OpenIM is an open source instant messaging component built by IM
            technical experts. OpenIM includes IM server and client SDK, which
            realizes important features such as high performance, light weight,
            and easy expansion. By integrating OpenIM components and privatizing
            the deployment of the server, developers can quickly integrate
            instant messaging and real-time network capabilities into their own
            applications, and ensure the security and privacy of business data.
          </Translate>
        </p>
        <div className="footer__row">
          <div className="footer__data">
            <div className="footer__cta">
              <p>
                <Translate id="homepage.heroSection.joinSlack">
                  Join the Slack channel to communicate and discuss with
                  everyone!
                </Translate>
              </p>
              <Link href="https://join.slack.com/t/openimsdk/shared_invite/zt-2hljfom5u-9ZuzP3NfEKW~BJKbpLm0Hw">
                <Translate id="homepage.heroSection.join">Join</Translate>
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
