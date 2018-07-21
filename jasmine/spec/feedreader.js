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
            expect(allFeeds.length).not.toBe(0);
        });


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a URL defined
         * and that the URL is not empty.
         */
        it('feeds url are not empty', function(){
            for (const feed of allFeeds) {
                expect(feed.url).toBeDefined();
            }
        })


        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */

         it('feeds name are not empty', function(){
             for (const feed of allFeeds) {
                 expect(feed.name).toBeDefined();
             }
         })
    });


    /* TODO: Write a new test suite named "The menu" */
    describe('The menu', function(){
        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

        it('menu element is hidden by default', function(){
            let menu = document.body.getElementsByClassName("slide-menu")[0];
            let rect = menu.getBoundingClientRect();
            expect(rect.right).toBeLessThanOrEqual(0); /*check if the menu is out of the screen*/
        
        })

        it('if menu change while clicking', function(){
            let menuIcn = document.getElementsByClassName('menu-icon-link')[0];
            let bodyTag = document.body.classList;
            expect(bodyTag).toContain('menu-hidden'); 
            /* Since default is menu-hidden, so check if body tag contains 'menu-hidden' class as default */
            menuIcn.click();
            /* automatic click the menu icon to open(show) the menu */
            expect(bodyTag).not.toContain('menu-hidden');
            /* check if body tag contains 'menu-hidden' class when the menu opened */

        })

      /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */
    })

        describe('Initial Entries', function(){

        /* TODO: Write a new test suite named "Initial Entries" */

        /* TODO: Write a test that ensures when the loadFeed
         * function is called and completes its work, there is at least
         * a single .entry element within the .feed container.
         * Remember, loadFeed() is asynchronous so this test will require
         * the use of Jasmine's beforeEach and asynchronous done() function.
         */
            beforeEach(function(done){
                loadFeed(0, done);
            })

            it('.entry shoule be contained in .feed container', function(){
                expect($('.feed .entry').length).toBeGreaterThan(0);
            })
        })

        describe('New Feed Selection', function(){
            let title1, title2;

            beforeEach(function(done){
                loadFeed(0,function(){
                    title1 = $('.feed .entry h2').eq(0).text();
                    done();
                });
            })

            beforeEach(function(done){
                loadFeed(1,function(){
                    title2 = $('.feed .entry h2').eq(0).text();
                    done();
                });
            })

            it('should new feed content change', function(){
                expect(title1).not.toBe(title2);
            })
        })

    /* TODO: Write a new test suite named "New Feed Selection" */

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
}());
;