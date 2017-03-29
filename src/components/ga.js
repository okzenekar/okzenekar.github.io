export default function () {
  window.ga=window.ga||function(){(window.ga.q=window.ga.q||[]).push(arguments)};window.ga.l=+new Date;
  window.window.ga('create', 'UA-96441645-1', 'auto');

  // Replace the following lines with the plugins you want to use.
  window.ga('require', 'eventTracker');
  window.ga('require', 'outboundLinkTracker');
  window.ga('require', 'urlChangeTracker');
  window.ga('require', 'mediaQueryTracker', {
    definitions: [
      {
        name: 'Breakpoint',
        dimensionIndex: 1,
        items: [
          {name: 'mobile', media: '(max-width: 767px)'},
          {name: 'tablet', media: '(min-width: 768px)'},
          {name: 'desktop', media: '(min-width: 1025px)'}
        ]
      }
    ]
  });

  window.ga('send', 'pageview');
}