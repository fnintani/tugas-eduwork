        let gameStart = true;
        let num;
        let chance = 1;
        let user1;
        let user2;
        let scoreUser1 = 0;
        let scoreUser2 = 0;
        
        
        alert(`RULES: 
            -----------------------
            1. Hanya boleh mengisi angka 1 - 3.
            2. Jawaban pemain tidak boleh sama dalam 1 ronde.
            3. Hanya ada 5 ronde permainan.
            
            GOOD LUCK!` )
            
            while(gameStart) {
                checkAnswer();
                chance++;
                
                if(chance < 6) {
                    gameStart = confirm("Main Ronde ke-" + chance);
                }
                else if(chance == 6 ) {
                    if(scoreUser1 > scoreUser2) {
                        alert(`Permainan Selesai. Pemain 1 menang. Refresh halaman untuk mulai kembali"`)
                    } else if (scoreUser2 > scoreUser1) {
                        alert(`Permainan Selesai. Pemain 2 menang. Refresh halaman untuk mulai kembali"`)
                    } else {
                        alert(`Permainan Selesai. Hasil seri. Refresh halaman untuk mulai kembali"`)
                    }
                    gameStart = false;
                }
            }

        
        function checkAnswer() {
            num = Math.floor(Math.random() * 3) + 1;
            user1 = prompt("PEMAIN 1: Silahkan pilih angka 1 - 3");
            user2 = prompt("PEMAIN 2: Silahkan pilih angka 1 - 3");
            console.log("tebakan yang benar: " + num);
            
            //Mengubah tipe data jawaban pemain dari string menjadi integer
            let user1Parse = parseInt(user1);
            let user2Parse = parseInt(user2);
            
            
            //Menangangi ketika pemain melakukan cancel pada prompt
            if(user1 === null || user2 === null) {
                chance = 6;
                gameStart = false;
                alert("Permainan dibatalkan. Refresh halaman untuk mulai kembali")
            }
            
            //Menangani ketika jawaban kedua pemain sama (bukan null maupun empty string)
            if(user1 == user2 && user1 !== null && user2 !== null && user1 !== "" && user2 !== "") {
                alert("Angka tidak boleh sama")
            }
            
            //Menangani jawaban pemain pertama (kondisi benar maupun salah) 
            if(user1) {
                if(user1Parse == num && user1Parse !== user2Parse) {
                    scoreUser1 += 1;
                    alert(`Pemain 1 benar! Tebakan yang benar adalah ${num}`);
                } else if(user1Parse > 3 || user1Parse < 0) {
                    alert("Pemain 1: Harus diisi angka dari 1 - 3 saja");
                }
            } else if (user1 == "") {
                alert(`Pemain 1 tidak menjawab`);
            }

            //Menangani jawaban pemain kedua (kondisi benar maupun salah) 
            if(user2) {
                if(user2Parse == num && user2Parse !== user1Parse) {
                    scoreUser2 += 1;
                    alert(`Pemain 2 benar! Tebakan yang benar adalah ${num}`);
                } else if(user2Parse > 3 || user2Parse < 0) {
                    alert("Pemain 2: Harus diisi angka dari 1 - 3 saja");
                }
            } else if (user2 == "") {
                alert(`Pemain 2 tidak menjawab`);
            }

             //Menangani jawaban kedua pemain ketika tidak ada yang benar sesuai tebakan 
            if(user1Parse !== num && user2Parse !== num && user1 !== null && user2 !== null) {
                alert(`tidak ada yg benar. Tebakan yang benar adalah ${num}`);
            }
            

            alert(`Score = 
            ------------------------
            Pemain 1: ${scoreUser1}
            Pemain 2: ${scoreUser2}`)
        }
