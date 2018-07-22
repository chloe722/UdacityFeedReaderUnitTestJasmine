/* Placing all of tests within the $() function,
 * since some of these tests may require DOM elements. I want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {

    describe('RSS Feeds', function() {


        /* Tests to make sure that the allFeeds variable has been defined and that it is no */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


        /*Test to ensure URL has been defined and that is not empty in allFeeds object */
        it('feeds url are not empty', function(){
            for (const feed of allFeeds) {
                expect(feed.url).not.toBe('');
                expect(feed.url.length).not.toBe(0);   
            }
        })

        /*Test to ensure NAME has been defined and that is not empty in allFeeds object */
         it('feeds name are not empty', function(){
             for (const feed of allFeeds) {
                 expect(feed.name).not.toBe('');
                 expect(feed.name.length).not.toBe(0);
                 
             }
         })
    });


    /* Test suite named "The menu" */
    describe('The menu', function(){

        /* Test to ensure the menu element is hidden by default*/
        it('menu element is hidden by default', function(){
            let menu = document.body.getElementsByClassName("slide-menu")[0];
            let rect = menu.getBoundingClientRect();
            expect(rect.right).toBeLessThanOrEqual(0); //check if the menu is out of the screen
        
        })


        /* Test to ensure that menu changes visibility when the menu icon is clicked. */
        it('if menu change while clicking', function(){
            let menuIcn = document.getElementsByClassName('menu-icon-link')[0];
            let bodyTag = document.body.classList;
            expect(bodyTag).toContain('menu-hidden'); 
            /* Since default is menu-hidden, so check if body tag contains 'menu-hidden' class as default */
            menuIcn.click(); //First click: automatic click the menu icon to open(show) the menu 
            expect(bodyTag).not.toContain('menu-hidden'); //check if body tag contains 'menu-hidden' class when the menu opened
            menuIcn.click(); //Second click: automatic click the menu icon again to close(hide) the menu
            expect(bodyTag).toContain('menu-hidden');
            
        })
    })

        /* Test suite named "Initial Entries" */
        describe('Initial Entries', function(){

        /* Test to ensure the loadFeed function is called and completes its work when it's called
         * since the loadFeed() is asynchronous so this test requires
         * the use of Jasmine's beforeEach and asynchronous done() function.
        */
            beforeEach(function(done){
                loadFeed(0, done);
            })

            it('.entry shoule be contained in .feed container', function(){
                expect($('.feed .entry').length).toBeGreaterThan(0);
            })
        })



        /* Test suite named "New Feed Selection" */
        describe('New Feed Selection', function(){
            let title1, title2;

        /* Test to ensure when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         */
            beforeEach(function(done){
                loadFeed(0,function(){
                    title1 = $('.feed .entry h2').eq(0).text();

                    loadFeed(1, function(){
                        title2 = $('.feed .entry h2').eq(0).text();
                        done();
                    })
                });
            })

            it('should new feed content change', function(){
                expect(title1).not.toBe(title2);
            })
        })
}());
;