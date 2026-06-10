# PGV Mesh

Source for [www.pgvmesh.org](https://www.pgvmesh.org).

## What is PGV Mesh?

PGV Mesh is a volunteer-run community network using MeshCore for grid-independent text communication.

## What is this repo?

This repository contains the source code for the PGV Mesh website. It is designed as a clean, single-page landing site built with Astro, and deployed to Cloudflare Workers Static Assets.

The site is focused on providing details about:
- MeshCore off-grid networking.
- Recommended configuration settings.
- Joining the community Discord.
- Accessing the live coverage map.

All main content is authored directly in `src/pages/index.astro`.

## Local development

```sh
npm install
npm run dev        # http://localhost:4321
```

Other scripts:

- `npm run build` — production build (runs Pagefind over `dist/` as a postbuild step)
- `npm run preview` — serve the built site locally

## Contributing

Issues and pull requests are welcome.

Use [GitHub Issues](https://github.com/pgvmesh/www/issues) for bugs in the site itself. For questions about the network or configuration, join our Discord.

## License

Our website content is licensed under Creative Commons. Feel free to use it for your club's website. Please remember to update your links and branding!
