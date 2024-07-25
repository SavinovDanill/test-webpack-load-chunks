import { mainLogger } from "./pages/main/main.helper";

const mainPage = () => {
    const app = document.getElementById('app');
    app.innerHTML = '<h1>Main Page</h1><p>This is the main page.</p>';
    console.log("Loaded main page");

    mainLogger()
  };
  
  export default mainPage;
  