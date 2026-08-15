/* =========================================
   LOCAL GHAZAL MUSIC PLAYER
========================================= */

/*
  Add your MP3 filenames here.

  The title is automatically created from
  the filename.

  Example:
  ghazal/Hum Bhi Hain.mp3
  becomes:
  Hum Bhi Hain
*/
//midnight-memories/gajal/Chupke-Chupke-Raat-Din-Aansoon-Bahana-Yaad-Hai.mp3
const playlist = [
  "gajal/Chupke-Chupke-Raat-Din-Aansoon-Bahana-Yaad-Hai.mp3",
  "gajal/Rafta-Rafta-Wo-Meri-Muham.mp3",
"gajal/Lyrical-Aaoge-Jab-Tum-Jab.mp3",
"gajal/Tere-Bina-Full-Video-A-R.mp3",
"gajal/Rahat-Fateh-Ali-Khan-Zaro.mp3",
"gajal/Saiyyan-Kailash-Kher-Pare.mp3",
"gajal/Andaaz-e-Karam-Official-V.mp3",
"gajal/Ishq-Official-Lyrical-Vid.mp3",
"gajal/Lag-Ja-Gale-Abhi-Na-Jao-C.mp3",
"gajal/Rafta-Rafta-Woh-Meri-Muha.mp3",
"gajal/Ishq-Sufiyana-Lyrical-The.mp3",
"gajal/The-Sufi-Mashup-The-Bomba.mp3",
"gajal/Hoshwalon-Ko-Khabar-Kya-A.mp3",
"gajal/Deewaana-Deewaana-Full-Vi.mp3",
"gajal/Zindagi-Ke-Safar-Mein-V4U.mp3",
"gajal/Phir-Le-Aya-Dil-Lyrical-V.mp3",
"gajal/Yeh-Dil-Tum-Bin-Cover-Bha.mp3",
"gajal/Kalank-Title-Track-Lyrica.mp3",
"gajal/Anuv-Jain-JO-TUM-MERE-HO.mp3",
"gajal/Piya-Ghar-Aavenge-Lyrical.mp3",
"gajal/Luka-Chuppi-Lyrical-Song.mp3",
"gajal/Koi-Fariyaad-Pratibha-Sin.mp3",
"gajal/Chamakte-Chand-Ko-Lyrical.mp3",
"gajal/Dard-Bhari-Ghazal-2021-Hu.mp3",
"gajal/Lyrical-Tu-Meri-Zindagi-H.mp3",
"gajal/Ek-Taraf-Uska-Ghar.mp3",
"gajal/Us-Mod-Se-Shuroo-Karen-Th.mp3",
"gajal/Ustad-Ghulam-Alis-Hit-Gha.mp3",
"gajal/Ghulam-Ali-Ghazals-Humko.mp3",
"gajal/Apni-Dhun-Mein-Rehta-Hoon.mp3",
"gajal/Din-Kuch-Aise-Guzarta-Hai.mp3",
"gajal/Superhit-Gazal-Khamosh-La.mp3",
"gajal/Tere-Aane-Ki-Jab-Khabar-M.mp3",
"gajal/Agar-Hum-Kahen-Aur-Woh-Mu.mp3",
"gajal/Tamanna-Phir-Machal-Jaaye.mp3",
"gajal/Jagjit-Singh-Pyaar-Ka-Peh.mp3",
"gajal/Tere-liye-Song-with-Lyric.mp3",
"gajal/Andaaz-e-Karam-Official-2.mp3",
"gajal/Anuv-Jain-JO-TUM-MERE-H-2.mp3",
"gajal/Apni-Dhun-Mein-Rehta-Ho-2.mp3",
"gajal/Chamakte-Chand-Ko-Lyric-2.mp3",
"gajal/Dard-Bhari-Ghazal-2021-2.mp3",
"gajal/Deewaana-Deewaana-Full-2.mp3",
"gajal/Din-Kuch-Aise-Guzarta-H-2.mp3",
"gajal/Ek-Taraf-Uska-Ghar-2.mp3",
"gajal/Ghulam-Ali-Ghazals-Humk-2.mp3",
"gajal/Hoshwalon-Ko-Khabar-Kya-2.mp3",
"gajal/Ishq-Official-Lyrical-V-2.mp3",
"gajal/Ishq-Sufiyana-Lyrical-T-2.mp3",
"gajal/Kalank-Title-Track-Lyri-2.mp3",
"gajal/Koi-Fariyaad-Pratibha-S-2.mp3",
"gajal/Lag-Ja-Gale-Abhi-Na-Jao-2.mp3",
"gajal/Luka-Chuppi-Lyrical-Son-2.mp3",
"gajal/Lyrical-Aaoge-Jab-Tum-J-2.mp3",
"gajal/Lyrical-Tu-Meri-Zindagi-2.mp3",
"gajal/Phir-Le-Aya-Dil-Lyrical-2.mp3",
"gajal/Piya-Ghar-Aavenge-Lyric-2.mp3",
"gajal/Rafta-Rafta-Wo-Meri-Muh-2.mp3",
"gajal/Rafta-Rafta-Woh-Meri-Mu-2.mp3",
"gajal/Rahat-Fateh-Ali-Khan-Za-2.mp3",
"gajal/Saiyyan-Kailash-Kher-Pa-2.mp3",
"gajal/Superhit-Gazal-Khamosh-2.mp3",
"gajal/Tamanna-Phir-Machal-Jaa-2.mp3",
"gajal/Tere-Aane-Ki-Jab-Khabar-2.mp3",
"gajal/Tere-Bina-Full-Video-A-2.mp3",
"gajal/Tere-liye-Song-with-Lyr-2.mp3",
"gajal/The-Sufi-Mashup-The-Bom-2.mp3",
"gajal/Us-Mod-Se-Shuroo-Karen-2.mp3",
"gajal/Ustad-Ghulam-Alis-Hit-G-2.mp3",
"gajal/Yeh-Dil-Tum-Bin-Cover-B-2.mp3",
"gajal/Zindagi-Ke-Safar-Mein-V-2.mp3"

];

