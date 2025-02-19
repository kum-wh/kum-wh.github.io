function initBuffers1(gl) {
  const positionBuffer = initPositionBuffer(gl);
  const indexBuffer = initIndexBuffer(gl);
  const colorBuffer = initColorBuffer(gl);

  return {
    position: positionBuffer,
    color: colorBuffer,
    indices: indexBuffer,
  };

}

function initPositionBuffer(gl) {
  const positionBuffer = gl.createBuffer();
  return positionBuffer;
}

function initIndexBuffer(gl) {
  const indexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
  const indices = [];

  for(let i=0; i<10; i++) {
    let startIndex = 19*i;
    for (let j=1; j<18; j++) {
      indices.push(startIndex,startIndex+j, startIndex+j+1);
    }
    indices.push(startIndex,startIndex+18,startIndex+1); 
  }

  gl.bufferData(
    gl.ELEMENT_ARRAY_BUFFER,
    new Uint16Array(indices),
    gl.STATIC_DRAW,
  );

  return indexBuffer;
}

function initColorBuffer(gl) {
  var colors = [];

  for(let i=0; i<10; i++) {
    const tempC = [Math.random(),Math.random(),Math.random(),1.0]
    for(let j=0; j<=18; j++) {
      colors = colors.concat(tempC);
    }
  }

  const colorBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, colorBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(colors), gl.STATIC_DRAW);

  return colorBuffer;
}


export { initBuffers1 };