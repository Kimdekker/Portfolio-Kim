//The brain

document.addEventListener('DOMContentLoaded', function() {
  // Get the canvas element
  var canvas = document.getElementById('theBrain');

  // Initialize WebGL context
  var gl = canvas.getContext('webgl');

  if (!gl) {
      console.error('Unable to initialize WebGL. Your browser may not support it.');
      return;
  }

  // Define the vertices of your 3D object
  var vertices = [
    // Vertex coordinates of your 3D object
    -1.0, -1.0, -1.0,
     1.0, -1.0, -1.0,
     1.0,  1.0, -1.0,
    -1.0,  1.0, -1.0,
    -1.0, -1.0,  1.0,
     1.0, -1.0,  1.0,
     1.0,  1.0,  1.0,
    -1.0,  1.0,  1.0
];

  // Create a buffer for the vertices
  var vertexBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);

  // Define and compile a vertex shader
  var vertexShaderSource = `
  attribute vec4 position;
  void main() {
      gl_Position = position;
  }
`;
  var vertexShader = gl.createShader(gl.VERTEX_SHADER);
  gl.shaderSource(vertexShader, vertexShaderSource);
  gl.compileShader(vertexShader);

  // Define and compile a fragment shader
  var fragmentShaderSource = `
  precision mediump float;
  void main() {
      gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0); // Red color
  }
`;
  var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
  gl.shaderSource(fragmentShader, fragmentShaderSource);
  gl.compileShader(fragmentShader);

  // Create a shader program
  var shaderProgram = gl.createProgram();
  gl.attachShader(shaderProgram, vertexShader);
  gl.attachShader(shaderProgram, fragmentShader);
  gl.linkProgram(shaderProgram);
  gl.useProgram(shaderProgram);

  // Bind the vertex buffer to the shader program
  var positionAttribLocation = gl.getAttribLocation(shaderProgram, 'position');
  gl.vertexAttribPointer(positionAttribLocation, 3, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(positionAttribLocation);

  // Set the clear color and clear the canvas
  gl.clearColor(0.0, 0.0, 0.0, 1.0);
  gl.clear(gl.COLOR_BUFFER_BIT);

  // Draw the object
  gl.drawArrays(gl.TRIANGLES, 0, vertices.length / 3);
});