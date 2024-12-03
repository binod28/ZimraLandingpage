/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "navbar-bg":
          "url('https://krispcall.com/wp-content/uploads/2024/12/cyber-monday-sub-nav-bar-bkg-img.png')",
        "footer-texture": "url('/images/footer-texture.png')",
        "button-gradient":
          "linear-gradient(90deg, #7114EF 0%, #1475F7 50%, #7114EF)",
      },

      boxShadow: {
        "custom-light":
          "rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset, rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
        "custom-blue-1":
          "rgba(3, 196, 250, 0.17) 0px -23px 25px 0px inset, rgba(3, 196, 250, 0.15) 0px -36px 30px 0px inset, rgba(3, 196, 250, 0.1) 0px -79px 40px 0px inset",
      },
    },
  },
  plugins: [],
};
