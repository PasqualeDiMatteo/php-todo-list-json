// Controllo JS
console.log("JSOK");

// Controllo Vue

console.log("Vue OK", Vue);

// Estarpolo il metodo createApp

const { createApp } = Vue;

// Inizializzo l'app Vue

const app = createApp({
  data() {
    return {
      tasks: ["HTML", "CSS", "Responsive design", "Javascript", "PHP"],
    };
  },
});

// La monto nell'elemento HTML

app.mount("#root");
