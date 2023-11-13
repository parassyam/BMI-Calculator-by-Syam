

//Button Hitung
function btnHitung() {
    let beratBadan = document.getElementById("berat").value;
    let tinggiBadan = document.getElementById("tinggi").value;
    let usia = document.getElementById("usia").value;
    //Pop Up Alert
    let beratHarus = parseFloat(document.getElementById("berat").value);
    let usiaHarus = parseInt(document.getElementById("usia").value);
    let tinggiHarus = parseFloat(document.getElementById("tinggi").value);

    if (!beratHarus || !usiaHarus || !tinggiHarus) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Pastikan input Berat, Usia, dan Tinggi dengan angka.'
        });
        return;
    }



    let priaRadioButton = document.getElementById("Pria");
    let wanitaRadioButton = document.getElementById("Wanita");


    if (!priaRadioButton.checked && !wanitaRadioButton.checked) {
        Swal.fire("Harap pilih jenis kelamin (Pria atau Wanita)!");
        return;
    }


    // Sembunyikan header
    let headerElement = document.querySelector('.header');
    headerElement.style.display = 'none';
    let hasilDiv = document.getElementById("hasilL");
    hasilDiv.style.display = "block";
    let halSatu = document.getElementById("halamanSatu");
    halSatu.style.display = "none";



    let hasil = parseInt(beratBadan) / ((parseInt(tinggiBadan) / 100) * (parseInt(tinggiBadan) / 100));

    console.log(hasil)

    let angkaBMIElement = document.getElementById("angkaBMI");
    angkaBMIElement.textContent = hasil.toFixed(1);

    let namaElement = document.getElementById("nama");
    nama = namaElement.value;

    if (hasil < 18.5) {
        kategori = "Kekurangan Berat Badan";
        andaMemiliki = nama + " anda memiliki berat badan Kurang :(";
        txtHasilBMI = "Hasil BMI dibawah 18";
        anda = "Anda berada dalam kategori kekurangan berat badan.";
        cara = "Cara terbaik untuk menaikkan berat badan adalah dengan mengatur pola makan yang lebih baik dan lebih rutin lagi dari sebelumnya.";
        jika = "Jika BMI Anda berada dalam kategori ini maka Anda dianjurkan untuk menaikkan berat badan hingga batas normal atau ideal.";
        tidak = "BMI tidak sepenuhnya mewakili diagnosis menyeluruh dan kesehatan tubuh dan resiko penyakit seseorang. Anda perlu konsultasi lebih lanjut mengenai resiko dan kekhawatiran Anda terkait dengan berat badan Anda.";
    } else if (hasil >= 18.5 && hasil <= 24.9) {
        kategori = "Ideal";
        andaMemiliki = nama + " anda memiliki berat badan Ideal :)";
        txtHasilBMI = "Hasil BMI antara 18.5 dan 24.9";
        anda = "Anda berada dalam kategori berat badan ideal.";
        cara = "Cara terbaik untuk mempertahankan berat badan ideal adalah dengan menjaga pola makan sehat dan berolahraga secara teratur.";
        jika = "Jika BMI Anda berada dalam kategori ini, maka Anda sudah berada dalam rentang berat badan yang sehat.";
        tidak = "BMI adalah alat yang berguna, tetapi juga perlu mempertimbangkan faktor-faktor lain dalam menilai kesehatan tubuh Anda.";
    } else if (hasil >= 25 && hasil <= 29.9) {
        kategori = "Kelebihan Berat Badan";
        andaMemiliki = nama + " anda memiliki berat badan Lebih :(";
        txtHasilBMI = "Hasil BMI antara 25 dan 29.9";
        anda = "Anda berada dalam kategori kelebihan berat badan.";
        cara = "Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga secara teratur.";
        jika = "Jika BMI Anda berada dalam kategori ini, maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
        tidak = "BMI adalah indikator awal kesehatan tubuh dan sebaiknya diikuti dengan konsultasi lebih lanjut.";
    } else {
        kategori = "Kegemukan (Obesitas)";
        andaMemiliki = nama + " anda memiliki berat badan Obesitas :(";
        txtHasilBMI = "Hasil BMI 30 atau lebih";
        anda = "Anda berada dalam kategori obesitas.";
        cara = "Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga secara teratur.";
        jika = "Jika BMI Anda berada dalam kategori ini, maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
        tidak = "BMI adalah indikator awal kesehatan tubuh dan sebaiknya diikuti dengan konsultasi lebih lanjut.";


    }


    let kategoriElement = document.getElementById("berat-Badan");
    kategoriElement.textContent = kategori;

    let andaMemilikiElement = document.getElementById("andaMemiliki");
    andaMemilikiElement.textContent = andaMemiliki;

    let txtHasilBMIElement = document.getElementById("txtHasilBMI");
    txtHasilBMIElement.textContent = txtHasilBMI;

    let andaElement = document.getElementById("andaBerada");
    andaElement.textContent = anda;

    let caraElement = document.getElementById("cara");
    caraElement.textContent = cara;

    let jikaElement = document.getElementById("jika");
    jikaElement.textContent = jika;

    let tidakElement = document.getElementById("tidakSepenuhnya");
    tidakElement.textContent = tidak;

    //JENIS JENIS PENYAKIT//
    if (hasil < 18.5) {
        penyakit = "Beberapa Penyakit Yang Berasal Dari Kekurangan Berat Badan";
        penyakitSatu = "Anemia";
        penyakitDua = "Osteoporosis";
        penyakitTiga = "Gangguan Kardiovaskular";
        penyakitEmpat = "Gangguan Sistem Kekebalan Tubuh";

    } else if (hasil > 18.6 && hasil <= 24.9) {
        penyakit = "Selamat Anda Ideal!";
        penyakitSatu.style.display = "none";
        penyakitDua.style.display = "none";
        penyakitTiga.style.display = "none";
        penyakitEmpat.style.display = "none";
    } else if (hasil >= 25 && hasil <= 29.9) {
        penyakit = "Beberapa Penyakit Yang Berasal Dari Kelebihan Berat Badan";
        penyakitSatu = "Diabetes";
        penyakitDua = "Hipertensi";
        penyakitTiga = "Sakit Jantung";
        penyakitEmpat = "Osteoarthritis";
    } else {
        penyakit = "Beberapa Penyakit Yang Berasal Dari Obesitas";
        penyakitSatu = "Kanker tertentu";
        penyakitDua = "Penyakit ginjal";
        penyakitTiga = "Penyakit pernapasan";
        penyakitEmpat = "Masalah kesehatan mental";


    }



    let penyakitElement = document.getElementById("penyakit");
    penyakitElement.textContent = penyakit;
    let penyakitSatuElement = document.getElementById("penyakitSatu");
    penyakitSatuElement.textContent = penyakitSatu;
    let penyakitDuaElement = document.getElementById("penyakitDua");
    penyakitDuaElement.textContent = penyakitDua;
    let penyakitTigaElement = document.getElementById("penyakitTiga");
    penyakitTigaElement.textContent = penyakitTiga;
    let penyakitEmpatElement = document.getElementById("penyakitEmpat");
    penyakitEmpatElement.textContent = penyakitEmpat;

}


