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
      tasks: [],
      newTask: "",
    };
  },
  methods: {
    addedTask() {
      const data = { task: this.newTask };
      const config = {
        headers: { "Content-Type": "multipart/form-data" },
      };
      axios
        .post(
          "http://localhost/php-todo-list-json/app_back_end/api/",
          data,
          config
        )
        .then((res) => {
          this.tasks = res.data;
          this.newTask = "";
        });
    },
    setDone(currentId) {
      const data = { id: currentId };
      const config = {
        headers: { "Content-Type": "multipart/form-data" },
      };
      axios
        .post(
          "http://localhost/php-todo-list-json/app_back_end/api/",
          data,
          config
        )
        .then((res) => {
          res.data.forEach((task, i) => {
            if (task.id == currentId) {
              this.tasks[i].completed = !this.tasks[i].completed;
            }
          });
        });
    },
  },
  created() {
    axios
      .get("http://localhost/php-todo-list-json/app_back_end/api/")
      .then((res) => {
        this.tasks = res.data;
      });
  },
});

// La monto nell'elemento HTML

app.mount("#root");
