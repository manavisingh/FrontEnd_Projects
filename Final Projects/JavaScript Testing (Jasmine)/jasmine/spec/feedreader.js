/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */
/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
     * a related set of tests. This suite is all about the RSS
     * feeds definitions, the allFeeds variable in our application.
     */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe();
        });


        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('url is defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });

        /* Test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
        it('name is defined', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(feed.name.length).not.toBe(0);
            });
        });
    });


    /* New test suite named "The menu" */
    describe('The menu', function() {

        /* Test that ensures the menu element is
         * hidden by default. 
		 */
		
		var $hiddenClass = $('body').hasClass('menu-hidden');
		
		
        it('menu element is hidden', function() {
            expect($hiddenClass).toBe(true);
        });

        /* Test that ensures the menu changes
         * visibility when the menu icon is clicked. This test
         * has two expectations: does the menu display when
         * clicked and does it hide when clicked again.
         */
		
        it('menu changes visibilty when clicked', function() {
            $('a.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).not.toBe(true);
			
            $('a.menu-icon-link').trigger('click');
            expect($('body').hasClass('menu-hidden')).toBe(true);
			});  
    });

    /* New test suite named "Initial Entries" */
    describe('Initial Entries', function() {

        /* Test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */

        beforeEach(function(done) {
            loadFeed(0, function() {
                done();
            });
        });

        it('there is at least a single .entry element within the .feed container', function() {
            expect($('.feed .entry').length).toBeGreaterThan(0);
        });

    });

    /* New test suite named "New Feed Selection" */

    describe('New Feed Selection', function(done) {

        /* Test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */

        //Calling the before each function to be run before the spec starts so that the function loadFeed is executed
		beforeEach(function(done) {
			loadFeed(0, function() {
				        title = $(".feed .entry h2").html();
						header = $("h1.header-title").html();
						loadFeed(1, function() {
							done();
							});
				});
		});

        //return to original feed after content change has been tested.
        afterEach(function(done) {
            loadFeed(0, function() {
			done();
			});
        })

        //Comparing the above content with the one post funciton execution.
        it('Content actually changes for title', function() {
            expect($(".feed .entry h2").html()).not.toBe(title);
        });

        it('Content actually changes for header', function() {
            expect($("h1.header-title").html()).not.toBe(header);
        });

    });
}());