$(document).ready(function() {

      $('#download_json').click(function(){
        const jsonData = JSON.stringify(chartDataOBJ);
        const blob = new Blob([jsonData], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'chartsData.json';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    })

});
