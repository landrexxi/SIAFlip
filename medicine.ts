class medicine
{
    brandname: string;
    genericname: string;
    stock: number;
    price: number;

    constructor(

        brand:string, 
        generic:string, 
        s:number,
        p:number
)
    {
        this.brandname = brand;
        this.genericname = generic;
        this.stock = s;
        this.price = p;

    }
}

let pharma: (medicine)[]=[];
let addRow: Function; 
let purchase: Function;  
let edit: Function;   
let sell: Function;  


addRow =()=>
{
   const brandname = document.querySelector('#brandname') as HTMLInputElement;
   const genericname = document.querySelector('#genericname') as HTMLInputElement;
   const stock = document.querySelector('#stock') as HTMLInputElement;
   const price = document.querySelector('#price') as HTMLInputElement;
   const table = document.querySelector('#medicine') as HTMLTableElement;

   let a = new medicine(brandname.value, genericname.value, stock.valueAsNumber, price.valueAsNumber);
   pharma.push(a);
   let count= table.rows.length; 

   for ( let i=count-1; i>=1; i--)
   {
    table.deleteRow(i);
   }
  
  
   for ( let i=0, j=1; i<pharma.length && j<=pharma.length; i++)
   {
    let row = table.insertRow(j);
    row.insertCell(0).innerHTML = pharma[i].brandname;
    row.insertCell(1).innerHTML = pharma[i].genericname;
    row.insertCell(2).innerHTML = pharma[i].stock.toString();
    row.insertCell(3).innerHTML = pharma[i].price.toString();
   }
   brandname.value = ""
   genericname.value = ""
   stock.value = ""
   price.value = ""
}

purchase =()=>
{
    const table =  document.querySelector('#medicine') as HTMLTableElement;
    const quantitypurchase  =  document.querySelector('#input_quantity') as HTMLInputElement;
    const medpurchase  =  document.querySelector('#input_medicine') as HTMLInputElement;
    let count = table.rows.length;
    let flag: any = 0;
    for (let i=0; i<pharma.length; i++)
    {
        if (pharma[i].brandname.toLowerCase()==medpurchase.value.toLowerCase())
        {
            pharma[i].stock+=quantitypurchase.valueAsNumber;
            flag=1;
            break;
        }
        
    }
    if (flag==0)
        {
            alert("Medicine is Unavailable");
        }

    for ( let i=count-1 ;i>=1; i--)
    {
     table.deleteRow(i);
    }

    for ( let i=0, j=1; i<pharma.length && j<=pharma.length; i++)
    {
     let row=table.insertRow(j);
     row.insertCell(0).innerHTML = pharma[i].brandname;
     row.insertCell(1).innerHTML = pharma[i].genericname;
     row.insertCell(2).innerHTML = pharma[i].stock.toString();
     row.insertCell(3).innerHTML = pharma[i].price.toString();
    }
    quantitypurchase.value="";
    medpurchase.value="";
}

edit =()=>
{
    const table = document.querySelector('#medicine') as HTMLTableElement;
    const brandedit = document.querySelector('#change_brandname') as HTMLInputElement;
    const pedit = document.querySelector('#change_price') as HTMLInputElement;
    let count = table.rows.length;
    let flag: any = 0;

    for (let i=0; i<pharma.length; i++)
    {
        if (pharma[i].brandname.toLowerCase()==brandedit.value.toLowerCase())
        {
            
            pharma[i].price=pedit.valueAsNumber;
            flag=1;
            break;
        }
        
    }
    if (flag==0)
        {
            alert("Medicine is Unavailable");
        }

    for ( let i=count-1; i>=1; i--)
    {
     table.deleteRow(i);
    }

    for ( let i=0, j=1; i<pharma.length && j<=pharma.length; i++)
    {
     let row=table.insertRow(j);
     row.insertCell(0).innerHTML = pharma[i].brandname;
     row.insertCell(1).innerHTML = pharma[i].genericname;
     row.insertCell(2).innerHTML = pharma[i].stock.toString();
     row.insertCell(3).innerHTML = pharma[i].price.toString();
    }
    brandedit.value="";
    pedit.value="";
}
 
sell=()=>
{
    const table = document.querySelector('#medicine') as HTMLTableElement;
    const quantitysell = document.querySelector('#sell_quantity') as HTMLInputElement;
    const medsell = document.querySelector('#sell_medicine') as HTMLInputElement;
    let count = table.rows.length;
    let flag: any = 0;

    for (let i=0 ;i<pharma.length; i++)
    {
        if (pharma[i].brandname.toLowerCase()==medsell.value.toLowerCase())
        {
            if (quantitysell.valueAsNumber>pharma[i].stock)
            {
                alert('Oh, sorry stock is inadequate!'); 
                flag++;
            }
            else
            {
            pharma[i].stock-=quantitysell.valueAsNumber;
            flag++; 
            break;
            }
        }

    }
    if (flag==0)
        {
            alert(
                "Medicine is Unavailable"
            )
        }

    for ( let i=count-1; i>=1; i--)
    {
     table.deleteRow(i);
    }
   
    for ( let i=0, j=1; i<pharma.length && j<=pharma.length; i++)
    {
     let row=table.insertRow(j);
     row.insertCell(0).innerHTML = pharma[i].brandname;
     row.insertCell(1).innerHTML = pharma[i].genericname;
     row.insertCell(2).innerHTML = pharma[i].stock.toString();
     row.insertCell(3).innerHTML = pharma[i].price.toString();
    }
    quantitysell.value = "";
    medsell.value = ""; 
}

