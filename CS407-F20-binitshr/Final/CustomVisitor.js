const expeditionsVisitor = require('./expeditionsVisitor').expeditionsVisitor;

class CustomVisitor extends expeditionsVisitor{
    constructor(){
        super();
    }

    visitFile(ctx){
        this.visitHdr(ctx.hdr());

        //beginning writing to Json
        let output = ['['];

        let rows = ctx.row();

        output.push(this.visitRow(rows[1]));
        
        for(let i =2; i< rows.length; i++)
        {
            output.push(',\n')
            output.push(this.visitRow(rows[i]));
        }

        output.push(',\n');
        return output.join('');
    }


    //visiting header

    visitHdr(ctx){
        this.columnNames = {};

        for (let i = 0; i <ctx.children.length; i+=2)
        {
            this.columnNames[i] = ctx.children[i].getText();
        }
    }


    visitRow(ctx){
        let out = ['{'];
        let temp = [];
        
        for(let i in this.columnNames)
        {
            let value = this.extractTypedValue(ctx.children[i]);
            temp.push(`"${this.columnNames[i]}" : ${value}`);

        }

        out.push(temp.join(',\n'));

        out.push('}');
        return out.join('');
    }

    extractTypedValue(ctx)
    {   
        if(ctx.field)
        {
            if(ctx.field() != null){
                return '"'+ ctx.field().getText() + '"';
            }
            
            else{
                return '"' + ctx.number().getText() + '"';
            }
        }
        
        else if(ctx.number && ctx.number() !=null){
            return ctx.number().getText();
        }
        else{
            return "Value Unknown";
        }
        
    }
}

exports.CustomVisitor = CustomVisitor;

