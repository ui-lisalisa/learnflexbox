export const STORE = {
  1: {
    css: `
    .parent {
      display: flex;
      width: 100%;
      height: 100vh;
    }

    .child {
      height: 33vh;
      width: 33%;
      border: 1px solid #1F1F1F;
    }
    `,
    js: `
    var parent = {
      display: 'flex',
      width: '100%',
      height: '100vh',
    };

    var child = {
      height: '33vh',
      width: '33%',
      border: '1px solid #EEE',
    };
    `,
    html: `
    <div class="parent">
      <div class="child"></div>
    </div>
    `,
  },
  2: {
    css: `
    .parent {
      display: flex;         
      justify-content: center;
      width: 100%;
      height: 100vh;
    }

    .child {
      height: 33vh;
      width: 33%;
      border: 1px solid #1F1F1F;
    }
    `,
    html: `
    <div class="parent">
      <div class="child"></div>
    </div>
    `,
  },
  3: {
    css: `
    .parent {
      display: flex;         
      justify-content: flex-end;
      width: 100%;
      height: 100vh;
    }

    .child {
      height: 33vh;
      width: 33%;
      border: 1px solid #1F1F1F;
    }
    `,
    html: `
    <div class="parent">
      <div class="child"></div>
    </div>
    `,
  },
  4: {
    css: `
    .parent {
      display: flex;         
      flex-direction: column;
      justify-content: center;
      width: 100%;
      height: 100vh;
    }

    .child {
      height: 33vh;
      width: 33%;
      border: 1px solid #1F1F1F;
    }
    `,
    html: `
    <div class="parent">
      <div class="child"></div>
    </div>
    `,
  },
  5: {
    css: `
    .parent {
      display: flex;         
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100vh;
    }

    .child {
      height: 33vh;
      width: 33%;
      border: 1px solid #1F1F1F;
    }
    `,
    html: `
    <div class="parent">
      <div class="child"></div>
    </div>
    `,
  },
  6: {
    css: `
    .parent {
      display: flex;         
      flex-direction: column;
      align-items: flex-end;
      justify-content: center;
      width: 100%;
      height: 100vh;
    }

    .child {
      height: 33vh;
      width: 33%;
      border: 1px solid #1F1F1F;
    }
    `,
    html: `
    <div class="parent">
      <div class="child"></div>
    </div>
    `,
  },
  7: {
    css: `
    .parent {
      display: flex;         
      flex-direction: column;      
      justify-content: flex-end;
      width: 100%;
      height: 100vh;
    }

    .child {
      height: 33vh;
      width: 33%;
      border: 1px solid #1F1F1F;
    }
    `,
    html: `
    <div class="parent">
      <div class="child"></div>
    </div>
    `,
  },
  8: {
    css: `
    .parent {
      display: flex;         
      flex-direction: column;
      align-items: center;      
      justify-content: flex-end;
      width: 100%;
      height: 100vh;
    }

    .child {
      height: 33vh;
      width: 33%;
      border: 1px solid #1F1F1F;
    }
    `,
    html: `
    <div class="parent">
      <div class="child"></div>
    </div>
    `,
  },
  9: {
    css: `
    .parent {
      display: flex;         
      flex-direction: column;
      align-items: flex-end;      
      justify-content: flex-end;
      width: 100%;
      height: 100vh;
    }

    .child {
      height: 33vh;
      width: 33%;
      border: 1px solid #1F1F1F;
    }
    `,
    html: `
    <div class="parent">
      <div class="child"></div>
    </div>
    `,
  },
  12: {
    css: `
    .parent {
      display: flex;
      width: 100%;
      height: 100vh;
    }

    .child {
      height: 33vh;
      width: 33%;
      border: 1px solid #1F1F1F;
    }
    `,
    html: `
    <div class="parent">
      <div class="child"></div>
      <div class="child"></div>
    </div>
    `,
  },
  13: {
    css: `
    .parent {
      display: flex;
      justify-content: center;
      width: 100%;
      height: 100vh;
    }

    .child {
      height: 33vh;
      width: 33%;
      border: 1px solid #1F1F1F;
    }
    `,
    html: `
    <div class="parent">
      <div class="child"></div>
      <div class="child"></div>
    </div>
    `,
  },
  14: {
    css: `
    .parent {
      display: flex;
      flex-direction: row;
      width: 100%;
      height: 100vh;
    }

    .child {
      height: 33vh;
      width: 33%;
      border: 1px solid #1F1F1F;
    }
    `,
    html: `
    <div class="parent">
      <div class="child"></div>
      <div class="child"></div>
    </div>
    `,
  },
  15: {
    css: `
    .parent {  
      display: flex;
      flex-direction: column;      
      width: 100%;
      height: 100vh;
    }

    .child:nth-child(2){
      display: flex;
      justify-content: center;
      width: 100%;
    }

    .child:nth-child(1),
    .grandchild {
      height: 33vh;      
      width: 33%;
      border: 1px solid #1F1F1F;
    }
    `,
    html: `
    <div class="parent">
      <div class="child"></div>
      <div class="child">
        <div class="grandchild"></div>
      </div>
    </div>
    `,
  },
  16: {
    css: `
    .parent {  
      display: flex;
      flex-direction: column;      
      width: 100%;
      height: 100vh;
    }

    .child:nth-child(2){
      display: flex;
      justify-content: flex-end;
      width: 100%;
    }

    .child:nth-child(1),
    .grandchild {
      height: 33vh;      
      width: 33%;
      border: 1px solid #1F1F1F;
    }
    `,
    html: `
    <div class="parent">
      <div class="child"></div>
      <div class="child">
        <div class="grandchild"></div>
      </div>
    </div>
    `,
  },
  17: {
    css: `
    .parent {  
      display: flex;
      justify-content: space-between;
      flex-direction: column;      
      width: 100%;
      height: 100vh;
    }

    .child:nth-child(2){
      display: flex;
      width: 100%;
    }

    .child:nth-child(1),
    .grandchild {
      height: 33vh;      
      width: 33%;
      border: 1px solid #1F1F1F;
    }
    `,
    html: `
    <div class="parent">
      <div class="child"></div>
      <div class="child">
        <div class="grandchild"></div>
      </div>
    </div>
    `,
  },
  18: {
    css: `
    .parent {  
      display: flex;
      justify-content: space-between;
      flex-direction: column;      
      width: 100%;
      height: 100vh;
    }

    .child:nth-child(2){
      display: flex;
      justify-content: center;
      width: 100%;
    }

    .child:nth-child(1),
    .grandchild {
      height: 33vh;      
      width: 33%;
      border: 1px solid #1F1F1F;
    }
    `,
    html: `
    <div class="parent">
      <div class="child"></div>
      <div class="child">
        <div class="grandchild"></div>
      </div>
    </div>
    `,
  },
  19: {
    css: `
    .parent {  
      display: flex;
      justify-content: space-between;
      flex-direction: column;      
      width: 100%;
      height: 100vh;
    }

    .child:nth-child(2){
      display: flex;
      justify-content: flex-end;
      width: 100%;
    }

    .child:nth-child(1),
    .grandchild {
      height: 33vh;      
      width: 33%;
      border: 1px solid #1F1F1F;
    }
    `,
    html: `
    <div class="parent">
      <div class="child"></div>
      <div class="child">
        <div class="grandchild"></div>
      </div>
    </div>
    `,
  },
  23: {
    css: `
    .parent {  
      display: flex;
      justify-content: flex-end;     
      width: 100%;
      height: 100vh;
    }
    
    .child {
      height: 33vh;      
      width: 33%;
      border: 1px solid #1F1F1F;
    }
    `,
    html: `
    <div class="parent">
      <div class="child"></div>
      <div class="child"></div>
    </div>
    `,
  },
  24: {
    css: `
    .parent {  
      display: flex;
      flex-direction: column;    
      width: 100%;
      height: 100vh;
    }
    
    .child:nth-child(1){
      width: 100%;
      display: flex;      
      justify-content: center;
    }

    .grandchild,
    .child:nth-child(2) {
      height: 33vh;      
      width: 33%;
      border: 1px solid #1F1F1F;
    }
    `,
    html: `
    <div class="parent">
      <div class="child">
        <div class="grandchild"></div>
      </div>
      <div class="child"></div>       
    </div>
    `,
  },
  25: {
    css: `
    .parent {  
      display: flex;
      flex-direction: column;    
      align-items: center;
      width: 100%;
      height: 100vh;
    }    

    .child {
      height: 33vh;      
      width: 33%;
      border: 1px solid #1F1F1F;
    }
    `,
    html: `
    <div class="parent">
      <div class="child"></div>
      <div class="child"></div>
    </div>
    `,
  },
  26: {
    css: `
    .parent {  
      display: flex;
      flex-direction: column;    
      align-items: center;
      width: 100%;
      height: 100vh;
    }    
    
    .child:nth-child(2){
      align-self: flex-end;
    }

    .child {
      height: 33vh;      
      width: 33%;
      border: 1px solid #1F1F1F;
    }
    `,
    html: `
    <div class="parent">
      <div class="child"></div>
      <div class="child"></div>
    </div>
    `,
  },
  27: {
    css: `
    .parent {  
      display: flex;
      flex-direction: column;    
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 100vh;
    }    
    
    .child:nth-child(2){
      align-self: flex-start;
    }

    .child {
      height: 33vh;      
      width: 33%;
      border: 1px solid #1F1F1F;
    }
    `,
    html: `
    <div class="parent">
      <div class="child"></div>
      <div class="child"></div>
    </div>
    `,
  },
  28: {
    css: `
    .parent {  
      display: flex;
      flex-direction: column;    
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 100vh;
    }

    .child {
      height: 33vh;      
      width: 33%;
      border: 1px solid #1F1F1F;
    }
    `,
    html: `
    <div class="parent">
      <div class="child"></div>
      <div class="child"></div>
    </div>
    `,
  },
  29: {
    css: `
    .parent {  
      display: flex;
      flex-direction: column;    
      justify-content: space-between;
      align-items: center;
      width: 100%;
      height: 100vh;
    }
  
    .child:nth-child(2){
      align-self: flex-end;
    }

    .child {
      height: 33vh;      
      width: 33%;
      border: 1px solid #1F1F1F;
    }
    `,
    html: `
    <div class="parent">
      <div class="child"></div>
      <div class="child"></div>
    </div>
    `,
  },
  34: {
    css: `
    .parent {  
      display: flex;
      flex-direction: column;                
      width: 100%;
      height: 100vh;
    }    
    

    .child:nth-child(1) {
      align-self: flex-end;
    }

    .child:nth-child(2) {
      align-self: center;
    }

    .child {
      height: 33vh;      
      width: 33%;
      border: 1px solid #1F1F1F;
    }
    `,
    html: `
    <div class="parent">
      <div class="child"></div>
      <div class="child"></div>
    </div>
    `,
  },
  35: {
    css: `
    .parent {  
      display: flex;
      flex-direction: column;                
      width: 100%;
      height: 100vh;
    }        

    .child:nth-child(1) {
      align-self: flex-end;
    }

    .child:nth-child(2) {
      align-self: center;
    }

    .child {
      height: 33vh;      
      width: 33%;
      border: 1px solid #1F1F1F;
    }
    `,
    html: `
    <div class="parent">
      <div class="child"></div>
      <div class="child"></div>
    </div>
    `,
  },
  36: {
    css: `
    .parent {  
      display: flex;
      flex-direction: column;                
      width: 100%;
      height: 100vh;
    }        

    .child:nth-child(1) {
      align-self: flex-end;
    }

    .child:nth-child(2) {
      align-self: flex-end;
    }

    .child {
      height: 33vh;      
      width: 33%;
      border: 1px solid #1F1F1F;
    }
    `,
    html: `
    <div class="parent">
      <div class="child"></div>
      <div class="child"></div>
    </div>
    `,
  },
  37: {
    css: `
    .parent {  
      display: flex;
      flex-direction: column; 
      justify-content: space-between;               
      width: 100%;
      height: 100vh;
    }    
    
    .child:nth-child(1) {
      align-self: flex-end;
    }

    .child {
      height: 33vh;      
      width: 33%;
      border: 1px solid #1F1F1F;
    }
    `,
    html: `
    <div class="parent">
      <div class="child"></div>
      <div class="child"></div>
    </div>
    `,
  },
  38: {
    css: `
    .parent {  
      display: flex;
      flex-direction: column; 
      justify-content: space-between;               
      width: 100%;
      height: 100vh;
    }    
    
    .child:nth-child(1) {
      align-self: flex-end;
    }
    
    .child:nth-child(2) {
      align-self: center;
    }

    .child {
      height: 33vh;      
      width: 33%;
      border: 1px solid #1F1F1F;
    }
    `,
    html: `
    <div class="parent">
      <div class="child"></div>
      <div class="child"></div>
    </div>
    `,
  },
  39: {
    css: `
    .parent {  
      display: flex;
      flex-direction: column; 
      align-items: flex-end;
      justify-content: space-between;               
      width: 100%;
      height: 100vh;
    }    

    .child {
      height: 33vh;      
      width: 33%;
      border: 1px solid #1F1F1F;
    }
    `,
    html: `
    <div class="parent">
      <div class="child"></div>
      <div class="child"></div>
    </div>
    `,
  },
  45: {
    css: `
    .parent {  
      display: flex;      
      align-items: center;               
      width: 100%;
      height: 100vh;
    }    

    .child {
      height: 33vh;      
      width: 33%;
      border: 1px solid #1F1F1F;
    }
    `,
    html: `
    <div class="parent">
      <div class="child"></div>
      <div class="child"></div>
    </div>
    `,
  },
  46: {
    css: `
    .parent {  
      display: flex;  
      flex-direction: column;
      justify-content: center;
      width: 100%;
      height: 100vh;
    }    

    .child {
      display: flex;
      justify-content: space-between;
    }

    .grandchild {
      height: 33vh;
      width: 33%;
      border: 1px solid #1F1F1F;
    }
    `,
    html: `
    <div class="parent">
      <div class="child">
        <div class="grandchild"></div>
        <div class="grandchild"></div>
      </div>
    </div>
    `,
  },
  47: {
    css: `
    .parent {  
      display: flex;  
      flex-direction: column;
      justify-content: flex-end;
      width: 100%;
      height: 100vh;
    }    

    .child {
      height: 33vh;
      width: 33%;
      border: 1px solid #1F1F1F;
    }
    `,
    html: `
    <div class="parent">
      <div class="child"></div>
      <div class="child"></div>
    </div>
    `,
  },
  48: {
    css: `
    .parent {  
      display: flex;  
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      width: 100%;
      height: 100vh;
    }    

    .child:nth-child(1){
      align-self: flex-start;
    }

    .child {
      height: 33vh;
      width: 33%;
      border: 1px solid #1F1F1F;
    }
    `,
    html: `
    <div class="parent">
      <div class="child"></div>
      <div class="child"></div>
    </div>
    `,
  },
  49: {
    css: `
    .parent {  
      display: flex;  
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      width: 100%;
      height: 100vh;
    }    

    .child:nth-child(1){
      align-self: flex-start;
    }

    .child:nth-child(2){
      align-self: flex-end;
    }

    .child {
      height: 33vh;
      width: 33%;
      border: 1px solid #1F1F1F;
    }
    `,
    html: `
    <div class="parent">
      <div class="child"></div>
      <div class="child"></div>
    </div>
    `,
  },
  56: {
    css: `
    .parent {  
      display: flex;  
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      width: 100%;
      height: 100vh;
    }        

    .child {
      height: 33vh;
      width: 33%;
      border: 1px solid #1F1F1F;
    }
    `,
    html: `
    <div class="parent">
      <div class="child"></div>
      <div class="child"></div>
    </div>
    `,
  },
  57: {
    css: `
    .parent {  
      display: flex;  
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      width: 100%;
      height: 100vh;
    }        

    .child:nth-child(2){
      align-self: flex-start;
    }

    .child {
      height: 33vh;
      width: 33%;
      border: 1px solid #1F1F1F;
    }
    `,
    html: `
    <div class="parent">
      <div class="child"></div>
      <div class="child"></div>
    </div>
    `,
  },
  58: {
    css: `
    .parent {  
      display: flex;  
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      width: 100%;
      height: 100vh;
    }        

    .child {
      height: 33vh;
      width: 33%;
      border: 1px solid #1F1F1F;
    }
    `,
    html: `
    <div class="parent">
      <div class="child"></div>
      <div class="child"></div>
    </div>
    `,
  },
  59: {
    css: `
    .parent {  
      display: flex;  
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      width: 100%;
      height: 100vh;
    }        

    .child:nth-child(2){
      align-self: flex-end;
    }

    .child {
      height: 33vh;
      width: 33%;
      border: 1px solid #1F1F1F;
    }
    `,
    html: `
    <div class="parent">
      <div class="child"></div>
      <div class="child"></div>
    </div>
    `,
  },
  67: {
    css: `
    .parent {  
      display: flex;  
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      width: 100%;
      height: 100vh;
    }        

    .child:nth-child(1){
      align-self: flex-end;
    }
    
    .child:nth-child(2){
      align-self: flex-start;
    }

    .child {
      height: 33vh;
      width: 33%;
      border: 1px solid #1F1F1F;
    }
    `,
    html: `
    <div class="parent">
      <div class="child"></div>
      <div class="child"></div>
    </div>
    `,
  },
  68: {
    css: `
    .parent {  
      display: flex;  
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      width: 100%;
      height: 100vh;
    }        

    .child:nth-child(1){
      align-self: flex-end;
    }
    
    .child {
      height: 33vh;
      width: 33%;
      border: 1px solid #1F1F1F;
    }
    `,
    html: `
    <div class="parent">
      <div class="child"></div>
      <div class="child"></div>
    </div>
    `,
  },
  69: {
    css: `
    .parent {  
      display: flex;  
      flex-direction: column;
      align-items: center;
      justify-content: flex-end;
      width: 100%;
      height: 100vh;
    }        

    .child:nth-child(1),
    .child:nth-child(2) {
      align-self: flex-end;
    }
    
    .child {
      height: 33vh;
      width: 33%;
      border: 1px solid #1F1F1F;
    }
    `,
    html: `
    <div class="parent">
      <div class="child"></div>
      <div class="child"></div>
    </div>
    `,
  },
};
