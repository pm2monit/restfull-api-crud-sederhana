# restfull-api-crud-sederhana
API sederhana untuk aplikasi manajemen tugas 

Untuk menjalankan restfull api service ini harap ikuti langkah-langkah berikut : 
1. Download & install package nodejs sesuai operating system => https://nodejs.org/en/download.
2. Buat folder dan buka folder yang baru di buat:
    2.1. Download => https://github.com/pm2monit/restfull-api-crud-sederhana.git , lalu copy kedalam folder yang baru dibuat tersebut 
    2.2. Buka terminal / command promt (CMD) ketik `cd [folder yang baru di buat]` lanjutkan `npm install` lanjutkan `npm install -g sequelize-cli` lanjutkan `npm install -g pm2`
    2.3. Lanjutkan buat database mysql baru 
    2.4. Lanjutkan sesuaian file config/config.json (Database username, Database password & Database name) 
    2.5. Lanjutkan ketik di terminal atau command promt (CMD) `npx sequelize db:migrate`
    2.6. Lanjutkan jalankan aplikasi `pm2 start ecosystem.config.js`
    2.7. Untuk melihat list proses application: pada terminal / command promt (CMD) ketik `pm2 list`
    2.8. Untuk melihat log application: pada terminal / command promt (CMD) ketik `pm2 logs` atau `pm2 monit`
3. Jika setting sudah sesuai dan tidak ada error, silahkan buka postman dan import file `API sederhana untuk aplikasi manajemen tugas.postman_collection.json`
