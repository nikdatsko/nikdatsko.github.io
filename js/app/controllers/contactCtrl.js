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