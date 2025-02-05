form=document.querySelector('form');
const astrologySuggestions = [
    "Meditate under the moonlight to connect with lunar energy for inner peace.",
    "Keep a gratitude journal to align with the positive vibrations of the universe.",
    "Wear gemstones aligned with your zodiac sign to channel their energies for balance.",
    "Set intentions during the New Moon to manifest your desires with clarity.",
    "Cleanse your space with sage or incense to remove negative energies.",
    "Practice mindful breathing to stay grounded and in sync with cosmic flow.",
    "Create a vision board to visualize and attract your dreams.",
    "Read your daily horoscope to stay aligned with celestial influences.",
    "Learn about your natal chart to gain deeper insights into your personality.",
    "Balance your chakras using meditation, crystals, or yoga.",
    "Write down affirmations aligned with your goals to attract positivity.",
    "Celebrate the full moon to release what no longer serves you.",
    "Keep plants associated with your zodiac sign to enhance your energy.",
    "Stay in touch with planetary retrogrades and use them for reflection and growth.",
    "Wear colors linked to your sign’s ruling planet to amplify your aura.",
    "Spend time in nature to connect with Earth’s grounding energy.",
    "Learn about your zodiac compatibility to understand relationships better.",
    "Carry a crystal for protection and luck, choosing one based on your sign.",
    "Light a candle during Mercury retrograde to foster clarity and smooth communication.",
    "Express gratitude to the cosmos daily to strengthen your spiritual connection."
  ];
  const astrologyCompliments = [
    "You do good for others without expecting anything in return.",
    "Your kindness shines brighter than the stars.",
    "You have a heart that heals those around you.",
    "Your compassion creates ripples of positivity in the universe.",
    "You bring balance and harmony wherever you go.",
    "Your presence feels as comforting as the full moon's glow.",
    "You have the wisdom of someone beyond your years.",
    "Your energy inspires others to reach for the stars.",
    "You see the best in people, even when they don’t see it themselves.",
    "You have a natural gift for bringing people together.",
    "Your inner light guides others through their darkest times.",
    "You have the patience of the cosmos itself.",
    "Your words uplift those who need them the most.",
    "You are a true friend who listens with both heart and soul.",
    "Your intuition is as strong as the tides guided by the moon.",
    "You are a beacon of hope for those around you.",
    "You have a calming presence that soothes troubled hearts.",
    "Your generosity is as endless as the night sky.",
    "You are the kind of person who makes the world a better place.",
    "Your creativity flows like a river, inspiring everyone it touches.",
    "You radiate positivity, like sunlight breaking through clouds.",
    "Your loyalty is as steadfast as the planets in their orbits.",
    "You bring joy into people's lives effortlessly.",
    "Your sincerity is as refreshing as a cool breeze on a warm day.",
    "You have an eye for beauty in the little things around you.",
    "Your sense of humor lightens even the heaviest of hearts.",
    "You possess a strength that others admire in silence.",
    "Your ability to forgive shows your deep understanding of life.",
    "Your dreams inspire others to follow their own.",
    "You have a soul that connects with others on a cosmic level."
  ];
  const zodiacSigns = [
    "Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius","Capricorn","Aquarius","Pisces"
  ];
