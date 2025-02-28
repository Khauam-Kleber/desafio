export interface InfoCard{
    id: number;
    title: string;
    subTitle: string;
    name?: string;
    accountNumber?: number;
    accountDigit?: number;
    showSituation?: boolean;
}


export function findFakeInfoByCpf():InfoCard[]{
    return [
        {
            id:0,
            title:'Situação cadastral do CPF',
            subTitle:"Consulta na Receita Federal",
            name:"Khauam K F Cardoso",
            showSituation:true
        },
        {
            id:1,
            title:'Contas aplicação',
            subTitle:"Cooperativa Viacredi",
            accountNumber: 557932,
            accountDigit: 4,
            showSituation:false
        },
        {
            id:2,
            title:'Conta Corrente',
            subTitle:"Cooperativa Viacredi",
            accountNumber: 7778461,
            accountDigit: 8,
            showSituation:false
        }
    ]
}