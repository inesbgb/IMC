// Le but de ce projet est de coder un **calculateur d'IMC** à partir des valeurs rentrées par un utilisateur dans les **deux inputs**.

// A. Coder une interface basique
// Codez d'abord une interface très simple, contenant les éléments importants : boutons, inputs, liens, etc... 
// Rajoutez un peu de style si besoin est. 
// Puis codez les fonctionnalités JavaScript.

// B. Fonctionnalités JavaScript à coder pour ce projet

// 1. Gérer les inputs, retrouvez leur valeur dans votre script quand on clique sur le bouton.
// 2. Faites une validation basique, empêchez le calcul si l'utilisateur laisse un ou deux inputs vides. 
// Montrez également un message pour l'informer de l'erreur (ex : "Veuillez remplir les inputs").
// 1. Calculer l'IMC avec les valeurs rentrées.
// 2. Calculer le rang de l'IMC par rapport à "IMCData"
// 3. Remplir l'interface en fonction des résultats
   
// C. Ajoutez du style à l'interface afin de terminer le projet.

const BMIData = [
    { name: "Maigreur 😭", color: "midnightblue", range: [0, 18.5] },
    { name: "Bonne santé 😁", color: "green", range: [18.5, 25] },
    { name: "Surpoids 😶‍🌫️", color: "lightcoral", range: [25, 30] },
    { name: "Obésité modérée 🥵", color: "orange", range: [30, 35] },
    { name: "Obésité sévère 😨", color: "crimson", range: [35, 40] },
    { name: "Obésité morbide 😱", color: "purple", range: 40 },
  ];
  
  // IMC = poids en kg / taille² en m
  const form = document.querySelector("form");
  
  form.addEventListener("submit", handleForm);
  
  function handleForm(e) {
    e.preventDefault();
  
    calculateBMI();
  }
  
  const inputs = document.querySelectorAll("input");
  
  function calculateBMI() {
    const height = inputs[0].value;
    const weight = inputs[1].value;
    const error = !height || !weight || height <= 0 || weight <= 0
    if (error) { 
      handleError();//Vérifie les erreurs //
      return;
    }
  
    const BMI = (weight / Math.pow(height / 100, 2)).toFixed(1);
    console.log(BMI); //mon calcul//
  
    showResult(BMI);
  }
  
  const partBMI = document.querySelector(".bmi-value");
  const result = document.querySelector(".result");
  
  function handleError() {
    partBMI.textContent = "Erreur";
    partBMI.style.color = "inherit";
    result.textContent = "Remplissez correctement les informations demandés.";
  }
  
  function showResult(BMI) {
    const rank = BMIData.find(data => {
      if (BMI >= data.range[0] && BMI < data.range[1]) return data; // pour parcourir le tableau//
      else if (typeof data.range === "number" && BMI >= data.range) return data; // uniquement pour la partie 40//
    });
  
    partBMI.textContent = BMI;
    partBMI.style.color = `${rank.color}`;
    result.textContent = `Résultat : ${rank.name}`;
  }
  