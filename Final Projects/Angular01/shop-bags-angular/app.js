(function() {
  var app = angular.module('gemStore', []);

  app.controller('StoreController', function(){
    this.products = gems;
  });

  app.controller('TabController', function(){
    this.tab = 1;

    this.setTab = function(tab){
      this.tab = tab;
    };

    this.isSet = function(tab){
      return (this.tab === tab);
    };
  });

  app.controller('GalleryController', function(){
    this.current = 0;

    this.setCurrent = function(index){
      this.current = index;
    };
  });

  app.controller('ReviewController', function() {
    this.review = {};

    this.addReview = function(product){
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review = {};
      console.log("submitted");
    };
  });

  var gems = [{
      name: 'Louis Vuitton',
      description: "The Louis Vuitton Hunting bag in Monogram canvas boasts of a grand and stunning exterior supported by two inside compartments.",
      width: '19 inches',
      depth: '10 inches',
      price: 1428,
      color: 'Brown',
      images: [
        "http://a.duavivo.in/uploads/products/thumbnails/fdfda88b5d69659ae1a8d0996eb27162.jpg",
        "http://a.duavivo.in/uploads/products/thumbnails/8d30cbeefce08d97b58338fea6fd9787.jpg",
        "http://a.duavivo.in/uploads/products/thumbnails/4630de74d3ca9020d7eee24ef9ed5591.jpg",
      ],
      reviews: [{
        stars: 5,
        body: "I love this gem!",
        author: "joe@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "This gem sucks.",
        author: "tim@example.org",
        createdOn: 1397490980837
      }]
    }, {
      name: 'Michael Kors',
      description: "The perfect bag to make any girl happy! With its neutral colors and amazing silhouette there's no way you can go wrong with this beautiful shoulder bag.",
      width: '15 inches',
      depth: '7 inches',
      price: 200,
      color: 'White',
      images: [
        "https://charsit10.files.wordpress.com/2015/03/259016_1_1.jpeg",
        "http://thumbs.ebaystatic.com/images/g/SsoAAOSwcUBYHM54/s-l225.jpg",
        "https://s-media-cache-ak0.pinimg.com/236x/93/4c/34/934c344492d1b07a58bc549e1a1a7126.jpg",
      ],
      reviews: [{
        stars: 3,
        body: "I think this gem was just OK, could honestly use more shine, IMO.",
        author: "JimmyDean@example.org",
        createdOn: 1397490980837
      }, {
        stars: 4,
        body: "Any gem with 12 faces is for me!",
        author: "gemsRock@example.org",
        createdOn: 1397490980837
      }]
    }, {
      name: 'Prada',
      description: "Prada S.p.A. is an Italian luxury fashion house, specializing in leather handbags, travel accessories, shoes, ready-to-wear, perfumes and other fashion accessories, founded in 1913 by Mario Prada",
      width: '12 inches',
      depth: '6 inches',
      price: 2000,
      color: 'Light Blue',
      images: [
        "https://s-media-cache-ak0.pinimg.com/236x/12/d3/48/12d348a35cc83cd8e0a993ce3d94171f.jpg",
        "https://s-media-cache-ak0.pinimg.com/236x/07/01/ca/0701ca9a6999a0f910af09f9392cb25e.jpg",
        "http://www.infobarrel.com/media/image/109872_max.jpg",
      ],
      reviews: [{
        stars: 1,
        body: "This gem is WAY too expensive for its rarity value.",
        author: "turtleguyy@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "BBW: High Shine != High Quality.",
        author: "LouisW407@example.org",
        createdOn: 1397490980837
      }, {
        stars: 1,
        body: "Don't waste your rubles!",
        author: "nat@example.org",
        createdOn: 1397490980837
      }]
    }];
})();
