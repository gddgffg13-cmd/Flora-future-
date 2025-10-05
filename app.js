let currentRegion = "";


function startApp() {
  document.getElementById("start-section").classList.add("hidden");
  document.getElementById("map-section").classList.remove("hidden");
}


function selectRegion(region) {
  currentRegion = region;
  document.getElementById("map-box").classList.add("hidden");
  document.getElementById("region-buttons").classList.add("hidden");
  document.getElementById("plant-buttons").classList.remove("hidden");
}


function showPlants(type) {
  const container = document.getElementById("cards-container");
  container.innerHTML = "";

  const plants = (type === 'traditional') ? traditionalPlants[currentRegion] : futurePlants[currentRegion];

  plants.forEach(plant => {
    const div = document.createElement("div");
    div.classList.add("card");

    if (plant.rating === "ممتاز") div.classList.add("excellent");
    else if (plant.rating === "متوسط") div.classList.add("average");
    else div.classList.add("weak");

    div.innerHTML = `
      <img src="${plant.image}" alt="${plant.name}" class="plant-image">
      <h3>${plant.name}</h3>
      <p><strong>NDIV:</strong> ${plant.ndiv}</p>
      <p><strong>التقييم:</strong> ${plant.rating}</p>
      <p><strong>المميزات:</strong> ${plant.features}</p>
      <p><strong>الفائدة:</strong> ${plant.benefit}</p>
    `;
    container.appendChild(div);
  });

  showSection("plant-cards");
}


function showSection(id) {
  document.querySelectorAll("main section").forEach(sec => sec.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}


function goBack() {
  document.getElementById("plant-cards").classList.add("hidden");
  document.getElementById("map-section").classList.remove("hidden");
  document.getElementById("map-box").classList.remove("hidden");
  document.getElementById("region-buttons").classList.remove("hidden");
  document.getElementById("plant-buttons").classList.add("hidden");
}


const traditionalPlants = {
  desert: [
    {
      name: "الغاف",
      ndiv: 0.85,
      rating: "ممتاز",
      features: "مقاوم للجفاف",
      benefit: "يحمي التربة من التصحر",
      image: "images/pros.jpg"
    },
    {
      name: "السدر",
      ndiv: 0.67,
      rating: "متوسط",
      features: "مقاوم للحرارة والجفاف",
      benefit: "يغذي التربة",
      image: "images/sidr.jpg"
    }
  ],
  coastal: [
    {
      name: "المانغروف",
      ndiv: 0.92,
      rating: "ممتاز",
      features: "يتحمل الملوحة",
      benefit: "يمنع انجراف التربة",
      image: "images/avic.jpg"
    },
    {
      name: "القرم",
      ndiv: 0.45,
      rating: "ضعيف",
      features: "مقاومة محدودة للملوحة",
      benefit: "يساهم جزئياً في حماية التربة",
      image: "images/qurm.jpeg"
    }
  ]
};

const futurePlants = {
  desert: [
    {
      name: "الجاتروفا",
      ndiv: 0.80,
      rating: "ممتاز",
      features: "مقاوم للجفاف، زيت نباتي للوقود الحيوي",
      benefit: "تنتج طاقة نظيفة وتقلل الانبعاثات",
      image: "images/jatr.jpg"
    },
    {
      name: "الرغل",
      ndiv: 0.65,
      rating: "متوسط",
      features: "مقاوم للحرارة، نمو سريع",
      benefit: "تمتص الأملاح وتحسن التربة",
      image: "images/atri.jpg"
    }
  ],
  coastal: [
    {
      name: "الساليكورنيا",
      ndiv: 0.90,
      rating: "ممتاز",
      features: "مقاوم للملوحة وسريع النمو",
      benefit: "يستصلح التربة المالحة وينتج زيتاً حيوياً",
      image: "images/sali.jpg"
    },
    {
      name: "النجيل المحلي",
      ndiv: 0.90,
      rating: "ممتاز",
      features: "مقاوم للملوحة والحرارة",
      benefit: "يمنع انجراف التربة ويحافظ على الغطاء الأخضر",
      image: "images/dist.jpg"
    }
  ]
};