function getZodiacByStarNameAndNumber(starName, starNumber) {
  const nakshatraZodiacMapping = {
    Ashwini: "Aries (Mesha)",
    Bharani: "Aries (Mesha)",
    Krittika: ["Aries (Mesha)", "Taurus (Vrishabha)"],
    Rohini: "Taurus (Vrishabha)",
    Mrigashira: ["Taurus (Vrishabha)", "Gemini (Mithuna)"],
    Ardra: "Gemini (Mithuna)",
    Punarvasu: ["Gemini (Mithuna)", "Cancer (Karka)"],
    Pushya: "Cancer (Karka)",
    Ashlesha: "Cancer (Karka)",
    Magha: "Leo (Simha)",
    PurvaPhalguni: "Leo (Simha)",
    UttaraPhalguni: ["Leo (Simha)", "Virgo (Kanya)"],
    Hasta: "Virgo (Kanya)",
    Chitra: ["Virgo (Kanya)", "Libra (Tula)"],
    Swati: "Libra (Tula)",
    Vishakha: ["Libra (Tula)", "Scorpio (Vrishchika)"],
    Anuradha: "Scorpio (Vrishchika)",
    Jyeshtha: "Scorpio (Vrishchika)",
    Mula: "Sagittarius (Dhanu)",
    PurvaAshadha: "Sagittarius (Dhanu)",
    UttaraAshadha: ["Sagittarius (Dhanu)", "Capricorn (Makara)"],
    Shravana: "Capricorn (Makara)",
    Dhanishta: ["Capricorn (Makara)", "Aquarius (Kumbha)"],
    Shatabhisha: "Aquarius (Kumbha)",
    PurvaBhadrapada: ["Aquarius (Kumbha)", "Pisces (Meena)"],
    UttaraBhadrapada: "Pisces (Meena)",
    Revati: "Pisces (Meena)",
};

  if (starNumber < 1 || starNumber > 4) {
    return "Invalid star number! Please provide a number between 1 and 4.";
  }

  const zodiacInfo = nakshatraZodiacMapping[starName];
  if (!zodiacInfo) {
    return "Invalid star name! Please provide a valid Nakshatra.";
  }

  if (Array.isArray(zodiacInfo)) {
    
    return starNumber === 1 ? zodiacInfo[0] : zodiacInfo[1];
  }

  
  return zodiacInfo;
}

  const astrologyPredictions = [
    "You will get a job offer that changes your life next year.",
    "An old friend will reconnect with you unexpectedly.",
    "Your financial situation will improve in the coming months.",
    "You will travel to a place you’ve always dreamed of soon.",
    "A long-awaited opportunity will finally present itself this year.",
    "You will find clarity in a situation that has been troubling you.",
    "Love will blossom in your life when you least expect it.",
    "A creative idea of yours will gain recognition this year.",
    "You will experience personal growth through unexpected challenges.",
    "A family issue will resolve itself peacefully soon.",
    "You will achieve a major milestone in your career this year.",
    "Someone you admire will notice your hard work and dedication.",
    "You will find the courage to take a leap of faith soon.",
    "A new friendship will bring joy and positivity to your life.",
    "You will receive unexpected financial gains this year.",
    "A hobby of yours will turn into a source of income soon.",
    "You will learn something new that changes your perspective on life.",
    "An exciting partnership or collaboration will come your way.",
    "Your health and energy levels will improve dramatically this year.",
    "A long-standing conflict will come to an end soon.",
    "You will discover a hidden talent that surprises even you.",
    "Your patience will be rewarded with success this year.",
    "Someone will express gratitude for the kindness you’ve shown them.",
    "You will overcome a fear that has held you back for years.",
    "A romantic connection will grow stronger in the near future.",
    "Your hard work will be rewarded with recognition and praise.",
    "You will receive good news from someone far away.",
    "An unexpected mentor will guide you toward success this year.",
    "You will find inner peace through meditation or self-reflection.",
    "A new skill you learn will open doors to exciting opportunities.",
    "Your intuition will guide you to make a life-changing decision.",
    "You will experience a spiritual awakening that brings clarity.",
    "A project you’ve been working on will reach a successful conclusion.",
    "You will be surrounded by love and support during challenging times.",
    "An unexpected gift will bring you immense happiness this year.",
    "You will attract positive energy and new opportunities this month.",
    "A financial investment will bring greater returns than expected.",
    "You will feel more confident and empowered to chase your dreams.",
    "A long-forgotten goal will resurface and reignite your passion.",
    "You will inspire others with your determination and resilience."
  ];
  const colorSuggestions = [
    "Wear shades of blue to enhance calmness and communication.",
    "Embrace earthy greens for grounding and renewal.",
    "Choose vibrant reds to boost confidence and passion.",
    "Opt for soothing whites to promote peace and clarity.",
    "Incorporate golden hues to attract prosperity and success.",
    "Try deep purples for spiritual growth and wisdom.",
    "Go for sunny yellows to spark creativity and joy.",
    "Select soft pinks to nurture love and compassion.",
    "Add rich browns to stay grounded and stable.",
    "Experiment with mystical black for protection and empowerment."
  ];
  const luckForecasts = [
    "Today might not be the best day to make big decisions. Stay patient.",
    "The stars say today will be filled with good fortune—embrace the opportunities.",
    "You may face some obstacles today, but your persistence will pay off.",
    "Take a deep breath and trust in the flow of the universe today.",
    "Expect a day full of surprises, some good, some challenging—but you can handle them.",
    "Today is a great day to step outside your comfort zone and take risks.",
    "Luck is on your side today. Take advantage of the opportunities that come your way.",
    "You might encounter a few setbacks, but don’t let them discourage you.",
    "Today is an excellent day to trust your intuition. It will lead you to success.",
    "The universe is aligning in your favor—everything you’ve been working on is about to pay off.",
    "Today’s energy is all about transformation. Embrace change and new beginnings.",
    "Be cautious with your investments today; take time to think things through.",
    "You may feel a little off today, but things will balance out by evening.",
    "The stars are guiding you toward success, so take that leap of faith.",
    "Stay focused and don’t let distractions pull you away from your goals today.",
    "An unexpected twist may bring you good fortune today. Be ready for it!",
    "Today is a great day for creative projects. Let your imagination flow.",
    "Luck will favor the bold today—don’t be afraid to chase your dreams.",
    "The universe is sending you positive energy today—use it to your advantage.",
    "Stay grounded today and be mindful of the opportunities around you.",
    "A small, positive change today could lead to bigger, better things in the future.",
    "The stars are shining brightly today—this could be your lucky day.",
    "You may face some challenges, but remember, every obstacle is an opportunity to grow.",
    "Keep your head high—good things are coming your way, even if they aren’t obvious right now.",
    "Stay open to the unexpected, as it could bring you the luck you’ve been waiting for.",
    "Your hard work is paying off. Keep moving forward, and success will find you.",
    "Today is a day of growth and learning. Every step you take leads to progress.",
    "Patience is key today. Don’t rush through decisions—take your time.",
    "Today’s energy brings clarity and focus. Trust that things will align perfectly.",
    "The stars suggest a bit of reflection today. Think about where you want to go next."
  ];
  
