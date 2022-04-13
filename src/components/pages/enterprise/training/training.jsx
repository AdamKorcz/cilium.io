import React from 'react';

import Button from 'components/shared/button';
import Container from 'components/shared/container';
import Heading from 'components/shared/heading';
import AcendLogo from 'icons/logo-acend.inline.svg';
import IsovalentLogo from 'icons/logo-isovalent.inline.svg';

const title = 'Training';
const description =
  'The following partners offer Cilium related training in accordance with the training partner requirements of the Cilium project.';

const acend = {
  title: 'Cilium Basics',
  description:
    'This one-day training in English or German provides a practical and clear introduction to Cilium, an eBFP-based networking, observability and security stack for cloud and on-premise infrastructure.',
  buttonText: 'Learn more',
  buttonLink: 'https://www.acend.ch/en/trainings/cilium/',
};

const isovalent = {
  title: 'Getting started with Cilium',
  description:
    'Quickly get started with Cilium. Read the documentation or use our interactive tutorial in a live environment.',
  buttonText: 'Coming soon',
};
const Training = () => (
  <section className="py-10 md:py-20 lg:py-28">
    <Container className="">
      <Heading className="text-center" tag="h2">
        {title}
      </Heading>
      <p
        className="with-link-primary mx-auto mt-4 max-w-[592px] text-center text-lg"
        dangerouslySetInnerHTML={{ __html: description }}
      />
      <div className="mt-12 flex flex-col space-y-8 md:flex-row md:justify-between md:space-y-0 md:space-x-8">
        <div className="relative mx-auto flex min-h-[320px] max-w-[592px] basis-1/2 flex-col rounded-xl bg-white p-4 shadow-card sm:p-6 md:min-h-[400px] md:p-8 lg:min-h-[350px]">
          <AcendLogo className="h-10" />
          <Heading className="mt-7" size="2xs" tag="h3">
            {acend.title}
          </Heading>
          <p className="mt-2.5 text-sm sm:text-base xl:text-lg">{acend.description}</p>
          <Button
            className="mt-auto w-full self-start md:w-auto"
            theme="primary-1"
            to={acend.buttonLink}
          >
            {acend.buttonText}
          </Button>
        </div>

        <div className="relative mx-auto flex min-h-[350px] max-w-[592px] basis-1/2 flex-col rounded-xl bg-white p-6 shadow-card md:p-8">
          <IsovalentLogo className="h-10" />
          <Heading className="mt-7" size="2xs" tag="h3">
            {isovalent.title}
          </Heading>
          <p className="mt-2.5 text-sm sm:text-base xl:text-lg">{isovalent.description}</p>
          <Button className="mt-auto w-full self-start md:w-auto" theme="primary-1" disabled>
            {isovalent.buttonText}
          </Button>
        </div>
      </div>
    </Container>
  </section>
);

export default Training;