// const playlist = [
//   "gajal/Chupke-Chupke-Raat-Din-Aansoon-Bahana-Yaad-Hai.mp3",
//   "ghazal/Agar-Hum-Kahen-Aur-Woh-Mu.mp3",
//   "gajal/Andaaz-e-Karam-Official-2.mp3",
//   "gajal/Andaaz-e-Karam-Official-2.mp3"
 
// ];

let current = 0;
let isSeeking = false;


/* =========================================
   RANDOM FIRST SONG
========================================= */

function getRandomTrack() {

  return Math.floor(
    Math.random() * playlist.length
  );

}


/* =========================================
   AUDIO
========================================= */

const audio = new Audio();

audio.preload = "metadata";


/* =========================================
   ELEMENTS
========================================= */

const $ = (id) =>
  document.getElementById(id);

const playBtn = $("play");
const prevBtn = $("prev");
const nextBtn = $("next");

const progress = $("progress");

const trackTitle = $("trackTitle");
const trackArtist = $("trackArtist");

const currentTime = $("currentTime");
const duration = $("duration");


/* =========================================
   GET SONG NAME
========================================= */

function getSongName(path) {

  return path
    .split("/")
    .pop()
    .replace(/\.[^/.]+$/, "")
    .replace(/[-_]/g, " ");

}


/* =========================================
   LOAD TRACK
========================================= */

function loadTrack(index, autoplay = false) {

  current =
    (index + playlist.length) %
    playlist.length;

  const songPath =
    playlist[current];

  audio.src = songPath;

  trackTitle.textContent =
    getSongName(songPath);

  trackArtist.textContent =
    "Late-night memories";

  progress.value = 0;

  currentTime.textContent =
    "0:00";

  duration.textContent =
    "0:00";

  audio.load();


  if (autoplay) {

    audio.play()
      .catch(error => {

        console.log(
          "Playback failed:",
          error
        );

      });

  }

}


/* =========================================
   PLAY / PAUSE
========================================= */

function togglePlay() {

  if (!audio.src) {

    loadTrack(current);

  }

  if (audio.paused) {

    audio.play()
      .catch(error => {

        console.log(
          "Playback failed:",
          error
        );

      });

  } else {

    audio.pause();

  }

}


/* =========================================
   PLAYING STATE
========================================= */

audio.addEventListener(
  "play",
  () => {

    playBtn.textContent = "Ⅱ";

    playBtn.setAttribute(
      "aria-label",
      "Pause"
    );

  }
);


audio.addEventListener(
  "pause",
  () => {

    playBtn.textContent = "▶";

    playBtn.setAttribute(
      "aria-label",
      "Play"
    );

  }
);


/* =========================================
   NEXT TRACK
========================================= */

function nextTrack() {

  loadTrack(
    current + 1,
    true
  );

}


