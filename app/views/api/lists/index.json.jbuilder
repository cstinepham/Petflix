 @lists.each do |currList|
  json.set! currList.id do 
    json.partial! 'api/lists/list', list: currList
  end
end