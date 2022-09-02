<template>
    <nav class="navbar navbar-expand-lg navbar-light sticky-top" id="navbar">
        <div class="container-fluid mx-auto ps-5">
          <router-link class="logo navbar-brand" to="/">
            Kelly Chang
          </router-link>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link class="navlink nav-link active" to="/about">About Me</router-link>
              </li>
              <li class="nav-item">
                <router-link class="navlink nav-link active" to="/portfolio">Portfolio</router-link>
              </li>
              <li class="nav-item">
                <router-link class="navlink nav-link active" to="/food-map">Food Map</router-link>
              </li>
            </ul>
          </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavBarView',
}
</script>

<style scoped>
nav{
    background-color: var(--main-color) !important;
}
nav a {
    color: #fff !important;
}
.navbar-toggler {
    color: #fff !important;
    border-color: var(--main-color) !important;
}
.navbar-toggler:focus {
    box-shadow: var(--main-color);
}
.navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255,9' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
}
.logo {
    font-family: 'Fasthand', cursive;
    font-size: 24px !important;
}
.navlink {
    font-size: 14px !important;
}
.navbar-collapse {
    flex-grow: 0 !important;
}
.navbar > .container-fluid{
    justify-content: space-between !important;
    padding: 0 50px !important;
}
@media (min-width: 992px){
    .navbar>.container-fluid{
        justify-content: center !important;
    }
}
</style>