/* =========================================
   PREVIOUS TRACK
========================================= */

function prevTrack() {

  /*
    If more than 3 seconds into
    the song, restart it.
  */

  if (audio.currentTime > 3) {

    audio.currentTime = 0;

    return;

  }

  loadTrack(
    current - 1,
    true
  );

}


/* =========================================
   SONG FINISHED
========================================= */

audio.addEventListener(
  "ended",
  () => {

    nextTrack();

  }
);


/* =========================================
   METADATA / DURATION
========================================= */

audio.addEventListener(
  "loadedmetadata",
  () => {

    if (
      audio.duration &&
      isFinite(audio.duration)
    ) {

      duration.textContent =
        formatTime(audio.duration);

    }

  }
);


/* =========================================
   UPDATE PROGRESS BAR
========================================= */

audio.addEventListener(
  "timeupdate",
  () => {

    /*
      Don't let timeupdate
      fight with the user's drag.
    */

    if (isSeeking) {
      return;
    }

    const currentPosition =
      audio.currentTime || 0;

    const total =
      audio.duration || 0;


    if (
      total > 0 &&
      isFinite(total)
    ) {

      progress.value =
        (currentPosition / total) * 100;

    }


    currentTime.textContent =
      formatTime(currentPosition);

    duration.textContent =
      formatTime(total);

  }
);


/* =========================================
   PROGRESS BAR SEEK
========================================= */

/*
  IMPORTANT:

  Do NOT use a separate "click"
  calculation here.

  The range input itself handles
  the click position.
*/

progress.addEventListener(
  "input",
  () => {

    if (
      !audio.duration ||
      !isFinite(audio.duration)
    ) {

      return;

    }


    isSeeking = true;


    const percentage =
      Number(progress.value) / 100;


    const newTime =
      audio.duration * percentage;


    /*
      Move the actual music
      immediately.
    */

    audio.currentTime =
      newTime;


    /*
      Update displayed time.
    */

    currentTime.textContent =
      formatTime(newTime);

  }
);


/* =========================================
   FINISH SEEKING
========================================= */

progress.addEventListener(
  "change",
  () => {

    if (
      !audio.duration ||
      !isFinite(audio.duration)
    ) {

      isSeeking = false;

      return;

    }


    const percentage =
      Number(progress.value) / 100;


    audio.currentTime =
      audio.duration * percentage;


    currentTime.textContent =
      formatTime(
        audio.currentTime
      );


    isSeeking = false;

  }
);


/* =========================================
   POINTER DOWN
========================================= */

progress.addEventListener(
  "pointerdown",
  () => {

    isSeeking = true;

  }
);


/* =========================================
   POINTER UP
========================================= */

progress.addEventListener(
  "pointerup",
  () => {

    if (
      audio.duration &&
      isFinite(audio.duration)
    ) {

      const percentage =
        Number(progress.value) / 100;


      audio.currentTime =
        audio.duration * percentage;


      currentTime.textContent =
        formatTime(
          audio.currentTime
        );

    }


    isSeeking = false;

  }
);


/* =========================================
   POINTER CANCEL
========================================= */

progress.addEventListener(
  "pointercancel",
  () => {

    isSeeking = false;

  }
);


/* =========================================
   FORMAT TIME
========================================= */

function formatTime(seconds) {

  if (
    !isFinite(seconds) ||
    seconds < 0
  ) {

    return "0:00";

  }


  seconds =
    Math.floor(seconds);


  const minutes =
    Math.floor(
      seconds / 60
    );


  const remainingSeconds =
    String(
      seconds % 60
    ).padStart(2, "0");


  return `${minutes}:${remainingSeconds}`;

}


/* =========================================
   BUTTON EVENTS
========================================= */

playBtn.addEventListener(
  "click",
  togglePlay
);


nextBtn.addEventListener(
  "click",
  nextTrack
);


prevBtn.addEventListener(
  "click",
  prevTrack
);


/* =========================================
   AUDIO ERROR
========================================= */

audio.addEventListener(
  "error",
  () => {

    console.error(
      "Cannot load:",
      playlist[current]
    );

    trackArtist.textContent =
      "Unable to load this track";

  }
);


/* =========================================
   LOAD RANDOM SONG ON PAGE LOAD
========================================= */

current =
  getRandomTrack();

loadTrack(
  current
);

