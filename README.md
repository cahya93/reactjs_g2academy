# reactjs_g2academy

Tugas Bootcamp Batch April 2021 Reac_Js

- Latihan 1:
  - Convert halaman HTML ke dalam React (header, body, table, pagination)

\*use for router page
-npm install react-router-dom

\*solution error npm start
remove node_modules and package-lock.json

rm -rf node_modules package-lock.json
then run following command to install dependencies

npm install
finally, run your package by following command.

npm start

/\*\*

- ======== KONSEP NAVIGATION ========
- App: <= buat state disini
- - Nav:
-          - Menu
- - Body:
-          - Home (table list)
-          - About
-          - Login
-          - Register
  \*/

/\*\*

- Latihan:
-        - Convert halaman HTML ke dalam React (header, body, table, pagination)
-
-
- Latihan:
-        - Buat login page dengan verifikasi username & password
-        - Fungsikan fitur Add, Edit & Delete pada list data sebelumnya
-        - Pagination Google harus berfungsi
-
-
- Latihan:
-        - Buat pagination untuk login, register dan list user
-        - Setiap user yang register, masuk ke daftar list user
-        - Setiap user yang login, ngecek data ke list user
-        - Terapkan atomic design
-
-        - Halaman List data bisa di lihat ketika sudah login
-        - Tambah action pada user list:
-        - edit hanya berlaku untuk user itu sendiri (user orang lain tidak bisa di edit)
-        - delete hanya berlaku untuk user orang lain (user yang login tidak bisa delete dirinya sendiri)
-
-
- Latihan:
-        - Buatlah 1 halaman untuk menampilkan list user dari jsonplaceholder, yang terdiri dari kolom
-            - name
-            - username
-            - password
-            - address (city)
-            - action
-        - Password secara default adalah 12345
-        - User harus bisa login (username & password) dengan data diatas
-
-        - Setiap user yang register, masuk ke daftar list user
-        - Aktifkan fitur action:
-        - edit hanya berlaku untuk user itu sendiri (user orang lain tidak bisa di edit)
-        - delete hanya berlaku untuk user orang lain (user yang login tidak bisa delete dirinya sendiri)
-        - Ketika sudah login, menu register & login hilang dan muncul menu logout
-        - Ketika edit, gunakan form pada halaman registrasi
- \*/
