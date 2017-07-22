(function() {
    'use strict';

    angular
        .module('NikApp', [
            'ngRoute',
            'ngSanitize',
            'ui.bootstrap',
            'ui.select',
            'nvd3'])
        .run(Run);

    Run.$inject = ['$http', '$httpParamSerializerJQLike'];

    function Run($http, $httpParamSerializerJQLike) {
        $http.defaults.transformRequest.unshift($httpParamSerializerJQLike);
    }
})();
(function() {
    'use strict';

    angular
        .module('NikApp')
        .config(NikRouts);

    NikRouts.$inject = ['$httpProvider', '$routeProvider', '$locationProvider'];

    function NikRouts($httpProvider, $routeProvider, $locationProvider) {
        $httpProvider.interceptors.push('HttpInterceptor');

        $routeProvider
            .when('/', {
                templateUrl: 'js/app/views/nik-main.html'
            })
            .when('/portfolio', {
                templateUrl: 'js/app/views/nik-portfolio.html'
            })
            .when('/contact', {
                templateUrl: 'js/app/views/nik-contact.html',
                controller: 'contactCtrl',
                controllerAs: 'contact'
            })
            .otherwise({redirectTo : '/'});

        $locationProvider.html5Mode(true);
    }
})();

(function() {
    'use strict';

    angular
        .module('NikApp')
        .controller('contactCtrl', contactCtrl);

    contactCtrl.$inject = ['NikFactory'];

    function contactCtrl(NikFactory) {
        var self = this;

        self.toggleNeeds = toggleNeeds;
        self.submit = submit;

        self.form = {};
        self.occupations = [
            {name: 'Business owner'},
            {name: 'HR manager'},
            {name: 'Developer'},
            {name: 'Other'}
        ];
        self.needs = [
            'Permanent job',
            'Project',
            'Consultation'
        ];
        self.needsChecked = [];
        self.isSuccess = false;
        self.result = null;

        function toggleNeeds(need) {
            var index = self.needsChecked.indexOf(need);
            if (index > -1) {
                self.needsChecked.splice(index, 1);
            } else {
                self.needsChecked.push(need);
            }
        }

        function submit() {
            self.result = null;
            if (self.occupation) {
                self.form.occupation = self.occupation.name;
            }
            if (self.needsChecked.length > 0) {
                self.form.needs = self.needsChecked.join(', ');
            }
            if (isFormValid()) {
                sendForm();
            }
        }

        function sendForm() {
            NikFactory.sendForm(self.form).then(function(data) {
                if (data.success) {
                    self.isSuccess = true;
                    self.result = 'Your message has been sent successfully!';
                    resetForm();
                } else {
                    self.isSuccess = false;
                    self.result = data.message;
                }
            }).catch(function(error) {
                self.isSuccess = false;
                if(error.status) {
                    if (error.status == 405) {
                        self.result = 'It\'s impossible to send messages from here so if you really want to use this form do it from '+
                        '<a href="http://nik.niklenburg.com/contact" target="_blank">nik.niklenburg.com</a>';
                    } else if (error.status == -1) {
                        self.result = 'Message sending has failed. Please, check you Internet connection or try later.';
                    } else {
                        self.result = error.status + '. ' + error.message;
                    }
                } else {
                    self.result = error;
                }
            });
        }

        function resetForm() {
            self.form = {};
            self.needsChecked = [];
            self.occupation = undefined;
            angular.forEach(self.needs, function(need, index) {
                self['need'+index] = false;
            });
        }

        function isFormValid() {
            return !!self.form;
        }
    }
})();
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
(function() {
	'use strict';

	angular
		.module('NikApp')
		.directive('nikAbout', nikAbout);

	function nikAbout() {
		var directive = {
			restrict: 'E',
			templateUrl: 'js/app/views/nik-about.html'
		};
		return directive;
	}
})();
(function() {
	'use strict';

	angular
		.module('NikApp')
		.directive('nikEducation', nikEducation);

	function nikEducation() {
		var directive = {
			restrict: 'E',
			templateUrl: 'js/app/views/nik-education.html'
		};
		return directive;
	}
})();
(function() {
	'use strict';

	angular
		.module('NikApp')
		.directive('nikFooter', nikFooter);

	function nikFooter() {
		var directive = {
			restrict: 'E',
			templateUrl: 'js/app/views/nik-footer.html'
		};
		return directive;
	}
})();
(function() {
	'use strict';

	angular
		.module('NikApp')
		.directive('nikHeader', nikHeader);

	nikHeader.$inject = ['$window'];

	function nikHeader($window) {
		var directive = {
			restrict: 'E',
			templateUrl: 'js/app/views/nik-header.html',
			link: function(scope) {
				angular.element($window).bind("scroll", function() {
					scope.scrollHeader = this.pageYOffset > 10;
					scope.$apply();
				});
			}
		};
		return directive;
	}
})();
(function() {
	'use strict';

	angular
		.module('NikApp')
		.directive('nikLanguages', nikLanguages);

	nikLanguages.$inject = ['$window'];

	function nikLanguages($window) {
		var directive = {
			restrict: 'E',
			templateUrl: 'js/app/views/nik-languages.html',
			link: function(scope, element) {
				var elTop, windowHeight = $window.innerHeight;
				angular.element($window).bind("scroll", function() {
					elTop = element[0].getBoundingClientRect().top;
					if (elTop-windowHeight+100 < 0) {
						scope.scrollLanguages = true;
					}
					scope.$apply();
				});
			}
		};
		return directive;
	}
})();
(function() {
	'use strict';

	angular
		.module('NikApp')
		.directive('nikQualities', nikQualities);

	function nikQualities() {
		var directive = {
			restrict: 'E',
			templateUrl: 'js/app/views/nik-qualities.html'
		};
		return directive;
	}
})();
(function() {
	'use strict';

	angular
		.module('NikApp')
		.directive('nikReferences', nikReferences);

	function nikReferences() {
		var directive = {
			restrict: 'E',
			templateUrl: 'js/app/views/nik-references.html'
		};
		return directive;
	}
})();
(function() {
	'use strict';

	angular
		.module('NikApp')
		.directive('nikSkills', nikSkills);

	nikSkills.$inject = ['$window'];

	function nikSkills($window) {
		var directive = {
			restrict: 'E',
			templateUrl: 'js/app/views/nik-skills.html',
			link: function(scope, element) {
				var elTop, elHeight, windowHeight = $window.innerHeight;
				angular.element($window).bind("scroll", function() {
					elTop = element[0].getBoundingClientRect().top;
					elHeight = element[0].offsetHeight;
					if (elTop-windowHeight+100 < 0) {
						scope.scrollSkills = true;
					}
					if (elTop-windowHeight+elHeight-100 < 0) {
						scope.scrollPrograms = true;
					}
					scope.$apply();
				});
			}
		};
		return directive;
	}
})();
(function() {
	'use strict';

	angular
		.module('NikApp')
		.directive('nikTop', nikTop);

	function nikTop() {
		var directive = {
			restrict: 'E',
			templateUrl: 'js/app/views/nik-top.html'
		};
		return directive;
	}
})();
(function() {
	'use strict';

	angular
		.module('NikApp')
		.directive('nikTrainings', nikTrainings);

	function nikTrainings() {
		var directive = {
			restrict: 'E',
			templateUrl: 'js/app/views/nik-trainings.html'
		};
		return directive;
	}
})();
(function() {
	'use strict';

	angular
		.module('NikApp')
		.directive('nikWork', nikWork);

	function nikWork() {
		var directive = {
			restrict: 'E',
			templateUrl: 'js/app/views/nik-work.html'
		};
		return directive;
	}
})();
(function() {
    'use strict';

    angular
        .module('NikApp')
        .factory('HttpInterceptor', HttpInterceptorFactory);

    HttpInterceptorFactory.$inject = ['$q'];

    function HttpInterceptorFactory($q) {

        var HttpInterceptor = {
            request: request
        };

        return HttpInterceptor;

        function request(req) {
            var viewsUrl = /^.*\/app\/.*/;
            if (viewsUrl.test(req.url)) {
                var version = '?v=1.5';
                req.url = req.url + version;
            }


            return req;
        }

    }
})();

(function () {
    'use strict';

    angular
        .module('NikApp')
        .factory('NikFactory', NikFactory);

    NikFactory.$inject = ['$http', '$q'];

    function NikFactory($http, $q) {
        var service = {
            getPorfolio: getPorfolio,
            sendForm: sendForm
        };

        return service;

        function getPorfolio() {
            return $http.get('js/app/data/portfolio.json')
                .then(getPorfolioSuccess)
                .catch(getPorfolioFail);

            function getPorfolioSuccess(response) {
                return response.data
            }

            function getPorfolioFail(error) {
                return error
            }
        }

        function sendForm(params) {
            var defer = $q.defer();
            var req = {
                method: 'POST',
                url: 'php/form.php',
                headers: {'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'},
                data: params
            };

            $http(req)
                .success(function (data) {
                    defer.resolve(data);
                })
                .error(function (error, status) {
                    defer.reject(errorConstract(error, status));
                });
            return defer.promise;
        }

        function errorConstract(error, status) {
            return status ? {
                message: error,
                status: status
            } : error;
        }
    }
})();