// Support / payment configuration.
// Replace this with your own UPI deep link or a secure Razorpay/Stripe payment link.
/* =========================================
   SUPPORT / UPI PAYMENT
========================================= */
/* =========================================
   SUPPORT / UPI PAYMENT + TEMPORARY QR
========================================= */

const UPI_ID = "7054575719@ybl";
const PAYEE_NAME = "Aviii";

let selectedAmount = 199;

const QR_VALID_TIME = 120; // 2 minutes

let qrTimerInterval = null;
let qrSecondsLeft = QR_VALID_TIME;

const supportBtn = document.getElementById("supportBtn");
const supportModal = document.getElementById("supportModal");
const closeSupport = document.getElementById("closeSupport");

const payLink = document.getElementById("payLink");

const qrSection = document.getElementById("qrSection");
const upiQr = document.getElementById("upiQr");
const qrTimer = document.getElementById("qrTimer");


/* Create UPI payment link */

function createUPILink(amount) {

  const params = new URLSearchParams({
    pa: UPI_ID,
    pn: PAYEE_NAME,
    am: String(amount),
    cu: "INR",
    tn: "Support for Aviii"
  });

  return `upi://pay?${params.toString()}`;
}


/* Update payment button */

// function updatePaymentButton() {

//   payLink.innerHTML =
//     `Pay ₹${selectedAmount} <span>↗</span>`;

// }


/* Create QR */

function generateQR() {

  const upiLink =
    createUPILink(selectedAmount);

  /*
    QR image generated from the UPI link
  */

  upiQr.src =
    `https://api.qrserver.com/v1/create-qr-code/?` +
    `size=300x300&data=${encodeURIComponent(upiLink)}`;

}


/* Format timer */

function formatTimer(seconds) {

  const minutes =
    Math.floor(seconds / 60);

  const remaining =
    String(seconds % 60)
      .padStart(2, "0");

  return `${minutes}:${remaining}`;

}


/* Start QR expiration timer */

function startQRTimer() {

  clearInterval(qrTimerInterval);

  qrSecondsLeft = QR_VALID_TIME;

  qrTimer.textContent =
    formatTimer(qrSecondsLeft);

  qrTimer.classList.remove("qr-expired");

  qrTimerInterval =
    setInterval(() => {

      qrSecondsLeft--;

      qrTimer.textContent =
        formatTimer(
          Math.max(qrSecondsLeft, 0)
        );

      if (qrSecondsLeft <= 0) {

        clearInterval(qrTimerInterval);

        qrSection.classList.remove("show");

        qrTimer.textContent =
          "Expired";

        qrTimer.classList.add("qr-expired");

      }

    }, 1000);

}


/* Show QR */

function showQR() {

  generateQR();

  qrSection.classList.add("show");

  startQRTimer();

}


/* Select amount */

document.querySelectorAll(".tip")
  .forEach((btn) => {

    btn.addEventListener("click", () => {

      selectedAmount =
        Number(btn.dataset.amount);

      document
        .querySelectorAll(".tip")
        .forEach((x) =>
          x.classList.remove("active")
        );

      btn.classList.add("active");

      updatePaymentButton();

      /*
        Generate a new QR
        when amount changes
      */

      if (
        qrSection.classList.contains("show")
      ) {

        showQR();

      }

    });

});


/* Pay button */

payLink?.addEventListener("click", (e) => {

  e.preventDefault();

  const upiLink =
    createUPILink(selectedAmount);

  /*
    Mobile:
    Open UPI app
  */

  const isMobile =
    /Android|iPhone|iPad|iPod/i
      .test(navigator.userAgent);


  if (isMobile) {

    window.location.href =
      upiLink;

  } else {

    /*
      Desktop:
      Show QR code
    */

    showQR();

  }

});


/* Open modal */

supportBtn?.addEventListener("click", () => {

  supportModal.classList.add("show");

  supportModal.setAttribute(
    "aria-hidden",
    "false"
  );

});


/* Close modal */

closeSupport?.addEventListener("click", () => {

  supportModal.classList.remove("show");

  supportModal.setAttribute(
    "aria-hidden",
    "true"
  );

  clearInterval(qrTimerInterval);

});


/* Click outside modal */

supportModal?.addEventListener("click", (e) => {

  if (e.target === supportModal) {

    closeSupport.click();

  }

});


updatePaymentButton();

function updatePaymentButton() {

  payLink.style.opacity = "0";

  setTimeout(() => {

    payLink.innerHTML =
      `Pay ₹${selectedAmount} <span>↗</span>`;

    payLink.style.opacity = "1";

  }, 150);

}