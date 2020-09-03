<template>
  <fragment>
    <nav :class="getToggleNavbar ? 'navbar hide' : 'navbar show'">
      <!-- <nav class="navbar"> -->
      <ul class="navbar-nav">
        <fragment v-if="this.$store.getters.getState.isAuthenticated">
          <li class="nav-item auth logout" @click.prevent="toggle">
            <button class="link-nav" type="button" @click.prevent="onLogout">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="sign-out-alt"
                class="svg-inline--fa fa-sign-out-alt fa-w-16"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M497 273L329 441c-15 15-41 4.5-41-17v-96H152c-13.3 0-24-10.7-24-24v-96c0-13.3 10.7-24 24-24h136V88c0-21.4 25.9-32 41-17l168 168c9.3 9.4 9.3 24.6 0 34zM192 436v-40c0-6.6-5.4-12-12-12H96c-17.7 0-32-14.3-32-32V160c0-17.7 14.3-32 32-32h84c6.6 0 12-5.4 12-12V76c0-6.6-5.4-12-12-12H96c-53 0-96 43-96 96v192c0 53 43 96 96 96h84c6.6 0 12-5.4 12-12z"
                  class="fa-primary"
                />
              </svg>
              <span class="link-text"></span>
            </button>
          </li>
        </fragment>
        <fragment v-else>
          <li class="nav-item auth login" @click.prevent="toggle">
            <router-link class="link-nav" to="/login">
              <svg
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="sign-in-alt"
                class="svg-inline--fa fa-sign-in-alt fa-w-16"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M416 448h-84c-6.6 0-12-5.4-12-12v-40c0-6.6 5.4-12 12-12h84c17.7 0 32-14.3 32-32V160c0-17.7-14.3-32-32-32h-84c-6.6 0-12-5.4-12-12V76c0-6.6 5.4-12 12-12h84c53 0 96 43 96 96v192c0 53-43 96-96 96zm-47-201L201 79c-15-15-41-4.5-41 17v96H24c-13.3 0-24 10.7-24 24v96c0 13.3 10.7 24 24 24h136v96c0 21.5 26 32 41 17l168-168c9.3-9.4 9.3-24.6 0-34z"
                  class="fa-primary"
                />
              </svg>
              <span class="link-text"></span>
            </router-link>
          </li>
        </fragment>
        <li class="nav-item" :class="active === 1 ? 'active' : null" @click.prevent="toggle">
          <router-link class="link-nav" to="/">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="home"
              class="svg-inline--fa fa-home fa-w-18"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"
                class="fa-primary"
              />
            </svg>
            <span class="link-text">Home</span>
          </router-link>
        </li>
        <li class="nav-item" :class="active === 2 ? 'active' : null" @click.prevent="toggle">
          <router-link class="link-nav" to="/about">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="user"
              class="svg-inline--fa fa-user fa-w-14"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"
                class="fa-primary"
              />
            </svg>
            <span class="link-text">About</span>
          </router-link>
        </li>
        <li class="nav-item" :class="active === 3 ? 'active' : null" @click.prevent="toggle">
          <router-link class="link-nav" to="/about">
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="shopping-bag"
              class="svg-inline--fa fa-shopping-bag fa-w-14"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M352 160v-32C352 57.42 294.579 0 224 0 153.42 0 96 57.42 96 128v32H0v272c0 44.183 35.817 80 80 80h288c44.183 0 80-35.817 80-80V160h-96zm-192-32c0-35.29 28.71-64 64-64s64 28.71 64 64v32H160v-32zm160 120c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24zm-192 0c-13.255 0-24-10.745-24-24s10.745-24 24-24 24 10.745 24 24-10.745 24-24 24z"
                class="fa-primary"
              />
            </svg>
            <span class="link-text">Merchandise</span>
          </router-link>
        </li>
      </ul>
    </nav>
  </fragment>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Navbar",
  data() {
    return {
      active: 0
    };
  },
  beforeMount() {
    this.activeClass();
  },
  computed: {
    ...mapGetters(["getToggleNavbar", "getList"])
  },
  methods: {
    ...mapActions(["toggleNavbar", "logout"]),
    activeClass() {
      if (window.location.pathname === "/") {
        this.active = 1;
      } else if (window.location.pathname === "/about") {
        this.active = 2;
      } else if (window.location.pathname === "/merchandise") {
        this.active = 3;
      } else {
        this.active = 4;
      }
    },
    toggle() {
      if (window.innerWidth > 600) this.toggleNavbar();
    },
    onLogout() {
      this.logout();
    }
  },
  updated() {
    this.activeClass();

    if (this.getToggleNavbar)
      setTimeout(() => {
        document.getElementsByClassName("navbar")[0].style.visibility =
          "hidden";
      }, 1);
    else
      document.getElementsByClassName("navbar")[0].style.visibility = "visible";
  }
};
</script>

