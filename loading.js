const messages = [
  "BIOS Date 2/4/1995 15:43:29 Ver: 3.10.55.910",
  "CPU: Apple M1 Pro (16) @ 3.2 GHz",
  "Memory: 16 GB RAM",
  "Memory Clock: 66 MHz, CAS Latency-2, RAS Precharge-3, RAS Active-6, TRAS-20 (2T Timing)",
  "Storage: 1024 GB Samsung PM9A1 SSD PCIe4.0",
  "Graphics: Apple M1 Pro",
  "Sound: 16-bit Sound Blaster Pro-compatible Sound Card",
  "CD-ROM Drive: 4x Speed",
  "Floppy Drive: 3.5-inch, 1.44 MB",
  "Ports: 1 Serial Port, 1 Parallel Port, 2 USB Ports",
  "Peripherals: 1 Keyboard, 1 Mouse",
  "Operating System: MacOS 15.1.1",
  "Booting from SSD...",
  "Loading Darwin Kernel...",
  "Initializing Hardware...",
  "Starting Services...",
  "Loading User Interface..."
  
];
  
  const loadingScreen = document.getElementById('loadingScreen');
  let messageIndex = 0;
  let charIndex = 0;
  
  function displayMessages() {
    if (messageIndex < messages.length - 1) {
      loadingScreen.textContent += messages[messageIndex] + '\n';
      messageIndex++;
      const randomDelay = Math.random() * 300; // Random delay up to 300ms
      setTimeout(displayMessages, randomDelay);
    } else {
      typeLastMessage();
    }
  }
  
  function typeLastMessage() {
    if (charIndex < messages[messageIndex].length) {
      loadingScreen.textContent += messages[messageIndex][charIndex];
      charIndex++;
      setTimeout(typeLastMessage, 100); // Adjust typing speed here
    } else {
      blinkCursor();
      setTimeout(() => {
        document.body.classList.add('fade-out'); // Add fade-out class
        setTimeout(() => {
          window.location.href = 'mainpage.html'; // Redirect to index.html after fade-out
        }, 1000); // Match this delay with the CSS transition duration
      }, 1200);
    }
  }
  
  function blinkCursor() {
    setInterval(() => {
      loadingScreen.textContent = loadingScreen.textContent.endsWith('_') 
        ? loadingScreen.textContent.slice(0, -1) 
        : loadingScreen.textContent + '_';
    }, 500); // Original cursor blink speed
  }
  
  displayMessages();
  