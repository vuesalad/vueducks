import { createApp } from 'vue'
import App from './App.vue'
import { initNaive } from './base'

function sleep(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  
async function bootstrap() {

    // Pause execution of this async function for 2 seconds
    await sleep(2000);
  
    console.log('Waited for 2 seconds');

    

    const app = createApp(App);

    initNaive(app);
    
    app.mount('#app', true);
}
  
bootstrap();
  