<style scoped>
.navbar {
  width: 5rem;
  height: 100vh;
  padding: 12px 0;
  position: fixed;
  background-color: var(--color-primary-dark);
  transition: all 600ms ease;
  -webkit-transition: all 600ms ease;
  -moz-transition: all 600ms ease;
  z-index: 9999;
}

.navbar:hover .link-text {
  opacity: 1;
}

.navbar-nav {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
}

.nav-item {
  width: 100%;
}

.active {
  background-color: var(--color-quartery);
}

.active .link-text {
  color: var(--text-primary);
}

.active .link-nav:hover .link-text {
  color: var(--boundary);
}

.nav-item.auth {
  border-radius: 3em;
  height: 60px;
  margin-bottom: 1em;
  width: 60px;
  transition: all 600ms;
  -webkit-transition: all 600ms;
  -moz-transition: all 600ms;
}

.nav-item.login {
  background-color: var(--bg-primary);
}

.nav-item.logout {
  background-color: rgb(219, 0, 0);
}

.nav-item.auth:hover {
  transform: scale(1.15);
}

.nav-item.login:hover {
  background-color: var(--color-quartery);
}

.nav-item.logout:hover {
  background-color: rgb(187, 0, 0);
}

.nav-item.auth svg {
  width: 1.75em;
  min-width: 1em;
  transform: translateY(-10px);
}

.nav-item.login .fa-primary {
  color: var(--color-primary-dark);
}

.nav-item.logout .fa-primary {
  color: var(--color-quartery);
}

.nav-item.login a:hover {
  background: none;
  color: var(--bg-primary);
  filter: grayscale(0%) opacity(1);
}

.nav-item.logout button {
  background: none !important;
  border: none;
  box-shadow: none;
  color: #069;
  text-decoration: underline;
  cursor: pointer;
}

.nav-item.logout button:hover {
  background: none;
  border: none;
  color: var(--bg-primary);
  filter: grayscale(0%) opacity(1);
}

.link-nav {
  align-items: center;
  color: var(--text-secondary);
  display: flex;
  height: 5rem;
  text-decoration: none;
  filter: grayscale(100%) opacity(0.7);
  transition: var(--transition-speed);
  -webkit-transition: var(--transition-speed);
  -moz-transition: var(--transition-speed);
}

.link-nav:hover {
  background: var(--bg-secondary);
  filter: grayscale(0%) opacity(1);
}

.link-text {
  color: var(--bg-primary);
  opacity: 0;
  margin-left: 1rem;
  filter: grayscale(100%) opacity(0.7);
  transition: width 600ms ease;
  -webkit-transition: width 600ms ease;
  -moz-transition: width 600ms ease;
}

.link-nav svg {
  max-height: 2rem;
  margin: 0 0.5rem;
  min-width: 2rem;
  width: 2rem;
}

.fa-primary {
  color: var(--icons-color);
}

.fa-secondary {
  color: #df49a6;
}

.fa-primary,
.fa-secondary {
  transition: var(--transition-speed);
}

.logo {
  font-weight: bold;
  text-transform: uppercase;
  margin-bottom: 1rem;
  text-align: center;
  color: var(--text-secondary);
  background: var(--bg-secondary);
  font-size: 1.5rem;
  letter-spacing: 0.3ch;
  width: 100%;
}

.logo svg {
  transform: rotate(0deg);
  transition: var(--transition-speed);
}

.logo-text {
  display: inline;
  position: absolute;
  left: -999px;
  transition: var(--transition-speed);
}

.navbar:hover .logo svg {
  transform: rotate(-180deg);
}

/* Small screens */
@media only screen and (max-width: 600px) {
  .navbar {
    bottom: 0;
    width: 100vw;
    height: 5rem;
  }

  .logo {
    display: none;
  }

  .navbar-nav {
    flex-direction: row;
  }

  .link-nav {
    justify-content: center;
  }

  .link-nav svg {
    max-height: 1.75rem;
  }

  .link-text {
    visibility: hidden;
  }
}

/* Large screens */
@media only screen and (min-width: 600px) {
  .navbar {
    top: 0;
    width: 5rem;
    height: 100vh;
    margin-left: -5rem;
  }

  .navbar.hide {
    margin-left: -5rem;
  }

  .navbar.show {
    margin-left: 0;
  }

  .navbar:hover {
    width: 12rem;
  }

  .navbar:hover .link-text {
    visibility: visible;
  }

  .navbar:hover .logo svg {
    margin-left: 11rem;
  }

  .navbar:hover .logo-text {
    left: 0px;
  }

  .nav-item:last-child {
    margin-top: auto;
  }

  .link-nav {
    padding-left: 0.9rem;
  }
}
</style>
