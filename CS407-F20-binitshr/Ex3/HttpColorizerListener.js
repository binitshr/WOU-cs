const HttpListener = require('./HttpListener').HttpListener;

class HttpColorizerListener extends HttpListener{
    constructor(res){
        super();
        this.res = res;
    }
   
    enterMessage(ctx){
        
        let isRequest = ctx.start_line().request_line() != null;
        
        if(isRequest){
            this.res.write(`<div class="request">`);
        }
        else{
        this.res.write(`<div class="response">`);
        }
      }

   
    exitMessage(ctx){
        console.log("Enter Message");
        this.res.write('</div>');
    }

    enterRequest_line(ctx){
        this.res.write(`<span class="request-line">` );

    }

    exitRequest_line(ctx){
        this.res.write('</span>\n');
    }

    exitMethod(ctx){
        this.res.write(`<span class="method">${ctx.getText()}</span>  `);
    }
    
    exitRequest_target(ctx){
        this.res.write(`<span class="method">${ctx.getText()}</span>`);
    }

    exitHttp_version(ctx){
        this.res.write(ctx.getText());
    }
    
    exitStatus_code(ctx){
        this.res.write(`<span class="status-code"> ${ctx.getText()}</span>\n`);
    }
    
    exitHeader_field(ctx){
      this.res.write('\n');
    }
    exitField_name(ctx){
      this.res.write(`<span class="key">${ctx.getText()}</span>: `);
    }
    exitField_value(ctx){
      this.res.write(`<span class="value">${ctx.getText()}</span>`);
    }
    
  

}

exports.HttpColorizerListener = HttpColorizerListener;