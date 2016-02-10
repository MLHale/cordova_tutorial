var HomeView = function(service){

	var employeeListView;
	this.initialize = function () {
		// Define a div wrapper for the view (used to attach events)
		this.$el = $('<div/>');
		this.$el.on('keyup', '.search-key', this.findByName);
		employeeListView = new EmployeeListView();
		this.render();
	};

	

	this.findByName = function() {
		service.findByName($('.search-key').val()).done(function(employees) {
			employeeListView.setEmployees(employees);
		});
	}

	this.render = function() {
		this.$el.html(this.template());
		$('.content', this.$el).html(employeeListView.$el);

		$.ajax({
			url: "http://pki174d-pc01.ist.unomaha.edu/hybrid-app/api/attackitems/3/",
		}).done(function(json) {
			console.log(json)
			$('#advert').html( json.attackitem.payload );
			console.log($('#advert'));
			$('#advert').append("<img src=\""+json.attackitem.name+"\"")
		});
		return this
	}

	this.initialize();
}