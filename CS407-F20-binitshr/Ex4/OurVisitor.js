const DnDVisitor = require('./DnDVisitor').DnDVisitor;

class OurVisitor extends DnDVisitor {
    constructor(){
        super();
    }

    visitFile(ctx){
        this.visitHdr(ctx.hdr());

        // children[0] is hdr
        // children[1-n] are the rows
        let output = ['['];

        let rows = ctx.row();
        output.push(this.visitRow(rows[1]));
        for(let i = 2; i < rows.length; i++)
        {
            output.push(',\n')
            output.push(this.visitRow(rows[i]));
        }

        output.push('\n]');
        return output.join('');
    }

    // extract column names and store them for use below in each row
    visitHdr(ctx){
        this.columnNames = {};
        // every other one is the column name so just go by 2's
        for(let i = 0; i < ctx.children.length; i += 2)
        {
            this.columnNames[i] = ctx.children[i].getText();
        }
    }

    visitRow(ctx){
        let out = ['{'];
        let temp = []
        for(let i in this.columnNames)
        {
            let value = this.extractTypedValue(ctx.children[i]);
            temp.push(`"${this.columnNames[i]}": ${value}`);
        }
        out.push(temp.join(',\n'));
        out.push('}')
        return out.join('');
    }

    // We have one of 3 types to extract: 
    // number -> Number
    // field  -> String
    // field_list -> Array of strings
    extractTypedValue(ctx)
    {
        if(ctx.field)
        {
            if(ctx.field() != null)
            {
                return '"' + ctx.field().getText() + '"';
            }
            else
            {
                // this is the field | number part of this rule, would be nice to change it in the grammar but don't see how
                return '"' + ctx.number().getText() + '"';
            }
            
        }
        else if(ctx.number && ctx.number() != null)
        {
            return ctx.number().getText();
        }
        else if(ctx.field_list)
        {
            let temp = [];
            for(let i = 0; i < ctx.field_list().TEXT().length; i++)
            {
                // assumes everything inside a list is a string
                temp.push(`"${ctx.field_list().TEXT()[i].getText()}"`);
            }
            return `[${temp.join(',')}]`;
        }
        else
        {
            return "unknown!";
        }
    }

}

exports.OurVisitor = OurVisitor;