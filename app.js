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
  "ghazal/Song 2.mp3",
  "ghazal/Song 3.mp3"
];


/* =========================================
   AUDIO PLAYER
========================================= */

let current = 0;
let isSeeking = false;


/* Create audio element */

const audio = new Audio();

audio.preload = "metadata";


/* =========================================
   ELEMENTS
========================================= */

const $ = (id) => document.getElementById(id);

const playBtn = $("play");
const prevBtn = $("prev");
const nextBtn = $("next");

const progress = $("progress");

const trackTitle = $("trackTitle");
const trackArtist = $("trackArtist");

const currentTime = $("currentTime");
const duration = $("duration");


/* =========================================
   GET SONG NAME FROM FILE
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

  const songPath = playlist[current];

  audio.src = songPath;

  trackTitle.textContent =
    getSongName(songPath);

  trackArtist.textContent =
    "Late-night memories";

  progress.value = 0;

  currentTime.textContent = "0:00";

  duration.textContent = "0:00";

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

    audio.play();

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
   NEXT / PREVIOUS
========================================= */

function nextTrack() {

  loadTrack(
    current + 1,
    true
  );

}


function prevTrack() {

  /*
    If more than 3 seconds into song,
    restart current song.
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

    duration.textContent =
      formatTime(audio.duration);

  }
);


/* =========================================
   UPDATE PROGRESS BAR
========================================= */

audio.addEventListener(
  "timeupdate",
  () => {

    if (isSeeking) return;

    const current =
      audio.currentTime || 0;

    const total =
      audio.duration || 0;

    if (total > 0) {

      progress.value =
        (current / total) * 100;

    }

    currentTime.textContent =
      formatTime(current);

    duration.textContent =
      formatTime(total);

  }
);

/* =========================================
   SMOOTH CLICK / DRAG SEEK
========================================= */

function seekToPosition(event) {

  const rect = progress.getBoundingClientRect();

  const clickX =
    Math.max(
      0,
      Math.min(
        event.clientX - rect.left,
        rect.width
      )
    );

  const percentage =
    clickX / rect.width;

  const total =
    audio.duration || 0;

  if (total > 0) {

    audio.currentTime =
      percentage * total;

    progress.value =
      percentage * 100;

    currentTime.textContent =
      formatTime(audio.currentTime);

  }

}


/* Click anywhere on track */

progress.addEventListener(
  "click",
  (event) => {

    seekToPosition(event);

  }
);


/* Smooth dragging */

progress.addEventListener(
  "input",
  () => {

    isSeeking = true;

    const total =
      audio.duration || 0;

    if (total > 0) {

      const newTime =
        total *
        (Number(progress.value) / 100);

      currentTime.textContent =
        formatTime(newTime);

    }

  }
);


progress.addEventListener(
  "change",
  () => {

    const total =
      audio.duration || 0;

    if (total > 0) {

      audio.currentTime =
        total *
        (Number(progress.value) / 100);

    }

    isSeeking = false;

  }
);


/* Make dragging feel smooth */

progress.addEventListener(
  "pointerdown",
  () => {

    isSeeking = true;

  }
);


progress.addEventListener(
  "pointerup",
  () => {

    const total =
      audio.duration || 0;

    if (total > 0) {

      audio.currentTime =
        total *
        (Number(progress.value) / 100);

    }

    isSeeking = false;

  }
);
/* =========================================
   FORMAT TIME
========================================= */

function formatTime(seconds) {

  if (!isFinite(seconds)) {

    return "0:00";

  }

  seconds = Math.floor(seconds);

  const minutes =
    Math.floor(seconds / 60);

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
   LOAD FIRST SONG
========================================= */

loadTrack(0);


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