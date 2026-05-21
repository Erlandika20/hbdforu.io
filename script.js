const CORRECT_NAME = "indah kurnia sari";
        const CORRECT_BIRTHDATE = "23 mei 2007";

        function goToPage2() {
            document.getElementById('page1').classList.add('hidden');
            document.getElementById('page2').classList.remove('hidden');
            document.getElementById('namaInput').focus();
        }

        function goToPage1() {
            // Reset semua halaman
            document.getElementById('page1').classList.remove('hidden');
            document.getElementById('page2').classList.add('hidden');
            document.getElementById('page3').classList.add('hidden');
            document.getElementById('luckPage').classList.add('hidden');
            document.getElementById('errorMsg').classList.add('hidden');
            document.getElementById('photoPreview').classList.add('hidden');
            document.getElementById('namaInput').value = '';
            document.getElementById('tglInput').value = '';
        }

        function goToLuckPage() {
            document.getElementById('page1').classList.add('hidden');
            document.getElementById('luckPage').classList.remove('hidden');
        }

        function checkBirthday() {
            const nama = document.getElementById('namaInput').value.toLowerCase().trim();
            const tgl = document.getElementById('tglInput').value.toLowerCase().trim();
            const errorMsg = document.getElementById('errorMsg');

            if (nama === CORRECT_NAME && tgl === CORRECT_BIRTHDATE) {
                document.getElementById('page2').classList.add('hidden');
                document.getElementById('page3').classList.remove('hidden');
            } else {
                errorMsg.classList.remove('hidden');
                setTimeout(() => {
                    errorMsg.classList.add('hidden');
                }, 3000);
            }
        }

        function previewPhoto(event) {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    const preview = document.getElementById('photoPreview');
                    preview.src = e.target.result;
                    preview.classList.remove('hidden');
                }
                reader.readAsDataURL(file);
            }
        }

        function shareCelebration() {
            if (navigator.share) {
                navigator.share({
                    title: 'Selamat Ulang Tahun!',
                    text: 'Cek ucapan ulang tahun spesial ini!',
                    url: window.location.href
                });
            } else {
                alert('Ucapan ulang tahun spesial untuk Indah Kurnia Sari! 🥳🎂');
            }
        }

        // Enter key support
        document.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                if (!document.getElementById('page2').classList.contains('hidden')) {
                    checkBirthday();
                }
            }
        });