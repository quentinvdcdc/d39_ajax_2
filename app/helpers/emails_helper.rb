module EmailsHelper
	def is_not_read?(email)
		if email.read == false
			return true
		else
			return false
		end
	end
end