//Button Reset
function btnReset() {
    let hasilDiv = document.getElementById("hasilL");
    hasilDiv.style.display = "none";

    document.getElementById("nama").value = "";
    document.getElementById("berat").value = "";
    document.getElementById("tinggi").value = "";
    document.getElementById("usia").value = "";
    document.getElementById("Pria").checked = false;
    document.getElementById("Wanita").checked = false;

    let kategoriElement = document.getElementById("berat-Badan");
    kategoriElement.textContent = "";

    let angkaBMIElement = document.getElementById("angkaBMI");
    angkaBMIElement.textContent = "";

    let halSatu = document.getElementById("halamanSatu");
    halSatu.style.display = "block";
    let headerElement = document.querySelector('.header');
    headerElement.style.display = 'block';

}

{
    //Button Download Hasil//
    window.onload = function () {
        document.getElementById("btn-DownloadHasil")
            .addEventListener("click", () => {

                //Menghilangkan div yang gak penting untuk di Download
                var elementToHide = document.getElementById('btnDnR');
                elementToHide.style.display = 'none';

                var elementToHide = document.getElementById('moon');
                elementToHide.style.display = 'none';

                const hasilL = this.document.getElementById("hasilL");
                console.log(hasilL)
                console.log(window)

                const namaFile = nama + "_HasilBMI.pdf";
                html2pdf().from(hasilL).set({ filename: namaFile }).save();

                //PopUp Download Berhasil
                var elementToHide = document.getElementById('btnDnR'); {
                    Swal.fire({
                        title: "Yeay!!!",
                        text: nama + " download telah berhasil!",
                        icon: "success"
                    });
                }

                //Menampilkan Lagi
                setTimeout(function () {
                    var elementToHide = document.getElementById('btnDnR');
                    elementToHide.style.display = 'block';
                }, 3000);

                setTimeout(function () {
                    var elementToHide = document.getElementById('moon');
                    elementToHide.style.display = 'block';
                }, 3000);

            })
    }

}
