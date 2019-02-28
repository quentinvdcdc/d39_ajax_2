class EmailsController < ApplicationController
	def index
		@emails = Email.all
		respond_to do |format|
        format.html
        format.js
    end 
	end

	def show
		@email = Email.find(params[:id])
		@email.read = true
		@email.save
  	@emails = Email.all # needed for sidebar, probably better to use a cell for this
  	respond_to do |format|
    	format.html # show.html.erb
    	format.js # show.js.erb
  	end
	end

	def edit
	end
	
end
