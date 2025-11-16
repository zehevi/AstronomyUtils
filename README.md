# Filter Vignetting Calculator

This project is a web-based tool for astrophotographers to calculate the maximum distance a filter can be placed from a camera sensor without causing vignetting.

The tool takes into account the following parameters:

*   Filter size
*   Camera sensor dimensions
*   Telescope/lens focal length
*   Telescope/lens aperture diameter

The website features a professional and simple user interface. To streamline the user experience, it provides dropdown menus populated with known camera sensors, filters, and telescope OTAs (Optical Tube Assemblies) to quickly populate the calculation fields.

## Tech Stack

This project is built with [Next.js](https://nextjs.org/), a React framework for building modern web applications. It uses [TypeScript](https://www.typescriptlang.org/) for static typing and [Tailwind CSS](https://tailwindcss.com/) for styling.

## Building and Running

To get started, clone the repository and install the dependencies:

```bash
git clone https://github.com/<your-username>/astronomy-utils.git
cd astronomy-utils/app
npm install
```

Then, you can run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for Production

To build the application for production, run the following command:

```bash
npm run build
```

## Testing

The project uses [Vitest](https://vitest.dev/) for testing. To run the tests, use the following command:

```bash
npm test
```
