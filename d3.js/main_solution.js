var dataFromJson = [];

d3.json('./data.json').then(data => {
    dataFromJson = data;
    drawCircles();
}).catch(error => console.log(error));

function drawCircles() {
    // Dimensions de la zone de dessin
    const width = 800;
    const height = 700;

    // Sélectionne la zone de dessin
    const svg = d3.select('#dataviz_area')
        .attr('width', width)
        .attr('height', height);

    // Échelle pour la taille des cercles
    const xAxis = d3.scaleLinear()
        .domain([0, 100])
        .range([0, width]);

    const yAxis = d3.scaleLinear()
        .domain([0,100])
        .range([0, height]);

    // Dessine les cercles
    const circles = svg.selectAll('circle')
    .data(dataFromJson)
    .enter()
    .append('circle')
    .attr('cx', d => xAxis(d.x))
    .attr('cy', d => yAxis(d.y))
    .attr('r', d => d.value)
    .style('fill', d => {
        if (d.value > 10 && d.value < 20) {
            return 'blue';
        } else if (d.value > 20 && d.value < 30) {
            return 'pink';
        } else {
            return 'green';
        }
    })
    .style("stroke", "black")

}

