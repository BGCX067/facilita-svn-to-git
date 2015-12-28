# Be sure to restart your server when you modify this file.

# Your secret key for verifying cookie session data integrity.
# If you change this key, all old sessions will become invalid!
# Make sure the secret is at least 30 characters and all random, 
# no regular words or you'll be exposed to dictionary attacks.
ActionController::Base.session = {
  :key         => '_Facilita_session',
  :secret      => 'f16255fdeb658f78bcf00e69c44d89e53664097264f34b0974da48cfc77bc9b45680d9e3a0666bfac1129b4580bbd9f562b3541477728c2ca47db2b0ec278cd1'
}

# Use the database for sessions instead of the cookie-based default,
# which shouldn't be used to store highly confidential information
# (create the session table with "rake db:sessions:create")
# ActionController::Base.session_store = :active_record_store
