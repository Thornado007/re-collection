---
date: 2024-12-03
---
## Featured Collections

<!-- First Card -->
<div class="home-card">
  <div class="card-image" style="background-image: url('/images/archive/acollectionofflowers/202410_R3_NikonFE_KodakGold200_Coolscan5000_012.jpg');"></div>
  <div class="card-overlay"></div>
  <a href="/archive/thor-vermin-archive/a-collection-of-flowers/" class="card-link">
    <div class="card-label">
      A Collection of Flowers by Thor Vermin
    </div>
  </a>
</div>

<!-- Spacer -->
<div class="card-spacer"></div>

<!-- Second Card -->
<div class="home-card">
  <div class="card-image" style="background-image: url('/images/archive/thorvermin/portraits/202507_R2_FujiC200_09.jpg');"></div>
  <div class="card-overlay"></div>
  <a href="/archive/thor-vermin-archive/portraits/" class="card-link">
    <div class="card-label">
      Portraits by Thor Vermin
    </div>
  </a>
</div>

<style>
/* Desktop */
.home-card {
  width: 100%;
  height: 600px;
  position: relative;
  box-shadow: 5px 5px 20px 1px rgba(0,0,0,0.5);
  overflow: hidden;
}

.card-image {
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.card-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0,0,0,0.24);
}

.card-link {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  text-decoration: none;
}

.card-label {
  position: absolute;
  bottom: 2rem;
  left: 2rem;
  background: white;
  color: black;
  padding: 1rem 2rem;
  border-radius: 9999px;
  font-weight: bold;
  max-width: calc(100% - 4rem);
  font-size: 1rem;
  line-height: 1.2;
}

.card-spacer {
  height: 2rem;
}

/* Tablet */
@media (max-width: 768px) {
  .home-card {
    height: 400px;
  }
  
  .card-label {
    bottom: 1.5rem;
    left: 1.5rem;
    padding: 0.6rem 1rem;      /* Smaller padding */
    font-size: 0.8rem;         /* Smaller font */
    max-width: calc(100% - 3rem);
  }
  
  .card-spacer {
    height: 1.5rem;
  }
}

/* Mobile */
@media (max-width: 480px) {
  .home-card {
    height: 300px;
  }
  
  .card-label {
    bottom: 1rem;
    left: 1rem;
    padding: 0.4rem 0.8rem;    /* Much smaller padding */
    font-size: 0.7rem;         /* Much smaller font */
    max-width: calc(100% - 2rem);
    line-height: 1.1;
  }
  
  .card-spacer {
    height: 1rem;
  }
}

/* Small Phones */
@media (max-width: 360px) {
  .home-card {
    height: 250px;
  }
  
  .card-label {
    bottom: 0.8rem;
    left: 0.8rem;
    padding: 0.3rem 0.6rem;
    font-size: 0.65rem;
    max-width: calc(100% - 1.6rem);
  }
}

/* NO animations */
.home-card,
.card-image,
.card-overlay,
.card-label {
  transition: none;
}
</style>