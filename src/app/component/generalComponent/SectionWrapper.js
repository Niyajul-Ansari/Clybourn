import React from 'react';

export const SectionWrapper = ({ children, customClass = '' }) => {
  return (
    <section
      className={`w-full px-10 sm:px-16 md:px-24 lg:px-32 xl:px-36 2xl:px-56 py-20 ${customClass}`}
    >
      {children}
    </section>
  );
}
