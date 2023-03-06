import Table from "./table.js"


const table = new Table({
        columns: ["Name", "Email"],
        data: [
          ["Tinky Winky", "tinkywinky@telletubies.com"],
          ["Dypsy", "dypsy@telletubies.com"],
          ["Laa laa", "laalaa@telletubies.com"],
          ["Po", "po@telletubies.com"]
        ]
      });
  

  

const app = document.getElementById("app");
      table.render(app);

table();  