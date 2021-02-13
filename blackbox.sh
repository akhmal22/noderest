# 1. GET see all five rows in criminal ('/criminal/all')
curl --request POST http://localhost:3000/criminal/all; printf "\n"
curl --request GET http://localhost:3000/criminal/all; printf "\n"
curl --header "Content-Type: application/json" --request PUT --data '{"status":"ditahan"}' http://localhost:3000/criminal/all; printf "\n"
# 2. POST add a row to criminal ('/criminal')
curl --header "Content-Type: application/json" --request POST --data '{"nama": "Dummy","umur":32,"tindak":"pencurian","status":"ditahan"}' http://localhost:3000/criminal; printf "\n"
curl --request GET http://localhost:3000/criminal; printf "\n"
curl --header "Content-Type: application/json" --request POST --data '{"status":"ditahan"}' http://localhost:3000/criminal; printf "\n"
# 3. PUT modify a criminal's row's status ('/criminal/status/:id')
curl --header "Content-Type: application/json" --request PUT --data '{"status":"ditahan"}' http://localhost:3000/criminal/status/4; printf "\n"
curl --request GET http://localhost:3000/criminal/status/4; printf "\n"
curl --header "Content-Type: application/json" --request PUT --data '{"tindak":"ditahan"}' http://localhost:3000/criminal/status/4; printf "\n"
# 4. DELETE delete a row from criminal ('/criminal/:id')
curl --request DELETE http://localhost:3000/criminal/6; printf "\n"
curl --header "Content-Type: application/json" --request POST --data '{"status":"ditahan"}' http://localhost:3000/criminal/4; printf "\n"
curl --header "Content-Type: application/json" --request DELETE --data '{"status":"ditahan"}' http://localhost:3000/criminal/7; printf "\n"
# 5. GET see a criminal's row's based on id ('/criminal/:id')
curl --request POST http://localhost:3000/criminal/2; printf "\n"
curl --request GET http://localhost:3000/criminal/2; printf "\n"
curl --header "Content-Type: application/json" --request PUT --data '{"status":"ditahan"}' http://localhost:3000/criminal/2; printf "\n"
# 6. PATCH modify a criminal's row's status ('/criminal/status/:id')
curl --header "Content-Type: application/json" --request PATCH --data '{"status":"ditahan"}' http://localhost:3000/criminal/status/4; printf "\n"
curl --request GET http://localhost:3000/criminal/status/4; printf "\n"
curl --header "Content-Type: application/json" --request POST --data '{"tindak":"ditahan"}' http://localhost:3000/criminal/status/4; printf "\n"
# 7. HEAD see a criminal's row's based on id ('/criminal/:id')
curl --head http://localhost:3000/criminal/4; printf "\n"
curl --request PATCH http://localhost:3000/criminal/2; printf "\n"
# 8. PUT modify a criminal's row's act ('/criminal/act/:id')
curl --header "Content-Type: application/json" --request PUT --data '{"status":"ditahan"}' http://localhost:3000/criminal/act/4; printf "\n"
curl --request GET http://localhost:3000/criminal/act/4; printf "\n"
curl --header "Content-Type: application/json" --request PUT --data '{"tindak":"pemerasan"}' http://localhost:3000/criminal/act/4; printf "\n"
# 9. POST modify a criminal's row's act ('/criminal/act/:id')
curl --header "Content-Type: application/json" --request POST --data '{"status":"ditahan"}' http://localhost:3000/criminal/act/4; printf "\n"
curl --request GET http://localhost:3000/criminal/act/4; printf "\n"
curl --header "Content-Type: application/json" --request POST --data '{"tindak":"pemerasan"}' http://localhost:3000/criminal/act/4; printf "\n"
# 10. PATCH modify a criminal's row's act ('/criminal/act/:id'
curl --header "Content-Type: application/json" --request PATCH --data '{"status":"ditahan"}' http://localhost:3000/criminal/act/4; printf "\n"
curl --request GET http://localhost:3000/criminal/act/4; printf "\n"
curl --header "Content-Type: application/json" --request PATCH --data '{"tindak":"pemerasan"}' http://localhost:3000/criminal/act/4; printf "\n"
