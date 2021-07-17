function demoFromHTML() {
            var doc = new jsPDF();
            var imgData = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAABy...
            doc.setFontSize(40);
            doc.text(30, 20, 'Hello world!');
            doc.addImage(imgData, 'PNG', 15, 40, 200, 114);
            doc.output('datauri');
    }