<script>
    // ... (Script code) ...
    document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("penduduk-form");
    const dataContainer = document.getElementById("data-container");
    const transactions = []; // Array untuk menyimpan data

    form.addEventListener("submit", function(event) {
      event.preventDefault();

      // Mendapatkan nilai-nilai input
      const nama = document.getElementById("nama").value;
      const rumah = document.getElementById("rumah").value;
      const nominal = document.getElementById("nominal").value;
      const ket = document.getElementById("ket").value;
      const tanggal = document.getElementById("tanggal").value;
      const kartu = document.getElementById("kartu").value;
      const nokar = document.getElementById("nokar").value;
      const debit = document.getElementById("debit").value;
      const kett = document.getElementById("kett").value;

      // Menyimpan data ke dalam array transactions
      const transaction = {
        nama: nama,
        rumah: rumah,
        nominal: nominal,
        ket: ket,
        tanggal: tanggal,
        kartu: kartu,
        nokar: nokar,
        debit: debit,
        kett: kett
      };
      transactions.push(transaction);

      // Membuat elemen baru untuk menampilkan data
      const dataDiv = document.createElement("div");
      dataDiv.innerHTML = `<strong>Nama:</strong> ${nama}, <strong>Rumah:</strong> ${rumah}, <strong>Nominal:</strong> ${nominal}, <strong>Keterangan:</strong> ${ket}, <strong>Tanggal:</strong> ${tanggal}, <strong>Kartu Atas Nama:</strong> ${kartu}, <strong>Nomor Kartu:</strong> ${nokar}, <strong>Nominal Debit:</strong> ${debit}, <strong>Ketterangan:</strong> ${kett}`;

      dataContainer.appendChild(dataDiv);

      form.reset();
    });

    const downloadButton = document.querySelector(".btn");

    downloadButton.addEventListener("click", function() {
      const csvContent = "data:text/csv;charset=utf-8," + transactionsToCSV(transactions);
      const encodedUri = encodeURI(csvContent);
      const link = document.createElement("a");
      link.setAttribute("href", encodedUri);
      link.setAttribute("download", "data_keuangan.csv");
      document.body.appendChild(link);
      link.click();
    });

    function transactionsToCSV(transactions) {
      const header = "Nama,Rumah,Nominal,Keterangan,Tanggal,Kartu Atas Nama,Nomor Kartu,Nominal Debit,Keterangan\n";
      const rows = transactions.map(transaction =>
        `${transaction.nama},${transaction.rumah},${transaction.nominal},${transaction.ket},${transaction.tanggal},${transaction.kartu},${transaction.nokar},${transaction.debit},${transaction.kett}`
      ).join("\n");
      return header + rows;
    }
  });
</script>