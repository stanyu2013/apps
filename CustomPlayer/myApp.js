var myApp = (function (myApp) {
    myApp.MusicViewModel = function() {
        var self = this;
		self.feeling = ko.observable("Happy");
		self.action = ko.observable("Eating");
		self.hours = ko.observable("1");
		self.videoPath = ko.observable("https://www.youtube.com/embed/XJ9Vylyk5Uw");
		self.playVideo = function(formElement) {
			var koFeeling = ko.utils.unwrapObservable(self.feeling);
			var koAction = ko.utils.unwrapObservable(self.action);
			var koHours = ko.utils.unwrapObservable(self.hours);			
			if (koFeeling === "Happy" && koAction === "Coding" && koHours === "1") {
				self.videoPath("https://www.youtube.com/embed/EWD8JhDlZ1s?autoplay=1");	
			}
			else if (koFeeling === "Happy" && koAction === "Eating" && koHours === "1") {
				self.videoPath("https://www.youtube.com/embed/XJ9Vylyk5Uw?autoplay=1");
			}
			else if (koFeeling === "Happy" && koAction === "Sleeping" && koHours === "1") {
				self.videoPath("https://www.youtube.com/embed/f4rGP3BHLuc?autoplay=1");
			}
		};
    }
    return myApp;
}(myApp || {}));