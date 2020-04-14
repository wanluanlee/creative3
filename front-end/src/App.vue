<template>
  <div id="app" class="background">
    <div class="row mb-3">
      <div class="col-md-9">
        <router-link to="/">
          <div class="menu-item browse">
            <p class="menu">Home</p>
          </div>
        </router-link>
        <router-link to="/about">
          <div class="menu-item browse">
            <p class="menu">Sales</p>
          </div>
        </router-link>
        <router-link to="/cart">
          <div class="menu-item browse">
            <p class="menu">Cart</p>
          </div>
        </router-link>
        <router-link to="/comment">
          <div class="menu-item browse">
            <p class="menu">Comment</p>
          </div>
        </router-link>
      </div>
      <h1 class="title">My Online Store</h1>
      <span class="avatar"><img src="./assets/home_pic.jpg" alt="" /></span>
      <div class="col-md-3">
      </div>
    </div>

    
    <router-view> </router-view>
    <!-- No more inCart -->
    <footer id="footer">
      <div class="container_footer">
        <div class="box1_footer">
          <h4>Contact Us</h4>
          <p>Email: wanluanlee@gmail.com</p>
        </div>
        <div class="box2_footer">
          <h4>Git hub</h4>
            <a href="https://github.com/wanluanlee/creative3" class="social-round-icon white-round-icon fa-icon" title=""> Click here
            </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.title {
    color: white;
    font-size: 80px;
    font-family: Snell Roundhand, cursive
  }

  .menu
  {
    color: white;
    font-size: 25px;
    font-family: Snell Roundhand, cursive
  }

.avatar img {
      border-radius: 100%;
      display: block;
      width: 20em;
    }

    .avatar {
    border-radius: 100%;
    display: inline-block;
    margin: 0 0 2em 0;
    padding: 0.5em;
    border: solid 2px white;
  }

  .container
{
  display: flex;
  justify-content: space-around
}
.menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "none brand side";
  margin-bottom: 50px;
}

.background
  {
    background-image: url('/images/background.jpg');
  }

  .col-md-9
  {
    display: flex;
  justify-content: space-around
  }
  .card-title .card-text
    {
      color: white;
      font-size: 20px;
      font-family: Snell Roundhand, cursive
    }

    #footer {
  text-align: center;
  padding: 4em 0 4em 0;
}

  #footer:before {
    content: '';
    border-top: solid 1px rgba(255, 255, 255, 0.25);
    width: 10em;
    display: block;
    margin: 0 auto 3em auto;
  }

  #footer p
  {
    color: white;
    font-size: 20px;
    font-family: Snell Roundhand, cursive;
  }

  #footer h4
  {
    color: white;
    font-size: 30px;
    font-weight: bold;
    font-family: Snell Roundhand, cursive;
  }
</style>
