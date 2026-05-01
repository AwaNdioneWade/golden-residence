/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    // Important: resolve globs relative to this config file, not the shell cwd
    relative: true,
    files: ["./src/**/*.{html,ts}"],
  },
  theme: {
    extend: {},
  },
  plugins: [],
}

