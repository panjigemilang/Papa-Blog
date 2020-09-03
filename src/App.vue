<template>
  <div>
    <Navbar />
    <NavbarButton />
    <div id="app">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import setAuthToken from "./components/Utils/setAuthToken";
import jwt_decode from "jwt-decode";
import { mapActions } from "vuex";

// Components
import Footer from "./components/Layouts/Footer";
import Navbar from "./components/Layouts/Navbar";
import NavbarButton from "./components/Layouts/NavbarButton";

export default {
  name: "App",
  components: {
    Footer,
    Navbar,
    NavbarButton,
  },
  methods: {
    ...mapActions(["toggleNavbar", "setCurrentUser", "logout"]),
  },
  created() {
    if (window.innerWidth < 600) this.toggleNavbar();
    if (localStorage.jwtToken) {
      // set token to authorization
      setAuthToken(localStorage.jwtToken);
      // get user data and decode token
      const decoded = jwt_decode(localStorage.jwtToken);
      // set current user and isAuthenticated
      this.setCurrentUser(decoded);
      // check for expired token
      const currentTime = Date.now() / 1000;
      if (decoded.exp < currentTime) {
        // logout user
        this.logout();
        // redirect to login
        window.location.href = "/login";
      }
    }
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "Product Sans";
  src: url("./assets/fonts/Product-Sans-Regular.ttf") format("truetype");
  font-weight: 300;
}

:root {
  box-sizing: border-box;
  font-family: "Jost", -apple-system, BlinkMacSystemFont, sans-serif;
  --text-primary: #1d3557;
  --text-secondary: #a8dadc;
  --bg-primary: #f2f8ff;
  --bg-secondary: #457b9d;
  --icons-color: #ff6d91;
  --color-primary-dark: #01382d;
  --color-primary: #0a9d53;
  --color-secondary: #45eb8a;
  --color-ternary: #707070;
  --color-quartery: #a1d9c6;
  --boundary: #a1d9c6;
  --footer-left: #bfefdb;
  --error: #f20000;
  --transition-speed: 600ms;
}

html,
body {
  position: relative;
}

body {
  background-color: var(--bg-primary);
  color: var(--text-secondary);
  font-size: 16px !important;
  font-family: "Product Sans";
  margin: 0;
  padding: 0;
}

body.overflow {
  overflow-x: hidden;
}

body::-webkit-scrollbar {
  width: 0.25rem;
}

body::-webkit-scrollbar-track {
  background: var(--text-secondary);
}

body::-webkit-scrollbar-thumb {
  background: #e63946;
}

#app {
  overflow-x: hidden;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

button {
  border: none;
  cursor: pointer;
  padding: 15px;

  &:hover {
    box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18),
      0 4px 15px 0 rgba(0, 0, 0, 0.15);
  }

  &:focus {
    border: 1px solid rgba(123, 198, 183, 0.5);
    border-radius: 0;
    outline: none;
  }
}

.btn-box {
  text-align: center;
}

.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

#router-link {
  display: inline-block;
}

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}
</style>
