(function() {
    'use strict';

    angular
        .module('NikApp')
        .controller('NikController', NikController);

    NikController.$inject = ['NikFactory', '$uibModal', '$location', '$scope', '$timeout', '$window'];

    function NikController(NikFactory, $uibModal, $location, $scope, $timeout, $window) {
        var self = this;
        var portfolioPath = 'img/portfolio/';

        self.isReady = isReady;
        self.popup = popup;
        self.print = print;
        self.itemEnter = itemEnter;
        self.itemLeave = itemLeave;

        self.ready = true;
        self.items = [];
        self.mainItems = [];
        self.carousel = [];
        self.mainCarousel = [];
        self.workTabs = self.skillsTabs = [0, 1];
        self.currentWorkTab = self.currentSkillsTab = 0;
        self.footerWord = 'resumé';
        self.carouselNext = false;
        self.carouselPrev = false;
        self.programsOptions = {
            chart: {
                type: 'pieChart',
                height: 300,
                width: 300,
                donut: true,
                donutRatio: 0.35,
                x: function(d){return d.key;},
                y: function(d){return d.y;},
                margin: {
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0
                },
                showLabels: true,
                tooltip: {
                    contentGenerator: function (d) {
                        var key = d.data.key;
                        switch (d.data.key) {
                            case 'Flash':
                                key = 'Adobe Flash';
                                break;
                            case 'PhotoShop':
                                key = 'Adobe PhotoShop';
                                break;
                            case 'Illustrator':
                                key = 'Adobe Illustrator';
                                break;
                            case 'Git':
                                key = 'GitHub/GitLab';
                                break;
                        }
                        return '<div class="nvtooltip-inner">' +
                            '<div class="table">' +
                            '<div class="tr">' +
                            '<div class="td legend-color-guide"><div style="background-color:' + d.color + ';"></div></div>' +
                            '<div class="td key">' + key + ':</div>' +
                            '<div class="td value">' + d.data.y + '</div>' +
                            '</div>' +
                            '</div>' +
                            '</div>'
                    }
                },
                duration: 500,
                legendPosition: 'bottom',
                legend: {
                    margin: {
                        top: 10,
                        right: 0,
                        bottom: 0,
                        left: 10
                    }
                }
            }
        };
        self.programsData = [
            {
                key: "PhotoShop",
                y: 7
            },
            {
                key: "WebStorm",
                y: 9
            },
            {
                key: "Illustrator",
                y: 5
            },
            {
                key: "PyCharm",
                y: 7
            },
            {
                key: "Git",
                y: 8
            },
            {
                key: "Flash",
                y: 3,
                color: '#d62728'
            }
        ];
        self.occupations = [
            {name: 'Business owner'},
            {name: 'HR manager'},
            {name: 'Developer'}
        ];

        init();

        function init() {
            getPortfolioItems();

            if ($location.path() === '/portfolio') {
                self.footerWord = 'portfolio';
            }
        }

        $scope.$on('$locationChangeSuccess', function() {
            self.footerWord = $location.path() === '/portfolio' ? 'portfolio' : 'resumé';
        });

        function isReady() {
            return self.ready
        }

        function getReady() {
            self.ready = true;
        }

        function startLoad() {
            self.ready = false;
        }

        function print() {
            $window.scrollTo(0, 0);
            if ($location.path() === '/portfolio') {
                $location.path('/');
            }
            $timeout(function() {
                $window.print();
            }, 100);
        }

        function getPortfolioItems() {
            startLoad();
            return NikFactory.getPorfolio()
                .then(function(data) {
                    var mainIndex = 0;
                    angular.forEach(data, function(item, index) {
                        item.index = index;
                        item.logo = portfolioPath + item.logo;
                        self.items.push(item);
                        if (item.main) {
                            item.mainIndex = mainIndex;
                            self.mainItems.push(item);
                            mainIndex++;
                        }
                    });
                    var i, j= 0, len = self.mainItems.length, chunked = [], chunk = 3;
                    for (i=0; i<len; i+=chunk) {
                        var chunkSlice = self.mainItems.slice(i,i+chunk);
                        self.carousel.push({
                            items: chunkSlice,
                            index: j
                        });
                        j++;
                    }
                    getReady();
                })
                .catch(function(error) {
                    console.log(error);
                });
        }

        function popup(index, isMain) {
            var modalInstance = $uibModal.open({
                template: '<div class="popup-img">' +
                            '<button class="popup-close" ng-click="popupCancel()">&times;</button>' +
                            '<img ng-src="{{item.img}}">' +
                            '<div class="popup-description">' +
                                '<span>{{item.title}}</span>' +
                            '</div>' +
                            '<div class="popup-controls">' +
                                '<a class="popup-prev" ng-click="popupPrev()"></a>' +
                                '<a class="popup-next" ng-click="popupNext()"></a>' +
                            '</div>' +
                          '</div>',
                resolve: {
                    index: function() {
                        return index
                    }
                },
                controller: ['$scope', '$uibModalInstance', 'index', function($scope, $uibModalInstance, index) {
                    var currentIndex = index;
                    var items = isMain ? self.mainItems : self.items;
                    $scope.item = {
                        img: portfolioPath + items[index].screenshot,
                        title: items[index].title
                    };
                    $scope.popupCancel = function() {
                        $uibModalInstance.dismiss('cancel');
                    };
                    $scope.popupNext = function() {
                        if (currentIndex<items.length-1) {
                            $scope.item = {
                                img: portfolioPath + items[currentIndex+1].screenshot,
                                title: items[currentIndex+1].title
                            };
                            currentIndex++;
                        } else {
                            $scope.item = {
                                img: portfolioPath + items[0].screenshot,
                                title: items[0].title
                            };
                            currentIndex = 0;
                        }
                    };
                    $scope.popupPrev = function() {
                        if (currentIndex==0) {
                            $scope.item = {
                                img: portfolioPath + items[items.length-1].screenshot,
                                title: items[items.length-1].title
                            };
                            currentIndex = items.length-1;
                        } else {
                            $scope.item = {
                                img: portfolioPath + items[currentIndex-1].screenshot,
                                title: items[currentIndex-1].title
                            };
                            currentIndex--;
                        }
                    }
                }]
            });
        }

        function itemEnter(event, index) {
            self.items[index].mouseleave = '';
            var itemWidth = event.target.offsetWidth;
            var itemHeight = event.target.offsetHeight;
            var offsetX = event.offsetX;
            var offsetY = event.offsetY;
            self.items[index].mouseenter = closestEdge(offsetX, offsetY , itemWidth, itemHeight);
        }

        function itemLeave(event, index) {
            self.items[index].mouseenter = '';
            var itemWidth = event.target.offsetWidth;
            var itemHeight = event.target.offsetHeight;
            var offsetX = event.offsetX;
            var offsetY = event.offsetY;
            self.items[index].mouseleave = closestEdge(offsetX, offsetY , itemWidth, itemHeight);
        }

        function closestEdge(x,y,w,h) {
            var topEdgeDist = distMetric(x,y,w/2,0);
            var bottomEdgeDist = distMetric(x,y,w/2,h);
            var leftEdgeDist = distMetric(x,y,0,h/2);
            var rightEdgeDist = distMetric(x,y,w,h/2);
            var min = Math.min(topEdgeDist,bottomEdgeDist,leftEdgeDist,rightEdgeDist);
            switch (min) {
                case leftEdgeDist:
                    return "left";
                case rightEdgeDist:
                    return "right";
                case topEdgeDist:
                    return "top";
                case bottomEdgeDist:
                    return "bottom";
            }
        }

        function distMetric(x,y,x2,y2) {
            var xDiff = x - x2;
            var yDiff = y - y2;
            return (xDiff * xDiff) + (yDiff * yDiff);
        }
    }
})();