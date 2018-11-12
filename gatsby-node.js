exports.createPages = ({ boundActionCreators }) => {
  const { createRedirect } = boundActionCreators;

  [
    ['/wp', '/index.html'],
    ['/wp/about-us', '/index.html'],
    ['/wp/classes/crossfit', '/index.html#schedule'],
    ['/wp/classes/crossfit-fundamentals', '/get-started.html#fundamentals'],
    ['/wp/classes/crossfit-personal-training', '/index.html#how-it-works'],
    ['/wp/contact-us', '/index.html#contact'],
    ['/wp/frequently-asked-questions', '/index.html#how-it-works'],
    ['/wp/our-classes', '/index.html#classes'],
    ['/wp/policies', '/service-agreement'],
    ['/wp/pricing', '/index.html#pricing'],
    ['/wp/schedule', '/index.html#schedule'],
    ['/wp/scheduling-guide', '/index.html#how-it-works'],
  ].forEach((r) => {
    createRedirect({
      fromPath: r[0],
      isPermanent: true,
      redirectInBrowser: true,
      toPath: r[1],
    });

    createRedirect({
      fromPath: `${r[0]}/`,
      isPermanent: true,
      redirectInBrowser: true,
      toPath: r[1],
    });
  });
};
