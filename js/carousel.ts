let carouselData = 
    `<div class="carousel-inner ">
        <div class="carousel-item active" style="height: 75vh;" data-interval="4000">
            <img src="img/vienna.jpg" class="rounded d-block w-100" style="height: 100%;"  alt="vienna">
        </div>
        <div class="carousel-item " style="height: 75vh;" data-interval="2000">
            <img src="img/schonbrunn.jpg" class="rounded d-block w-100" style="height: 100%;"  alt="schonbrunn">
        </div>
        <div class="carousel-item " style="height: 75vh;">
            <img src="img/hallstatt.jpg" class="rounded d-block w-100" style="height: 100%;"  alt="hallstatt">
        </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleInterval" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleInterval" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
    </a>`;

$("#carouselData").append(carouselData);