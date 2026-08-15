# Haunted by Memories

A single-screen cinematic music website using the supplied night-scene artwork.

## Run
Open `index.html` in a browser.

## Add your music
Edit `app.js` and replace the `id` values in `playlist` with YouTube video IDs and update the title/artist.

Note: YouTube/YouTube Music playback availability and advertisements are controlled by YouTube. This site hides the embedded video UI but cannot guarantee ad-free playback or bypass YouTube ads.


## Creator & support
- Creator shown on the site: **@bytzbinary**
- Name: **Aviii**
- Instagram button: `https://www.instagram.com/bytzbinary/`
- The **Buy me a bottle** button opens a payment/support modal.

To activate payments, edit `PAYMENT_BASE_URL` in `app.js` and add your secure payment link (for example, a UPI payment link, Razorpay Payment Link, or Stripe Payment Link). The website does not collect or store card/payment details itself.


## Live city version
This version adds lightweight CSS animation over the static artwork:
- moving warm/red car-light trails
- subtle building/city light flicker
- slow window reflection sweep
- gentle cinematic motion

The original illustration remains the main visual. No external animation assets are required.


## Outside-window car animation
The live effect has been repositioned: animated cars and small road lights are now clipped to the **outside city/window area only**. Nothing moves over the character, armchair, PC, or interior.
