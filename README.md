# OOP vs FP REST API

## Revisi
Studi kasus atau endpoint ditambah menjadi 10 endpoint
  - 4 endpoint bawaan
  - GET spesifik ke id kriminal ('/criminal/:id')
  - PATCH status menjadi 'diadili' ('/criminal/:id')
  - HEAD dengan GET yang spesifik ('/criminal/:id')
  - PUT tindak menjadi 'pemerasan'
  - POST tindak menjadi 'pemerasan'
  - PATCH tindak menjadi 'pemerasan'

Daftar endpoint dari 10 studi kasus
1. GET see all five rows in criminal ('/criminal/all')
2. POST add a row to criminal ('/criminal')
3. PUT modify a criminal's row's status ('/criminal/status/:id')
4. DELETE delete a row from criminal ('/criminal/:id')
5. GET see a criminal's row's based on id ('/criminal/:id')
6. PATCH modify a criminal's row's status ('/criminal/status/:id')
7. HEAD see a criminal's row's based on id ('/criminal/:id')
8. PUT modify a criminal's row's act ('/criminal/act/:id')
9. POST modify a criminal's row's act ('/criminal/act/:id')
10. PATCH modify a criminal's row's act ('/criminal/act/:id')

TOBEDONE
1. routing (done)
2. fill number 5
3. fill number 6
4. fill number 7
5. fill number 8
6. fill number 9
7. fill number 10
8. test number 5
9. test number 6
10. test number 7
11. test number 8
12. test number 9
13. test number 10
14. retest all
15. screenshot all whitebox
