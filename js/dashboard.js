$(function(){
    drawOrderGraph("Year");
    drawTxGraph("Year")
})

function drawOrderGraph(name){
    $("#order_graph").remove();
    $("#order_graph_container").append('<div id="order_graph" style="width:100%; height:300px;"></div>');
    var data = "";
    if(name == "Year"){
        data = [
            {Year: '2014', value: 20000},
            {Year: '2015', value: 15000},
            {Year: '2016', value: 23000},
            {Year: '2017', value: 25000},
            {Year: '2018', value: 12000},
            {Year: '2019', value: 30000}
        ]
    }else if(name == "Month"){
        data = [
            {Month: 'Jan', value: 150},
            {Month: 'Feb', value: 300},
            {Month: 'Mar', value: 600},
            {Month: 'Apr', value: 400},
            {Month: 'May', value: 700},
            {Month: 'Jun', value: 1000},
            {Month: 'Jul', value: 1500},
            {Month: 'Aug', value: 200},
            {Month: 'Sep', value: 1300},
            {Month: 'Oct', value: 2200},
            {Month: 'Nov', value: 3000},
            {Month: 'Dec', value: 4000},
        ]
    }else if(name == "Week"){
        data = [
            {Week: '20-02', value: 20},
            {Week: '21-02', value: 50},
            {Week: '22-02', value: 30},
            {Week: '23-02', value: 100},
            {Week: '24-02', value: 70},
            {Week: '25-02', value: 40},
            {Week: '26-02', value: 120}
        ]
    }
    Morris.Line({
        element: 'order_graph',
        xkey: name,
        ykeys: ['value'],
        labels: ['No. of orders'],
        xLabels: "Years",
        hideHover: 'auto',
        lineColors: ['#26B99A', '#34495E', '#ACADAC', '#3498DB'],
        data: data,
        parseTime: false,
        resize: true
    });
}

function drawTxGraph(name){
    $("#tx_graph").remove();
    $("#tx_graph_container").append('<div id="tx_graph" style="width:100%; height:300px;"></div>');
    var data = "";
    if(name == "Year"){
        data = [
            {Year: '2014', value: 450000},
            {Year: '2015', value: 670000},
            {Year: '2016', value: 120000},
            {Year: '2017', value: 870000},
            {Year: '2018', value: 430000},
            {Year: '2019', value: 450000}
        ]
    }else if(name == "Month"){
        data = [
            {Month: 'Jan', value: 56000},
            {Month: 'Feb', value: 34000},
            {Month: 'Mar', value: 12000},
            {Month: 'Apr', value: 65000},
            {Month: 'May', value: 87000},
            {Month: 'Jun', value: 21000},
            {Month: 'Jul', value: 15000},
            {Month: 'Aug', value: 20000},
            {Month: 'Sep', value: 13000},
            {Month: 'Oct', value: 76000},
            {Month: 'Nov', value: 12000},
            {Month: 'Dec', value: 40000},
        ]
    }else if(name == "Week"){
        data = [
            {Week: '20-02', value: 768},
            {Week: '21-02', value: 987},
            {Week: '22-02', value: 1090},
            {Week: '23-02', value: 576},
            {Week: '24-02', value: 1200},
            {Week: '25-02', value: 567},
            {Week: '26-02', value: 998}
        ]
    }
    Morris.Line({
        element: 'tx_graph',
        xkey: name,
        ykeys: ['value'],
        labels: ['Total Transaction'],
        xLabels: "Years",
        hideHover: 'auto',
        lineColors: ['#26B99A', '#34495E', '#ACADAC', '#3498DB'],
        data: data,
        parseTime: false,
        preUnits: "₹",
        resize: true
    });
}