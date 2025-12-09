// Ambil elemen
const chatbox = document.getElementById("chatbox");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

// Event untuk tombol Kirim
sendBtn.addEventListener("click", sendMessage);

// Event untuk tekan Enter
userInput.addEventListener("keypress", function(e){
    if(e.key === "Enter") sendMessage();
});

// Fungsi mengirim pesan user
function sendMessage() {
    const message = userInput.value.trim();
    if(!message) return;

    // Tampilkan pesan user
    addMessage("user", message);

    // Reset input
    userInput.value = "";

    // Delay 1500ms sebelum bot jawab
    setTimeout(() => {
        handleBot(message);
    }, 1500);
}

// Fungsi menambahkan pesan ke chatbox
function addMessage(type, text) {
    const msgContainer = document.createElement("div");
    msgContainer.classList.add("message-container", type);

    // Label user/bot
    const msgLabel = document.createElement("span");
    msgLabel.classList.add("message-label");
    msgLabel.textContent = type === "bot" ? "Bot_Rasen" : "Anda";
    msgContainer.appendChild(msgLabel);

    // Pesan
    const msg = document.createElement("div");
    msg.classList.add("message", type === "bot" ? "bot-message" : "user-message");
    msg.innerHTML = text; // pakai innerHTML supaya HTML dirender

    msgContainer.appendChild(msg);
    chatbox.appendChild(msgContainer);

    // scroll ke pesan terakhir
    chatbox.scrollTop = chatbox.scrollHeight;
}

// Fungsi bot merespons
function handleBot(message) {
    let reply = "";

    switch(message) {
        case "/help":
            reply = "Command yang tersedia: /nama, /umur, /TTL, /pendidikan, /hobi, /warna, /makanan, /minuman, /ig";
            break;
        case "/nama":
            reply = "Kenalin nama gue Muhammad Rafi Rasendriya.";
            break;
        case "/umur":
            reply = "Umur gue 19 tahun.";
            break;
        case "/TTL":
            reply = "Jakarta, 04 Juli 2006.";
            break;
        case "/pendidikan":
            reply = "Riwayat Pendidikan:<br>- SDN 01 Pagi Petukangan Selatan<br>- SMPN 19 Jakarta<br>- SMK Karya Guna<br>- Universitas INDRAPRASTA PGRI";
            break;
        case "/hobi":
            reply = "Hobi gue adalah desain grafis dan coding.";
            break;
        case "/warna":
            reply = "Warna favorit hijau, biru.";
            break;
        case "/makanan":
            reply = "Makanan favorit masakan Emak.";
            break;
        case "/minuman":
            reply = "Minuman favorit kopi.";
            break;
        case "/ig":
            reply = '<a href="https://www.instagram.com/rasennn__/" target="_blank" style="color:#fff; text-decoration:underline;">Klik disini untuk lanjut ke Instagram</a>';
            break;
        default:
            reply = "Command tidak dikenali. Ketik /help untuk daftar command.";
    }

    addMessage("bot", reply);
}
