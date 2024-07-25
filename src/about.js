import { aboutLogger } from "./pages/about/about.helper";


const aboutPage = () => {
    const app = document.getElementById('app');
    app.innerHTML = '<h1>About Page</h1><p>This is the about page.</p>';
    console.log("Loaded about page");

    aboutLogger()
  };
  
  export default aboutPage;
  