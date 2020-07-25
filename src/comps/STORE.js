export const STORE = {
  '0': {
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
  '1': {
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
  '2': {
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
  '3': {
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
  '4': {
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
  '5': {
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
  '6': {
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
  '7': {
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
  '8': {
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
  '0,1': {
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
  '0,2': {
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
  '0,3': {
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
  '0,4': {
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
  '0,5': {
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
  '0,6': {
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
  '0,7': {
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
  '0,8': {
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
  '1,2': {
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
  '1,3': {
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
  '1,4': {
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
  '1,5': {
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
  '1,6': {
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
  '1,7': {
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
  '1,8': {
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
  '2,3': {
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
  '2,4': {
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
  '2,5': {
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
  '2,6': {
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
  '2,7': {
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
  '2,8': {
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
  '3,4': {
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
  '3,5': {
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
  '3,6': {
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
  '3,7': {
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
  '3,8': {
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
  '4,5': {
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
  '4,6': {
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
  '4,7': {
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
  '4,8': {
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
  '5,6': {
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
  '5,7': {
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
  '5,8': {
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
  '6,7': {
    css: `
    .parent {  
      display: flex;  
      flex-direction: row;
      align-items: flex-end;
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
  '6,8': {
    css: `
    .parent {  
      display: flex;  
      flex-direction: row;
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
  '7,8': {
    css: `
    .parent {  
      display: flex;  
      flex-direction: row;
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
      <div class="child"></div>
    </div>
    `,
  },
  '0,1,2': {
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
      <div class="child"></div>
    </div>
    `,
  },
  '0,1,3': {
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
      <div class="child"></div>
    </div>
    `,
  },
};