form.addEventListener('submit',(event)=>{
    const uname=document.getElementById('name').value
    const surname=document.getElementById('surname').value
    const date=Number(document.getElementById('date').value);
    const month=Number(document.getElementById('month').value);
    const year=Number(document.getElementById('year').value);
    const starname=document.getElementById('starname').value;
    const starnumber=Number(document.getElementById('starno').value);
    event.preventDefault();
    
    const zodiacSign = getZodiacByStarNameAndNumber(starname,starnumber);
   
    const messages = [
        `Name:${surname} ${uname}`,
        `StarName: ${starname}`,
        `Nakshatra quarters: ${starnumber}`,
        `Your Zodiac Sign is ${zodiacSign}`,
        `${astrologyCompliments[date - 1]}`,
        `${astrologySuggestions[(year % 20) - 1]}`,
        `${colorSuggestions[Math.floor(Math.random() * 10) - 1]}`,
        `${luckForecasts[Math.floor(Math.random()*30)-1]}`,
        `${astrologyPredictions[((surname.length) * (uname.length)) % 40 - 1]}`
      ];
      let div_element = document.querySelector('.display');
    if (div_element) {
        div_element.remove(); 
    }
      div_element=document.createElement('div');
      div_element.className='display';
      const content=document.querySelector('.content');
      content.appendChild(div_element);
      messages.forEach((msg) => {
        const messageElement = document.createElement('p');
        messageElement.innerHTML = msg;
        div_element.appendChild(messageElement);
      });
    
});