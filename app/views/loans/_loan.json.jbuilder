json.extract! loan, :id, :description, :signature, :created_at, :updated_at
json.url loan_url(loan, format: :json)